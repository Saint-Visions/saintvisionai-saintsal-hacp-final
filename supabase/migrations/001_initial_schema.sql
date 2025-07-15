-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create users table (extends auth.users)
CREATE TABLE IF NOT EXISTS public.users (
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    full_name TEXT NOT NULL,
    avatar_url TEXT,
    subscription_tier TEXT DEFAULT 'free' CHECK (subscription_tier IN ('free', 'pro', 'unlimited', 'white_label', 'custom')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create subscriptions table
CREATE TABLE IF NOT EXISTS public.subscriptions (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
    stripe_customer_id TEXT NOT NULL,
    stripe_subscription_id TEXT NOT NULL,
    tier TEXT NOT NULL CHECK (tier IN ('free', 'pro', 'unlimited', 'white_label', 'custom')),
    status TEXT NOT NULL CHECK (status IN ('active', 'canceled', 'incomplete', 'incomplete_expired', 'past_due', 'trialing', 'unpaid')),
    current_period_start TIMESTAMP WITH TIME ZONE NOT NULL,
    current_period_end TIMESTAMP WITH TIME ZONE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(stripe_customer_id),
    UNIQUE(stripe_subscription_id)
);

-- Create conversations table
CREATE TABLE IF NOT EXISTS public.conversations (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
    title TEXT NOT NULL,
    ai_model TEXT NOT NULL CHECK (ai_model IN ('gpt-4o', 'azure-gpt-4o', 'dual')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create messages table
CREATE TABLE IF NOT EXISTS public.messages (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    conversation_id UUID REFERENCES public.conversations(id) ON DELETE CASCADE NOT NULL,
    content TEXT NOT NULL,
    role TEXT NOT NULL CHECK (role IN ('user', 'assistant', 'system')),
    metadata JSONB DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create crm_data table for GoHighLevel integration
CREATE TABLE IF NOT EXISTS public.crm_data (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
    ghl_contact_id TEXT,
    ghl_location_id TEXT,
    contact_data JSONB DEFAULT '{}',
    pipeline_data JSONB DEFAULT '{}',
    last_sync TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create usage_metrics table
CREATE TABLE IF NOT EXISTS public.usage_metrics (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
    metric_type TEXT NOT NULL CHECK (metric_type IN ('chat_message', 'api_call', 'crm_sync', 'export')),
    metric_value INTEGER DEFAULT 1,
    metadata JSONB DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create escalations table for HACP Boss Mode
CREATE TABLE IF NOT EXISTS public.escalations (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
    conversation_id UUID REFERENCES public.conversations(id) ON DELETE CASCADE,
    escalation_type TEXT NOT NULL CHECK (escalation_type IN ('boss_mode', 'support', 'emergency')),
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'in_progress', 'resolved', 'dismissed')),
    priority TEXT DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'critical')),
    description TEXT NOT NULL,
    resolution TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.crm_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.usage_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.escalations ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
-- Users can only see their own data
CREATE POLICY "Users can view own profile" ON public.users
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.users
    FOR UPDATE USING (auth.uid() = id);

-- Subscriptions policies
CREATE POLICY "Users can view own subscriptions" ON public.subscriptions
    FOR SELECT USING (auth.uid() = user_id);

-- Conversations policies
CREATE POLICY "Users can view own conversations" ON public.conversations
    FOR ALL USING (auth.uid() = user_id);

-- Messages policies
CREATE POLICY "Users can view messages from own conversations" ON public.messages
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM public.conversations 
            WHERE conversations.id = messages.conversation_id 
            AND conversations.user_id = auth.uid()
        )
    );

-- CRM data policies
CREATE POLICY "Users can view own CRM data" ON public.crm_data
    FOR ALL USING (auth.uid() = user_id);

-- Usage metrics policies
CREATE POLICY "Users can view own usage metrics" ON public.usage_metrics
    FOR ALL USING (auth.uid() = user_id);

-- Escalations policies
CREATE POLICY "Users can view own escalations" ON public.escalations
    FOR ALL USING (auth.uid() = user_id);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_users_email ON public.users(email);
CREATE INDEX IF NOT EXISTS idx_subscriptions_user_id ON public.subscriptions(user_id);
CREATE INDEX IF NOT EXISTS idx_subscriptions_stripe_customer ON public.subscriptions(stripe_customer_id);
CREATE INDEX IF NOT EXISTS idx_conversations_user_id ON public.conversations(user_id);
CREATE INDEX IF NOT EXISTS idx_messages_conversation_id ON public.messages(conversation_id);
CREATE INDEX IF NOT EXISTS idx_messages_created_at ON public.messages(created_at);
CREATE INDEX IF NOT EXISTS idx_crm_data_user_id ON public.crm_data(user_id);
CREATE INDEX IF NOT EXISTS idx_usage_metrics_user_id ON public.usage_metrics(user_id);
CREATE INDEX IF NOT EXISTS idx_usage_metrics_created_at ON public.usage_metrics(created_at);
CREATE INDEX IF NOT EXISTS idx_escalations_user_id ON public.escalations(user_id);
CREATE INDEX IF NOT EXISTS idx_escalations_status ON public.escalations(status);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER handle_users_updated_at
    BEFORE UPDATE ON public.users
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER handle_subscriptions_updated_at
    BEFORE UPDATE ON public.subscriptions
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER handle_conversations_updated_at
    BEFORE UPDATE ON public.conversations
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER handle_crm_data_updated_at
    BEFORE UPDATE ON public.crm_data
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER handle_escalations_updated_at
    BEFORE UPDATE ON public.escalations
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

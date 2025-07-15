import { supabase } from "./supabase";

const API_BASE_URL = import.meta.env.VITE_API_URL || "/api";

// AI Chat API
export interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
  timestamp?: string;
  model?: "gpt4o" | "azure" | "hacp";
}

export interface ChatResponse {
  message: string;
  model: "gpt4o" | "azure" | "hacp";
  usage?: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
  escalated?: boolean;
  session_id?: string;
}

export const sendChatMessage = async (
  message: string,
  context?: ChatMessage[],
  sessionId?: string,
): Promise<ChatResponse> => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const response = await fetch(`${API_BASE_URL}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: session?.access_token
        ? `Bearer ${session.access_token}`
        : "",
    },
    body: JSON.stringify({
      message,
      context: context || [],
      session_id: sessionId,
      enable_hacp: import.meta.env.VITE_ENABLE_DUAL_AI === "true",
    }),
  });

  if (!response.ok) {
    throw new Error(`Chat API error: ${response.statusText}`);
  }

  return response.json();
};

// CRM Integration API
export interface CRMContact {
  id: string;
  email: string;
  name: string;
  phone?: string;
  status: "lead" | "qualified" | "customer";
  value?: number;
  created_at: string;
  updated_at: string;
}

export const getCRMContacts = async (): Promise<CRMContact[]> => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const response = await fetch(`${API_BASE_URL}/crm/contacts`, {
    headers: {
      Authorization: session?.access_token
        ? `Bearer ${session.access_token}`
        : "",
    },
  });

  if (!response.ok) {
    throw new Error(`CRM API error: ${response.statusText}`);
  }

  return response.json();
};

export const createCRMContact = async (
  contact: Omit<CRMContact, "id" | "created_at" | "updated_at">,
): Promise<CRMContact> => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const response = await fetch(`${API_BASE_URL}/crm/contacts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: session?.access_token
        ? `Bearer ${session.access_token}`
        : "",
    },
    body: JSON.stringify(contact),
  });

  if (!response.ok) {
    throw new Error(`CRM API error: ${response.statusText}`);
  }

  return response.json();
};

// Stripe Billing API
export interface BillingSession {
  url: string;
  session_id: string;
}

export const createCheckoutSession = async (
  priceId: string,
  successUrl?: string,
  cancelUrl?: string,
): Promise<BillingSession> => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const response = await fetch(`${API_BASE_URL}/stripe/create-checkout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: session?.access_token
        ? `Bearer ${session.access_token}`
        : "",
    },
    body: JSON.stringify({
      price_id: priceId,
      success_url: successUrl || `${window.location.origin}/upgrade/success`,
      cancel_url: cancelUrl || `${window.location.origin}/upgrade/cancelled`,
    }),
  });

  if (!response.ok) {
    throw new Error(`Stripe API error: ${response.statusText}`);
  }

  return response.json();
};

export const createPortalSession = async (): Promise<{ url: string }> => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const response = await fetch(`${API_BASE_URL}/stripe/create-portal`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: session?.access_token
        ? `Bearer ${session.access_token}`
        : "",
    },
  });

  if (!response.ok) {
    throw new Error(`Stripe API error: ${response.statusText}`);
  }

  return response.json();
};

// Analytics API
export interface AnalyticsData {
  user_count: number;
  chat_sessions: number;
  conversion_rate: number;
  mrr: number;
  active_subscriptions: number;
}

export const getAnalytics = async (): Promise<AnalyticsData> => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const response = await fetch(`${API_BASE_URL}/analytics`, {
    headers: {
      Authorization: session?.access_token
        ? `Bearer ${session.access_token}`
        : "",
    },
  });

  if (!response.ok) {
    throw new Error(`Analytics API error: ${response.statusText}`);
  }

  return response.json();
};

// Error handling
export class APIError extends Error {
  constructor(
    message: string,
    public status: number,
    public code?: string,
  ) {
    super(message);
    this.name = "APIError";
  }
}

export const handleAPIError = (error: unknown): APIError => {
  if (error instanceof APIError) return error;

  if (error instanceof Error) {
    return new APIError(error.message, 500);
  }

  return new APIError("Unknown API error", 500);
};

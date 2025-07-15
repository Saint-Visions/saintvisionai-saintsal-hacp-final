import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY!);

export const redirectToCheckout = async (
  priceId: string,
  userId: string,
  userEmail: string,
) => {
  try {
    const response = await fetch("/api/stripe/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        priceId,
        userId,
        email: userEmail,
      }),
    });

    const { sessionId } = await response.json();
    const stripe = await stripePromise;

    if (stripe) {
      const { error } = await stripe.redirectToCheckout({ sessionId });
      if (error) {
        console.error("Stripe checkout error:", error);
      }
    }
  } catch (error) {
    console.error("Checkout redirect error:", error);
  }
};

export const getSubscriptionStatus = async (customerId: string) => {
  try {
    const response = await fetch(`/api/stripe/subscription/${customerId}`);
    const data = await response.json();
    return data.subscriptions;
  } catch (error) {
    console.error("Get subscription error:", error);
    return [];
  }
};

export const getPricingTiers = () => {
  return [
    {
      id: "free",
      name: "Free Trial",
      price: 0,
      priceId: import.meta.env.VITE_STRIPE_FREE_PRICE_ID,
      features: ["Limited AI conversations", "Basic features", "Email support"],
    },
    {
      id: "pro",
      name: "Professional",
      price: 27,
      priceId: import.meta.env.VITE_STRIPE_PRO_PRICE_ID,
      features: [
        "Unlimited AI conversations",
        "SaintSal™ 4o & Turbo access",
        "Custom Azure companion",
        "CRM integration",
        "Priority support",
      ],
      popular: true,
    },
    {
      id: "unlimited",
      name: "Unlimited",
      price: 97,
      priceId: import.meta.env.VITE_STRIPE_UNLIMITED_PRICE_ID,
      features: [
        "Everything in Professional",
        "Advanced analytics",
        "API access",
        "Custom integrations",
        "24/7 phone support",
      ],
    },
    {
      id: "white-label",
      name: "White Label",
      price: 497,
      priceId: import.meta.env.VITE_STRIPE_WHITE_LABEL_PRICE_ID,
      features: [
        "Everything in Unlimited",
        "White-label solution",
        "Custom branding",
        "Dedicated support team",
        "Enterprise SLA",
      ],
    },
    {
      id: "custom",
      name: "Custom Enterprise",
      price: 1500,
      priceId: import.meta.env.VITE_STRIPE_CUSTOM_PRICE_ID,
      features: [
        "Everything in White Label",
        "Custom development",
        "On-premise deployment",
        "Dedicated infrastructure",
        "Custom contract terms",
      ],
    },
  ];
};

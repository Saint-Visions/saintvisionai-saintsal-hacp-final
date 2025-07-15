import { Request, Response } from "express";
import Stripe from "stripe";

let stripe: Stripe;

function getStripe(): Stripe {
  if (!stripe) {
    stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: "2024-10-28.acacia",
    });
  }
  return stripe;
}

export const createCheckoutSession = async (req: Request, res: Response) => {
  try {
    const { priceId, userId, email } = req.body;

    const session = await getStripe().checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${process.env.VITE_APP_URL}/upgrade/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.VITE_APP_URL}/upgrade/cancelled`,
      customer_email: email,
      metadata: {
        userId: userId,
      },
    });

    res.json({ sessionId: session.id });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    res.status(500).json({ error: "Failed to create checkout session" });
  }
};

export const handleWebhook = async (req: Request, res: Response) => {
  const sig = req.headers["stripe-signature"] as string;
  let event: Stripe.Event;

  try {
    event = getStripe().webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return res.status(400).send(`Webhook Error: ${err}`);
  }

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed":
      console.log("Payment successful:", event.data.object);
      // Update user subscription in Supabase
      break;
    case "customer.subscription.deleted":
      console.log("Subscription cancelled:", event.data.object);
      // Handle subscription cancellation
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.status(200).json({ received: true });
};

export const getSubscriptionStatus = async (req: Request, res: Response) => {
  try {
    const { customerId } = req.params;

    const subscriptions = await getStripe().subscriptions.list({
      customer: customerId,
      status: "active",
    });

    res.json({ subscriptions: subscriptions.data });
  } catch (error) {
    console.error("Get subscription error:", error);
    res.status(500).json({ error: "Failed to get subscription status" });
  }
};

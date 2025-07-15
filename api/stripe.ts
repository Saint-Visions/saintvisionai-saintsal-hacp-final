import { VercelRequest, VercelResponse } from "@vercel/node";
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

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "POST") {
    return handleCheckoutSession(req, res);
  } else if (req.method === "GET") {
    return getSubscriptionStatus(req, res);
  }

  return res.status(405).json({ error: "Method not allowed" });
}

async function handleCheckoutSession(req: VercelRequest, res: VercelResponse) {
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
}

async function getSubscriptionStatus(req: VercelRequest, res: VercelResponse) {
  try {
    const { customerId } = req.query;

    const subscriptions = await getStripe().subscriptions.list({
      customer: customerId as string,
      status: "active",
    });

    res.json({ subscriptions: subscriptions.data });
  } catch (error) {
    console.error("Get subscription error:", error);
    res.status(500).json({ error: "Failed to get subscription status" });
  }
}

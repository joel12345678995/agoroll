export interface PricingTier {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "Free",
    description: "For small clubs getting started with digital operations.",
    features: [
      "Up to 30 members",
      "Dues & ledger tracking",
      "1 active event at a time",
      "Email support",
    ],
    cta: "Start Free",
  },
  {
    name: "Pro",
    price: "$29",
    period: "/mo",
    description: "For growing clubs that need automation and mobile money.",
    features: [
      "Unlimited members",
      "Mobile money collections",
      "WhatsApp reminders",
      "QR check-in for events",
      "Public donation pages",
      "Priority support",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For districts and federations managing multiple clubs.",
    features: [
      "Multi-club, multi-tenant access",
      "Custom roles & permissions",
      "Dedicated onboarding",
      "Advanced analytics & exports",
      "SLA-backed support",
    ],
    cta: "Book a Demo",
  },
];

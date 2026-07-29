import {
  Wallet,
  Smartphone,
  MessageCircle,
  QrCode,
  HeartHandshake,
  ShieldCheck,
  Users,
  LineChart,
  Calendar,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import MarketingNav  from "@/components/MarketingNav";  // Named import - CORRECT
import  MarketingFooter from "@/components/MarketingFooter";  // Named import - CORRECT

const featureGroups = [
  {
    title: "Financial operations",
    items: [
      {
        icon: Wallet,
        title: "Dues & Ledger",
        description:
          "A single source of truth for dues, fines, and club funds, with automatic balance tracking per member.",
      },
      {
        icon: Smartphone,
        title: "Mobile Money",
        description:
          "Accept Mobile Money payments and automatically reconcile them against member accounts and campaigns.",
      },
      {
        icon: HeartHandshake,
        title: "Public Donations",
        description:
          "Publish shareable donation pages for community projects so anyone can contribute, tracked in real time.",
      },
    ],
  },
  {
    title: "Events & engagement",
    items: [
      {
        icon: Calendar,
        title: "Event Management",
        description:
          "Create events, manage RSVPs, and keep every club activity organized in one calendar.",
      },
      {
        icon: QrCode,
        title: "QR Check-In",
        description:
          "Generate a QR code for any event and let members check in instantly on arrival.",
      },
      {
        icon: MessageCircle,
        title: "WhatsApp Reminders",
        description:
          "Automated reminders for dues, meetings, and events sent directly to members on WhatsApp.",
      },
    ],
  },
  {
    title: "Administration",
    items: [
      {
        icon: Users,
        title: "Member Directory",
        description:
          "Maintain an up-to-date roster with statuses, join dates, and contact details.",
      },
      {
        icon: LineChart,
        title: "Analytics",
        description:
          "Track membership growth, attendance trends, and giving patterns with built-in reporting.",
      },
      {
        icon: ShieldCheck,
        title: "Multi-Tenant Security",
        description:
          "Every club's data is isolated and access is controlled through role-based permissions.",
      },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <MarketingNav />

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
          <h1 className="text-4xl font-black tracking-tight text-text-primary md:text-5xl">
            Built for how Rotary clubs actually run
          </h1>
          <p className="mt-5 text-lg text-text-secondary">
            Every feature is designed around the real workflow of club officers: dues,
            events, communications, and donations.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="flex flex-col gap-16">
          {featureGroups.map((group) => (
            <div key={group.title}>
              <h2 className="mb-6 text-xl font-bold text-text-primary">{group.title}</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((feature) => (
                  <Card key={feature.title} className="p-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#FFD700]/10">
                      <feature.icon className="h-5 w-5 text-[#FFD700]" />
                    </div>
                    <h3 className="mt-4 text-base font-bold text-text-primary">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm text-text-secondary">{feature.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
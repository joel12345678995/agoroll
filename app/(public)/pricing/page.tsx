import Link from "next/link";
import { Check, X } from "lucide-react";
import { MarketingNav } from "@/components/MarketingNav";  // FIXED: Named import
import MarketingFooter  from "@/components/MarketingFooter";  // FIXED: Named import
import  PricingSection  from "@/components/PricingSection";  // FIXED: Named import
import { Button } from "@/components/ui/button";

const comparisonRows: { label: string; starter: boolean | string; pro: boolean | string; enterprise: boolean | string }[] = [
  { label: "Member limit", starter: "30 members", pro: "Unlimited", enterprise: "Unlimited" },
  { label: "Dues & ledger tracking", starter: true, pro: true, enterprise: true },
  { label: "Active events", starter: "1 at a time", pro: "Unlimited", enterprise: "Unlimited" },
  { label: "Mobile Money collections", starter: false, pro: true, enterprise: true },
  { label: "WhatsApp reminders", starter: false, pro: true, enterprise: true },
  { label: "QR check-in", starter: false, pro: true, enterprise: true },
  { label: "Public donation pages", starter: false, pro: true, enterprise: true },
  { label: "Analytics & reporting", starter: false, pro: true, enterprise: true },
  { label: "Multi-club management", starter: false, pro: false, enterprise: true },
  { label: "Custom roles & permissions", starter: false, pro: false, enterprise: true },
  { label: "Dedicated onboarding", starter: false, pro: false, enterprise: true },
  { label: "Support", starter: "Email", pro: "Priority", enterprise: "SLA-backed" },
];

function Cell({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="mx-auto h-4 w-4 text-success" />
    ) : (
      <X className="mx-auto h-4 w-4 text-text-secondary/40" />
    );
  }
  return <span className="text-sm text-text-primary">{value}</span>;
}

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <MarketingNav />

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
          <h1 className="text-4xl font-black tracking-tight text-text-primary md:text-5xl">
            Simple, transparent <span className="text-[#FFD700]">pricing</span>
          </h1>
          <p className="mt-5 text-lg text-text-secondary">
            Start free. Upgrade as your club grows. No hidden fees, cancel anytime.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <PricingSection />
      </section>

      <section className="border-t border-border bg-surface py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <h2 className="text-center text-2xl font-bold text-text-primary md:text-3xl">
            Compare plans in detail
          </h2>

          <div className="mt-10 overflow-x-auto rounded-lg border border-border bg-white shadow-sm">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="border-b border-border bg-surface">
                <tr>
                  <th className="px-5 py-4 font-semibold text-text-secondary">Feature</th>
                  <th className="px-5 py-4 text-center font-semibold text-text-primary">Starter</th>
                  <th className="px-5 py-4 text-center font-semibold text-[#FFD700]">Pro</th>
                  <th className="px-5 py-4 text-center font-semibold text-text-primary">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="hover:bg-surface/50 transition-colors">
                    <td className="px-5 py-4 font-medium text-text-primary">{row.label}</td>
                    <td className="px-5 py-4 text-center"><Cell value={row.starter} /></td>
                    <td className="px-5 py-4 text-center"><Cell value={row.pro} /></td>
                    <td className="px-5 py-4 text-center"><Cell value={row.enterprise} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-24 text-center md:px-8">
        <h2 className="text-3xl font-bold text-text-primary md:text-4xl">
          Have questions about which plan fits?
        </h2>
        <p className="mt-4 text-text-secondary">
          Talk to our team about your club's size and needs.
        </p>
        <Link href="/contact">
          <Button size="lg" className="mt-8 bg-[#FFD700] hover:bg-[#FFD700]/90 text-primary-navy font-bold">
            Book a Demo
          </Button>
        </Link>
      </section>

      <MarketingFooter />
    </div>
  );
}
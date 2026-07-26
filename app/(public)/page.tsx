import Link from "next/link";
import {
  Wallet,
  Smartphone,
  MessageCircle,
  QrCode,
  HeartHandshake,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import MarketingNav  from "@/components/MarketingNav";
import MarketingFooter  from "@/components/MarketingFooter";
import PricingSection from "@/components/PricingSection";

const features = [
  {
    icon: Wallet,
    title: "Dues & Ledger",
    description: "Track member dues, fines, and club funds in a single transparent ledger.",
  },
  {
    icon: Smartphone,
    title: "Mobile Money",
    description: "Accept and reconcile Mobile Money payments directly against member accounts.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Reminders",
    description: "Automated WhatsApp nudges for dues, meetings, and upcoming events.",
  },
  {
    icon: QrCode,
    title: "QR Check-In",
    description: "Scan-to-attend check-in that logs attendance in real time.",
  },
  {
    icon: HeartHandshake,
    title: "Public Donations",
    description: "Shareable donation pages for community projects and fundraising drives.",
  },
  {
    icon: ShieldCheck,
    title: "Multi-Tenant Security",
    description: "Isolated data per club with role-based access for officers and admins.",
  },
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <MarketingNav />

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-navy">
        <div className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-accent-blue">
              Built for Rotary clubs
            </span>
            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
              Automate Rotary Club Operations
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base text-white/60 md:text-lg">
              Dues, mobile money, WhatsApp reminders, and event check-in, unified in one
              platform built for how Rotary clubs actually run.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/login">
                <Button size="lg" className="w-full sm:w-auto">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="w-full border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white sm:w-auto">
                  Book a Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-border bg-surface-light py-6">
        <p className="text-center text-sm font-medium text-text-secondary">
          Trusted by 50+ Clubs
        </p>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 py-24 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-text-primary md:text-4xl">
            Everything your club needs, in one place
          </h2>
          <p className="mt-4 text-text-secondary">
            Replace spreadsheets, WhatsApp threads, and paper ledgers with one
            purpose-built platform.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-blue/10">
                <feature.icon className="h-5 w-5 text-accent-blue" />
              </div>
              <h3 className="mt-4 text-base font-bold text-text-primary">{feature.title}</h3>
              <p className="mt-2 text-sm text-text-secondary">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-surface-light py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-text-primary md:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-text-secondary">
              Start free. Upgrade when your club is ready to automate everything.
            </p>
          </div>
          <div className="mt-14">
            <PricingSection />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-24 text-center md:px-8">
        <h2 className="text-3xl font-bold text-text-primary md:text-4xl">
          Ready to modernize your club?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-text-secondary">
          Join clubs already running dues, events, and donations on agoroll.
        </p>
        <Link href="/login">
          <Button size="lg" className="mt-8">
            Start Free Trial
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </section>

      <MarketingFooter />
    </div>
  );
}

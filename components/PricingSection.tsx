import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { pricingTiers } from "@/lib/pricing-data";

export default function PricingSection() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {pricingTiers.map((tier) => (
        <Card
          key={tier.name}
          className={cn(
            "flex flex-col p-8",
            tier.highlighted && "border-accent-blue shadow-lg ring-1 ring-accent-blue"
          )}
        >
          {tier.highlighted && (
            <span className="mb-3 inline-block w-fit rounded-full bg-accent-blue/10 px-3 py-1 text-xs font-semibold text-accent-blue">
              Most Popular
            </span>
          )}
          <h3 className="text-lg font-bold text-text-primary">{tier.name}</h3>
          <div className="mt-3 flex items-baseline gap-1">
            <span className="text-4xl font-black text-text-primary">{tier.price}</span>
            {tier.period && <span className="text-sm text-text-secondary">{tier.period}</span>}
          </div>
          <p className="mt-3 text-sm text-text-secondary">{tier.description}</p>

          <ul className="mt-6 flex flex-1 flex-col gap-3">
            {tier.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-text-primary">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                {feature}
              </li>
            ))}
          </ul>

          <Link href="/login" className="mt-8">
            <Button
              variant={tier.highlighted ? "default" : "outline"}
              className="w-full"
            >
              {tier.cta}
            </Button>
          </Link>
        </Card>
      ))}
    </div>
  );
}

import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  label: string;
  value: string | number;
  trend: string;
  icon: LucideIcon;
  accentColor?: string;
}

export default function MetricCard({
  label,
  value,
  trend,
  icon: Icon,
  accentColor = "#2D7FF9",
}: MetricCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-text-secondary">{label}</p>
          <p className="mt-2 text-3xl font-bold text-text-primary">{value}</p>
        </div>
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
          style={{ backgroundColor: `${accentColor}1A` }}
        >
          <Icon className="h-5 w-5" style={{ color: accentColor }} />
        </div>
      </div>
      <p className={cn("mt-4 text-xs font-medium text-text-secondary")}>{trend}</p>
    </Card>
  );
}

import { Card } from "@/components/ui/card";

interface StatCardProps {
  label: string;
  value: string | number;
}

export default function StatCard({ label, value }: StatCardProps) {
  return (
    <Card className="p-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-text-secondary">
        {label}
      </p>
      <p className="mt-2 text-2xl font-bold text-text-primary">{value}</p>
    </Card>
  );
}

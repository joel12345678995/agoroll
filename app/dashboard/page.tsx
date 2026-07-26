"use client";

import { useEffect, useState } from "react";
import { Calendar, Users, HandCoins } from "lucide-react";
import MetricCard from "@/components/MetricCard";
import { Skeleton } from "@/components/ui/skeleton";
import { DashboardMetrics } from "@/types";
import { formatCurrency } from "@/lib/utils";

export default function DashboardPage() {
  const [metrics, setMetrics] = useState<DashboardMetrics | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/dashboard/metrics")
      .then((res) => res.json())
      .then((data: DashboardMetrics) => {
        setMetrics(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-text-primary md:text-3xl">Dashboard</h1>
        <p className="mt-1 text-sm text-text-secondary">
          Welcome back. Here&apos;s what&apos;s happening with your club.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {loading || !metrics ? (
          <>
            <Skeleton className="h-[132px] w-full" />
            <Skeleton className="h-[132px] w-full" />
            <Skeleton className="h-[132px] w-full" />
          </>
        ) : (
          <>
            <MetricCard
              label="Active Events"
              value={metrics.activeEvents}
              trend={metrics.activeEventsTrend}
              icon={Calendar}
              accentColor="#2D7FF9"
            />
            <MetricCard
              label="Total Attendees"
              value={metrics.totalAttendees}
              trend={metrics.totalAttendeesTrend}
              icon={Users}
              accentColor="#10B981"
            />
            <MetricCard
              label="Total Donations"
              value={formatCurrency(metrics.totalDonations)}
              trend={metrics.totalDonationsTrend}
              icon={HandCoins}
              accentColor="#F59E0B"
            />
          </>
        )}
      </div>
    </div>
  );
}

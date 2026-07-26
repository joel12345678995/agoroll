import { NextResponse } from "next/server";
import { mockDashboardMetrics } from "@/lib/mock-data";

export async function GET() {
  return NextResponse.json(mockDashboardMetrics);
}

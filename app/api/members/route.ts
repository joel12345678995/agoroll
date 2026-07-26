import { NextResponse } from "next/server";
import { mockMembers } from "@/lib/mock-data";

export async function GET() {
  return NextResponse.json(mockMembers);
}

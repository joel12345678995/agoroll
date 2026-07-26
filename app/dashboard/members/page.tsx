"use client";

import { useEffect, useMemo, useState } from "react";
import { MoreHorizontal, UserPlus } from "lucide-react";
import StatCard from "@/components/StatCard";
import SearchBar from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Member, MemberStatus } from "@/types";
import { formatDate } from "@/lib/utils";

const statusVariant: Record<MemberStatus, "success" | "outline" | "warning"> = {
  active: "success",
  inactive: "outline",
  pending: "warning",
};

export default function MembersPage() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("/api/members")
      .then((res) => res.json())
      .then((data: Member[]) => {
        setMembers(data);
        setLoading(false);
      });
  }, []);

  const filtered = useMemo(() => {
    if (!query) return members;
    const q = query.toLowerCase();
    return members.filter(
      (m) => m.name.toLowerCase().includes(q) || m.email.toLowerCase().includes(q)
    );
  }, [members, query]);

  const totalMembers = members.length;
  const emailCoverage =
    totalMembers > 0
      ? Math.round((members.filter((m) => m.email).length / totalMembers) * 100)
      : 0;

  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-text-primary md:text-3xl">Club Members</h1>
          <p className="mt-1 text-sm text-text-secondary">
            Manage your roster, statuses, and member details.
          </p>
        </div>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Add Member
        </Button>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard label="Total Members" value={totalMembers} />
        <StatCard label="Active Buddy Groups" value={0} />
        <StatCard label="Email Coverage" value={`${emailCoverage}%`} />
      </div>

      <div className="mb-4">
        <SearchBar
          placeholder="Search directory..."
          value={query}
          onChange={setQuery}
        />
      </div>

      <div className="overflow-hidden rounded-lg border border-border bg-white">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-border bg-surface-light">
              <tr>
                <th className="px-5 py-3 font-semibold text-text-secondary">Name</th>
                <th className="px-5 py-3 font-semibold text-text-secondary">Email</th>
                <th className="px-5 py-3 font-semibold text-text-secondary">Join Date</th>
                <th className="px-5 py-3 font-semibold text-text-secondary">Status</th>
                <th className="px-5 py-3 font-semibold text-text-secondary text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {loading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <tr key={i}>
                    <td className="px-5 py-3" colSpan={5}>
                      <Skeleton className="h-6 w-full" />
                    </td>
                  </tr>
                ))
              ) : filtered.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-5 py-10 text-center text-text-secondary">
                    No members match your search.
                  </td>
                </tr>
              ) : (
                filtered.map((member) => (
                  <tr key={member.id} className="hover:bg-surface-light/60">
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-primary-navy text-xs">
                            {member.avatarInitials}
                          </AvatarFallback>
                        </Avatar>
                        <span className="font-medium text-text-primary">{member.name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3 text-text-secondary">{member.email}</td>
                    <td className="px-5 py-3 text-text-secondary">{formatDate(member.joinDate)}</td>
                    <td className="px-5 py-3">
                      <Badge variant={statusVariant[member.status]} className="capitalize">
                        {member.status}
                      </Badge>
                    </td>
                    <td className="px-5 py-3 text-right">
                      <button className="rounded-md p-1.5 text-text-secondary hover:bg-surface-light">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

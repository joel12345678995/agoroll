"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  LayoutDashboard,
  Calendar,
  FileArchive,
  Users,
  ClipboardList,
  Target,
  Wallet,
  LineChart,
  MessageSquare,
  UserCircle,
  CreditCard,
  Settings,
  LogOut,
  X,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Events", href: "/dashboard/events", icon: Calendar },
  { label: "Reports Archive", href: "/dashboard/reports", icon: FileArchive },
  { label: "Members", href: "/dashboard/members", icon: Users },
  { label: "Directory", href: "/dashboard/directory", icon: ClipboardList },
  { label: "Donation Campaigns", href: "/dashboard/donations", icon: Target },
  { label: "Withdrawals", href: "/dashboard/withdrawals", icon: Wallet },
  { label: "Analytics", href: "/dashboard/analytics", icon: LineChart },
  { label: "Communications", href: "/dashboard/communications", icon: MessageSquare },
  { label: "Team", href: "/dashboard/team", icon: UserCircle },
  { label: "Subscription", href: "/dashboard/subscription", icon: CreditCard },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

interface SidebarProps {
  mobileOpen: boolean;
  onCloseMobile: () => void;
}

export default function Sidebar({ mobileOpen, onCloseMobile }: SidebarProps) {
  const pathname = usePathname();
  const { data: session } = useSession();

  const userName = session?.user?.name ?? "Admin User";
  const userEmail = session?.user?.email ?? "admin@agoroll.com";
  const initials = userName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={onCloseMobile}
          aria-hidden="true"
        />
      )}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex h-full flex-col bg-primary-navy transition-transform duration-200 ease-in-out",
          "w-64 md:w-64",
          "md:translate-x-0",
          mobileOpen ? "translate-x-0" : "-translate-x-full",
          "md:static"
        )}
      >
        <div className="flex items-center justify-between px-6 py-6">
          <Link href="/dashboard" className="text-2xl font-black tracking-tight text-accent-blue">
            agoroll
          </Link>
          <button
            onClick={onCloseMobile}
            className="text-white/70 hover:text-white md:hidden"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto scrollbar-hide px-3 py-2">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive =
                item.href === "/dashboard"
                  ? pathname === "/dashboard"
                  : pathname?.startsWith(item.href);
              const Icon = item.icon;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onCloseMobile}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-accent-blue text-white"
                        : "text-white/60 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    <Icon className="h-[18px] w-[18px] shrink-0" />
                    <span className="truncate">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-t border-white/10 px-4 py-4">
          <div className="flex items-center gap-3 rounded-lg px-2 py-2">
            <Avatar className="h-9 w-9">
              <AvatarFallback className="bg-accent-blue text-xs">{initials}</AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-white">{userName}</p>
              <p className="truncate text-xs text-white/50">{userEmail}</p>
            </div>
          </div>
          <div className="mt-1 flex items-center justify-between px-2">
            <span className="inline-flex items-center rounded-full bg-accent-blue/15 px-2 py-0.5 text-[11px] font-medium text-accent-blue">
              Club Admin
            </span>
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="flex items-center gap-1 text-xs font-medium text-white/50 hover:text-white"
            >
              <LogOut className="h-3.5 w-3.5" />
              Sign out
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

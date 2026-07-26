"use client";

import { Menu, Bell } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface NavbarProps {
  onMenuClick: () => void;
  title?: string;
}

export default function Navbar({ onMenuClick, title }: NavbarProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-white/95 px-4 backdrop-blur md:px-8">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="rounded-md p-2 text-text-secondary hover:bg-surface-light md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
        {title && <span className="text-sm font-medium text-text-secondary md:hidden">{title}</span>}
      </div>
      <div className="flex items-center gap-4">
        <button
          className="relative rounded-md p-2 text-text-secondary hover:bg-surface-light"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
        </button>
        <Avatar className="h-8 w-8">
          <AvatarFallback className="bg-primary-navy text-xs">AD</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

export type MemberStatus = "active" | "inactive" | "pending";

export interface Member {
  id: string;
  name: string;
  email: string;
  joinDate: string;
  status: MemberStatus;
  avatarInitials: string;
}

export type EventStatus = "upcoming" | "completed" | "cancelled";

export interface ClubEvent {
  id: string;
  title: string;
  date: string;
  attendees: number;
  status: EventStatus;
}

export interface DashboardMetrics {
  activeEvents: number;
  activeEventsTrend: string;
  totalAttendees: number;
  totalAttendeesTrend: string;
  totalDonations: number;
  totalDonationsTrend: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon: string;
}

export interface AppUser {
  id: string;
  name: string;
  email: string;
  role: string;
  avatarInitials: string;
}

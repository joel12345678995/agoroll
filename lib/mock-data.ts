import { Member, ClubEvent, DashboardMetrics } from "@/types";

export const mockMembers: Member[] = [
  { id: "1", name: "Grace Nakato", email: "grace.nakato@rotarykla.org", joinDate: "2023-01-14", status: "active", avatarInitials: "GN" },
  { id: "2", name: "David Okello", email: "david.okello@rotarykla.org", joinDate: "2022-11-02", status: "active", avatarInitials: "DO" },
  { id: "3", name: "Patricia Namutebi", email: "patricia.n@rotarykla.org", joinDate: "2023-03-21", status: "active", avatarInitials: "PN" },
  { id: "4", name: "Samuel Kato", email: "samuel.kato@rotarykla.org", joinDate: "2021-07-09", status: "inactive", avatarInitials: "SK" },
  { id: "5", name: "Esther Nabirye", email: "esther.nabirye@rotarykla.org", joinDate: "2024-02-18", status: "pending", avatarInitials: "EN" },
  { id: "6", name: "Michael Ssebunya", email: "michael.s@rotarykla.org", joinDate: "2022-05-30", status: "active", avatarInitials: "MS" },
  { id: "7", name: "Joan Auma", email: "joan.auma@rotarykla.org", joinDate: "2023-09-11", status: "active", avatarInitials: "JA" },
  { id: "8", name: "Peter Mugisha", email: "peter.mugisha@rotarykla.org", joinDate: "2020-12-04", status: "inactive", avatarInitials: "PM" },
  { id: "9", name: "Ruth Alupo", email: "ruth.alupo@rotarykla.org", joinDate: "2024-01-06", status: "pending", avatarInitials: "RA" },
  { id: "10", name: "James Byaruhanga", email: "james.byaruhanga@rotarykla.org", joinDate: "2023-06-25", status: "active", avatarInitials: "JB" },
];

export const mockEvents: ClubEvent[] = [
  { id: "1", title: "Annual Charity Gala", date: "2026-09-12", attendees: 0, status: "upcoming" },
  { id: "2", title: "Community Health Camp", date: "2026-08-02", attendees: 0, status: "upcoming" },
  { id: "3", title: "Youth Leadership Summit", date: "2026-06-18", attendees: 0, status: "completed" },
];

export const mockDashboardMetrics: DashboardMetrics = {
  activeEvents: 0,
  activeEventsTrend: "+1 this month",
  totalAttendees: 0,
  totalAttendeesTrend: "Total registered present",
  totalDonations: 0,
  totalDonationsTrend: "Raised",
};

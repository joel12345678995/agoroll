import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "agoroll — Automate Rotary Club Operations",
  description:
    "The multi-tenant club management platform for Rotary clubs. Dues, mobile money, WhatsApp reminders, QR check-in, and public donations, all in one place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

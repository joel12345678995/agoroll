"use client";

import { Calendar, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import EmptyState from "@/components/EmptyState";

export default function EventsPage() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-text-primary md:text-3xl">Events</h1>
          <p className="mt-1 text-sm text-text-secondary">
            Plan, publish, and track attendance for your club events.
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create Event
        </Button>
      </div>

      <EmptyState
        icon={Calendar}
        title="No Events Yet"
        description="Create your first event to start tracking RSVPs, QR check-ins, and attendance."
        actionLabel="Create Event"
      />
    </div>
  );
}

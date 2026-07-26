import { FileArchive } from "lucide-react";

export default function ReportsPage() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-text-primary md:text-3xl">Reports Archive</h1>
        <p className="mt-1 text-sm text-text-secondary">
          Browse and export historical club reports, minutes, and financial summaries.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border bg-surface-light/50 px-6 py-20 text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent-blue/10">
          <FileArchive className="h-7 w-7 text-accent-blue" />
        </div>
        <h3 className="text-lg font-bold text-text-primary">This page is under development</h3>
        <p className="mt-1.5 max-w-sm text-sm text-text-secondary">
          Reports Archive is coming soon. We are actively building this out for the agoroll platform.
        </p>
      </div>
    </div>
  );
}

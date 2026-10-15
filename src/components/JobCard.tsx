import Link from "next/link";
import { Banknote, Clock, MapPin, Briefcase } from "lucide-react";
import type { Job } from "@/lib/data";

export function JobCard({ job }: { job: Job }) {
  return (
    <article className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-surface font-heading text-sm font-extrabold text-navy">
          {job.employer
            .split(" ")
            .slice(0, 2)
            .map((w) => w[0])
            .join("")}
        </div>
        <div className="min-w-0">
          <h3 className="truncate text-base font-bold text-ink">{job.title}</h3>
          <p className="truncate text-sm font-medium text-navy">{job.employer}</p>
        </div>
      </div>

      <ul className="mt-4 space-y-2 text-sm text-slate-600">
        <li className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-slate-400" />
          {job.location}
        </li>
        <li className="flex items-center gap-2">
          <Briefcase className="h-4 w-4 text-slate-400" />
          {job.type}
        </li>
        {job.salary && (
          <li className="flex items-center gap-2">
            <Banknote className="h-4 w-4 text-slate-400" />
            {job.salary}
          </li>
        )}
      </ul>

      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
        <span className="flex items-center gap-1.5 text-xs text-slate-500">
          <Clock className="h-3.5 w-3.5" />
          {job.postedAgo}
        </span>
        <Link
          href={`/jobs/${job.id}`}
          className="inline-flex h-10 items-center rounded-lg bg-navy px-5 text-sm font-semibold text-white transition hover:bg-navy-dark"
        >
          Apply
        </Link>
      </div>
    </article>
  );
}
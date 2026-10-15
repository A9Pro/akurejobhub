import Link from "next/link";
import { Banknote, Briefcase, Clock, MapPin } from "lucide-react";
import type { Job } from "@/lib/data";

export function JobRow({ job }: { job: Job }) {
  const initials = job.employer
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return (
    <article className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md sm:flex-row sm:items-center sm:justify-between">
      <div className="flex min-w-0 items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-surface font-heading text-sm font-extrabold text-navy">
          {initials}
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-bold text-ink">{job.title}</h3>
          <p className="text-sm font-medium text-navy">{job.employer}</p>
          <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-slate-600">
            <li className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-slate-400" />
              {job.location}
            </li>
            <li className="flex items-center gap-1.5">
              <Briefcase className="h-4 w-4 text-slate-400" />
              {job.type}
            </li>
            {job.salary && (
              <li className="flex items-center gap-1.5">
                <Banknote className="h-4 w-4 text-slate-400" />
                {job.salary}
              </li>
            )}
            <li className="flex items-center gap-1.5 text-slate-500">
              <Clock className="h-4 w-4 text-slate-400" />
              {job.postedAgo}
            </li>
          </ul>
        </div>
      </div>

      <Link
        href={`/jobs/${job.id}`}
        className="inline-flex h-11 shrink-0 items-center justify-center rounded-lg bg-navy px-6 text-sm font-semibold text-white transition hover:bg-navy-dark"
      >
        Apply
      </Link>
    </article>
  );
}
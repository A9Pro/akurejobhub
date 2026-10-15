import { allJobs, type Job } from "@/lib/data";

export const PAGE_SIZE = 5;

type RawParams = Record<string, string | string[] | undefined>;

export type JobFilters = {
  q: string;
  location: string;
  category: string;
  types: string[];
  salary: string;
  sort: "recent" | "oldest";
  page: number;
};

const first = (v: string | string[] | undefined) =>
  (Array.isArray(v) ? v[0] : v) ?? "";

export function parseFilters(sp: RawParams): JobFilters {
  const typeRaw = sp.type;
  const types = Array.isArray(typeRaw) ? typeRaw : typeRaw ? [typeRaw] : [];
  const page = Number.parseInt(first(sp.page), 10);
  return {
    q: first(sp.q).trim(),
    location: first(sp.location),
    category: first(sp.category),
    types,
    salary: first(sp.salary),
    sort: first(sp.sort) === "oldest" ? "oldest" : "recent",
    page: Number.isFinite(page) && page > 0 ? page : 1,
  };
}

function matchesSalary(job: Job, range: string) {
  if (!range) return true;
  if (job.salaryMin == null || job.salaryMax == null) return false;
  const [lo, hi] = range.split("-");
  const min = lo ? Number(lo) : 0;
  const max = hi ? Number(hi) : Infinity;
  return job.salaryMax >= min && job.salaryMin <= max;
}

export function queryJobs(f: JobFilters) {
  const q = f.q.toLowerCase();

  const filtered = allJobs.filter((j) => {
    if (
      q &&
      ![j.title, j.employer, j.category, j.location].some((s) =>
        s.toLowerCase().includes(q),
      )
    )
      return false;
    if (
      f.location &&
      f.location !== "All Ondo State" &&
      !j.location.toLowerCase().includes(f.location.toLowerCase())
    )
      return false;
    if (f.category && j.category !== f.category) return false;
    if (f.types.length && !f.types.includes(j.type)) return false;
    return matchesSalary(j, f.salary);
  });

  const sorted = [...filtered].sort((a, b) =>
    f.sort === "oldest" ? b.postedDays - a.postedDays : a.postedDays - b.postedDays,
  );

  const total = sorted.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const page = Math.min(f.page, totalPages);

  return {
    jobs: sorted.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE),
    total,
    totalPages,
    page,
  };
}

export function buildHref(f: JobFilters, overrides: Partial<JobFilters> = {}) {
  const n = { ...f, ...overrides };
  const p = new URLSearchParams();
  if (n.q) p.set("q", n.q);
  if (n.location && n.location !== "All Ondo State") p.set("location", n.location);
  if (n.category) p.set("category", n.category);
  n.types.forEach((t) => p.append("type", t));
  if (n.salary) p.set("salary", n.salary);
  if (n.sort !== "recent") p.set("sort", n.sort);
  if (n.page > 1) p.set("page", String(n.page));
  const s = p.toString();
  return s ? `/jobs?${s}` : "/jobs";
}
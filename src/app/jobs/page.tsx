import { Suspense } from "react";
import Link from "next/link";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { AnnouncementBar, Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JobRow } from "@/components/JobRow";
import { SearchFields } from "@/components/SearchBar";
import { SortSelect } from "@/components/SortSelect";
import { categories, jobTypes, locations, salaryRanges } from "@/lib/data";
import { buildHref, parseFilters, queryJobs } from "@/lib/jobs";

export const metadata = {
  title: "Find Jobs in Akure and Ondo State | Akure Job Hub",
  description:
    "Browse the latest vacancies in Akure and across Ondo State. Free for job seekers.",
};

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

const selectClass =
  "h-11 w-full appearance-none rounded-lg border border-slate-200 bg-white px-3 pr-9 text-sm text-ink outline-none focus:border-navy";

function Hidden({ name, values }: { name: string; values: string[] }) {
  return (
    <>
      {values.filter(Boolean).map((v) => (
        <input key={`${name}-${v}`} type="hidden" name={name} value={v} />
      ))}
    </>
  );
}

export default function JobsPage({ searchParams }: { searchParams: SearchParams }) {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <Suspense fallback={<div className="min-h-[70vh] bg-surface" />}>
        <JobsContent searchParams={searchParams} />
      </Suspense>
      <Footer />
    </>
  );
}

async function JobsContent({ searchParams }: { searchParams: SearchParams }) {
  const f = parseFilters(await searchParams);
  const { jobs, total, totalPages, page } = queryJobs(f);

  return (
    <main>
      {/* Search band */}
      <section className="bg-gradient-to-br from-navy-dark via-navy to-navy">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-12">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
            Find Your Next <span className="text-orange">Opportunity</span>
          </h1>
          <p className="mt-2 text-white/80">
            Search vacancies in Akure and across Ondo State.
          </p>
          <form action="/jobs" method="get" className="mt-6 max-w-4xl">
            <SearchFields
              buttonLabel="Search"
              defaults={{ q: f.q, location: f.location, category: f.category }}
            />
            <Hidden name="type" values={f.types} />
            <Hidden name="salary" values={[f.salary]} />
            <Hidden name="sort" values={f.sort === "oldest" ? ["oldest"] : []} />
          </form>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[270px_1fr] lg:py-10">
        {/* Filters */}
        <div>
          <input id="filters-toggle" type="checkbox" className="peer sr-only" />
          <label
            htmlFor="filters-toggle"
            className="flex h-12 cursor-pointer items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white text-sm font-semibold text-ink lg:hidden"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </label>

          <form
            action="/jobs"
            method="get"
            className="mt-3 hidden rounded-xl border border-slate-200 bg-white p-5 peer-checked:block lg:mt-0 lg:block"
          >
            <h2 className="text-base font-extrabold text-ink">Filters</h2>
            <Hidden name="q" values={[f.q]} />
            <Hidden name="sort" values={f.sort === "oldest" ? ["oldest"] : []} />

            <div className="mt-5">
              <label htmlFor="f-location" className="text-sm font-semibold text-ink">
                Location
              </label>
              <div className="relative mt-2">
                <select
                  id="f-location"
                  name="location"
                  defaultValue={f.location || "All Ondo State"}
                  className={selectClass}
                >
                  {locations.map((l) => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-3.5 h-4 w-4 text-slate-400" />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="f-category" className="text-sm font-semibold text-ink">
                Category
              </label>
              <div className="relative mt-2">
                <select
                  id="f-category"
                  name="category"
                  defaultValue={f.category}
                  className={selectClass}
                >
                  <option value="">All Categories</option>
                  {categories.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-3.5 h-4 w-4 text-slate-400" />
              </div>
            </div>

            <fieldset className="mt-5">
              <legend className="text-sm font-semibold text-ink">Job Type</legend>
              <div className="mt-2 space-y-2.5">
                {jobTypes.map((t) => (
                  <label key={t} className="flex cursor-pointer items-center gap-2.5 text-sm text-slate-700">
                    <input
                      type="checkbox"
                      name="type"
                      value={t}
                      defaultChecked={f.types.includes(t)}
                      className="h-4 w-4 rounded border-slate-300 accent-navy"
                    />
                    {t}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="mt-5">
              <label htmlFor="f-salary" className="text-sm font-semibold text-ink">
                Salary Range
              </label>
              <div className="relative mt-2">
                <select
                  id="f-salary"
                  name="salary"
                  defaultValue={f.salary}
                  className={selectClass}
                >
                  {salaryRanges.map((s) => (
                    <option key={s.value} value={s.value}>{s.label}</option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-3.5 h-4 w-4 text-slate-400" />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 h-11 w-full rounded-lg bg-navy text-sm font-semibold text-white transition hover:bg-navy-dark"
            >
              Apply Filters
            </button>
            <Link
              href="/jobs"
              className="mt-2 flex h-11 w-full items-center justify-center rounded-lg text-sm font-semibold text-slate-600 transition hover:bg-surface"
            >
              Clear All
            </Link>
          </form>
        </div>

        {/* Results */}
        <section>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-lg font-extrabold text-ink">
              Found {total} {total === 1 ? "job" : "jobs"}
            </h2>
            <SortSelect value={f.sort} />
          </div>

          {jobs.length > 0 ? (
            <div className="mt-5 space-y-4">
              {jobs.map((job) => (
                <JobRow key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <div className="mt-5 rounded-xl border border-dashed border-slate-300 bg-surface px-6 py-14 text-center">
              <h3 className="text-base font-bold text-ink">No jobs match your search</h3>
              <p className="mt-1 text-sm text-slate-600">
                Try a different keyword or remove some filters.
              </p>
              <Link
                href="/jobs"
                className="mt-5 inline-flex h-11 items-center rounded-lg bg-navy px-6 text-sm font-semibold text-white transition hover:bg-navy-dark"
              >
                Clear all filters
              </Link>
            </div>
          )}

          {totalPages > 1 && (
            <nav aria-label="Pagination" className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {page > 1 && (
                <Link
                  href={buildHref(f, { page: page - 1 })}
                  className="inline-flex h-10 items-center rounded-lg border border-slate-200 bg-white px-4 text-sm font-medium text-ink hover:bg-surface"
                >
                  Previous
                </Link>
              )}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <Link
                  key={n}
                  href={buildHref(f, { page: n })}
                  aria-current={n === page ? "page" : undefined}
                  className={
                    n === page
                      ? "inline-flex h-10 w-10 items-center justify-center rounded-lg bg-navy text-sm font-semibold text-white"
                      : "inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-sm font-medium text-ink hover:bg-surface"
                  }
                >
                  {n}
                </Link>
              ))}
              {page < totalPages && (
                <Link
                  href={buildHref(f, { page: page + 1 })}
                  className="inline-flex h-10 items-center rounded-lg border border-slate-200 bg-white px-4 text-sm font-medium text-ink hover:bg-surface"
                >
                  Next
                </Link>
              )}
            </nav>
          )}
        </section>
      </div>
    </main>
  );
}
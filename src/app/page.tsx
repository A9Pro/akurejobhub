import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle2,
  GraduationCap,
  HardHat,
  HeartPulse,
  Laptop,
  LayoutGrid,
  TrendingUp,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import { AnnouncementBar, Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JobCard } from "@/components/JobCard";
import { SearchBar } from "@/components/SearchBar";
import { categories, latestJobs } from "@/lib/data";

const categoryIcons: Record<string, LucideIcon> = {
  "Sales & Marketing": TrendingUp,
  Administration: Building2,
  Education: GraduationCap,
  "IT & Tech": Laptop,
  Healthcare: HeartPulse,
  Construction: HardHat,
  Hospitality: UtensilsCrossed,
  Others: LayoutGrid,
};

const steps = [
  { n: "1", title: "Search", text: "Find vacancies by keyword, location or category." },
  { n: "2", title: "Review", text: "Read the role, requirements and closing date." },
  { n: "3", title: "Apply", text: "Apply directly through the employer's own link or instructions." },
];

export default function HomePage() {
  return (
    <>
      <AnnouncementBar />
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-navy-dark via-navy to-navy">
          <div className="mx-auto max-w-7xl px-4 pb-14 pt-14 sm:px-6 lg:pb-20 lg:pt-20">
            <h1 className="max-w-2xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Your next chapter <span className="text-orange">starts right here.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/80 sm:text-lg">
              Find employment opportunities in Akure and across Ondo State. Whether you&apos;re
              looking for a new role or hiring talent, Akure Job Hub connects you.
            </p>
            <div className="mt-8 max-w-4xl">
              <SearchBar />
            </div>
          </div>
        </section>

        {/* Popular categories */}
        <section id="categories" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-extrabold text-ink">Popular Job Categories</h2>
            <Link href="/jobs" className="flex items-center gap-1 text-sm font-semibold text-navy hover:underline">
              View all categories <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {categories.map((c) => {
              const Icon = categoryIcons[c] ?? Briefcase;
              return (
                <Link
                  key={c}
                  href={`/jobs?category=${encodeURIComponent(c)}`}
                  className="flex flex-col items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-4 text-center text-xs font-semibold text-ink transition hover:border-navy hover:shadow-sm"
                >
                  <Icon className="h-6 w-6 text-navy" />
                  {c}
                </Link>
              );
            })}
          </div>
        </section>

        {/* Free browsing strip */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center gap-3 rounded-xl bg-surface px-5 py-4 text-sm text-ink">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-navy" />
            <p>
              <strong>Browsing jobs is completely free for job seekers.</strong>{" "}
              No account needed. Search and apply directly with employers.
            </p>
          </div>
        </section>

        {/* Latest jobs */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-extrabold text-ink">Latest Job Listings</h2>
            <Link href="/jobs" className="flex items-center gap-1 text-sm font-semibold text-navy hover:underline">
              View all jobs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {latestJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="bg-surface">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
            <h2 className="text-xl font-extrabold text-ink">How It Works</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {steps.map((s) => (
                <div key={s.n} className="rounded-xl border border-slate-200 bg-white p-6">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange font-heading text-sm font-extrabold text-navy-dark">
                    {s.n}
                  </span>
                  <h3 className="mt-4 text-base font-bold text-ink">{s.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Employer CTA */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-5 rounded-2xl bg-navy px-6 py-8 sm:flex-row sm:items-center sm:px-10">
            <div>
              <h2 className="text-xl font-extrabold text-white">Are you an employer?</h2>
              <p className="mt-1 max-w-xl text-sm text-white/80">
                Find the right talent for your team. Post your job today and reach qualified
                candidates across Akure and Ondo State.
              </p>
            </div>
            <Link
              href="/post-a-job"
              className="inline-flex h-12 shrink-0 items-center gap-2 rounded-lg bg-orange px-6 text-sm font-bold text-navy-dark transition hover:brightness-95"
            >
              Post a Job <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
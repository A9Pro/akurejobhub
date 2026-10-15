import Link from "next/link";
import { MapPin, Menu, Search, Sparkles } from "lucide-react";
import { Logo } from "@/components/Logo";

const navLinks = [
  { label: "Find a Job", href: "/jobs" },
  { label: "Categories", href: "/#categories" },
  { label: "How It Works", href: "/#how-it-works" },
];

export function AnnouncementBar() {
  return (
    <div className="bg-navy-dark text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-1.5 text-xs sm:px-6">
        <p className="flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5 shrink-0 text-orange" />
          <span>New opportunities are added daily. Find your next role today.</span>
        </p>
        <p className="hidden items-center gap-1.5 sm:flex">
          <MapPin className="h-3.5 w-3.5 text-orange" />
          Akure · Ondo State
        </p>
      </div>
    </div>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/90 shadow-[0_1px_12px_rgba(10,37,64,0.06)] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-1.5 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="relative text-[15px] font-medium text-ink transition-colors hover:text-navy after:absolute after:inset-x-0 after:-bottom-1.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-orange after:transition-transform hover:after:scale-x-100"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/jobs"
            aria-label="Search jobs"
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition hover:bg-surface"
          >
            <Search className="h-5 w-5" />
          </Link>

          <Link
            href="/post-a-job"
            className="inline-flex h-10 items-center rounded-lg bg-navy px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-navy-dark"
          >
            Post a Job
          </Link>

          {/* Mobile menu (no JavaScript needed) */}
          <details className="relative md:hidden">
            <summary
              aria-label="Open menu"
              className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full text-ink transition hover:bg-surface [&::-webkit-details-marker]:hidden"
            >
              <Menu className="h-5 w-5" />
            </summary>
            <div className="absolute right-0 top-12 w-52 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
              {navLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink hover:bg-surface"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
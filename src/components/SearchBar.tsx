import { Briefcase, ChevronDown, MapPin, Search } from "lucide-react";
import { categories, locations } from "@/lib/data";

const field = "flex h-14 items-center gap-3 rounded-lg bg-white px-4 text-ink";

type Defaults = { q?: string; location?: string; category?: string };

export function SearchFields({
  defaults = {},
  buttonLabel = "Find Jobs",
}: {
  defaults?: Defaults;
  buttonLabel?: string;
}) {
  return (
    <div className="grid gap-3 rounded-xl bg-white/10 p-3 backdrop-blur sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_auto]">
      <label className={field}>
        <Search className="h-5 w-5 shrink-0 text-slate-400" />
        <span className="sr-only">Job title, skills or keyword</span>
        <input
          name="q"
          type="text"
          defaultValue={defaults.q ?? ""}
          placeholder="Job title, skills or keyword"
          className="w-full bg-transparent text-base outline-none placeholder:text-slate-400"
        />
      </label>

      <label className={`${field} relative`}>
        <MapPin className="h-5 w-5 shrink-0 text-slate-400" />
        <span className="sr-only">Location</span>
        <select
          name="location"
          defaultValue={defaults.location || "All Ondo State"}
          className="w-full appearance-none bg-transparent pr-6 text-base outline-none"
        >
          {locations.map((l) => (
            <option key={l} value={l}>{l}</option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-4 h-4 w-4 text-slate-400" />
      </label>

      <label className={`${field} relative`}>
        <Briefcase className="h-5 w-5 shrink-0 text-slate-400" />
        <span className="sr-only">Category</span>
        <select
          name="category"
          defaultValue={defaults.category ?? ""}
          className="w-full appearance-none bg-transparent pr-6 text-base outline-none"
        >
          <option value="">All Categories</option>
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-4 h-4 w-4 text-slate-400" />
      </label>

      <button
        type="submit"
        className="h-14 rounded-lg bg-orange px-8 text-base font-bold text-navy-dark transition hover:brightness-95 sm:col-span-2 lg:col-span-1"
      >
        {buttonLabel}
      </button>
    </div>
  );
}

export function SearchBar() {
  return (
    <form action="/jobs" method="get">
      <SearchFields />
    </form>
  );
}
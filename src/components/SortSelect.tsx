"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function SortSelect({ value }: { value: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  return (
    <label className="flex items-center gap-2 text-sm text-slate-600">
      Sort by:
      <select
        defaultValue={value}
        onChange={(e) => {
          const next = new URLSearchParams(params.toString());
          if (e.target.value === "recent") next.delete("sort");
          else next.set("sort", e.target.value);
          next.delete("page");
          const qs = next.toString();
          router.push(qs ? `${pathname}?${qs}` : pathname);
        }}
        className="h-10 rounded-lg border border-slate-200 bg-white px-3 text-sm font-medium text-ink outline-none focus:border-navy"
      >
        <option value="recent">Most Recent</option>
        <option value="oldest">Oldest First</option>
      </select>
    </label>
  );
}
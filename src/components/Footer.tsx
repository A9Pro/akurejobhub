import Image from "next/image";
import Link from "next/link";
import CurrentYear from "./CurrentYear";

const quickLinks = [
  { label: "Find a Job", href: "/jobs" },
  { label: "Post a Job", href: "/post-a-job" },
  { label: "Categories", href: "/#categories" },
  { label: "How It Works", href: "/#how-it-works" },
];

const support = [
  { label: "FAQs", href: "/faqs" },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          {/* White pill so the navy logo text stays readable on the dark footer */}
          <div className="inline-block rounded-xl bg-white px-5 py-3">
            <Image
              src="/logo.png"
              alt="Akure Job Hub"
              width={600}
              height={720}
              className="h-28 w-auto object-contain lg:h-40"
            />
          </div>
          <p className="mt-4 text-sm text-white/70">Your Next Opportunity Starts Here.</p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-orange">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="hover:text-white">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-orange">Support</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {support.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="hover:text-white">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © <CurrentYear /> Akure Job Hub. All rights reserved.
      </div>
    </footer>
  );
}
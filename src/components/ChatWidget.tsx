"use client";

import { useState } from "react";
import {
  Briefcase,
  Compass,
  MessageCircle,
  ShieldAlert,
  Star,
  X,
} from "lucide-react";

const topics = [
  {
    icon: Compass,
    title: "Career guidance",
    text: "Get help choosing a job, writing a CV or preparing for interviews.",
    message: "Hello Akure Job Hub, I would like some career guidance.",
  },
  {
    icon: Star,
    title: "Reviews and opinions",
    text: "Share your experience with an employer or ask for an opinion.",
    message:
      "Hello Akure Job Hub, I would like to share a review or ask for an opinion about an employer.",
  },
  {
    icon: Briefcase,
    title: "Posting a job",
    text: "Ask about pricing, the review process or how payment works.",
    message: "Hello Akure Job Hub, I have a question about posting a job.",
  },
  {
    icon: ShieldAlert,
    title: "Report a suspicious job",
    text: "Tell us about a listing that looks like a scam.",
    message:
      "Hello Akure Job Hub, I want to report a suspicious job listing. Job link or reference: ",
  },
];

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  if (!number) return null;

  const link = (message: string) =>
    `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-5 right-4 z-50 sm:right-6">
      {open && (
        <div
          role="dialog"
          aria-label="Chat with Akure Job Hub"
          className="mb-3 w-[calc(100vw-2rem)] max-w-sm overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
        >
          <div className="bg-navy px-5 py-4 text-white">
            <p className="text-base font-extrabold">Chat with our team</p>
            <p className="mt-1 text-sm text-white/80">
              Choose a topic and we&apos;ll continue the conversation on WhatsApp.
            </p>
          </div>

          <ul className="max-h-[60vh] space-y-2 overflow-y-auto p-3">
            {topics.map((t) => (
              <li key={t.title}>
                <a
                  href={link(t.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 rounded-xl border border-slate-200 p-3 transition hover:border-navy hover:bg-surface"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface text-navy">
                    <t.icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-ink">{t.title}</span>
                    <span className="mt-0.5 block text-xs text-slate-600">{t.text}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <p className="border-t border-slate-100 px-5 py-3 text-xs text-slate-500">
            We will never ask you to pay to apply for a job.
          </p>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close chat" : "Chat with us"}
        className="ml-auto flex h-14 items-center gap-2 rounded-full bg-orange px-5 font-bold text-navy-dark shadow-lg transition hover:brightness-95"
      >
        {open ? (
          <X className="h-5 w-5" />
        ) : (
          <>
            <MessageCircle className="h-5 w-5" />
            <span className="hidden text-sm sm:inline">Chat with us</span>
          </>
        )}
      </button>
    </div>
  );
}
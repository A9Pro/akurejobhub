import type { Metadata } from "next";
import { Manrope, DM_Sans } from "next/font/google";
import { ChatWidget } from "@/components/ChatWidget";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Akure Job Hub | Jobs in Akure and Ondo State",
  description:
    "Find jobs in Akure and across Ondo State. Browse vacancies free and apply directly with employers.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
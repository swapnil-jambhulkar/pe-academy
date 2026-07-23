import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Roles at Norland Academy, the private equity training institution incubated by Stator Capital.",
  alternates: {
    canonical: "/careers",
  },
  openGraph: {
    title: "Careers | Norland Academy",
    description:
      "Roles across admissions, growth, and programme operations at Norland Academy.",
    url: "/careers",
    type: "website",
  },
};

const roles = [
  {
    href: "/careers/founding-partner-head-of-global-admissions",
    title: "Founding Partner & Head of Global Admissions",
    summary:
      "Own candidate conversion and scale global cohort enrollment. Partner-track role with founding equity.",
    location: "Remote · Global",
    type: "Partner-track",
    status: "open" as const,
  },
  {
    href: "/careers/program-operations-lead",
    title: "Program Operations Lead",
    summary:
      "Own cohort logistics, student communications, and the operational systems behind every programme. Video introduction required.",
    location: "Remote",
    type: "Full-time",
    status: "open" as const,
  },
  {
    href: "/careers/growth-lead",
    title: "Growth Lead",
    summary:
      "Own top-of-funnel, conversion, and retention across cohorts and products. Full-time, Remote India. Video introduction required.",
    location: "Remote, India",
    type: "Full-time",
    status: "closed" as const,
  },
];

export default function CareersPage() {
  return (
    <div className="bg-white">
      <section className="pt-24 pb-14 bg-white text-black border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase mb-3">
              Norland Academy
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-black mb-4">
              Careers
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
              Roles across admissions, growth, and programme operations at
              Norland Academy, incubated by Stator Capital.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-8">
              Open Roles
            </h2>
            <ul className="divide-y divide-gray-200 border-y border-gray-200 bg-white">
              {roles.map((role) => (
                <li key={role.href}>
                  <Link
                    href={role.href}
                    className="block px-5 sm:px-6 py-8 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                      <div className="flex flex-wrap items-center gap-3 min-w-0">
                        <h3 className="text-xl sm:text-2xl font-heading font-bold text-black group-hover:underline underline-offset-4">
                          {role.title}
                        </h3>
                        {role.status === "closed" ? (
                          <span className="inline-flex items-center px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-red-700 bg-red-50 border border-red-200 shrink-0">
                            Closed
                          </span>
                        ) : null}
                      </div>
                      <p className="text-xs font-semibold tracking-[0.12em] uppercase text-gray-500 shrink-0">
                        {role.type}
                      </p>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      {role.summary}
                    </p>
                    <p className="text-sm text-gray-500">{role.location}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

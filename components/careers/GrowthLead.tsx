import Link from "next/link";
import { Button } from "@/components/ui/button";

type Props = {
  backHref?: string;
  backLabel?: string;
};

export default function GrowthLead({
  backHref = "/careers",
  backLabel = "All roles",
}: Props) {
  return (
    <div className="bg-white pb-24 md:pb-28">
      <section className="pt-24 pb-14 bg-white text-black border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {backHref ? (
              <p className="mb-5">
                <Link
                  href={backHref}
                  className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 hover:text-black transition-colors"
                >
                  {backLabel}
                </Link>
              </p>
            ) : null}
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <p className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase">
                Role
              </p>
              <span className="inline-flex items-center px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-red-700 bg-red-50 border border-red-200">
                Closed
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-black mb-4">
              Growth Lead
            </h1>
            <p className="text-sm text-gray-600 mb-6">
              <span className="font-semibold text-black">Type:</span> Full-time
              <span className="mx-3 text-gray-300" aria-hidden="true">
                |
              </span>
              <span className="font-semibold text-black">Location:</span> Remote,
              India
            </p>
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mb-6">
              Own top-of-funnel, conversion, and retention across every cohort
              and product we launch.
            </p>
            <div
              className="mb-2 border border-black bg-gray-50 px-5 py-4"
              role="note"
            >
              <p className="text-sm font-bold uppercase tracking-wide text-black">
                Video introduction required
              </p>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                You will be automatically rejected if you do not submit the video
                introduction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-3xl space-y-14 md:space-y-16">
          <section aria-labelledby="overview-heading">
            <h2
              id="overview-heading"
              className="text-2xl sm:text-3xl font-heading font-bold text-black mb-4"
            >
              The Role
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              You will own how Norland Academy grows. That means top-of-funnel,
              conversion, and retention across every cohort and product we
              launch. This is a senior, outcomes-driven role with real budget and
              real autonomy. You will set the strategy and execute it.
            </p>
          </section>

          <section aria-labelledby="own-heading">
            <h2
              id="own-heading"
              className="text-2xl sm:text-3xl font-heading font-bold text-black mb-4"
            >
              What You Will Own
            </h2>
            <ul className="space-y-3 text-base text-gray-700 leading-relaxed list-disc pl-5">
              <li>
                The full enrollment funnel, from awareness to converted student,
                and the growth strategy behind it
              </li>
              <li>
                Top-of-funnel acquisition across organic and paid channels
              </li>
              <li>
                Conversion optimization across landing pages, email sequences,
                and the application flow
              </li>
              <li>
                Content distribution strategy that turns our deep library of
                technical content into reach and enrollments
              </li>
              <li>
                Co-marketing and partnership activations with our partner
                companies
              </li>
              <li>
                Community and audience building that compounds over time
              </li>
              <li>
                A rigorous experimentation practice, with clear metrics,
                hypotheses, and post-mortems
              </li>
            </ul>
          </section>

          <section aria-labelledby="profile-heading">
            <h2
              id="profile-heading"
              className="text-2xl sm:text-3xl font-heading font-bold text-black mb-4"
            >
              Who You Are
            </h2>
            <ul className="space-y-3 text-base text-gray-700 leading-relaxed list-disc pl-5">
              <li>
                3–5 years in growth marketing, ideally in edtech, SaaS, or the
                creator economy
              </li>
              <li>
                A demonstrable track record of driving enrollment or revenue
                growth, with numbers you can speak to
              </li>
              <li>
                Deeply data-driven and fluent in funnels, attribution, and
                experiment design
              </li>
              <li>
                Strong content and editorial instincts, with a sharp sense of
                what resonates with our audience
              </li>
              <li>
                A self-starter who owns outcomes end to end rather than waiting
                for direction
              </li>
            </ul>
          </section>

          <section aria-labelledby="nice-heading">
            <h2
              id="nice-heading"
              className="text-2xl sm:text-3xl font-heading font-bold text-black mb-4"
            >
              Nice to Have
            </h2>
            <ul className="space-y-3 text-base text-gray-700 leading-relaxed list-disc pl-5">
              <li>
                Experience marketing technical or developer-focused products
              </li>
              <li>
                A personal interest in AI and a feel for the audience we serve
              </li>
            </ul>
          </section>

          <section className="border-t border-gray-200 pt-12">
            <h2 className="text-2xl font-heading font-bold text-black mb-3">
              Apply
            </h2>
            <p className="text-sm font-bold uppercase tracking-wide text-red-700 mb-3">
              This role is closed
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 max-w-xl">
              We are not accepting new applications for this role. For general
              enquiries, contact{" "}
              <a
                href="mailto:admissions@norlandacademy.com"
                className="text-black underline underline-offset-4 hover:text-gray-700"
              >
                admissions@norlandacademy.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between gap-4">
          <div className="min-w-0 hidden sm:block">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-gray-500">
              Role
            </p>
            <p className="text-sm font-medium text-black truncate">
              Growth Lead
              <span className="ml-2 text-red-700 font-bold">Closed</span>
            </p>
          </div>
          <Button asChild className="w-full sm:w-auto shrink-0" variant="outline">
            <Link href="/careers">View all roles</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

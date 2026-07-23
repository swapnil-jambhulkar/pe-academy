import Link from "next/link";
import { Button } from "@/components/ui/button";

const APPLY_HREF =
  "mailto:admissions@norlandacademy.com?subject=Application%3A%20Program%20Operations%20Lead";

type Props = {
  backHref?: string;
  backLabel?: string;
};

export default function ProgramOperationsLead({
  backHref = "/careers",
  backLabel = "All open roles",
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
            <p className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase mb-3">
              Open Role
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-black mb-4">
              Program Operations Lead
            </h1>
            <p className="text-sm text-gray-600 mb-6">
              <span className="font-semibold text-black">Type:</span> Full-time
              <span className="mx-3 text-gray-300" aria-hidden="true">
                |
              </span>
              <span className="font-semibold text-black">Location:</span> Remote
            </p>
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mb-6">
              Own the operational backbone of every cohort we run, so hundreds of
              students move through a seamless experience.
            </p>
            <div
              className="mb-8 border border-black bg-gray-50 px-5 py-4"
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
            <Button asChild size="lg">
              <a href={APPLY_HREF}>Apply for this Role</a>
            </Button>
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
              You will own the operational backbone of every cohort we run.
              Hundreds of students move through our programs, and you are the
              reason their experience feels seamless. This is a high-trust,
              high-ownership role for someone who finds genuine satisfaction in
              building systems that just work.
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
                End-to-end cohort logistics: enrollment, onboarding, waitlists,
                cohort transfers, and scholarship workflows
              </li>
              <li>
                Student communications across email and community channels,
                including onboarding sequences and weekly touchpoints
              </li>
              <li>
                Partner credit distribution and tool access provisioning for
                every student across our partner stack
              </li>
              <li>
                Operational workflows built on Sheets, Gmail, and lightweight
                automation, which you will own and continuously improve
              </li>
              <li>
                Cohort analytics and student progress tracking, surfacing what
                is working and what needs attention
              </li>
              <li>Live session logistics and day-of coordination</li>
              <li>
                Student support and escalations, with a bias toward resolving
                fast and kindly
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
                1–3 years in operations, program management, or student or
                community operations
              </li>
              <li>
                Genuinely organized and detail-obsessed, the kind of person who
                never lets things slip through cracks
              </li>
              <li>
                Strong with spreadsheets and operational tooling, and
                comfortable setting up automation
              </li>
              <li>Clear, warm written communicator</li>
              <li>
                Comfortable with ambiguity and a fast-moving startup environment
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
              <li>Experience in edtech or cohort-based programs</li>
              <li>Familiarity with Maven or similar learning platforms</li>
              <li>Comfort using AI tools to move faster</li>
            </ul>
          </section>

          <section className="border-t border-gray-200 pt-12">
            <h2 className="text-2xl font-heading font-bold text-black mb-3">
              Apply
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4 max-w-xl">
              Send your CV, a brief note on relevant operations experience, and
              your video introduction to{" "}
              <a
                href={APPLY_HREF}
                className="text-black underline underline-offset-4 hover:text-gray-700"
              >
                admissions@norlandacademy.com
              </a>
              .
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-xl">
              Applications without a video introduction will be automatically
              rejected.
            </p>
            <Button asChild size="lg">
              <a href={APPLY_HREF}>Apply for this Role</a>
            </Button>
          </section>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between gap-4">
          <div className="min-w-0 hidden sm:block">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-gray-500">
              Open Role
            </p>
            <p className="text-sm font-medium text-black truncate">
              Program Operations Lead
            </p>
          </div>
          <Button asChild className="w-full sm:w-auto shrink-0">
            <a href={APPLY_HREF}>Apply for this Role</a>
          </Button>
        </div>
      </div>
    </div>
  );
}

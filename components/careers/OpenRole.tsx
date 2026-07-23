import Link from "next/link";
import { Button } from "@/components/ui/button";

const APPLY_HREF =
  "mailto:admissions@norlandacademy.com?subject=Application%3A%20Founding%20Partner%20%26%20Head%20of%20Global%20Admissions";

type OpenRoleProps = {
  backHref?: string;
  backLabel?: string;
};

export default function OpenRole({
  backHref = "/careers",
  backLabel = "All open roles",
}: OpenRoleProps) {
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
              Founding Partner &amp; Head of Global Admissions
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mb-8">
              Partner-track role owning candidate conversion and global cohort
              enrollment for Norland Academy.
            </p>
            <Button asChild size="lg">
              <a href={APPLY_HREF}>Apply for this Role</a>
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-3xl space-y-14 md:space-y-16">
          <section aria-labelledby="about-heading">
            <h2
              id="about-heading"
              className="text-2xl sm:text-3xl font-heading font-bold text-black mb-4"
            >
              About Norland Academy
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Norland Academy is an elite private equity training institution
              incubated by Stator Capital, an independent sponsor focused on
              lower middle market (LMM) control transactions. We bridge the gap
              between classroom theory and live buyout execution, training
              investment bankers, consultants, and finance professionals through
              our Post Graduate Program (PGP) in Private Equity and short-course
              cohorts.
            </p>
          </section>

          <section aria-labelledby="opportunity-heading">
            <h2
              id="opportunity-heading"
              className="text-2xl sm:text-3xl font-heading font-bold text-black mb-4"
            >
              The Opportunity
            </h2>
            <div className="space-y-4 text-base text-gray-700 leading-relaxed">
              <p>
                We are bringing on a Founding Partner &amp; Head of Global
                Admissions to own candidate conversion and scale our cohort
                enrollment globally. You will not be dialing cold leads. You
                will manage incoming high-intent applications from bankers,
                consultants, and finance professionals across Europe, the UK,
                the US, and Asia, conducting admissions interviews, managing
                pipeline conversion, and establishing referral channels with top
                university finance clubs and headhunting networks.
              </p>
              <p>
                This is an entrepreneurial, partner-track role designed for a
                high-performing sales operator, finance career coach, or
                ex-headhunter who wants long-term equity upside in a PE-backed
                ecosystem.
              </p>
            </div>
          </section>

          <section aria-labelledby="responsibilities-heading">
            <h2
              id="responsibilities-heading"
              className="text-2xl sm:text-3xl font-heading font-bold text-black mb-4"
            >
              What You Will Do
            </h2>
            <ul className="space-y-3 text-base text-gray-700 leading-relaxed list-disc pl-5">
              <li>
                <span className="font-semibold text-black">
                  Own the Candidate Pipeline:
                </span>{" "}
                Run admissions calls with pre-qualified applicants for our Post
                Graduate Program and short cohorts.
              </li>
              <li>
                <span className="font-semibold text-black">
                  Build Distribution Channels:
                </span>{" "}
                Establish partnerships with university finance societies,
                finance career coaches, and recruitment networks to funnel elite
                applicants into Norland.
              </li>
              <li>
                <span className="font-semibold text-black">
                  Convert Enrollments:
                </span>{" "}
                Maintain a minimum 20–25% conversion rate on qualified
                admissions interviews.
              </li>
              <li>
                <span className="font-semibold text-black">
                  Scale the Admissions Desk:
                </span>{" "}
                As volume grows, recruit and manage sub-admissions advisors to
                handle regional cohorts.
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
                <span className="font-semibold text-black">
                  Experienced Sales Operator / Recruiter:
                </span>{" "}
                5+ years in executive search, educational sales, finance
                recruiting, or career coaching.
              </li>
              <li>
                <span className="font-semibold text-black">
                  Financially Literate:
                </span>{" "}
                Comfortable speaking with investment bankers, Big 4 advisors,
                and PE aspirants about deal mechanics, financial modeling, and
                career trajectories.
              </li>
              <li>
                <span className="font-semibold text-black">
                  Self-Driven Rainmaker:
                </span>{" "}
                Thrives in an autonomous environment with zero micromanagement.
                You care about closed deals and measurable results.
              </li>
            </ul>
          </section>

          <section aria-labelledby="compensation-heading">
            <h2
              id="compensation-heading"
              className="text-2xl sm:text-3xl font-heading font-bold text-black mb-4"
            >
              Compensation &amp; Equity Structure
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-8">
              This is a partner-level role designed for an operator who wants
              meaningful cash upside and equity based on performance.
            </p>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg sm:text-xl font-heading font-semibold text-black mb-3">
                  High Cash Commissions (Immediate Liquidity)
                </h3>
                <ul className="space-y-3 text-base text-gray-700 leading-relaxed list-disc pl-5">
                  <li>
                    Projected Year 1 Cash Earnings: $60,000 – $100,000+ USD.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-heading font-semibold text-black mb-3">
                  Equity Allocation
                </h3>
                <ul className="space-y-3 text-base text-gray-700 leading-relaxed list-disc pl-5">
                  <li>
                    5.0% – 10.0% Equity / Profit Interest (Vested over
                    milestones).
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section aria-labelledby="trial-heading">
            <h2
              id="trial-heading"
              className="text-2xl sm:text-3xl font-heading font-bold text-black mb-4"
            >
              The 60-Day Trial Milestones
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-6">
              To protect company equity, all founding partners undergo a 60-day
              execution trial. To pass the trial and permanently unlock equity
              vesting, you must:
            </p>
            <ul className="space-y-3 text-base text-gray-700 leading-relaxed list-disc pl-5">
              <li>
                Enroll 3 PGP students OR 10 short-course candidates within your
                first 60 days.
              </li>
              <li>
                Establish 2 active university or network referral channels.
              </li>
            </ul>
          </section>

          <section className="border-t border-gray-200 pt-12">
            <h2 className="text-2xl font-heading font-bold text-black mb-3">
              Apply
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 max-w-xl">
              Send your CV and a brief note on relevant admissions, recruiting,
              or sales experience to{" "}
              <a
                href={APPLY_HREF}
                className="text-black underline underline-offset-4 hover:text-gray-700"
              >
                admissions@norlandacademy.com
              </a>
              .
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
              Founding Partner &amp; Head of Global Admissions
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

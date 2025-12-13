export default function TermsOfServicePage() {
  return (
    <div>
      <section className="pt-24 pb-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-black mb-6 text-center">
              Terms of Service
            </h1>
            <div className="prose prose-neutral max-w-none space-y-6">
              <p className="text-gray-700">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              <p className="text-gray-700">
                By accessing and using Norland Academy's website and services,
                you agree to be bound by these Terms of Service.
              </p>
              <h2 className="text-2xl font-heading font-bold text-black mt-8 mb-4">
                Program Enrollment
              </h2>
              <p className="text-gray-700">
                Enrollment in our programs (Starter Kit or Cohort) is subject to availability.
                We reserve the right to refuse enrollment at our discretion.
              </p>
              <h2 className="text-2xl font-heading font-bold text-black mt-8 mb-4">
                Refund Policy
              </h2>
              <p className="text-gray-700">
                Starter Kit: 3-day money-back guarantee, no questions asked.
                Cohort: Refunds available up to 7 days before program start date.
                No refunds after the program has started.
              </p>
              <h2 className="text-2xl font-heading font-bold text-black mt-8 mb-4">
                Intellectual Property
              </h2>
              <p className="text-gray-700">
                All program materials, templates, and content are the intellectual property of
                Norland Capital. You may use them for personal learning and portfolio building,
                but may not redistribute or resell them.
              </p>
              <h2 className="text-2xl font-heading font-bold text-black mt-8 mb-4">
                No Job Guarantee
              </h2>
              <p className="text-gray-700">
                We do not guarantee job placement. Our programs provide skills, templates, and
                mentorship to help you build a portfolio and land interviews, but final hiring
                decisions are made by employers.
              </p>
              <h2 className="text-2xl font-heading font-bold text-black mt-8 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-700">
                If you have questions about these Terms, please contact us at{" "}
                <a href="mailto:contact@norlandcapital.co.uk" className="text-black underline hover:text-gray-700">
                  contact@norlandcapital.co.uk
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

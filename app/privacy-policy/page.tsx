export default function PrivacyPolicyPage() {
  return (
    <div>
      <section className="pt-24 pb-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-black mb-6 text-center">
              Privacy Policy
            </h1>
            <div className="prose prose-neutral max-w-none space-y-6">
              <p className="text-gray-700">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              <p className="text-gray-700">
                Norland Capital ("we", "our", or "us") is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, and safeguard your information when you use our website and services.
              </p>
              <h2 className="text-2xl font-heading font-bold text-black mt-8 mb-4">
                Information We Collect
              </h2>
              <p className="text-gray-700">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Name and email address when you sign up for our programs or newsletter</li>
                <li>Payment information (processed securely through Razorpay)</li>
                <li>Application information when you apply for our Cohort program</li>
                <li>Any other information you choose to provide</li>
              </ul>
              <h2 className="text-2xl font-heading font-bold text-black mt-8 mb-4">
                How We Use Your Information
              </h2>
              <p className="text-gray-700">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process payments and send you program materials</li>
                <li>Send you updates about our programs and services</li>
                <li>Respond to your inquiries and provide customer support</li>
              </ul>
              <h2 className="text-2xl font-heading font-bold text-black mt-8 mb-4">
                Data Security
              </h2>
              <p className="text-gray-700">
                We implement appropriate security measures to protect your personal information.
                However, no method of transmission over the Internet is 100% secure.
              </p>
              <h2 className="text-2xl font-heading font-bold text-black mt-8 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-700">
                If you have questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:swapnilj@norlandacademy.com" className="text-black underline hover:text-gray-700">
                  swapnilj@norlandacademy.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

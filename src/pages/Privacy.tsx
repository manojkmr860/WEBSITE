import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-veeduway-base text-veeduway-text">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-veeduway-accent hover:text-veeduway-accentHover transition-colors mb-8 focus:outline-none focus:ring-2 focus:ring-veeduway-accent rounded"
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>

        <div className="bg-veeduway-card border border-veeduway-border rounded-2xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-veeduway-text mb-6">
            Privacy Policy
          </h1>

          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-veeduway-muted mb-8">
              Last updated: January 2025
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-serif font-bold text-veeduway-text mb-4">
                  Coming Soon
                </h2>
                <p className="text-veeduway-muted leading-relaxed">
                  We're currently preparing our comprehensive privacy policy. This document will detail how we collect, use, and protect your personal information when you use VeeduWay's services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-veeduway-text mb-4">
                  Our Commitment
                </h2>
                <p className="text-veeduway-muted leading-relaxed">
                  At VeeduWay, we take your privacy seriously. We are committed to protecting your personal data and being transparent about how we use it. Our privacy policy will cover:
                </p>
                <ul className="list-disc list-inside text-veeduway-muted mt-4 space-y-2 ml-4">
                  <li>What information we collect and why</li>
                  <li>How we use and protect your data</li>
                  <li>Your rights regarding your personal information</li>
                  <li>How we handle cookies and tracking</li>
                  <li>How to contact us with privacy questions</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-veeduway-text mb-4">
                  Contact Us
                </h2>
                <p className="text-veeduway-muted leading-relaxed">
                  If you have any questions about our privacy practices, please contact us at{' '}
                  <a
                    href="mailto:hello@veeduway.com"
                    className="text-veeduway-accent hover:text-veeduway-accentHover underline"
                  >
                    hello@veeduway.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;

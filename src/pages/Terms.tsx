import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Terms = () => {
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
            Terms of Use
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
                  We're currently preparing our comprehensive terms of use. This document will outline the rules and guidelines for using VeeduWay's platform and services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-veeduway-text mb-4">
                  What to Expect
                </h2>
                <p className="text-veeduway-muted leading-relaxed">
                  Our terms of use will clearly explain the legal agreement between you and VeeduWay. It will cover:
                </p>
                <ul className="list-disc list-inside text-veeduway-muted mt-4 space-y-2 ml-4">
                  <li>How you can use our services and content</li>
                  <li>Your responsibilities as a user</li>
                  <li>Our intellectual property rights</li>
                  <li>Disclaimers and limitations of liability</li>
                  <li>How disputes will be resolved</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-veeduway-text mb-4">
                  Fair Use
                </h2>
                <p className="text-veeduway-muted leading-relaxed">
                  In the meantime, we ask that you use our platform responsibly and respect the rights of others. VeeduWay provides educational content and guidance for homeowners—it does not replace professional legal, financial, or construction advice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-veeduway-text mb-4">
                  Questions?
                </h2>
                <p className="text-veeduway-muted leading-relaxed">
                  If you have any questions about our terms, please reach out to us at{' '}
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

export default Terms;

'use client';

import { MarketingNav } from '@/components/MarketingNav';
import { MarketingFooter } from '@/components/MarketingFooter';

export default function TermsPage() {
  return (
    <>
      <MarketingNav />
      <main className="pt-24">
        <section className="bg-gradient-to-b from-primary-navy to-secondary-navy text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms of <span className="text-[#FFD700]">Service</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Terms and conditions for using agoroll
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-primary-navy mb-4">1. Acceptance of Terms</h2>
                <p className="text-text-secondary">
                  By using agoroll, you agree to these Terms of Service. If you do not agree, 
                  please do not use our platform.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-navy mb-4">2. Description of Service</h2>
                <p className="text-text-secondary">agoroll provides a multi-tenant SaaS platform for club management, including:</p>
                <ul className="list-disc pl-6 mt-2 text-text-secondary space-y-1">
                  <li>Member management and directory</li>
                  <li>Dues and financial tracking</li>
                  <li>Event management and attendance</li>
                  <li>Mobile money collections and payouts</li>
                  <li>Automated reminders and communications</li>
                  <li>Public donation portals</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-navy mb-4">3. User Accounts</h2>
                <p className="text-text-secondary">You are responsible for:</p>
                <ul className="list-disc pl-6 mt-2 text-text-secondary space-y-1">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized use</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-navy mb-4">4. Data Privacy</h2>
                <p className="text-text-secondary">
                  We are committed to protecting your privacy. Our data practices are detailed in our 
                  <a href="/privacy" className="text-[#FFD700] hover:underline ml-1">Privacy Policy</a>.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-navy mb-4">5. Payment Terms</h2>
                <ul className="list-disc pl-6 text-text-secondary space-y-1">
                  <li>Subscription fees are billed monthly or annually</li>
                  <li>Fees are non-refundable except as required by law</li>
                  <li>We reserve the right to change pricing with notice</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-navy mb-4">6. Acceptable Use</h2>
                <p className="text-text-secondary">You agree not to:</p>
                <ul className="list-disc pl-6 mt-2 text-text-secondary space-y-1">
                  <li>Use the platform for illegal purposes</li>
                  <li>Interfere with the platform's security</li>
                  <li>Upload malicious code or content</li>
                  <li>Access data of other clubs without authorization</li>
                  <li>Resell or distribute the service without permission</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-navy mb-4">7. Intellectual Property</h2>
                <p className="text-text-secondary">
                  All content, features, and functionality of agoroll are owned by agoroll and are 
                  protected by copyright, trademark, and other intellectual property laws.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-navy mb-4">8. Data Security</h2>
                <p className="text-text-secondary">
                  We implement security measures to protect your data. You are responsible for 
                  maintaining the security of your own devices and accounts.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-navy mb-4">9. Termination</h2>
                <p className="text-text-secondary">
                  We reserve the right to suspend or terminate accounts for violations of these terms. 
                  You may cancel your account at any time.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-navy mb-4">10. Limitation of Liability</h2>
                <p className="text-text-secondary">
                  agoroll is provided "as is" without warranties. We are not liable for any damages 
                  arising from the use of our platform.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-navy mb-4">11. Governing Law</h2>
                <p className="text-text-secondary">
                  These terms are governed by the laws of Uganda. Any disputes shall be resolved 
                  in the courts of Uganda.
                </p>
              </div>

              <div className="p-6 bg-surface rounded-lg">
                <p className="text-sm text-text-secondary">
                  <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </>
  );
}

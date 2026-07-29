'use client';

import { MarketingNav } from '@/components/MarketingNav';
import  MarketingFooter  from '@/components/MarketingFooter';

export default function PrivacyPage() {
  return (
    <>
      <MarketingNav />
      <main className="pt-24">
        <section className="bg-gradient-to-b from-primary-navy to-secondary-navy text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy <span className="text-[#FFD700]">Policy</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              How we protect and handle your data
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-primary-navy mb-4">1. Information We Collect</h2>
                <p className="text-text-secondary">
                  agoroll collects information that you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 mt-2 text-text-secondary space-y-1">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Club affiliation and role</li>
                  <li>Payment and transaction information</li>
                  <li>Member data you upload to the platform</li>
                  <li>Usage data and preferences</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-navy mb-4">2. How We Use Your Information</h2>
                <p className="text-text-secondary">We use the information we collect to:</p>
                <ul className="list-disc pl-6 mt-2 text-text-secondary space-y-1">
                  <li>Provide and maintain our services</li>
                  <li>Process transactions and send receipts</li>
                  <li>Send automated reminders and notifications</li>
                  <li>Improve and develop new features</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-navy mb-4">3. Data Protection</h2>
                <p className="text-text-secondary">
                  We implement appropriate technical and organizational measures to protect your personal data 
                  against unauthorized access, alteration, disclosure, or destruction. All data is encrypted 
                  in transit and at rest.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-navy mb-4">4. Data Sharing</h2>
                <p className="text-text-secondary">We do not sell your personal data. We may share data with:</p>
                <ul className="list-disc pl-6 mt-2 text-text-secondary space-y-1">
                  <li>Service providers who assist in operating our platform</li>
                  <li>Payment processors for transaction processing</li>
                  <li>Legal authorities when required by law</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-navy mb-4">5. Your Rights</h2>
                <p className="text-text-secondary">Under the Uganda Data Protection and Privacy Act 2019, you have the right to:</p>
                <ul className="list-disc pl-6 mt-2 text-text-secondary space-y-1">
                  <li>Access your personal data</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing of your data</li>
                  <li>Data portability</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-navy mb-4">6. Contact Us</h2>
                <p className="text-text-secondary">
                  If you have questions about this Privacy Policy, please contact us at:
                </p>
                <p className="text-text-secondary mt-2">Email: privacy@agoroll.com</p>
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
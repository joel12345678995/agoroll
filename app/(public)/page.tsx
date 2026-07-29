'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Shield, 
  Users, 
  Wallet, 
  MessageSquare, 
  QrCode, 
  Heart,
  Play,
  Calendar,
  Users as UsersIcon,
  TrendingUp
} from 'lucide-react';
import { MarketingNav } from '@/components/MarketingNav';
import MarketingFooter  from '@/components/MarketingFooter';  // ✅ FIXED
import  PricingSection  from '@/components/PricingSection';  // ✅ FIXED

const features = [
  {
    icon: Wallet,
    title: 'Dues & Ledger Management',
    description: 'Automate member dues collection with custom categories and real-time ledger tracking.'
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp Reminders',
    description: 'Automated payment reminders and meeting notifications via WhatsApp Business API.'
  },
  {
    icon: QrCode,
    title: 'QR Check-In',
    description: 'Mobile QR scanning for weekly meetings with attendance tracking and reporting.'
  },
  {
    icon: Heart,
    title: 'Public Donations',
    description: 'Accept public donations for initiatives with automated receipt generation.'
  },
  {
    icon: Shield,
    title: 'Multi-Tenant Security',
    description: 'Strict data isolation between clubs with role-based access control.'
  },
  {
    icon: Users,
    title: 'Member Management',
    description: 'Complete member profiles, buddy groups, and bulk portal invitations.'
  }
];

export default function Home() {
  return (
    <>
      <MarketingNav />
      <main>
        {/* HERO SECTION - EXACT MATCH */}
        <section className="relative overflow-hidden bg-white pt-24 pb-16 md:pt-32 md:pb-24">
          {/* Yellow Background Gradients */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#FFD700]/15 to-transparent pointer-events-none" />
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#FFD700]/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="container mx-auto px-4 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column - Content */}
              <div>
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-[#FFD700]/10 border border-[#FFD700]/20 rounded-full px-4 py-1.5 mb-4">
                  <span className="text-xs font-bold text-[#FFD700] uppercase tracking-wider">agoroll</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-navy leading-[1.1] mb-4">
                  Simplify. Manage. Track.
                  <br />
                  <span className="text-[#FFD700]">Your Rotary Club's Success.</span>
                </h1>

                {/* Description */}
                <p className="text-text-secondary text-lg max-w-lg mb-8 leading-relaxed">
                  Plan better events, increase member engagement, and grow your donations with Agoroll's intuitive dashboard.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <Link href="/contact">
                    <Button size="lg" className="bg-[#FFD700] hover:bg-[#FFD700]/90 text-primary-navy font-bold px-8 h-12 rounded-lg shadow-lg hover:shadow-xl transition-all">
                      Request a Demo
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/features">
                    <Button size="lg" variant="outline" className="border-2 border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white px-8 h-12 rounded-lg font-medium transition-all">
                      Explore Features
                    </Button>
                  </Link>
                </div>

                {/* How it Works Link */}
                <Link href="#how-it-works" className="inline-flex items-center gap-2 text-accent-blue hover:text-[#FFD700] transition-colors font-medium group">
                  How it Works
                  <Play className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* Trust Signals */}
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-3">
                      {/* Rotary Logo - Yellow Circle */}
                      <div className="w-12 h-12 rounded-full bg-[#FFD700] flex items-center justify-center flex-shrink-0 shadow-md">
                        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-primary-navy">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                          <path d="M12 2 L12 22 M2 12 L22 12" stroke="currentColor" strokeWidth="1.5"/>
                          <circle cx="12" cy="12" r="4" fill="currentColor"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-text-secondary">Used by over</p>
                        <p className="text-sm font-semibold text-primary-navy">[50+] Rotary clubs across [3] districts</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Laptop Mockup */}
              <div className="relative flex justify-center">
                <div className="relative w-full max-w-2xl">
                  {/* Laptop Screen */}
                  <div className="relative">
                    {/* Screen Frame */}
                    <div className="bg-gradient-to-b from-[#1a1a2e] to-[#16213e] rounded-t-2xl p-3 shadow-2xl border border-white/10">
                      {/* Screen Content */}
                      <div className="bg-white rounded-lg overflow-hidden">
                        {/* Dashboard Preview */}
                        <div className="p-4 md:p-6">
                          {/* Dashboard Header */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 rounded-full bg-[#FFD700]" />
                              <div className="w-3 h-3 rounded-full bg-accent-blue" />
                              <div className="w-3 h-3 rounded-full bg-success" />
                            </div>
                            <div className="text-xs font-bold text-text-secondary">Dashboard</div>
                            <div className="w-16 h-6 bg-[#FFD700]/10 rounded-md flex items-center justify-center">
                              <span className="text-[10px] text-[#FFD700] font-bold">LIVE</span>
                            </div>
                          </div>

                          {/* Dashboard Content */}
                          <div className="space-y-4">
                            {/* Stats Grid */}
                            <div className="grid grid-cols-3 gap-3">
                              <div className="bg-surface rounded-lg p-3 border border-border">
                                <div className="flex items-center gap-2 mb-1">
                                  <Calendar className="w-3 h-3 text-[#FFD700]" />
                                  <p className="text-[10px] text-text-secondary font-medium">Events</p>
                                </div>
                                <p className="text-xl font-bold text-primary-navy">12</p>
                              </div>
                              <div className="bg-surface rounded-lg p-3 border border-border">
                                <div className="flex items-center gap-2 mb-1">
                                  <UsersIcon className="w-3 h-3 text-accent-blue" />
                                  <p className="text-[10px] text-text-secondary font-medium">Members</p>
                                </div>
                                <p className="text-xl font-bold text-primary-navy">48</p>
                              </div>
                              <div className="bg-surface rounded-lg p-3 border border-border">
                                <div className="flex items-center gap-2 mb-1">
                                  <TrendingUp className="w-3 h-3 text-success" />
                                  <p className="text-[10px] text-text-secondary font-medium">Donations</p>
                                </div>
                                <p className="text-xl font-bold text-primary-navy">0</p>
                              </div>
                            </div>

                            {/* Progress Bars */}
                            <div className="space-y-2">
                              <div>
                                <div className="flex justify-between text-xs">
                                  <span className="text-text-secondary">Attendance</span>
                                  <span className="text-primary-navy font-semibold">75%</span>
                                </div>
                                <div className="w-full h-1.5 bg-surface rounded-full mt-1 overflow-hidden">
                                  <div className="w-3/4 h-full bg-[#FFD700] rounded-full" />
                                </div>
                              </div>
                              <div>
                                <div className="flex justify-between text-xs">
                                  <span className="text-text-secondary">Dues Collection</span>
                                  <span className="text-primary-navy font-semibold">60%</span>
                                </div>
                                <div className="w-full h-1.5 bg-surface rounded-full mt-1 overflow-hidden">
                                  <div className="w-3/5 h-full bg-accent-blue rounded-full" />
                                </div>
                              </div>
                              <div>
                                <div className="flex justify-between text-xs">
                                  <span className="text-text-secondary">Member Engagement</span>
                                  <span className="text-primary-navy font-semibold">45%</span>
                                </div>
                                <div className="w-full h-1.5 bg-surface rounded-full mt-1 overflow-hidden">
                                  <div className="w-2/5 h-full bg-success rounded-full" />
                                </div>
                              </div>
                            </div>

                            {/* Bottom Row */}
                            <div className="flex items-center justify-between pt-3 border-t border-border">
                              <div className="flex -space-x-2">
                                <div className="w-7 h-7 rounded-full bg-[#FFD700]/30 border-2 border-white flex items-center justify-center text-[10px] font-bold text-primary-navy">JD</div>
                                <div className="w-7 h-7 rounded-full bg-accent-blue/30 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">JS</div>
                                <div className="w-7 h-7 rounded-full bg-success/30 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">RW</div>
                                <div className="w-7 h-7 rounded-full bg-warning/30 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">MK</div>
                                <div className="w-7 h-7 rounded-full bg-[#FFD700]/30 border-2 border-white flex items-center justify-center text-[10px] font-bold text-primary-navy">+8</div>
                              </div>
                              <div className="text-xs text-text-secondary font-medium">+12 this month</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Laptop Base */}
                    <div className="w-[95%] mx-auto">
                      <div className="h-2 bg-gradient-to-b from-[#1a1a2e]/90 to-[#1a1a2e]/50 rounded-b-lg" />
                      <div className="h-1 w-1/4 mx-auto bg-[#FFD700]/30 rounded-full mt-1" />
                    </div>

                    {/* Laptop Shadow */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[85%] h-6 bg-black/10 blur-2xl rounded-full" />
                  </div>

                  {/* Floating Decorations */}
                  <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#FFD700]/15 rounded-full blur-2xl" />
                  <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-accent-blue/10 rounded-full blur-2xl" />
                  <div className="absolute top-1/2 -right-8 w-12 h-12 bg-[#FFD700]/10 rounded-full blur-xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="bg-surface py-5 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FFD700] flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-primary-navy">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 2 L12 22 M2 12 L22 12" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="12" cy="12" r="4" fill="currentColor"/>
                  </svg>
                </div>
                <span className="text-sm text-text-secondary">
                  Used by over <strong className="text-primary-navy">[50+]</strong> Rotary clubs across <strong className="text-primary-navy">[3]</strong> districts
                </span>
                <div className="w-10 h-10 rounded-full bg-[#FFD700] flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-primary-navy">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 2 L12 22 M2 12 L22 12" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="12" cy="12" r="4" fill="currentColor"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white" id="how-it-works">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">
                Everything You Need to Run Your Club
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                From dues collection to attendance tracking - agoroll brings it all together.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="p-6 bg-surface rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
                  <div className="w-12 h-12 bg-[#FFD700]/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-[#FFD700]" />
                  </div>
                  <h3 className="text-lg font-bold text-primary-navy mb-2">{feature.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <PricingSection />

        {/* CTA Section */}
        <section className="bg-primary-navy text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Club?
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              Join thousands of clubs using agoroll to manage members, dues, and attendance.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-[#FFD700] hover:bg-[#FFD700]/90 text-primary-navy font-bold px-8 h-12 rounded-lg shadow-lg hover:shadow-xl transition-all">
                Request a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </>
  );
}
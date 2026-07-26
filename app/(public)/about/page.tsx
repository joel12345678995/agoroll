'use client';

import MarketingNav from '@/components/MarketingNav';
import MarketingFooter from '@/components/MarketingFooter';
import { Button } from '@/components/ui/button';
import { Users, Target, Heart, Award } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <MarketingNav />
      <main className="pt-24">
        <section className="bg-gradient-to-b from-primary-navy to-secondary-navy text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-accent-blue">agoroll</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Empowering Rotary and Rotaract clubs to operate efficiently
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-primary-navy mb-6">Our Mission</h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                agoroll was built to solve the administrative challenges faced by Rotary clubs. 
                We believe that club leaders should spend less time on paperwork and more time 
                making a difference in their communities.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-surface">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary-navy text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-accent-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-accent-blue" />
                </div>
                <h3 className="font-bold text-primary-navy mb-2">Community First</h3>
                <p className="text-text-secondary text-sm">Building tools that strengthen club communities</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-accent-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-accent-blue" />
                </div>
                <h3 className="font-bold text-primary-navy mb-2">Simplicity</h3>
                <p className="text-text-secondary text-sm">Making complex operations simple and intuitive</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-accent-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-accent-blue" />
                </div>
                <h3 className="font-bold text-primary-navy mb-2">Service</h3>
                <p className="text-text-secondary text-sm">Supporting clubs in their service to communities</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-accent-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-accent-blue" />
                </div>
                <h3 className="font-bold text-primary-navy mb-2">Excellence</h3>
                <p className="text-text-secondary text-sm">Delivering quality tools for quality service</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary-navy text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Club?</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Join clubs already using agoroll to streamline their operations
            </p>
            <Link href="/login">
              <Button className="bg-accent-blue hover:bg-accent-blue/90 text-white px-8">
                Get Started Today
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </>
  );
}
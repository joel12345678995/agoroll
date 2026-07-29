'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

export default function MarketingNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-2xl font-black text-primary-navy">
            agoroll<span className="text-[#FFD700]">.</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/features"
              className="text-sm font-medium text-text-secondary hover:text-primary-navy transition-colors"
            >
              Features
            </Link>

            <Link
              href="/pricing"
              className="text-sm font-medium text-text-secondary hover:text-primary-navy transition-colors"
            >
              Pricing
            </Link>

            <Link
              href="/resources"
              className="text-sm font-medium text-text-secondary hover:text-primary-navy transition-colors"
            >
              Resources
            </Link>

            <Link href="/login">
              <Button
                variant="ghost"
                className="text-sm font-medium text-text-secondary hover:text-primary-navy"
              >
                Sign In
              </Button>
            </Link>

            <Link href="/login">
              <Button className="bg-[#FFD700] hover:bg-[#FFD700]/90 text-primary-navy font-bold text-sm px-6 h-10 rounded-lg shadow-sm hover:shadow transition-all">
                Get Started
              </Button>
            </Link>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        <div
          className={cn(
            'md:hidden overflow-hidden transition-all duration-300',
            isOpen ? 'max-h-96 py-4' : 'max-h-0'
          )}
        >
          <div className="flex flex-col space-y-4">
            <Link
              href="/features"
              className="text-text-secondary hover:text-primary-navy transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>

            <Link
              href="/pricing"
              className="text-text-secondary hover:text-primary-navy transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>

            <Link
              href="/resources"
              className="text-text-secondary hover:text-primary-navy transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Resources
            </Link>

            <Link href="/login" onClick={() => setIsOpen(false)}>
              <Button
                variant="ghost"
                className="w-full text-text-secondary hover:text-primary-navy"
              >
                Sign In
              </Button>
            </Link>

            <Link href="/login" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-[#FFD700] hover:bg-[#FFD700]/90 text-primary-navy font-bold">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
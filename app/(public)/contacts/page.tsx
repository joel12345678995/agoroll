'use client';

import { useState } from 'react';
import MarketingNav  from '@/components/MarketingNav';
import  MarketingFooter  from '@/components/MarketingFooter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <>
      <MarketingNav />
      <main className="pt-24">
        <section className="bg-gradient-to-b from-primary-navy to-secondary-navy text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contact <span className="text-[#FFD700]">Us</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="lg:col-span-1 space-y-4">
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#FFD700]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-[#FFD700]" />
                    </div>
                    <div>
                      <p className="font-medium text-primary-navy">Email</p>
                      <p className="text-sm text-text-secondary">support@agoroll.com</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#FFD700]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-[#FFD700]" />
                    </div>
                    <div>
                      <p className="font-medium text-primary-navy">Phone</p>
                      <p className="text-sm text-text-secondary">+256 700 000 000</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#FFD700]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-[#FFD700]" />
                    </div>
                    <div>
                      <p className="font-medium text-primary-navy">Location</p>
                      <p className="text-sm text-text-secondary">Kampala, Uganda</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Send us a Message</CardTitle>
                    <CardDescription>
                      Fill in the form below and we'll get back to you within 24 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" placeholder="John Doe" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" type="email" placeholder="john@example.com" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" placeholder="How can we help?" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Tell us about your club and how we can help..." 
                          className="min-h-[150px]"
                          required 
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="bg-[#FFD700] hover:bg-[#FFD700]/90 text-primary-navy font-bold"
                        disabled={isSubmitting}
                      >
                        <Send className="h-4 w-4 mr-2" />
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </>
  );
}
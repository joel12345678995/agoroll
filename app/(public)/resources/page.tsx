'use client';

import Link from 'next/link';
import { 
  BookOpen, 
  Video, 
  FileText, 
  Users, 
  Calendar, 
  MessageSquare, 
  Shield, 
  Download, 
  ExternalLink,
  ArrowRight,
  Search,
  Filter
} from 'lucide-react';
import { MarketingNav } from '@/components/MarketingNav';
import MarketingFooter  from '@/components/MarketingFooter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

const resources = [
  {
    category: "Getting Started",
    items: [
      {
        title: "Quick Start Guide",
        description: "Get your club set up in under 10 minutes",
        icon: BookOpen,
        type: "Guide",
        link: "#",
        featured: true
      },
      {
        title: "Video Tutorial: Dashboard Overview",
        description: "Learn how to navigate and use the dashboard",
        icon: Video,
        type: "Video",
        link: "#",
        featured: false
      },
      {
        title: "Member Import Template",
        description: "CSV template for bulk member import",
        icon: FileText,
        type: "Template",
        link: "#",
        featured: false
      }
    ]
  },
  {
    category: "Club Management",
    items: [
      {
        title: "Managing Dues & Collections",
        description: "Best practices for dues collection and tracking",
        icon: FileText,
        type: "Guide",
        link: "#",
        featured: true
      },
      {
        title: "Event Planning Guide",
        description: "How to create and manage successful events",
        icon: Calendar,
        type: "Guide",
        link: "#",
        featured: false
      },
      {
        title: "Member Engagement Strategies",
        description: "Keep your members active and engaged",
        icon: Users,
        type: "Article",
        link: "#",
        featured: false
      }
    ]
  },
  {
    category: "Communications",
    items: [
      {
        title: "WhatsApp Reminder Setup",
        description: "Configure automated WhatsApp notifications",
        icon: MessageSquare,
        type: "Guide",
        link: "#",
        featured: false
      },
      {
        title: "Email Template Library",
        description: "Pre-built email templates for common communications",
        icon: FileText,
        type: "Templates",
        link: "#",
        featured: false
      }
    ]
  },
  {
    category: "Security & Privacy",
    items: [
      {
        title: "Data Protection Guidelines",
        description: "Understanding Uganda's Data Protection Act",
        icon: Shield,
        type: "Guide",
        link: "#",
        featured: false
      },
      {
        title: "Security Best Practices",
        description: "Keep your club's data safe and secure",
        icon: Shield,
        type: "Article",
        link: "#",
        featured: false
      }
    ]
  }
];

const categories = ["All", "Getting Started", "Club Management", "Communications", "Security & Privacy"];
const types = ["All", "Guide", "Video", "Template", "Article", "Templates"];

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  const filteredResources = resources
    .map(category => ({
      ...category,
      items: category.items.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                             item.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || category.category === selectedCategory;
        const matchesType = selectedType === 'All' || item.type === selectedType;
        return matchesSearch && matchesCategory && matchesType;
      })
    }))
    .filter(category => category.items.length > 0);

  return (
    <>
      <MarketingNav />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary-navy to-secondary-navy text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Resources
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Everything you need to make the most of agoroll for your club
              </p>
            </div>
          </div>
        </section>

        {/* Search & Filter */}
        <section className="bg-white border-b border-border py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-secondary" />
                <Input
                  placeholder="Search resources..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                <select
                  className="px-3 py-2 border border-border rounded-md text-sm bg-white"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                <select
                  className="px-3 py-2 border border-border rounded-md text-sm bg-white"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  {types.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            {filteredResources.length === 0 ? (
              <div className="text-center py-20">
                <BookOpen className="h-16 w-16 mx-auto text-text-secondary/30 mb-4" />
                <h3 className="text-xl font-bold text-primary-navy mb-2">No resources found</h3>
                <p className="text-text-secondary">Try adjusting your search or filters</p>
              </div>
            ) : (
              <div className="space-y-16 max-w-5xl mx-auto">
                {filteredResources.map((category) => (
                  <div key={category.category}>
                    <h2 className="text-2xl font-bold text-primary-navy mb-6 flex items-center gap-3">
                      <span className="w-1 h-8 bg-[#FFD700] rounded-full" />
                      {category.category}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {category.items.map((item, index) => (
                        <Card key={index} className={`hover:shadow-lg transition-shadow ${item.featured ? 'border-[#FFD700] border-2' : ''}`}>
                          {item.featured && (
                            <div className="absolute top-0 right-0 -translate-y-2 translate-x-2">
                              <Badge className="bg-[#FFD700] text-primary-navy font-bold">
                                Featured
                              </Badge>
                            </div>
                          )}
                          <CardHeader>
                            <div className="flex items-start gap-4">
                              <div className="w-10 h-10 bg-[#FFD700]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <item.icon className="h-5 w-5 text-[#FFD700]" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <CardTitle className="text-lg font-bold text-primary-navy">
                                    {item.title}
                                  </CardTitle>
                                  <Badge variant="outline" className="text-xs">
                                    {item.type}
                                  </Badge>
                                </div>
                                <CardDescription className="mt-1">
                                  {item.description}
                                </CardDescription>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <Link href={item.link}>
                              <Button variant="outline" className="w-full group">
                                View Resource
                                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                              </Button>
                            </Link>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Need Help Section */}
        <section className="bg-surface py-16">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-border">
              <h2 className="text-2xl font-bold text-primary-navy mb-3">
                Still have questions?
              </h2>
              <p className="text-text-secondary mb-6">
                Our team is here to help you get the most out of agoroll
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-[#FFD700] hover:bg-[#FFD700]/90 text-primary-navy font-bold">
                    Contact Support
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/login">
                  <Button variant="outline" className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </>
  );
}
'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  BookOpen,
  Video,
  FileText,
  Users,
  Calendar,
  MessageSquare,
  Shield,
  ExternalLink,
  ArrowRight,
  Search,
  LucideIcon,
} from 'lucide-react';

import MarketingNav from '@/components/MarketingNav';
import MarketingFooter from '@/components/MarketingFooter';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';


type ResourceItem = {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  type: string;
  link: string;
  featured: boolean;
};


type ResourceCategory = {
  category: string;
  items: ResourceItem[];
};


const resources: ResourceCategory[] = [
  {
    category: "Getting Started",
    items: [
      {
        id: 1,
        title: "Quick Start Guide",
        description: "Get your club set up in under 10 minutes",
        icon: BookOpen,
        type: "Guide",
        link: "/guides/quick-start",
        featured: true,
      },
      {
        id: 2,
        title: "Video Tutorial: Dashboard Overview",
        description: "Learn how to navigate and use the dashboard",
        icon: Video,
        type: "Video",
        link: "/videos/dashboard",
        featured: false,
      },
      {
        id: 3,
        title: "Member Import Template",
        description: "CSV template for bulk member import",
        icon: FileText,
        type: "Template",
        link: "/templates/member-import",
        featured: false,
      },
    ],
  },

  {
    category: "Club Management",
    items: [
      {
        id: 4,
        title: "Managing Dues & Collections",
        description: "Best practices for dues collection and tracking",
        icon: FileText,
        type: "Guide",
        link: "/guides/dues",
        featured: true,
      },
      {
        id: 5,
        title: "Event Planning Guide",
        description: "How to create and manage successful events",
        icon: Calendar,
        type: "Guide",
        link: "/guides/events",
        featured: false,
      },
      {
        id: 6,
        title: "Member Engagement Strategies",
        description: "Keep your members active and engaged",
        icon: Users,
        type: "Article",
        link: "/articles/member-engagement",
        featured: false,
      },
    ],
  },

  {
    category: "Communications",
    items: [
      {
        id: 7,
        title: "WhatsApp Reminder Setup",
        description: "Configure automated WhatsApp notifications",
        icon: MessageSquare,
        type: "Guide",
        link: "/guides/whatsapp",
        featured: false,
      },
      {
        id: 8,
        title: "Email Template Library",
        description: "Pre-built email templates for communication",
        icon: FileText,
        type: "Templates",
        link: "/templates/email",
        featured: false,
      },
    ],
  },

  {
    category: "Security & Privacy",
    items: [
      {
        id: 9,
        title: "Data Protection Guidelines",
        description: "Understanding Uganda's Data Protection Act",
        icon: Shield,
        type: "Guide",
        link: "/guides/data-protection",
        featured: false,
      },
      {
        id: 10,
        title: "Security Best Practices",
        description: "Keep your club's data safe and secure",
        icon: Shield,
        type: "Article",
        link: "/articles/security",
        featured: false,
      },
    ],
  },
];


const categories = [
  "All",
  "Getting Started",
  "Club Management",
  "Communications",
  "Security & Privacy",
];


const types = [
  "All",
  "Guide",
  "Video",
  "Template",
  "Article",
  "Templates",
];


export default function ResourcesPage() {

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("All");


  const filteredResources = resources
    .map((category)=>({
      ...category,

      items: category.items.filter((item)=>{

        const search =
          item.title.toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase()
          .includes(searchQuery.toLowerCase());


        const categoryMatch =
          selectedCategory === "All" ||
          category.category === selectedCategory;


        const typeMatch =
          selectedType === "All" ||
          item.type === selectedType;


        return search && categoryMatch && typeMatch;

      })
    }))

    .filter(category=>category.items.length > 0);



return (

<>
<MarketingNav />


<main className="pt-24">


<section className="bg-gradient-to-b from-primary-navy to-secondary-navy text-white py-16">

<div className="container mx-auto px-4">

<div className="max-w-4xl mx-auto text-center">

<h1 className="text-4xl md:text-5xl font-bold mb-4">
Resources
</h1>


<p className="text-xl text-white/80">
Everything you need to make the most of agoroll for your club
</p>


</div>

</div>

</section>



<section className="bg-white border-b py-6">

<div className="container mx-auto px-4">

<div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">


<div className="flex-1 relative">

<Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4"/>


<Input
placeholder="Search resources..."
className="pl-10"
value={searchQuery}
onChange={(e)=>setSearchQuery(e.target.value)}
/>


</div>



<select
className="border rounded-md px-3"
value={selectedCategory}
onChange={(e)=>setSelectedCategory(e.target.value)}
>

{
categories.map(cat=>(
<option key={cat}>
{cat}
</option>
))
}

</select>



<select
className="border rounded-md px-3"
value={selectedType}
onChange={(e)=>setSelectedType(e.target.value)}
>

{
types.map(type=>(
<option key={type}>
{type}
</option>
))
}

</select>



</div>

</div>

</section>



<section className="py-16">

<div className="container mx-auto px-4">


{
filteredResources.map(category=>(


<div key={category.category} className="mb-16">


<h2 className="text-2xl font-bold mb-6 flex gap-3">

<span className="w-1 h-8 bg-[#FFD700] rounded-full"/>

{category.category}

</h2>



<div className="grid md:grid-cols-2 gap-6">


{
category.items.map(item=>{


const Icon=item.icon;


return (

<Card
key={item.id}
className={`relative hover:shadow-lg ${
item.featured
? "border-2 border-[#FFD700]"
:""
}`}
>


{
item.featured &&

<Badge className="absolute right-3 top-3 bg-[#FFD700] text-black">
Featured
</Badge>

}



<CardHeader>


<div className="flex gap-4">


<div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center">

<Icon className="text-yellow-600"/>

</div>


<div>


<CardTitle>
{item.title}
</CardTitle>


<CardDescription>
{item.description}
</CardDescription>


<Badge variant="outline" className="mt-2">
{item.type}
</Badge>


</div>


</div>


</CardHeader>



<CardContent>

<Link href={item.link}>

<Button
variant="outline"
className="w-full"
>

View Resource

<ExternalLink className="ml-2 h-4 w-4"/>


</Button>


</Link>


</CardContent>



</Card>

)

})

}


</div>


</div>


))

}



</div>


</section>



<section className="bg-surface py-16">


<div className="container mx-auto px-4 text-center">


<div className="bg-white rounded-xl p-8 shadow">


<h2 className="text-2xl font-bold mb-3">
Still have questions?
</h2>


<p className="mb-6">
Our team is here to help you get the most out of agoroll
</p>


<div className="flex justify-center gap-4">


<Link href="/contact">

<Button>
Contact Support
<ArrowRight className="ml-2"/>
</Button>

</Link>



<Link href="/register">

<Button variant="outline">
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
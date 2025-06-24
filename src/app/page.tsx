import React from 'react';
import { Hero } from '@/components/sections/hero';
import Features from '@/components/sections/features';
import { Awards } from '@/components/sections/awards';
import { Testimonials } from '@/components/sections/testimonials';
import { InteractiveTour } from '@/components/sections/interactive-tour';
import { Blog } from '@/components/sections/blog';
import { FeaturedClients } from '@/components/sections/featured-clients';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Awards />
      <InteractiveTour />
      <Testimonials />
      <Blog />
      <FeaturedClients />
    </main>
  );
} 
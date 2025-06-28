import React from 'react';
import Hero from '@/components/sections/hero';
import FeaturedClients from '@/components/sections/featured-clients';
import AIAdvisor from '@/components/sections/ai-advisor';
import Solutions from '@/components/sections/solutions';

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedClients />
      <AIAdvisor />
      <Solutions />
    </main>
  );
} 
'use client';

import { Container } from '../ui/Container';
import { FadeInWhenVisible } from '../animations/FadeInWhenVisible';
import { computePageData } from '../../data/compute-data';

export function WhatIsCompute() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <FadeInWhenVisible className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">
            {computePageData.whatIs.title}
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            {computePageData.whatIs.description}
          </p>
        </FadeInWhenVisible>
      </Container>
    </section>
  );
} 
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Container } from '../ui/Container';
import { kubernetesPageData } from '../../data/kubernetes-data';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-green-50 via-cyan-50 to-blue-50" ref={ref}>
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-8">
              {kubernetesPageData.about.title}
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              {kubernetesPageData.about.description}
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
} 
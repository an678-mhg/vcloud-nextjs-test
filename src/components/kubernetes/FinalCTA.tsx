'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Container } from '../ui/Container';
import { kubernetesPageData } from '../../data/kubernetes-data';

export function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-20 lg:py-32 bg-navy-gradient text-white relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full"></div>
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            {kubernetesPageData.finalCTA.title}
          </h2>
          <p className="text-xl lg:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
            {kubernetesPageData.finalCTA.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <motion.button
              className="bg-gradient-to-r from-cyan-400 to-green-400 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-500 hover:to-green-500 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {kubernetesPageData.finalCTA.primaryButton}
            </motion.button>
            <motion.button
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {kubernetesPageData.finalCTA.secondaryButton}
            </motion.button>
          </div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {kubernetesPageData.finalCTA.trustSignals.map((signal, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-cyan-400 mb-2">
                  ✓
                </div>
                <div className="text-sm lg:text-base text-gray-200">
                  {signal}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
} 
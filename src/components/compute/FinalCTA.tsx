'use client';

import { motion } from 'framer-motion';
import { Shield, Clock, Award, Server } from 'lucide-react';
import { Container } from '../ui/Container';
import { FadeInWhenVisible } from '../animations/FadeInWhenVisible';
import { computePageData } from '../../data/compute-data';

const trustSignalIcons = {
  'ISO 27001': Shield,
  '99.997% Uptime': Clock,
  '24/7 Support': Award,
  'Tier III Data Center': Server,
};

export function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800">
      <Container>
        <div className="text-center text-white">
          <FadeInWhenVisible>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              {computePageData.finalCTA.title}
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              {computePageData.finalCTA.subtitle}
            </p>
          </FadeInWhenVisible>
          
          <FadeInWhenVisible delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <motion.button 
                className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-500 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {computePageData.finalCTA.primaryButton}
              </motion.button>
              <motion.button 
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {computePageData.finalCTA.secondaryButton}
              </motion.button>
            </div>
          </FadeInWhenVisible>
          
          {/* Trust Signals */}
          <FadeInWhenVisible delay={0.4}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {computePageData.finalCTA.trustSignals.map((signal, index) => {
                const Icon = trustSignalIcons[signal as keyof typeof trustSignalIcons];
                
                return (
                  <motion.div
                    key={signal}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-teal-400" />
                    </div>
                    <div className="text-white font-semibold">{signal}</div>
                  </motion.div>
                );
              })}
            </div>
          </FadeInWhenVisible>
        </div>
      </Container>
    </section>
  );
} 
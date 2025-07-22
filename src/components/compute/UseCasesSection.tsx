'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Container } from '../ui/Container';
import { FadeInWhenVisible } from '../animations/FadeInWhenVisible';
import { computePageData } from '../../data/compute-data';

export function UseCasesSection() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <FadeInWhenVisible className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Tình huống ứng dụng
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Khám phá cách VCLOUD Compute có thể hỗ trợ các tình huống sử dụng khác nhau
          </p>
        </FadeInWhenVisible>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {computePageData.useCases.map((useCase, index) => (
            <motion.div
              key={useCase.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`bg-gradient-to-br ${useCase.gradientClass} text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">
                  {useCase.title}
                </h3>
                
                <p className="text-white/90 mb-6 leading-relaxed">
                  {useCase.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-white/80 text-sm uppercase tracking-wide">
                    Tính năng chính:
                  </h4>
                  <ul className="space-y-2">
                    {useCase.features.map((feature, idx) => (
                      <motion.li 
                        key={idx}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index * 0.1) + (idx * 0.05) + 0.3 }}
                      >
                        <Check className="w-5 h-5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
} 
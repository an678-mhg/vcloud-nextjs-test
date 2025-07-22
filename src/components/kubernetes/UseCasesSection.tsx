'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Container } from '../ui/Container';
import { kubernetesPageData } from '../../data/kubernetes-data';

export function UseCasesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-white" ref={ref}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
            Use Cases thực tế
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ứng dụng Kubernetes trong các tình huống thực tế của doanh nghiệp
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {kubernetesPageData.useCases.map((useCase, index) => (
            <motion.div
              key={useCase.id}
              variants={itemVariants}
              className={`relative p-8 rounded-2xl text-white overflow-hidden group cursor-pointer`}
              style={{
                background: `linear-gradient(135deg, ${useCase.gradientClass.includes('teal-400') ? '#2dd4bf' : '#22d3ee'} 0%, ${useCase.gradientClass.includes('blue-600') ? '#2563eb' : '#06b6d4'} 100%)`
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">
                  {useCase.title}
                </h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  {useCase.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {useCase.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full transform translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full transform -translate-x-12 translate-y-12"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
} 
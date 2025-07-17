'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Service } from '../../types/services';

interface ContentSectionProps {
  service: Service;
  isActive: boolean;
}

export function ContentSection({ service, isActive }: ContentSectionProps) {
  const contentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  return (
    <div className="w-full lg:w-1/2">
      <motion.div
        className="space-y-6"
        variants={contentVariants}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants}>
          <h3 className={`text-3xl md:text-4xl font-bold text-${service.colors.primary} mb-2`}>
            {service.title}
          </h3>
          <p className="text-lg text-gray-600 font-medium mb-4">
            {service.subtitle}
          </p>
        </motion.div>

        <motion.p 
          className="text-gray-700 text-lg leading-relaxed"
          variants={itemVariants}
        >
          {service.description}
        </motion.p>

        <motion.div className="space-y-3" variants={itemVariants}>
          <h4 className="text-xl font-semibold text-gray-900 mb-4">
            Tính năng nổi bật:
          </h4>
          {service.features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-3"
              variants={itemVariants}
            >
              <CheckCircle 
                className={`text-${service.colors.accent} mt-1 flex-shrink-0`} 
                size={20} 
              />
              <span className="text-gray-700 leading-relaxed">
                {feature}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants}>
          <button className={`
            bg-gradient-to-r from-${service.colors.primary} to-${service.colors.accent}
            hover:from-${service.colors.accent} hover:to-${service.colors.primary}
            text-white font-semibold px-8 py-3 rounded-lg
            transition-all duration-300 transform hover:scale-105
            shadow-lg hover:shadow-xl
          `}>
            Tìm hiểu thêm
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
} 
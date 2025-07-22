'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Service } from '../../types/services';
import { ServiceCard } from './ServiceCard';

interface VisualSectionProps {
  service: Service;
  isActive: boolean;
}

export function VisualSection({ service, isActive }: VisualSectionProps) {
  const getGridLayout = () => {
    switch (service.visual.type) {
      case 'iaas':
        return 'grid-cols-1 md:grid-cols-3 gap-6';
      case 'paas':
        return 'grid-cols-2 md:grid-cols-4 gap-4';
      case 'management':
        return 'grid-cols-2 md:grid-cols-3 gap-4';
      default:
        return 'grid-cols-2 md:grid-cols-3 gap-4';
    }
  };

  const getCardSize = () => {
    switch (service.visual.type) {
      case 'iaas':
        return 'large' as const;
      case 'paas':
        return 'medium' as const;
      case 'management':
        return 'medium' as const;
      default:
        return 'medium' as const;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const items = service.visual && service.visual.items && service.visual.items.length > 0
    ? service.visual.items
    : [{ id: 'default', name: 'Dịch vụ VCLOUD', description: '', icon: '' }];

  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center bg-navy-gradient rounded-xl">
      <motion.div
        className={`grid ${getGridLayout()} w-full max-w-lg`}
        variants={containerVariants}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
      >
        {items.map((item, index) => {
          // Card ở giữa (side active) sẽ to hơn
          const isActiveCard =
            service.visual && service.visual.type === 'iaas' && index === 1 ? true :
            service.visual && service.visual.type === 'paas' && index === 3 ? true :
            service.visual && service.visual.type === 'management' && index === 2 ? true :
            false;
          return (
            <motion.div key={item.id} variants={itemVariants}>
              <ServiceCard
                item={item}
                colors={service.colors}
                size={isActiveCard ? 'large' : 'small'}
                isActiveCard={isActiveCard}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
} 
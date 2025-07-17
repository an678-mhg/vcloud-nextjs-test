'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Database, 
  Globe, 
  Shield, 
  Zap, 
  FileText, 
  Store, 
  Package, 
  GitBranch, 
  BarChart3, 
  Link, 
  Code, 
  Layout, 
  DollarSign, 
  PieChart, 
  Users 
} from 'lucide-react';
import { ServiceItem } from '../../types/services';

const iconMap = {
  Server,
  Database,
  Globe,
  Shield,
  Zap,
  FileText,
  Store,
  Package,
  GitBranch,
  BarChart3,
  Link,
  Code,
  Layout,
  DollarSign,
  PieChart,
  Users
};

interface ServiceCardProps {
  item: ServiceItem;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  size?: 'small' | 'medium' | 'large';
  className?: string;
  isActiveCard?: boolean;
}

export function ServiceCard({ item, colors, size = 'medium', className = '', isActiveCard = false }: ServiceCardProps) {
  const IconComponent = iconMap[item.icon as keyof typeof iconMap];
  
  const sizeClasses = {
    small: 'h-16 text-xs',
    medium: 'h-20 text-sm',
    large: 'h-24 text-base'
  };

  const iconSizes = {
    small: 16,
    medium: 20,
    large: 24
  };

  return (
    <motion.div
      className={`
        ${sizeClasses[size]} 
        bg-white rounded-lg shadow-md border border-gray-200 
        flex flex-col items-center justify-center p-3 
        hover:shadow-lg transition-all duration-300 cursor-pointer
        ${className}
      `}
      animate={{
        scale: isActiveCard ? 1.18 : 0.92,
        zIndex: isActiveCard ? 2 : 1
      }}
      whileHover={{ 
        scale: isActiveCard ? 1.22 : 1.05,
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`text-${colors.primary} mb-2`}>
        {IconComponent && <IconComponent size={iconSizes[size]} />}
      </div>
      <h3 className="font-semibold text-gray-900 text-center leading-tight">
        {item.name}
      </h3>
      {item.description && size !== 'small' && (
        <p className="text-xs text-gray-500 text-center mt-1 line-clamp-2">
          {item.description}
        </p>
      )}
    </motion.div>
  );
} 
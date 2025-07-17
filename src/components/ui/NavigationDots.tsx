'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface NavigationDotsProps {
  total: number;
  current: number;
  onDotClick: (index: number) => void;
  className?: string;
}

export function NavigationDots({ total, current, onDotClick, className = '' }: NavigationDotsProps) {
  return (
    <div className={`flex justify-center space-x-2 ${className}`}>
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className="relative p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full"
          aria-label={`Go to slide ${index + 1}`}
        >
          <motion.div
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === current
                ? 'bg-blue-600'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
          {index === current && (
            <motion.div
              className="absolute inset-0 w-3 h-3 bg-blue-600 rounded-full"
              layoutId="activeDot"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </button>
      ))}
    </div>
  );
} 
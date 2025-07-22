'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GradientButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export function GradientButton({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = "",
  onClick,
  disabled = false
}: GradientButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white focus:ring-blue-500",
    secondary: "bg-gradient-to-r from-emerald-500 to-emerald-700 hover:from-emerald-600 hover:to-emerald-800 text-white focus:ring-emerald-500",
    success: "bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white focus:ring-green-500",
    warning: "bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 text-white focus:ring-orange-500"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
    },
    tap: { scale: 0.95 }
  };

  return (
    <motion.button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
} 
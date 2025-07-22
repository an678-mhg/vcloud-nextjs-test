'use client';

import { ReactNode } from 'react';

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'transparent';
  padding?: 'sm' | 'md' | 'lg';
}

export function SectionContainer({ 
  children, 
  className = "",
  background = 'white',
  padding = 'lg'
}: SectionContainerProps) {
  const backgrounds = {
    white: "bg-white",
    gray: "bg-gray-50",
    transparent: "bg-transparent"
  };

  const paddings = {
    sm: "py-12",
    md: "py-16",
    lg: "py-20"
  };

  return (
    <section className={`${backgrounds[background]} ${paddings[padding]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
} 
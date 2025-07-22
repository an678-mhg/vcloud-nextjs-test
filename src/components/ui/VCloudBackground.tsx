"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface VCloudBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

// Custom hook for mouse position tracking
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    let animationFrameId: number;
    
    const updateMousePosition = (e: MouseEvent) => {
      // Throttle using requestAnimationFrame for better performance
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      
      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };
    
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);
  
  return mousePosition;
};

export default function VCloudBackground({ children, className = "" }: VCloudBackgroundProps) {
  const mousePosition = useMousePosition();
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Orb animation variants
  const orbVariants = {
    animate: {
      y: [0, -30, 20, -10, 0],
      x: [0, 30, -20, 20, 0],
      scale: [1, 1.1, 0.9, 1.05, 1],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Floating dots animation
  const dotVariants = {
    animate: {
      opacity: [0.3, 1, 0.3],
      scale: [1, 1.2, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Calculate parallax offset for orbs based on mouse position
  const calculateParallaxOffset = (multiplier: number) => {
    if (!containerRef.current) return { x: 0, y: 0 };
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const offsetX = (mousePosition.x - centerX) * multiplier;
    const offsetY = (mousePosition.y - centerY) * multiplier;
    
    return { x: offsetX, y: offsetY };
  };

  const orb1Offset = calculateParallaxOffset(0.02);
  const orb2Offset = calculateParallaxOffset(0.015);
  const orb3Offset = calculateParallaxOffset(0.025);
  const orb4Offset = calculateParallaxOffset(0.01);

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2E1065] via-[#1A0B3D] to-[#0F0B3D]" />
      
      {/* Grid overlay with animation */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px),
            linear-gradient(180deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridShift 20s linear infinite'
        }}
      />

      {/* Gradient Orb 1 - Green */}
      <motion.div
        className="absolute w-[400px] h-[400px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full opacity-60"
        style={{
          background: 'radial-gradient(circle, #7ED321 0%, #32CD32 50%, transparent 100%)',
          filter: 'blur(80px)',
          top: '10%',
          left: '10%',
          willChange: 'transform',
          transform: `translate(${orb1Offset.x}px, ${orb1Offset.y}px)`
        }}
        variants={orbVariants}
        animate="animate"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        transition={{ duration: 1 }}
      />

      {/* Gradient Orb 2 - Blue */}
      <motion.div
        className="absolute w-[350px] h-[350px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] rounded-full opacity-60"
        style={{
          background: 'radial-gradient(circle, #00D4FF 0%, #0099CC 50%, transparent 100%)',
          filter: 'blur(80px)',
          top: '20%',
          right: '15%',
          willChange: 'transform',
          transform: `translate(${orb2Offset.x}px, ${orb2Offset.y}px)`
        }}
        variants={orbVariants}
        animate="animate"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        transition={{ duration: 1, delay: 0.2 }}
      />

      {/* Gradient Orb 3 - Dark Blue */}
      <motion.div
        className="absolute w-[300px] h-[300px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] rounded-full opacity-60"
        style={{
          background: 'radial-gradient(circle, #0066FF 0%, #003D99 50%, transparent 100%)',
          filter: 'blur(80px)',
          bottom: '15%',
          left: '20%',
          willChange: 'transform',
          transform: `translate(${orb3Offset.x}px, ${orb3Offset.y}px)`
        }}
        variants={orbVariants}
        animate="animate"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        transition={{ duration: 1, delay: 0.4 }}
      />

      {/* Gradient Orb 4 - Mixed */}
      <motion.div
        className="absolute w-[250px] h-[250px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] rounded-full opacity-60"
        style={{
          background: 'radial-gradient(circle, #7ED321 0%, #00D4FF 50%, transparent 100%)',
          filter: 'blur(80px)',
          bottom: '10%',
          right: '25%',
          willChange: 'transform',
          transform: `translate(${orb4Offset.x}px, ${orb4Offset.y}px)`
        }}
        variants={orbVariants}
        animate="animate"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        transition={{ duration: 1, delay: 0.6 }}
      />

      {/* Floating Dots */}
      <motion.div
        className="absolute w-1 h-1 bg-[#00D4FF] rounded-full opacity-70"
        style={{ top: '25%', left: '25%' }}
        variants={dotVariants}
        animate="animate"
        transition={{ delay: 0 }}
      />
      
      <motion.div
        className="absolute w-1 h-1 bg-[#00D4FF] rounded-full opacity-70"
        style={{ top: '35%', right: '30%' }}
        variants={dotVariants}
        animate="animate"
        transition={{ delay: 1 }}
      />
      
      <motion.div
        className="absolute w-1 h-1 bg-[#00D4FF] rounded-full opacity-70"
        style={{ bottom: '40%', left: '60%' }}
        variants={dotVariants}
        animate="animate"
        transition={{ delay: 2 }}
      />
      
      <motion.div
        className="absolute w-1 h-1 bg-[#00D4FF] rounded-full opacity-70"
        style={{ bottom: '25%', right: '45%' }}
        variants={dotVariants}
        animate="animate"
        transition={{ delay: 1.5 }}
      />

      {/* Content Layer */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
} 
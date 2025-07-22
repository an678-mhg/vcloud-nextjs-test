'use client';

import { motion } from 'framer-motion';
import { Badge } from '../ui/badge';
import { Container } from '../ui/Container';
import { storagePageData } from '../../data/storage-data';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-navy-gradient overflow-hidden hero-overlay">
      {/* Floating Storage animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-2">
        <div className="absolute top-20 left-10 text-6xl animate-float opacity-20">📦</div>
        <div className="absolute top-40 right-20 text-4xl animate-float-delayed opacity-30">💾</div>
        <div className="absolute bottom-40 left-1/4 text-5xl animate-float opacity-25">🗄️</div>
        <div className="absolute top-60 left-1/2 text-3xl animate-float-delayed opacity-20">💿</div>
        <div className="absolute bottom-60 right-1/3 text-7xl animate-float opacity-15">🌍</div>
      </div>
      
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <Badge className="mb-6 bg-gradient-to-r from-cyan-400 to-green-400 text-white border-0">
              {storagePageData.hero.badge}
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {storagePageData.hero.title}{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                {storagePageData.hero.highlightText}
              </span>{' '}
              {storagePageData.hero.titleEnd}
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              {storagePageData.hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button 
                className="bg-gradient-to-r from-cyan-400 to-green-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-green-500 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {storagePageData.hero.primaryCTA}
              </motion.button>
              <motion.button 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {storagePageData.hero.secondaryCTA}
              </motion.button>
            </div>
          </motion.div>
          
          {/* Right: Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <StorageVisualization />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

// Storage Visualization Component
function StorageVisualization() {
  return (
    <div className="relative">
      {/* Storage buckets/drives */}
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 + 0.5, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">S3</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Bucket-{i + 1}</div>
                  <div className="text-sm text-slate-500">Object Storage</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-slate-600">Online</span>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4 text-sm text-slate-500">
              <div>Size: {100 + i * 250}GB</div>
              <div>Files: {1200 + i * 800}</div>
              <div>Region: VN-{i + 1}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full flex items-center justify-center shadow-lg"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <span className="text-white text-2xl">📦</span>
      </motion.div>

      <motion.div
        className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      >
        <span className="text-white text-2xl">🌍</span>
      </motion.div>
    </div>
  );
} 
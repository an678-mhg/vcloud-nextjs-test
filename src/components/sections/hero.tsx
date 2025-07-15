'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-600 to-teal-700">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/90 to-teal-700/90 mix-blend-multiply" />
      
      {/* Optional: Add subtle pattern or texture */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-tight text-white drop-shadow-lg">
          Nền tảng điện toán tiên tiến nhất Việt Nam
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_20%)]">
          Giải pháp điện toán đám mây toàn diện với độ tin cậy và bảo mật cao, giúp doanh nghiệp của bạn phát triển nhanh chóng và bền vững.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Link 
            href="/contact"
            className="px-8 py-3 bg-white text-emerald-700 rounded-lg font-medium hover:bg-emerald-50 transition-colors"
          >
            Liên hệ tư vấn
          </Link>
          <Link
            href="/pricing"
            className="px-8 py-3 bg-emerald-700 text-white rounded-lg font-medium hover:bg-emerald-600 transition-colors flex items-center gap-2"
          >
            Xem bảng giá
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Optional: Add decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/10 to-transparent" />
    </section>
  )
} 
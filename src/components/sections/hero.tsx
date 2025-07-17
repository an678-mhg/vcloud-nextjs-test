'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'

export function Hero() {
  return (
    <section className="relative flex flex-col justify-center bg-navy-gradient overflow-hidden hero-overlay">
      {/* Floating cloud animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-2">
        <div className="absolute top-20 left-10 text-6xl animate-float opacity-20">☁️</div>
        <div className="absolute top-40 right-20 text-4xl animate-float-delayed opacity-30">☁️</div>
        <div className="absolute bottom-40 left-1/4 text-5xl animate-float opacity-25">☁️</div>
        <div className="absolute top-60 left-1/2 text-3xl animate-float-delayed opacity-20">☁️</div>
        <div className="absolute bottom-60 right-1/3 text-7xl animate-float opacity-15">☁️</div>
      </div>

      {/* Main content */}
      <div className="relative z-20 pt-12 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Company name and tagline */}
          <div className="mb-8 -mt-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-4 tracking-tight">
              VCLOUD
            </h1>
            <p className="text-xl md:text-2xl text-vcloud-cyan font-medium mb-2">
            Nền tảng điện toán tại Việt Nam
            </p>
          </div>

          {/* Main description */}
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            Giải pháp điện toán đám mây toàn diện với độ tin cậy và bảo mật cao, giúp doanh nghiệp của bạn phát triển nhanh chóng và bền vững.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-cyan-400 to-green-400 hover:from-cyan-500 hover:to-green-500 text-white">
                Liên hệ tư vấn
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-slate-900">
                Xem bảng giá
              </Button>
            </Link>
          </div>

          {/* Key statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-4">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">180+</div>
              <div className="text-sm md:text-base text-gray-300">điểm hiện diện toàn cầu</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">14,000+</div>
              <div className="text-sm md:text-base text-gray-300">đối tác peering</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">200+</div>
              <div className="text-sm md:text-base text-gray-300">Tbps - tổng dung lượng mạng</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">0ms</div>
              <div className="text-sm md:text-base text-gray-300">thời gian phản hồi trung bình</div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/5 to-transparent" />
    </section>
  )
} 
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'

export function Hero() {
  return (
    <section className="relative min-h-screen bg-navy-gradient overflow-hidden">
      {/* Floating cloud animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl animate-float opacity-20">☁️</div>
        <div className="absolute top-40 right-20 text-4xl animate-float-delayed opacity-30">☁️</div>
        <div className="absolute bottom-40 left-1/4 text-5xl animate-float opacity-25">☁️</div>
        <div className="absolute top-60 left-1/2 text-3xl animate-float-delayed opacity-20">☁️</div>
        <div className="absolute bottom-60 right-1/3 text-7xl animate-float opacity-15">☁️</div>
      </div>

      {/* Main content */}
      <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Company name and tagline */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-4 tracking-tight">
              VCLOUD
            </h1>
            <p className="text-xl md:text-2xl text-vcloud-cyan font-medium mb-2">
              Cloud, Edge, và AI Solutions
            </p>
          </div>

          {/* Main description */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              VCLOUD tăng tốc training AI, cung cấp dịch vụ cloud toàn diện, cải thiện phân phối nội dung và bảo vệ servers & applications
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="w-full sm:w-auto">
              Bắt đầu ngay
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-vcloud-navy">
              Tìm hiểu thêm
            </Button>
          </div>

          {/* Key statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-vcloud-cyan mb-2">180+</div>
              <div className="text-sm md:text-base text-gray-300">Điểm hiện diện toàn cầu</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-vcloud-green mb-2">14,000+</div>
              <div className="text-sm md:text-base text-gray-300">Đối tác peering</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-vcloud-cyan mb-2">200+</div>
              <div className="text-sm md:text-base text-gray-300">Tbps</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-vcloud-green mb-2">99.997%</div>
              <div className="text-sm md:text-base text-gray-300">Uptime</div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/5 to-transparent" />
    </section>
  )
} 
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import VCloudBackground from '../ui/VCloudBackground'

export function Hero() {
  return (
    <VCloudBackground className="min-h-screen flex flex-col justify-center">
      {/* Floating cloud animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-2">
        <div className="absolute top-20 left-10 text-6xl animate-float opacity-20">☁️</div>
        <div className="absolute top-40 right-20 text-4xl animate-float-delayed opacity-30">☁️</div>
        <div className="absolute bottom-40 left-1/4 text-5xl animate-float opacity-25">☁️</div>
        <div className="absolute top-60 left-1/2 text-3xl animate-float-delayed opacity-20">☁️</div>
        <div className="absolute bottom-60 right-1/3 text-7xl animate-float opacity-15">☁️</div>
      </div>

      {/* Main content - Thêm padding-top để không bị navbar che */}
      <div className="relative z-20 pt-24 md:pt-28 lg:pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Company name and tagline */}
          <div className="mb-8">
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
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-white text-white hover:bg-transparent">
                Xem bảng giá
              </Button>
            </Link>
          </div>

          {/* Key statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-4">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">99,997+</div>
              <div className="text-xs md:text-sm text-gray-300">Hiệu suất uptime to vượt trội</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">8+ISP</div>
              <div className="text-xs md:text-sm text-gray-300">Đạt chuẩn Tier 3+ quốc tế</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-xs md:text-sm text-gray-300">Chuyên gia sẵn sàng hỗ trợ</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 whitespace-nowrap">800,000 IOPS</div>
              <div className="text-xs md:text-sm text-gray-300">Tốc độ đọc/ghi mạnh mẽ lên tới</div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/5 to-transparent" />
    </VCloudBackground>
  )
} 
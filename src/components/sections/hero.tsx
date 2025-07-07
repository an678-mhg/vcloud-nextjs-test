'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section 
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" 
      style={{
        backgroundImage: "url('https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/1/45/Nen-Vcloud.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-tight text-white drop-shadow-lg">
          Nền tảng điện toán tiên tiến nhất Việt Nam
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_20%)]">
          Giải pháp điện toán đám mây toàn diện với độ tin cậy và bảo mật cao, giúp doanh nghiệp của bạn phát triển nhanh chóng và bền vững.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/contact"
            className="w-full sm:w-auto text-base font-semibold text-white bg-green-600 hover:bg-green-700 transition-all duration-300 px-8 py-4 rounded-full shadow-lg shadow-green-500/30 transform hover:scale-105"
          >
            Liên hệ tư vấn
          </Link>
          <Link 
            href="/pricing"
            className="w-full sm:w-auto text-base font-semibold text-gray-800 bg-white/80 hover:bg-white backdrop-blur-sm border border-gray-300 transition-colors px-8 py-4 rounded-full"
          >
            Xem bảng giá <span className="ml-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero 
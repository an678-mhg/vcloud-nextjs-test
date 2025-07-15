'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <section 
      className="relative min-h-screen hero-bg"
      style={{
        backgroundImage: "url('https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/1/45/banner (1).png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Teal overlay */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundColor: 'rgba(0, 128, 128, 0.7)',
          mixBlendMode: 'multiply',
        }}
      />

      {/* Content wrapper */}
      <div className="relative z-10 pt-24 md:pt-32 lg:pt-48">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-white">
            Nền tảng điện toán tại Việt Nam
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-200">
            Giải pháp điện toán đám mây toàn diện với độ tin cậy và bảo mật cao, giúp doanh nghiệp của bạn phát triển nhanh chóng và bền vững.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact"
              className="w-full sm:w-auto bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
            >
              Liên hệ tư vấn
            </Link>
            <Link
              href="/pricing"
              className="w-full sm:w-auto bg-white/90 hover:bg-white text-gray-800 font-semibold px-8 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 flex items-center justify-center"
            >
              Xem bảng giá
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 
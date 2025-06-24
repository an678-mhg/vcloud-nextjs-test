'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] pt-16 flex items-center justify-center bg-gradient-to-br from-primary/5 via-secondary/5 to-white overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-secondary/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="mb-6">
              <motion.h1 
                className="text-4xl md:text-6xl font-bold text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Nền tảng điện toán đám mây
                <span className="text-primary block mt-2">tiên tiến nhất Việt Nam</span>
              </motion.h1>
              <motion.div 
                className="flex items-center justify-center md:justify-start mt-4 space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center">
                  <Image 
                    src="https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/48/png-transparent-iso-hd-logo.svg"
                    alt="ISO 27001"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                  <span className="ml-2 text-sm text-gray-600">ISO 27001</span>
                </div>
                <div className="flex items-center">
                  <Image 
                    src="https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/48/png-transparent-iso-hd-logo.svg"
                    alt="PCI DSS"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                  <span className="ml-2 text-sm text-gray-600">PCI DSS</span>
                </div>
              </motion.div>
            </div>

            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Giải pháp điện toán đám mây toàn diện với độ tin cậy và bảo mật cao, 
              giúp doanh nghiệp của bạn phát triển nhanh chóng và bền vững.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link 
                href="/contact"
                className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Dùng thử miễn phí
              </Link>
              <Link
                href="/pricing"
                className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors hover:shadow-md"
              >
                Xem bảng giá
              </Link>
            </motion.div>

            <motion.div 
              className="mt-8 flex items-center justify-center md:justify-start space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <Image
                    key={i}
                    src={`https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/testimonials/${i}.jpg`}
                    alt={`Client ${i}`}
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-semibold">500+</span> Doanh nghiệp tin dùng
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
            <Image
              src="https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/1/45/VCLOUD.png"
              alt="Cloud Computing Platform"
              width={600}
              height={500}
              className="object-contain relative z-10 animate-float"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckIcon } from '@heroicons/react/outline'

const CloudUSPSection = () => {
  const [activeTab, setActiveTab] = useState(0)

  const tabsData = [
    {
      id: 0,
      title: "Performance uptime 99,99%",
      description: "Đạt tiêu chuẩn Tier 3 Data Center, đảm bảo uptime 99,99%. Tốc độ đọc/ghi mạnh mẽ (Read 53,000+ IOPS, Write 17,900+ IOPS). Cam kết SLA với hệ thống backup theo mô hình N+1.",
      features: [
        "Uptime cam kết 99,99% với SLA rõ ràng",
        "Tốc độ đọc 53,000+ IOPS, ghi 17,900+ IOPS",
        "Data Center chuẩn Tier 3 quốc tế",
        "Hệ thống backup N+1 đảm bảo an toàn",
        "Monitoring 24/7 và support tức thì"
      ],
      images: {
        main: "https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/1/45/banner%20(1).png",
        overlay: "https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/1/45/dash.png"
      }
    },
    {
      id: 1,
      title: "Chi phí hiệu quả",
      description: "Mô hình thanh toán linh hoạt, phù hợp với tiến độ dự án và nhu cầu thực tế. Gói dịch vụ được may đo theo nhu cầu sử dụng.",
      features: [
        "Pay-as-you-use, tiết kiệm chi phí vận hành",
        "Không phí setup, triển khai nhanh chóng",
        "Gói combo tiết kiệm đến 40%",
        "Miễn phí migration và tư vấn",
        "ROI tối ưu với chi phí minh bạch"
      ],
      images: {
        main: "https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/1/45/banner%20(1).png",
        overlay: "https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/1/45/quanly.png"
      }
    },
    {
      id: 2,
      title: "Tăng trưởng không giới hạn",
      description: "Tích hợp sẵn nhiều dịch vụ thiết yếu: Load Balancer, Snapshot, Backup... Khả năng mở rộng vô hạn, đáp ứng sự phát triển liên tục của doanh nghiệp.",
      features: [
        "Auto-scaling theo nhu cầu thực tế",
        "Load Balancer tích hợp sẵn",
        "Snapshot và Backup tự động",
        "Multi-region deployment",
        "Horizontal scaling không giới hạn"
      ],
      images: {
        main: "https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/1/45/banner%20(1).png",
        overlay: "https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/1/45/baove.png"
      }
    },
    {
      id: 3,
      title: "May đo theo nhu cầu",
      description: "Hệ thống linh hoạt, đáp ứng dễ dàng mọi nhu cầu tùy chỉnh đặc thù của doanh nghiệp.",
      features: [
        "Custom configuration theo yêu cầu",
        "API đầy đủ cho tích hợp",
        "White-label solutions",
        "Dedicated support team",
        "Tư vấn architecture miễn phí"
      ],
      images: {
        main: "https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/1/45/banner%20(1).png",
        overlay: "https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/1/45/tudong.png"
      }
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2
      }
    }
  }

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Container */}
        <div className="bg-white rounded-2xl shadow-2xl mx-auto max-w-6xl overflow-hidden">
          {/* Tab Content Area */}
          <div className="p-8 lg:p-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 min-h-[500px]"
              >
                {/* Images Section */}
                <motion.div 
                  variants={imageVariants}
                  className="flex-1 relative"
                >
                  <div className="relative">
                    {/* Background Image */}
                    <div className="relative">
                      <img
                        key={`main-${activeTab}`}
                        src={tabsData[activeTab].images.main}
                        alt="Cloud Infrastructure"
                        className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-[#4c1d95]/20 to-[#1e40af]/20 rounded-2xl"></div>
                    </div>
                    
                    {/* Overlapping Image */}
                    <div className="absolute -bottom-8 -right-8 lg:-bottom-12 lg:-right-12">
                      <img
                        key={`overlay-${activeTab}`}
                        src={tabsData[activeTab].images.overlay}
                        alt="Management Dashboard"
                        className="w-48 h-48 lg:w-64 lg:h-64 object-cover rounded-2xl shadow-2xl border-4 border-white"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Content Section */}
                <motion.div 
                  variants={textVariants}
                  className="flex-1 space-y-6"
                >
                  <h3 className="text-3xl lg:text-4xl font-bold text-[#1e293b] leading-tight">
                    {tabsData[activeTab].title}
                  </h3>
                  
                  <p className="text-lg text-[#64748b] leading-relaxed">
                    {tabsData[activeTab].description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-4 pt-4">
                    {tabsData[activeTab].features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="flex-shrink-0 w-6 h-6 bg-[#10b981] rounded-full flex items-center justify-center mt-0.5">
                          <CheckIcon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-[#334155] font-medium leading-relaxed">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Tab Menu */}
          <div className="bg-[#f1f5f9] border-t border-[#e2e8f0]">
            <div className="flex flex-col md:flex-row">
              {tabsData.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(index)}
                  className={`
                    flex-1 px-6 py-4 text-left transition-all duration-300 relative
                    ${activeTab === index 
                      ? 'bg-white text-[#3b82f6] font-semibold border-t-4 border-[#3b82f6]' 
                      : 'text-[#64748b] hover:text-[#334155] hover:bg-white/50'
                    }
                  `}
                >
                  <div className="text-sm lg:text-base font-medium">
                    {tab.title}
                  </div>
                  
                  {/* Active indicator */}
                  {activeTab === index && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3b82f6] to-[#6d28d9]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .min-h-[500px] {
            min-height: auto;
          }
        }
      `}</style>
    </section>
  )
}

export default CloudUSPSection 
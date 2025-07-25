'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon, CheckCircleIcon } from '@heroicons/react/solid'

const CloudUSPSection = () => {
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

  const [[page, direction], setPage] = useState([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setPage(([currentPage]) => [
        (currentPage + 1) % tabsData.length,
        1
      ]);
    }, 5000); // 5 seconds interval

    return () => clearInterval(timer);
  }, [isAutoPlaying, tabsData.length, page]);

  const paginate = (newDirection: number) => {
    setIsAutoPlaying(false);
    setPage(([currentPage]) => [
      (currentPage + newDirection + tabsData.length) % tabsData.length,
      newDirection
    ]);
    // Resume auto-play after 5 seconds
    const timer = setTimeout(() => setIsAutoPlaying(true), 5000);
    return () => clearTimeout(timer);
  };

  const handleTabClick = (index: number) => {
    const newDirection = index > page ? 1 : -1;
    setIsAutoPlaying(false);
    setPage([index, newDirection]);
    // Resume auto-play after 5 seconds
    const timer = setTimeout(() => setIsAutoPlaying(true), 5000);
    return () => clearTimeout(timer);
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl mx-auto max-w-5xl overflow-hidden">
          <div className="p-6 lg:p-12">
            <div className="relative">
              {/* Navigation Arrows */}
              <button
                onClick={() => paginate(-1)}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 p-4 text-[#64748b] hover:text-[#334155] transition-colors z-20"
                aria-label="Previous slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={() => paginate(1)}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 p-4 text-[#64748b] hover:text-[#334155] transition-colors z-20"
                aria-label="Next slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Content Container */}
              <div className="overflow-hidden">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={page}
                    custom={direction}
                    initial={{ opacity: 0, x: direction > 0 ? 1000 : -1000 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction < 0 ? 1000 : -1000 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30
                    }}
                    className="w-full"
                  >
                    <div className="flex flex-col items-center gap-8 lg:gap-12">
                      {/* Images Section */}
                      <div className="w-full max-w-2xl mx-auto relative">
                        <div className="relative">
                          {/* Background Image */}
                          <div className="relative">
                            <img
                              src={tabsData[page].images.main}
                              alt="Cloud Infrastructure"
                              className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                            />
                            {/* Full-width decoration lines */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#4c1d95]/20 via-transparent to-[#1e40af]/20 rounded-2xl"></div>
                            <div className="absolute h-px w-full top-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                            <div className="absolute h-px w-full bottom-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                          </div>
                          
                          {/* Overlapping Image - Centered */}
                          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                            <img
                              src={tabsData[page].images.overlay}
                              alt="Feature Illustration"
                              className="w-64 h-64 object-cover rounded-2xl shadow-2xl border-4 border-white"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="w-full max-w-2xl mx-auto space-y-4">
                        <h3 className="text-3xl lg:text-4xl font-bold text-[#1e293b] leading-tight text-center">
                          {tabsData[page].title}
                        </h3>
                        
                        <p className="text-lg text-[#64748b] leading-relaxed text-center">
                          {tabsData[page].description}
                        </p>

                        {/* Features List */}
                        <div className="space-y-4 pt-4 max-w-2xl mx-auto">
                          {tabsData[page].features.map((feature, index) => (
                            <motion.div
                              key={`${page}-${index}`}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 + index * 0.1 }}
                              className="flex items-start gap-3"
                            >
                              <div className="flex-shrink-0 w-6 h-6 bg-[#10b981] rounded-full flex items-center justify-center mt-0.5">
                                <CheckCircleIcon className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-[#334155] font-medium leading-relaxed">
                                {feature}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Tab Menu */}
          <div className="bg-[#f1f5f9] border-t border-[#e2e8f0]">
            <div className="flex flex-1 flex-col md:flex-row">
              {tabsData.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(index)}
                  className={`
                    flex-1 flex items-center justify-center text-center px-6 py-3 transition-all duration-300 relative
                    ${page === index 
                      ? 'bg-white text-[#3b82f6] font-semibold' 
                      : 'text-[#64748b] hover:text-[#334155] hover:bg-white/50'
                    }
                  `}
                >
                  <div className="text-sm lg:text-base font-medium w-full">
                    {tab.title}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CloudUSPSection 
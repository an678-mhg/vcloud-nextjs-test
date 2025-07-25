'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      quote: "VCLOUD mang đến hiệu suất vượt trội với tốc độ đọc/ghi ấn tượng, đảm bảo hệ thống luôn hoạt động mượt mà, ổn định. Nhờ hạ tầng mạnh mẽ và uptime 99,99%, chúng tôi có thể vận hành không gián đoạn, đáp ứng mọi yêu cầu kinh doanh!",
      author: "COO - FLY WALLET PTY",
      gradient: "linear-gradient(135deg, #c6f6d5 0%, #e9d8fd 100%)"
    },
    {
      id: 2,
      quote: "VNETWORK giúp chúng tôi thiết kế tài nguyên phù hợp, đảm bảo hiệu suất tối ưu trong khi kiểm soát chi phí hiệu quả. Đây là giải pháp hoàn hảo giúp Gumac tối ưu hạ tầng mà không lãng phí ngân sách.",
      author: "Giám Đốc Phòng CNTT - GUMAC",
      gradient: "linear-gradient(135deg, #bee3f8 0%, #fbb6ce 100%)"
    },
    {
      id: 3,
      quote: "Giải pháp hạ tầng của VNETWORK giúp chúng tôi dễ dàng hơn trong việc tối ưu và kiểm soát chi phí đầu tư hệ thống. VNETWORK không chỉ thiết kế gói hỗ trợ phù hợp, mà còn cung cấp dịch vụ hạ tầng toàn diện, với đội ngũ hỗ trợ kỹ thuật tận tâm, giúp chúng tôi triển khai nhanh chóng và đưa vào vận hành ổn định trong thời gian ngắn.",
      author: "Anh Tài - CEO of Zetaby",
      gradient: "linear-gradient(135deg, #e9d8fd 0%, #fed7d7 100%)"
    },
    {
      id: 4,
      quote: "Đầu năm 2025, chúng tôi đã bứt phá doanh số bán vé, đạt mức cao nhất trong một tháng trong lịch sử 20 năm của Galaxy Cinema, nhờ vào sự hỗ trợ của đội ngũ VNETWORK. Từ khi sử dụng VCLOUD, chúng tôi hoàn toàn yên tâm về bảo mật dữ liệu và tính ổn định của hệ thống, ngay cả trong những giai đoạn cao điểm.",
      author: "Anh Võ Lý Minh Nhân, Director Of Information Technology at GalaxyStudio",
      gradient: "linear-gradient(135deg, #feebc8 0%, #c6f6d5 100%)"
    },
  ]

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }



  const getCardStyle = (index: number) => {
    const diff = (index - activeIndex + testimonials.length) % testimonials.length
    
    if (diff === 0) {
      // Active card
      return {
        zIndex: 50,
        transform: 'scale(1.02) translateY(-10px)',
        opacity: 1
      }
    } else if (diff === 1) {
      return {
        zIndex: 40,
        transform: 'scale(0.94) translateY(20px)',
        opacity: 0.8
      }
    } else if (diff === 2) {
      return {
        zIndex: 30,
        transform: 'scale(0.88) translateY(40px)',
        opacity: 0.6
      }
    } else if (diff === 3) {
      return {
        zIndex: 20,
        transform: 'scale(0.82) translateY(60px)',
        opacity: 0.4
      }
    } else {
      return {
        zIndex: 10,
        transform: 'scale(0.76) translateY(80px)',
        opacity: 0.2
      }
    }
  }

  return (
    <section className="py-20 lg:py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Stacked Cards Container */}
        <div className="relative max-w-6xl mx-auto">
          <div 
            className="relative h-[500px] cursor-pointer"
            onClick={handleNext}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="absolute inset-0 w-full"
                style={getCardStyle(index)}
                animate={getCardStyle(index)}
                transition={{
                  duration: 0.6,
                  ease: [0.23, 1, 0.32, 1]
                }}
              >
                <div
                  className="w-full h-full rounded-3xl p-8 lg:p-12 shadow-lg relative overflow-hidden"
                  style={{ background: testimonial.gradient }}
                >
                  {/* Quote Mark */}
                  <div className="absolute top-8 left-8 text-6xl lg:text-8xl text-gray-300/50 font-serif leading-none">
                    "
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col justify-center h-full pt-16 lg:pt-20">
                    <blockquote className="text-2xl lg:text-3xl xl:text-4xl font-semibold leading-tight text-[#2d3748] mb-8 lg:mb-12">
                      {testimonial.quote}
                    </blockquote>
                    
                    <cite className="text-lg lg:text-xl font-medium text-[#4a5568] not-italic">
                      — {testimonial.author}
                    </cite>
                  </div>

                  {/* Click hint - only show on active card */}
                  {index === activeIndex && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1, duration: 0.5 }}
                      className="absolute bottom-6 right-6 text-sm text-[#4a5568] opacity-70"
                    >
                      Click để tiếp tục →
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-[#3b82f6] scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="text-center mt-4 text-[#4a5568] font-medium">
            {activeIndex + 1} / {testimonials.length}
          </div>
        </div>
      </div>
    </section>
  )
} 
'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  ArrowUpIcon,
  ServerIcon,
  CogIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PlayIcon,
  PauseIcon
} from '@heroicons/react/solid'

// Types
interface Service {
  id: string
  title: string
  subtitle: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  features: string[]
  tags: string[]
  color: {
    primary: string
    secondary: string
    accent: string
  }
  cta: {
    primary: string
    secondary: string
  }
}

// Services data
const services: Service[] = [
  {
    id: 'Hạ Tầng & Hiệu Suất Vượt Trội',
    title: 'Hạ Tầng & Hiệu Suất Vượt Trội',
    subtitle: 'Triển khai nhanh',
    description: 'Trung tâm dữ liệu cấp 3 chuẩn quốc tế với hiệu suất vượt trội, đảm bảo ứng dụng của bạn luôn chạy mượt mà và ổn định',
    icon: ArrowUpIcon,
    features: [
      'Trung tâm dữ liệu cấp 3 chuẩn quốc tế',
      'Siêu tốc độ xử lý: 98.000 thao tác/giây',
      'Băng thông mạng: 100 Gbps tối đa',
      'Cam kết hoạt động lên tới 99.997% thời gian',
    ],
    tags: ['Performance', 'Global', 'Real-time'],
    color: {
      primary: '#06b6d4',
      secondary: '#0891b2',
      accent: '#22d3ee'
    },
    cta: {
      primary: 'Khởi tạo ngay',
      secondary: 'Xem Bảng Giá'
    }
  },
  {
    id: 'Mở Rộng & Tích Hợp Linh Hoạt',
    title: 'Mở Rộng & Tích Hợp Linh Hoạt',
    subtitle: 'Mở rộng theo quy mô doanh nghiệp',
    description: 'Tự động mở rộng tức thời và tích hợp liền mạch với hệ thống hiện tại, hỗ trợ mọi nhu cầu phát triển doanh nghiệp.',
    icon: ServerIcon,
    features: [
      'Tự động mở rộng tức thì theo nhu cầu',
      'Đa dịch vụ đám mây: Hạ tầng & Nền tảng',
      'Tích hợp giao diện với hệ thống hiện tại',
      'Hỗ trợ container và điều phối ứng dụng',
    ],
    tags: ['Scalability', 'Integration', 'Container'],
    color: {
      primary: '#10b981',
      secondary: '#059669',
      accent: '#34d399'
    },
    cta: {
      primary: 'Tư vấn giải pháp',
      secondary: 'Xem bảng giá'
    }
  },
  {
    id: 'Quản Lý & Hỗ Trợ Chuyên Nghiệp',
    title: 'Quản Lý & Hỗ Trợ Chuyên Nghiệp',
    subtitle: 'Hỗ trợ 24/7 từ chuyên gia',
    description: 'Cổng quản lý tự phục vụ hiện đại và đội ngũ hỗ trợ 24/7, giúp bạn quản lý đám mây dễ dàng và hiệu quả.',
    icon: CogIcon,
    features: [
      'Cổng tự phục vụ trực quan và dễ sử dụng',
      'Hỗ trợ kỹ thuật 24/7 chuyên nghiệp',
      'Giám sát và cảnh báo tự động',
      'Triển khai và quản lý nhanh chóng',
    ],
    tags: ['Management', 'Support', 'Monitoring'],
    color: {
      primary: '#8b5cf6',
      secondary: '#7c3aed',
      accent: '#a78bfa'
    },
    cta: {
      primary: 'Triển khai Cloud ngay',
      secondary: 'Xem bảng giá'
    }
  }
]

// Custom hooks
const useAutoRotate = (length: number, interval: number = 5000) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout>()

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % length)
  }, [length])

  const goTo = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  const pause = useCallback(() => {
    setIsPaused(true)
    if (intervalRef.current) clearInterval(intervalRef.current)
  }, [])

  const resume = useCallback(() => {
    setIsPaused(false)
  }, [])

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(next, interval)
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isPaused, next, interval])

  return {
    currentIndex,
    isPaused,
    next,
    goTo,
    pause,
    resume
  }
}

const useSwipeGesture = (onSwipeLeft: () => void, onSwipeRight: () => void) => {
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      onSwipeLeft()
    } else if (isRightSwipe) {
      onSwipeRight()
    }
  }

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd
  }
}

// Main component
export function Services() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const {
    currentIndex,
    isPaused,
    next,
    goTo,
    pause,
    resume
  } = useAutoRotate(services.length)

  const swipeHandlers = useSwipeGesture(
    () => next(),
    () => goTo(currentIndex > 0 ? currentIndex - 1 : services.length - 1)
  )

  const currentService = services[currentIndex]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  }

  return (
    <section 
      ref={ref}
      className="py-20 bg-gray-50 relative overflow-hidden"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-lime-500/5 to-transparent" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-lime-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >

          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-slate-800 mb-6"
          >
            Giải pháp cloud toàn diện
          </motion.h2>

        </motion.div>

        {/* Services container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
        >
          {/* Sidebar */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-4 space-y-6"
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-8">
                Khám phá dịch vụ
              </h3>
              
              {/* Service tabs */}
              <div className="space-y-4">
                {services.map((service, index) => (
                  <motion.button
                    key={service.id}
                    onClick={() => goTo(index)}
                    onMouseEnter={pause}
                    onMouseLeave={resume}
                    className={`
                      w-full text-left p-4 rounded-xl transition-all duration-300
                      ${currentIndex === index
                        ? 'bg-lime-50 border-2 border-lime-200 shadow-lg'
                        : 'bg-slate-50 hover:bg-slate-100 border-2 border-transparent'
                      }
                    `}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`
                        p-3 rounded-lg transition-colors duration-300
                        ${currentIndex === index
                          ? 'bg-lime-500 text-white'
                          : 'bg-slate-200 text-slate-600'
                        }
                      `}>
                        <service.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className={`
                          font-semibold transition-colors duration-300
                          ${currentIndex === index ? 'text-lime-700' : 'text-slate-700'}
                        `}>
                          {service.title}
                        </h4>
                        <p className="text-sm text-slate-500 mt-1">
                          {service.subtitle}
                        </p>
                      </div>
                      {/* Active indicator */}
                      {currentIndex === index && (
                        <div className="w-1 h-12 bg-lime-200 rounded-full overflow-hidden">
                          <motion.div
                            className="w-full bg-lime-500 rounded-full"
                            initial={{ height: "0%" }}
                            animate={{ height: "100%" }}
                            transition={{ duration: 5, repeat: Infinity }}
                          />
                        </div>
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content area */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-8"
          >
            <div 
              className="bg-white rounded-2xl shadow-xl overflow-hidden h-full"
              {...swipeHandlers}
            >
              <AnimatePresence mode="wait" custom={currentIndex}>
                <motion.div
                  key={currentIndex}
                  custom={currentIndex}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="p-8 lg:p-12"
                >
                  {/* Content icon */}
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="p-4 bg-lime-100 rounded-xl">
                      <currentService.icon className="w-8 h-8 text-lime-600" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-slate-800">
                        {currentService.title}
                </h3>
                      <p className="text-lime-600 font-medium">
                        {currentService.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Content text */}
                  <div className="mb-8">
                    <p className="text-lg text-slate-600 leading-relaxed">
                      {currentService.description}
                    </p>
                  </div>

                  {/* Features grid */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {currentService.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-lime-500 rounded-full flex-shrink-0" />
                        <span className="text-slate-700 font-medium">
                      {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {currentService.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-lime-100 text-lime-700 text-sm font-medium rounded-full"
                      >
                        {tag}
                      </span>
                  ))}
                </div>
                
                  {/* CTA buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-lime-500 hover:bg-lime-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      {currentService.cta.primary}
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 border-2 border-lime-500 text-lime-600 hover:bg-lime-50 font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                    >
                      {currentService.cta.secondary}
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>

        {/* Navigation dots (mobile) */}
        <div className="lg:hidden mt-8 flex justify-center space-x-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`
                w-3 h-3 rounded-full transition-all duration-300
                ${currentIndex === index
                  ? 'bg-lime-500 w-8'
                  : 'bg-slate-300 hover:bg-slate-400'
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  )
} 
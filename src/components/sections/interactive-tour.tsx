'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

type TourStep = {
  id: number
  title: string
  description: string
  image: string
}

const tourSteps: TourStep[] = [
  {
    id: 1,
    title: 'Khởi tạo tài nguyên',
    description: 'Dễ dàng tạo và quản lý tài nguyên cloud với giao diện trực quan.',
    image: 'https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/1/45/quanly.png'
  },
  {
    id: 2,
    title: 'Giám sát hiệu suất',
    description: 'Theo dõi và phân tích hiệu suất hệ thống theo thời gian thực.',
    image: 'https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/1/45/dash.png'
  },
  {
    id: 3,
    title: 'Quản lý bảo mật',
    description: 'Thiết lập và kiểm soát các chính sách bảo mật một cách toàn diện.',
    image: 'https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/1/45/baove.png'
  },
  {
    id: 4,
    title: 'Tự động hóa',
    description: 'Tự động hóa quy trình vận hành với các công cụ CI/CD tích hợp.',
    image: 'https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/1/45/tudong.png'
  }
]

export function InteractiveTour() {
  const [activeStep, setActiveStep] = React.useState(0)
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((current) => (current + 1) % tourSteps.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Khám phá nền tảng
          </h2>
          <p className="text-xl text-gray-600">
            Trải nghiệm các tính năng mạnh mẽ của VCLOUD
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-8">
                {tourSteps.map((step, index) => (
                  <div
                    key={step.id}
                    className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                      activeStep === index
                        ? 'bg-white shadow-lg scale-105'
                        : 'hover:bg-white/50'
                    }`}
                    onClick={() => setActiveStep(index)}
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] md:h-[500px]"
            >
              {tourSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: activeStep === index ? 1 : 0,
                    scale: activeStep === index ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                  style={{ display: activeStep === index ? 'block' : 'none' }}
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-contain"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 
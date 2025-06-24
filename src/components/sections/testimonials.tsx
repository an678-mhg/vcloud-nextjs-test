'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const testimonials = [
  {
    id: 1,
    name: 'Nguyễn Văn A',
    role: 'CTO',
    company: 'TechViet Solutions',
    image: 'https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/testimonials/1.jpg',
    content: 'VCLOUD đã giúp chúng tôi tối ưu hóa chi phí vận hành và tăng hiệu suất hệ thống một cách đáng kể. Đội ngũ hỗ trợ kỹ thuật luôn sẵn sàng giúp đỡ 24/7.',
    rating: 5
  },
  {
    id: 2,
    name: 'Trần Thị B',
    role: 'CEO',
    company: 'Digital Innovation',
    image: 'https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/testimonials/2.jpg',
    content: 'Chúng tôi đã chuyển toàn bộ hạ tầng lên VCLOUD và hoàn toàn hài lòng với hiệu suất và độ ổn định của hệ thống. Đặc biệt ấn tượng với tính năng bảo mật.',
    rating: 5
  },
  {
    id: 3,
    name: 'Lê Văn C',
    role: 'Technical Director',
    company: 'Fintech Solutions',
    image: 'https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/testimonials/3.jpg',
    content: 'VCLOUD mang đến giải pháp đám mây toàn diện với chi phí hợp lý. Việc mở rộng hệ thống trở nên dễ dàng hơn bao giờ hết với nền tảng này.',
    rating: 5
  }
]

export function Testimonials() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Khách hàng nói gì về VCLOUD
          </h2>
          <p className="text-xl text-gray-600">
            Những đánh giá từ khách hàng đã và đang sử dụng dịch vụ của chúng tôi
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>

              <div className="mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>

              <blockquote className="text-gray-600 italic">
                "{testimonial.content}"
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 
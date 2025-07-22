'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ServiceCarousel } from './ServiceCarousel';
import { services } from '../../data/services';

export function TechShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      ref={ref}
      className="py-20 bg-white/25 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div
            className="inline-block px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Technology Showcase
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Giải Pháp Điện Toán Đám Mây Hàng Đầu
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Hạ tầng đám mây hiệu suất cao được tin tưởng bởi hàng trăm doanh nghiệp với 3 trụ cột công nghệ tiên tiến
          </p>
        </motion.div>

        {/* Interactive Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-2xl p-8 md:p-12"
        >
          <ServiceCarousel 
            services={services}
            autoPlay={true}
            interval={5000}
          />
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-blue-600">99.9%</div>
            <div className="text-gray-600">Uptime Guarantee</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-emerald-600">1000+</div>
            <div className="text-gray-600">Doanh nghiệp tin tưởng</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-purple-600">24/7</div>
            <div className="text-gray-600">Hỗ trợ kỹ thuật</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-orange-600">5⭐</div>
            <div className="text-gray-600">Đánh giá khách hàng</div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Sẵn sàng trải nghiệm VCLOUD?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Bắt đầu hành trình chuyển đổi số với giải pháp cloud toàn diện từ VCLOUD. 
            Tư vấn miễn phí và hỗ trợ triển khai 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Dùng thử miễn phí
            </button>
            <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
              Tư vấn ngay
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 
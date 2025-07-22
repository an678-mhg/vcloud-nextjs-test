'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircleIcon, ShieldCheckIcon, ClockIcon } from '@heroicons/react/outline';
import { FinalCta } from '../../types/compute';

interface FinalCtaSectionProps {
  data: FinalCta;
}

export function FinalCtaSection({ data }: FinalCtaSectionProps) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const trustSignals = [
    {
      icon: ShieldCheckIcon,
      title: "ISO 27001 Certified",
      description: "Bảo mật tiêu chuẩn quốc tế"
    },
    {
      icon: CheckCircleIcon,
      title: "99.997% Uptime",
      description: "Cam kết độ tin cậy cao"
    },
    {
      icon: ClockIcon,
      title: "24/7 Support",
      description: "Hỗ trợ kỹ thuật liên tục"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Main CTA */}
          <div className="mb-16">
            <motion.h2 
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              {data.title}
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              {data.subtitle}
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 min-w-[200px]">
                {data.primaryButton}
              </button>
              <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 min-w-[200px]">
                {data.secondaryButton}
              </button>
            </motion.div>
            
            <motion.div 
              className="flex items-center justify-center space-x-2 text-green-600"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              <CheckCircleIcon className="w-5 h-5" />
              <span className="text-sm font-medium">{data.guarantee}</span>
            </motion.div>
          </div>

          {/* Trust signals */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-3xl mx-auto">
            {trustSignals.map((signal, index) => (
              <motion.div
                key={signal.title}
                className="flex flex-col items-center space-y-4 p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + (index * 0.1) }}
                whileHover={{ y: -4 }}
              >
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                  <signal.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">{signal.title}</h3>
                  <p className="text-gray-600 text-sm">{signal.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Customer testimonial */}
          <motion.div
            className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm max-w-lg mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="max-w-4xl mx-auto">
              <div className="text-4xl text-gray-400 mb-4">"</div>
              <blockquote className="text-lg lg:text-xl font-medium mb-6 italic text-gray-700">
                VCLOUD Compute giúp chúng tôi giảm 40% chi phí vận hành và tăng 3x hiệu suất xử lý. 
                Hệ thống ổn định, hỗ trợ 24/7 tuyệt vời.
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-gray-600">TN</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Trần Ngọc Anh</div>
                  <div className="text-gray-600 text-sm">CTO, TechCorp Vietnam</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 
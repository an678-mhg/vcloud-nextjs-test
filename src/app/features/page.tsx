'use client'

import { motion } from 'framer-motion'
import { ContactSection } from '../../components/sections/contact'

const FeaturesPage = () => {
  return (
    <main>
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold text-gray-800 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Tính năng nổi bật
            </motion.h2>
            <motion.p 
              className="mt-3 text-base sm:text-lg text-gray-600 max-w-xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Khám phá các tính năng mạnh mẽ của VCLOUD giúp doanh nghiệp của bạn vận hành hiệu quả hơn
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {/* Edge Cloud */}
            <motion.div 
              className="bg-white rounded-xl p-6 shadow-lg border-2 border-primary"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3V7.5a3 3 0 013-3h13.5a3 3 0 013 3v3.75a3 3 0 01-3 3m-13.5 0h13.5m-13.5 0a3 3 0 00-3 3v.75a3 3 0 003 3h13.5a3 3 0 003-3v-.75a3 3 0 00-3-3H5.25z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Edge Cloud</h3>
              <p className="text-sm text-gray-600 mb-4">
                Giải pháp điện toán biên mạnh mẽ, tối ưu hiệu suất và độ trễ cho ứng dụng của bạn
              </p>
              <ul className="space-y-3">
                <FeatureItem text="Hiệu suất vượt trội: Giảm độ trễ xuống dưới 10ms với công nghệ Edge Computing tiên tiến" />
                <FeatureItem text="Bảo mật đa lớp: Hệ thống bảo mật theo tiêu chuẩn ISO 27001 và PCI DSS" />
                <FeatureItem text="Auto-scaling: Tự động nở rộng tài nguyên theo nhu cầu sử dụng thực tế" />
                <FeatureItem text="Quản lý trực quan: Dashboard theo dõi thực hiện với các metrics chi tiết" />
              </ul>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Uptime</p>
                    <p className="text-lg font-semibold text-gray-900">99.99%</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Network Speed</p>
                    <p className="text-lg font-semibold text-gray-900">10 Gbps</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Storage Type</p>
                    <p className="text-lg font-semibold text-gray-900">NVMe SSD</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Edge Network */}
            <motion.div 
              className="bg-white rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Edge Network</h3>
              <p className="text-sm text-gray-600 mb-4">
                Mạng lưới CDN toàn cầu với hơn 100 PoP đảm bảo tốc độ truy cập và phân phối nội dung tối ưu
              </p>
              <ul className="space-y-3">
                <FeatureItem text="DDoS Protection: Bảo vệ chống tấn công DDoS với công suất lên đến 1Tbps" />
                <FeatureItem text="SSL/TLS Tự động: Tự động cấp và gia hạn chứng chỉ SSL miễn phí" />
                <FeatureItem text="Load Balancing: Cân bằng tải thông minh với thuật toán ML" />
                <FeatureItem text="Analytics: Phân tích traffic theo thời gian thực" />
              </ul>
            </motion.div>

            {/* Streaming Platform */}
            <motion.div 
              className="bg-white rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Streaming Platform</h3>
              <p className="text-sm text-gray-600 mb-4">
                Nền tảng streaming đa trễ thấp với chất lượng video được tối ưu và mạng lưới phân phối toàn cầu
              </p>
              <ul className="space-y-3">
                <FeatureItem text="Live Streaming: Độ trễ suất 3 giây với công nghệ WebRTC" />
                <FeatureItem text="Video on Demand: Tự động chuyển đổi và tối ưu định dạng video" />
                <FeatureItem text="Adaptive Bitrate: Tự động điều chỉnh chất lượng theo băng thông" />
                <FeatureItem text="DRM Support: Hỗ trợ đầy đủ các chuẩn DRM phổ biến" />
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <ContactSection />
    </main>
  )
}

const FeatureItem = ({ text }: { text: string }) => {
  const [title, description] = text.split(': ')
  
  return (
    <li className="flex items-start">
      <svg className="w-5 h-5 text-primary flex-shrink-0 mr-2 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
      </svg>
      <span className="text-sm">
        <strong className="text-gray-800">{title}:</strong>{' '}
        <span className="text-gray-600">{description}</span>
      </span>
    </li>
  )
}

export default FeaturesPage 
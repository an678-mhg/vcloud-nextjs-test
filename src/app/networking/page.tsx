'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '../../components/ui/button'
import Link from 'next/link'

const NetworkingPage = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [aboutRef, aboutInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [benefitsRef, benefitsInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [featuresRef, featuresInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [useCasesRef, useCasesInView] = useInView({ threshold: 0.1, triggerOnce: true })

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const services = [
    {
      icon: '🔒',
      title: 'Bảo mật mạng',
      description: 'Tường lửa thông minh, phân quyền truy cập chi tiết và bảo vệ khỏi các mối đe dọa mạng hiện đại.'
    },
    {
      icon: '⚡',
      title: 'Tối ưu hiệu suất',
      description: 'Tự động cân bằng tải, tối ưu định tuyến và đảm bảo độ trễ thấp nhất cho ứng dụng của bạn.'
    },
    {
      icon: '🌐',
      title: 'Quản lý mạng',
      description: 'Giao diện trực quan, giám sát real-time và tự động hóa các tác vụ quản lý mạng phức tạp.'
    }
  ]

  const benefits = [
    {
      title: 'Kết nối thông minh, kiến trúc linh hoạt',
      description: 'Thiết kế mạng tự động thích ứng với nhu cầu thay đổi, dễ dàng mở rộng và tái cấu hình.'
    },
    {
      title: 'Bảo mật từ tầng mạng',
      description: 'Bảo vệ đa lớp với firewall, VPN và phân quyền truy cập chi tiết đến từng tài nguyên.'
    },
    {
      title: 'Hiệu suất truyền tải tối ưu',
      description: 'Tối ưu băng thông, giảm độ trễ và đảm bảo chất lượng dịch vụ (QoS) cho các ứng dụng quan trọng.'
    },
    {
      title: 'Tự động hóa, dễ tích hợp DevOps',
      description: 'API đầy đủ, tích hợp CI/CD và tự động hóa triển khai hạ tầng mạng theo mô hình Infrastructure as Code.'
    }
  ]

  const features = [
    {
      title: 'Thiết lập mạng riêng ảo (VPC/VPN)',
      description: 'Tạo môi trường mạng riêng biệt, an toàn với khả năng tùy chỉnh định tuyến và kết nối liên vùng.'
    },
    {
      title: 'Tường lửa và phân quyền truy cập theo lớp',
      description: 'Kiểm soát lưu lượng mạng chi tiết với các quy tắc bảo mật linh hoạt và phân quyền theo vai trò.'
    },
    {
      title: 'Hỗ trợ kết nối nội bộ và liên vùng (interconnect)',
      description: 'Kết nối an toàn giữa các data center, cloud provider và môi trường hybrid với băng thông cao.'
    },
    {
      title: 'Khả năng theo dõi và cảnh báo lưu lượng bất thường',
      description: 'Giám sát real-time, phát hiện anomaly và cảnh báo proactive về các vấn đề bảo mật hoặc hiệu suất.'
    }
  ]

  const useCases = [
    {
      title: 'Thiết lập mạng riêng cho từng môi trường',
      description: 'Tách biệt hoàn toàn môi trường development, staging và production với các chính sách bảo mật riêng biệt.'
    },
    {
      title: 'Tăng cường bảo mật hệ thống bằng firewall',
      description: 'Triển khai tường lửa thông minh với khả năng học máy để phát hiện và ngăn chặn các mối đe dọa mới.'
    },
    {
      title: 'Phân tầng mạng cho kiến trúc ứng dụng',
      description: 'Thiết kế mạng theo mô hình multi-tier với các lớp web, application và database được bảo mật riêng biệt.'
    },
    {
      title: 'Mở rộng hệ thống dễ dàng theo từng dự án hoặc chiến dịch',
      description: 'Auto-scaling mạng theo nhu cầu, hỗ trợ traffic spikes và triển khai nhanh chóng cho các chiến dịch lớn.'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="bg-gradient-to-br from-[#2E1065] via-[#1A0B3D] to-[#0F0B3D] py-20 lg:py-32 relative overflow-hidden"
      >
        {/* Background decorations similar to hero */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 text-6xl animate-bounce opacity-20">☁️</div>
          <div className="absolute top-40 right-20 text-4xl animate-bounce opacity-30" style={{ animationDelay: '0.5s' }}>☁️</div>
          <div className="absolute bottom-40 left-1/4 text-5xl animate-bounce opacity-25" style={{ animationDelay: '1s' }}>☁️</div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Hạ tầng mạng đám mây linh hoạt, kết nối mạnh mẽ, bảo mật tối đa
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed">
              Kết nối linh hoạt, bảo mật vững chắc và sẵn sàng mở rộng. VCLOUD Networking giúp hệ thống của bạn vận hành mượt mà ở mọi quy mô.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-cyan-400 to-green-400 hover:from-cyan-500 hover:to-green-500 text-white px-8 py-3 text-lg">
                  Bắt đầu ngay
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 text-lg">
                Tìm hiểu thêm
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Các dịch vụ chính của VCLOUD Networking
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Chúng tôi cung cấp giải pháp mạng đám mây toàn diện từ thiết kế, triển khai đến hỗ trợ và tối ưu hóa hiệu suất liên tục
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-8 lg:gap-12"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-cyan-200"
              >
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8">
              Cloud Networking là gì?
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              Cloud Networking là giải pháp mạng trên nền tảng điện toán đám mây, cho phép doanh nghiệp thiết lập, quản lý và tối ưu hóa hệ thống kết nối giữa các máy chủ ảo, dịch vụ cloud, người dùng và các trung tâm dữ liệu. Đây là yếu tố cốt lõi giúp đảm bảo tốc độ truyền tải, bảo mật, và khả năng mở rộng cho hạ tầng số của doanh nghiệp.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={benefitsInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Lợi ích chính của CLOUD Networking
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={benefitsInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-8 lg:gap-12"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-cyan-200"
              >
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Tính năng nổi bật của Cloud Networking
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-8 lg:gap-12"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-cyan-400 border border-gray-100"
              >
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section ref={useCasesRef} className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={useCasesInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Tình huống ứng dụng thực tế
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={useCasesInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-8 lg:gap-12"
          >
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 group hover:border-cyan-200"
              >
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-cyan-600 transition-colors duration-300">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-[#2E1065] via-[#1A0B3D] to-[#0F0B3D]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              Tăng tốc kết nối, kiểm soát lưu lượng và bảo vệ toàn bộ hệ thống của bạn
            </h2>
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-cyan-400 to-green-400 hover:from-cyan-500 hover:to-green-500 text-white px-8 py-3 text-lg font-semibold">
                Liên hệ tư vấn miễn phí
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default NetworkingPage 
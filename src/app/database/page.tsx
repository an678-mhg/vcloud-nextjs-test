'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '../../components/ui/button'
import Link from 'next/link'

const DatabasePage = () => {
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
      icon: '💾',
      title: 'Lưu trữ dữ liệu',
      description: 'Chúng tôi xây dựng hệ thống lưu trữ từ nền tảng, tối ưu hóa cấu trúc dữ liệu, hiệu suất và bảo mật để giúp cơ sở dữ liệu của bạn hoạt động ổn định và tiếp cận đúng thông tin. Điều này mang lại truy xuất chất lượng cao và đảm bảo khoản đầu tư của bạn phát huy hiệu quả tối đa.'
    },
    {
      icon: '🚀',
      title: 'Tối ưu hiệu năng',
      description: 'Tối ưu hóa hiệu năng database mang lại khả năng xử lý tức thì cho hệ thống của bạn. Chúng tôi tạo ra các cấu hình được tùy chỉnh trên MySQL, PostgreSQL và MongoDB để đáp ứng những yêu cầu xử lý cao và thúc đẩy hiệu suất. Đây là cách nhanh chóng và có thể đo lường được để hỗ trợ tăng trưởng.'
    },
    {
      icon: '🔧',
      title: 'Quản trị hệ thống',
      description: 'Quản trị hiệu quả là chìa khóa để vận hành ổn định. Dịch vụ quản trị database của chúng tôi biến những yêu cầu phức tạp thành quy trình tự động và dễ giám sát. Từ backup đến monitoring, chúng tôi làm việc với sự rõ ràng và mục đích để đảm bảo hệ thống luôn sẵn sàng.'
    }
  ]

  const benefits = [
    {
      title: 'Hiệu năng vượt trội, ổn định 24/7',
      description: 'Tối ưu xử lý truy vấn, tốc độ đọc/ghi cao, đáp ứng nhu cầu dữ liệu lớn và thời gian thực.'
    },
    {
      title: 'Sao lưu và khôi phục dữ liệu',
      description: 'Hệ thống backup định kỳ, hỗ trợ khôi phục nhanh chóng giúp giảm thiểu rủi ro mất mát dữ liệu.'
    },
    {
      title: 'Bảo mật dữ liệu toàn diện',
      description: 'Tích hợp mã hóa dữ liệu, phân quyền truy cập, tường lửa và giám sát truy cập bất thường.'
    },
    {
      title: 'Quản lý đơn giản, dễ tích hợp',
      description: 'Hỗ trợ các hệ quản trị phổ biến như MySQL, PostgreSQL, MongoDB…, tích hợp API và giao diện quản trị thân thiện.'
    }
  ]

  const features = [
    {
      title: 'Triển khai nhanh các hệ quản trị CSDL phổ biến',
      description: 'Tạo database chỉ trong vài phút với các lựa chọn MySQL, PostgreSQL, MariaDB, MongoDB và nhiều hệ quản trị khác.'
    },
    {
      title: 'Khả năng mở rộng theo nhu cầu sử dụng',
      description: 'Dễ dàng tăng dung lượng lưu trữ, kết nối nhiều ứng dụng cùng lúc mà không ảnh hưởng hiệu suất hệ thống.'
    },
    {
      title: 'Tự động sao lưu định kỳ và snapshot theo yêu cầu',
      description: 'Tích hợp snapshot thủ công và backup hàng ngày, đảm bảo dữ liệu luôn sẵn sàng khôi phục khi cần thiết.'
    },
    {
      title: 'Tối ưu bảo mật và giám sát truy cập',
      description: 'Hệ thống cảnh báo đăng nhập bất thường, ghi log truy vấn, giới hạn IP truy cập và phân quyền chặt chẽ.'
    }
  ]

  const useCases = [
    {
      title: 'Ứng dụng quản lý khách hàng (CRM) cho doanh nghiệp SME',
      description: 'Dữ liệu khách hàng, lịch sử giao dịch, thông tin liên hệ... được lưu trữ tập trung trên cloud, dễ dàng truy cập và đồng bộ giữa các bộ phận.'
    },
    {
      title: 'Cổng thanh toán và hệ thống đơn hàng',
      description: 'Cloud Database đảm bảo tốc độ xử lý giao dịch cao, truy xuất đơn hàng chính xác và đồng thời phục vụ hàng nghìn kết nối từ người dùng cuối.'
    },
    {
      title: 'Lưu trữ dữ liệu cảm biến từ thiết bị IoT',
      description: 'Ghi nhận dữ liệu thời gian thực từ hàng trăm/thậm chí hàng nghìn thiết bị đầu cuối, phục vụ giám sát, cảnh báo và phân tích.'
    },
    {
      title: 'Làm backend dữ liệu cho mobile app',
      description: 'Hỗ trợ lưu trữ và đồng bộ dữ liệu người dùng (tài khoản, hành vi, nội dung...) với tốc độ cao, giúp ứng dụng mobile hoạt động mượt mà và ổn định.'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="bg-gradient-to-br from-[#2E1065] via-[#1A0B3D] to-[#0F0B3D] py-20 lg:py-32 relative overflow-hidden"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 text-6xl animate-bounce opacity-20">💾</div>
          <div className="absolute top-40 right-20 text-4xl animate-bounce opacity-30" style={{ animationDelay: '0.5s' }}>🗄️</div>
          <div className="absolute bottom-40 left-1/4 text-5xl animate-bounce opacity-25" style={{ animationDelay: '1s' }}>📊</div>
          <div className="absolute top-60 left-1/2 text-3xl animate-bounce opacity-20" style={{ animationDelay: '1.5s' }}>⚡</div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Lưu trữ và vận hành dữ liệu ổn định với Database
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed">
              Database hỗ trợ lưu trữ, truy xuất và mở rộng dữ liệu hiệu quả với độ bảo mật cao, sẵn sàng đáp ứng nhu cầu tăng trưởng của hệ thống doanh nghiệp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-cyan-400 to-green-400 hover:from-cyan-500 hover:to-green-500 text-white px-8 py-3 text-lg">
                  Trải nghiệm ngay
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
              Các dịch vụ chính của VCLOUD Database
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Chúng tôi cung cấp giải pháp cơ sở dữ liệu đám mây toàn diện từ thiết lập, quản lý đến tối ưu hóa hiệu suất và bảo mật liên tục
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
              Database là gì?
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              Database (Cơ sở dữ liệu) là hệ thống lưu trữ thông tin có cấu trúc, cho phép truy xuất, xử lý và quản lý dữ liệu một cách hiệu quả. Trong môi trường cloud, cloud database là dịch vụ cung cấp nền tảng lưu trữ dữ liệu trực tuyến, hỗ trợ sao lưu, mở rộng và tối ưu hiệu năng cho ứng dụng và phân tích dữ liệu doanh nghiệp.
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
              Lợi ích chính của Cloud Database
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
              Tính năng nổi bật của Cloud Database
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
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Trải nghiệm ngay Cloud Database giải pháp cơ sở dữ liệu hiện đại
            </h2>
            <p className="text-lg lg:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Liên hệ ngay để được tư vấn và triển khai Cloud Database cho doanh nghiệp chuyển đổi số của bạn.
            </p>
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

export default DatabasePage 
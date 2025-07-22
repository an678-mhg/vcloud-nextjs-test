'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '../../components/ui/button'
import Link from 'next/link'

const MonitoringPage = () => {
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
      icon: '📊',
      title: 'Giám sát hiệu năng',
      description: 'Chúng tôi xây dựng hệ thống giám sát từ nền tảng, tối ưu hóa việc thu thập dữ liệu, phân tích hiệu năng và cảnh báo để giúp hệ thống của bạn hoạt động ổn định và phát hiện vấn đề sớm. Điều này mang lại khả năng giám sát chất lượng cao và đảm bảo khoản đầu tư của bạn phát huy hiệu quả tối đa.'
    },
    {
      icon: '🚨',
      title: 'Cảnh báo thông minh',
      description: 'Hệ thống cảnh báo thông minh mang lại khả năng phát hiện sự cố tức thì cho hệ thống của bạn. Chúng tôi tạo ra các cảnh báo được tùy chỉnh qua Email, SMS và Webhook để phản ứng với những tình huống bất thường và thúc đẩy khắc phục nhanh chóng. Đây là cách nhanh chóng và có thể đo lường được để hỗ trợ vận hành.'
    },
    {
      icon: '📈',
      title: 'Báo cáo & phân tích',
      description: 'Báo cáo chi tiết là chìa khóa để tối ưu hóa hiệu suất. Dịch vụ báo cáo và phân tích của chúng tôi biến những dữ liệu phức tạp thành insights hành động và dashboard trực quan. Từ metrics đến trends, chúng tôi làm việc với sự rõ ràng và mục đích để đưa ra quyết định dựa trên dữ liệu thực tế.'
    }
  ]

  const benefits = [
    {
      title: 'Phát hiện và cảnh báo sớm sự cố',
      description: 'Hệ thống gửi cảnh báo tức thì khi có lỗi, quá tải hoặc bất thường, giúp giảm thời gian gián đoạn dịch vụ.'
    },
    {
      title: 'Tối ưu hiệu năng ứng dụng và hạ tầng',
      description: 'Theo dõi liên tục CPU, RAM, ổ đĩa, băng thông... để điều chỉnh cấu hình phù hợp và tăng hiệu suất sử dụng tài nguyên.'
    },
    {
      title: 'Ra quyết định dựa trên dữ liệu thực tế',
      description: 'Báo cáo trực quan giúp đội ngũ kỹ thuật và quản trị viên hiểu rõ tình trạng hệ thống và đưa ra quyết định nhanh chóng.'
    },
    {
      title: 'Hỗ trợ giám sát đa tầng, đa dịch vụ',
      description: 'Monitoring toàn diện từ hệ điều hành, ứng dụng, cơ sở dữ liệu đến dịch vụ mạng và container (Docker, Kubernetes...).'
    }
  ]

  const features = [
    {
      title: 'Theo dõi tài nguyên theo thời gian thực (real-time)',
      description: 'Hiển thị dữ liệu trực tiếp về mức sử dụng CPU, RAM, network, IOPS… theo từng VM, container hoặc vùng triển khai.'
    },
    {
      title: 'Cảnh báo tự động và cấu hình linh hoạt',
      description: 'Thiết lập cảnh báo theo ngưỡng (threshold), tự động gửi email, SMS, hoặc webhook khi có sự cố.'
    },
    {
      title: 'Báo cáo trực quan và lịch sử truy vết',
      description: 'Dashboard chi tiết, biểu đồ theo thời gian, ghi log giúp theo dõi và phân tích nguyên nhân gốc rễ (root cause).'
    },
    {
      title: 'Tích hợp với hệ thống DevOps và các công cụ giám sát khác',
      description: 'Dễ dàng kết nối Prometheus, Grafana, Zabbix, API RESTful để mở rộng khả năng quan sát toàn bộ hệ sinh thái.'
    }
  ]

  const useCases = [
    {
      title: 'Đảm bảo SLA cho dịch vụ tài chính trực tuyến',
      description: 'Các doanh nghiệp fintech sử dụng Monitoring để giám sát độ trễ giao dịch, cảnh báo tức thì khi xảy ra lỗi thanh toán hoặc gián đoạn truy cập – đảm bảo cam kết SLA với khách hàng.'
    },
    {
      title: 'Hỗ trợ đội vận hành trong thời gian triển khai chiến dịch lớn',
      description: 'Trong các dịp ra mắt sản phẩm, flash sale hoặc marketing peak, hệ thống monitoring giúp đội ngũ phản ứng nhanh với các tình huống bất ngờ như traffic tăng đột biến, server quá tải hoặc lỗi hệ thống.'
    },
    {
      title: 'Giám sát hệ thống vận hành nội bộ của tập đoàn đa quốc gia',
      description: 'Các doanh nghiệp lớn triển khai hệ thống Monitoring để theo dõi hoạt động từ nhiều chi nhánh, giúp bộ phận IT tập trung điều phối, không bị động xử lý sự cố từ xa.'
    },
    {
      title: 'Hỗ trợ điều tra và khắc phục sự cố sau vận hành',
      description: 'Nhờ dữ liệu log và biểu đồ thời gian thực, đội DevOps có thể truy vết lại nguyên nhân gốc rễ (root cause) sau khi xảy ra sự cố – từ đó cải thiện hệ thống và giảm thiểu lặp lại lỗi tương tự.'
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
          <div className="absolute top-20 left-10 text-6xl animate-bounce opacity-20">📊</div>
          <div className="absolute top-40 right-20 text-4xl animate-bounce opacity-30" style={{ animationDelay: '0.5s' }}>🚨</div>
          <div className="absolute bottom-40 left-1/4 text-5xl animate-bounce opacity-25" style={{ animationDelay: '1s' }}>📈</div>
          <div className="absolute top-60 left-1/2 text-3xl animate-bounce opacity-20" style={{ animationDelay: '1.5s' }}>⚡</div>
          <div className="absolute bottom-60 right-1/3 text-4xl animate-bounce opacity-15" style={{ animationDelay: '2s' }}>🔍</div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Giám sát hệ thống cloud theo thời gian thực, 24/7
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed">
              Monitoring giúp theo dõi hiệu năng theo thời gian thực, phát hiện bất thường kịp thời và đảm bảo hệ thống vận hành ổn định, liên tục 24/7.
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
              Các dịch vụ chính của VCLOUD Monitoring
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Chúng tôi cung cấp giải pháp giám sát hệ thống đám mây toàn diện từ thiết lập, cảnh báo đến phân tích và tối ưu hóa hiệu suất liên tục
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
              Monitoring là gì?
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              Monitoring là quá trình theo dõi, thu thập và phân tích dữ liệu vận hành của hạ tầng như máy chủ, ứng dụng, cơ sở dữ liệu và mạng. Mục tiêu là đảm bảo hệ thống luôn hoạt động ổn định, hiệu quả và an toàn. Trong môi trường cloud, cloud monitoring giúp doanh nghiệp giám sát tập trung toàn bộ tài nguyên theo thời gian thực, phát hiện sớm sự cố và chủ động xử lý để duy trì chất lượng dịch vụ.
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
              Lợi ích chính của Cloud Monitoring
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
              Tính năng nổi bật của Cloud Monitoring
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
              Trải nghiệm giải pháp Cloud Monitoring toàn diện
            </h2>
            <p className="text-lg lg:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Đảm bảo hệ thống luôn hoạt động ổn định, hiệu quả và an toàn với giải pháp monitoring 24/7 của chúng tôi.
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

export default MonitoringPage 
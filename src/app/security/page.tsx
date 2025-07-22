'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '../../components/ui/button'
import Link from 'next/link'

const SecurityPage = () => {
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
      icon: '🛡️',
      title: 'Phòng chống tấn công',
      description: 'Chúng tôi xây dựng hệ thống phòng thủ đa lớp từ nền tảng, tối ưu hóa việc phát hiện và ngăn chặn các mối đe dọa mạng như DDoS, malware, phishing và tấn công zero-day. Điều này mang lại khả năng bảo vệ chất lượng cao và đảm bảo hệ thống của bạn luôn an toàn trước các cuộc tấn công hiện đại.'
    },
    {
      icon: '🔐',
      title: 'Kiểm soát truy cập',
      description: 'Hệ thống kiểm soát truy cập tiên tiến mang lại khả năng quản lý danh tính và quyền hạn tức thì cho hệ thống của bạn. Chúng tôi triển khai các giải pháp IAM, MFA và Zero Trust để đảm bảo chỉ những người dùng được ủy quyền mới có thể truy cập tài nguyên. Đây là cách hiệu quả và có thể kiểm soát được để bảo vệ dữ liệu nhạy cảm.'
    },
    {
      icon: '📋',
      title: 'Tuân thủ tiêu chuẩn',
      description: 'Tuân thủ quy định là chìa khóa để duy trì uy tín và tránh rủi ro pháp lý. Dịch vụ tuân thủ tiêu chuẩn của chúng tôi giúp doanh nghiệp đáp ứng các yêu cầu như ISO 27001, SOC 2, GDPR và PCI DSS. Từ audit đến documentation, chúng tôi làm việc với sự chuyên nghiệp để đảm bảo hệ thống luôn tuân thủ các tiêu chuẩn quốc tế.'
    }
  ]

  const benefits = [
    {
      title: 'Bảo vệ dữ liệu trước các cuộc tấn công mạng',
      description: 'Hệ thống bảo mật đa lớp với firewall, IDS/IPS, anti-malware và encryption để ngăn chặn các mối đe dọa từ bên ngoài và bên trong.'
    },
    {
      title: 'Kiểm soát truy cập chính xác, phân quyền linh hoạt',
      description: 'Quản lý danh tính và truy cập (IAM) với xác thực đa yếu tố (MFA), phân quyền theo vai trò và giám sát hoạt động người dùng.'
    },
    {
      title: 'Tuân thủ tiêu chuẩn bảo mật quốc tế',
      description: 'Đáp ứng các yêu cầu tuân thủ như ISO 27001, SOC 2, GDPR, PCI DSS với documentation và audit trail đầy đủ.'
    },
    {
      title: 'Giám sát an ninh liên tục, cảnh báo theo thời gian thực',
      description: 'SIEM và SOC 24/7 để phát hiện sớm các hoạt động bất thường, phản ứng nhanh chóng với các sự cố bảo mật.'
    }
  ]

  const features = [
    {
      title: 'Tường lửa và bảo mật mạng tiên tiến',
      description: 'Triển khai WAF, DDoS protection, network segmentation và traffic filtering để bảo vệ hạ tầng mạng khỏi các cuộc tấn công.'
    },
    {
      title: 'Mã hóa dữ liệu end-to-end',
      description: 'Encryption dữ liệu tại rest và in-transit với các thuật toán mã hóa tiêu chuẩn quốc tế, key management an toàn.'
    },
    {
      title: 'Quản lý danh tính và truy cập (IAM)',
      description: 'Single Sign-On (SSO), Multi-Factor Authentication (MFA), role-based access control và privileged access management.'
    },
    {
      title: 'Giám sát bảo mật và phản ứng sự cố',
      description: 'Security Information and Event Management (SIEM), threat hunting, incident response và forensic analysis.'
    }
  ]

  const useCases = [
    {
      title: 'Bảo mật hệ thống tài chính và ngân hàng',
      description: 'Các tổ chức tài chính sử dụng Cloud Security để bảo vệ giao dịch, dữ liệu khách hàng và tuân thủ các quy định nghiêm ngặt như PCI DSS, Basel III – đảm bảo an toàn tuyệt đối cho các hoạt động tài chính.'
    },
    {
      title: 'Bảo vệ dữ liệu y tế và thông tin cá nhân',
      description: 'Các bệnh viện và tổ chức y tế triển khai giải pháp bảo mật để bảo vệ hồ sơ bệnh án, thông tin cá nhân nhạy cảm và tuân thủ HIPAA, GDPR.'
    },
    {
      title: 'An ninh mạng cho doanh nghiệp công nghệ',
      description: 'Các công ty công nghệ sử dụng Security để bảo vệ mã nguồn, sở hữu trí tuệ và dữ liệu khách hàng khỏi các cuộc tấn công APT và industrial espionage.'
    },
    {
      title: 'Tuân thủ quy định cho doanh nghiệp đa quốc gia',
      description: 'Các tập đoàn lớn triển khai Cloud Security để đảm bảo tuân thủ các quy định khác nhau tại nhiều quốc gia, từ GDPR ở châu Âu đến CCPA ở California.'
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
          <div className="absolute top-20 left-10 text-6xl animate-bounce opacity-20">🛡️</div>
          <div className="absolute top-40 right-20 text-4xl animate-bounce opacity-30" style={{ animationDelay: '0.5s' }}>🔐</div>
          <div className="absolute bottom-40 left-1/4 text-5xl animate-bounce opacity-25" style={{ animationDelay: '1s' }}>🔒</div>
          <div className="absolute top-60 left-1/2 text-3xl animate-bounce opacity-20" style={{ animationDelay: '1.5s' }}>🚨</div>
          <div className="absolute bottom-60 right-1/3 text-4xl animate-bounce opacity-15" style={{ animationDelay: '2s' }}>⚠️</div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Bảo mật hạ tầng cloud toàn diện, kiểm soát chặt chẽ
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed">
              Cloud Security bảo vệ dữ liệu, ứng dụng và hạ tầng khỏi các mối đe dọa mạng, đồng thời tăng cường kiểm soát truy cập và duy trì an ninh toàn hệ thống.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-cyan-400 to-green-400 hover:from-cyan-500 hover:to-green-500 text-white px-8 py-3 text-lg">
                  Tăng cường bảo mật
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
              Các dịch vụ chính của VCLOUD Security
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Chúng tôi cung cấp giải pháp bảo mật hạ tầng đám mây toàn diện từ phòng chống tấn công, kiểm soát truy cập đến tuân thủ tiêu chuẩn bảo mật quốc tế
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
              Security là gì?
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              Security trong môi trường cloud là tập hợp các giải pháp và công cụ bảo mật được thiết kế để bảo vệ dữ liệu, ứng dụng và tài nguyên hạ tầng trên nền tảng đám mây. Cloud Security giúp doanh nghiệp phát hiện sớm rủi ro, ngăn chặn truy cập trái phép và duy trì sự ổn định, tin cậy trong suốt quá trình vận hành hệ thống.
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
              Lợi ích chính của Cloud Security
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
              Tính năng nổi bật của Cloud Security
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
              Bảo vệ hệ thống của bạn với Cloud Security hàng đầu
            </h2>
            <p className="text-lg lg:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Triển khai giải pháp bảo mật toàn diện để bảo vệ dữ liệu, ứng dụng và hạ tầng khỏi mọi mối đe dọa.
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

export default SecurityPage 
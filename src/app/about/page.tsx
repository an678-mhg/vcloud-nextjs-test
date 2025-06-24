'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Về VCLOUD
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Chúng tôi là đơn vị tiên phong trong lĩnh vực điện toán đám mây tại Việt Nam, 
              mang đến giải pháp công nghệ hiện đại và đáng tin cậy cho doanh nghiệp của bạn.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="mb-6">
                <span className="text-primary text-4xl">⚡</span>
              </div>
              <h2 className="text-2xl font-bold mb-4">Sứ mệnh</h2>
              <p className="text-gray-600">
                Chúng tôi cam kết mang đến những giải pháp điện toán đám mây 
                tiên tiến nhất, giúp doanh nghiệp Việt Nam tăng tốc quá trình 
                chuyển đổi số và phát triển bền vững trong kỷ nguyên số.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="mb-6">
                <span className="text-primary text-4xl">🎯</span>
              </div>
              <h2 className="text-2xl font-bold mb-4">Tầm nhìn</h2>
              <p className="text-gray-600">
                Trở thành nền tảng điện toán đám mây hàng đầu Việt Nam, 
                được tin dùng bởi các doanh nghiệp trong và ngoài nước, 
                đóng góp tích cực vào sự phát triển của cộng đồng công nghệ Việt Nam.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Giá trị cốt lõi</h2>
            <p className="text-gray-600">
              Những giá trị định hình văn hóa và cách chúng tôi phục vụ khách hàng
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🛡️",
                title: "An toàn & Bảo mật",
                description: "Cam kết bảo vệ dữ liệu khách hàng với các tiêu chuẩn bảo mật cao nhất"
              },
              {
                icon: "⚡",
                title: "Hiệu suất & Ổn định",
                description: "Đảm bảo hệ thống vận hành ổn định 24/7 với hiệu suất cao"
              },
              {
                icon: "🤝",
                title: "Hỗ trợ tận tâm",
                description: "Đội ngũ kỹ thuật chuyên nghiệp, hỗ trợ 24/7"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 text-center"
              >
                <span className="text-4xl mb-4 block">{value.icon}</span>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Đội ngũ của chúng tôi</h2>
            <p className="text-gray-600">
              Những chuyên gia công nghệ với kinh nghiệm dày dặn trong lĩnh vực điện toán đám mây
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                name: "Nguyễn Văn A",
                role: "CEO",
                image: "https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/team/ceo.jpg"
              },
              {
                name: "Trần Thị B",
                role: "CTO",
                image: "https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/team/cto.jpg"
              },
              {
                name: "Lê Văn C",
                role: "Technical Director",
                image: "https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/team/tech-director.jpg"
              },
              {
                name: "Phạm Thị D",
                role: "Customer Success Manager",
                image: "https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/team/cs-manager.jpg"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Khách hàng" },
              { number: "99.99%", label: "Uptime" },
              { number: "24/7", label: "Hỗ trợ" },
              { number: "5+", label: "Năm kinh nghiệm" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 
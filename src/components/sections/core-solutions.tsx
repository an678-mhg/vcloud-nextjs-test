'use client'

import React from 'react'
import { CheckCircleIcon } from '@heroicons/react/outline'

const CoreSolutions = () => {
  const solutions = [
    {
      id: 1,
      icon: '🚀',
      title: 'Hạ Tầng & Hiệu Suất Vượt Trội',
      description: 'Trung tâm dữ liệu cấp 3 chuẩn quốc tế với hiệu suất vượt trội, đảm bảo ứng dụng của bạn luôn chạy mượt mà và ổn định',
      features: [
        'Trung tâm dữ liệu cấp 3 chuẩn quốc tế',
        'Siêu tốc độ xử lý: 98.000 thao tác/giây',
        'Băng thông mạng: 9.04 Gbps tối đa',
        'Cam kết hoạt động 99.997% thời gian'
      ],
      highlight: {
        value: '99.997%',
        label: 'Thời gian hoạt động lên tới'
      }
    },
    {
      id: 2,
      icon: '📈',
      title: 'Mở Rộng & Tích Hợp Linh Hoạt',
      description: 'Tự động mở rộng tức thời và tích hợp liền mạch với hệ thống hiện tại, hỗ trợ mọi nhu cầu phát triển doanh nghiệp',
      features: [
        'Tự động mở rộng tức thì theo nhu cầu',
        'Đa dịch vụ đám mây: Hạ tầng & Nền tảng',
        'Tích hợp giao diện với hệ thống hiện tại',
        'Hỗ trợ container và điều phối ứng dụng'
      ],
      highlight: {
        value: '1 phút',
        label: 'Triển khai ứng dụng nhanh nhất'
      }
    },
    {
      id: 3,
      icon: '⚙️',
      title: 'Quản Lý & Hỗ Trợ Chuyên Nghiệp',
      description: 'Cổng quản lý tự phục vụ hiện đại và đội ngũ hỗ trợ 24/7, giúp bạn quản lý đám mây dễ dàng và hiệu quả',
      features: [
        'Cổng tự phục vụ trực quan và dễ sử dụng',
        'Hỗ trợ kỹ thuật 24/7 chuyên nghiệp',
        'Giám sát và cảnh báo tự động',
        'Triển khai và quản lý nhanh chóng'
      ],
      highlight: {
        value: '24/7',
        label: 'Hỗ trợ kỹ thuật chuyên nghiệp'
      }
    }
  ]

  const stats = [
    {
      value: '15+',
      label: 'Doanh nghiệp lớn tin tưởng'
    },
    {
      value: '2h15m',
      label: 'Chuyển đổi hệ thống nhanh nhất'
    },
    {
      value: '550MB/s',
      label: 'Tốc độ ghi dữ liệu'
    },
    {
      value: '1.2GB/s',
      label: 'Tốc độ đọc dữ liệu'
    }
  ]

  return (
    <section className="py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Đã xoá tiêu đề và mô tả theo yêu cầu */}
        </div>

        {/* Solutions Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 border border-gray-100"
            >
              <div className="text-4xl mb-4">{solution.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {solution.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {solution.description}
              </p>
              
              <ul className="space-y-3 mb-6">
                {solution.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-vcloud-cyan mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-gradient-to-r from-vcloud-cyan to-vcloud-green rounded-lg p-6 flex flex-col items-center justify-center mt-4">
                <div className="text-3xl md:text-4xl font-extrabold text-white mb-2">
                  {solution.highlight.value}
                </div>
                <div className="text-base md:text-lg text-white font-semibold text-center">
                  {solution.highlight.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-vcloud-navy to-vcloud-navy-dark rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Hiệu Suất Thực Tế Đã Được Chứng Minh
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-vcloud-cyan mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
      </div>
    </section>
  )
}

export default CoreSolutions 
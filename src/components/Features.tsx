'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';
import {
  ServerIcon,
  CloudIcon,
  ShieldCheckIcon,
  CogIcon,
  DatabaseIcon,
  ChartBarIcon,
  LightningBoltIcon,
  GlobeIcon,
  CubeTransparentIcon
} from '@heroicons/react/outline';

const features = [
  {
    name: 'Kết nối người dùng và ứng dụng',
    description: 'Hiện đại hóa mạng lưới và bảo vệ lực lượng lao động khỏi các cuộc tấn công lừa đảo và email. Bảo mật ứng dụng doanh nghiệp và duyệt web.',
    icon: GlobeIcon,
    color: 'bg-blue-500'
  },
  {
    name: 'Bảo vệ và tăng tốc website',
    description: 'Sử dụng WAF, DDoS và bot protection hàng đầu trong ngành để bảo vệ website, ứng dụng và API của bạn trong khi tăng tốc hiệu suất với CDN siêu nhanh của chúng tôi.',
    icon: ShieldCheckIcon,
    color: 'bg-green-500'
  },
  {
    name: 'Xây dựng và mở rộng ứng dụng AI',
    description: 'Xây dựng demo AI rất dễ dàng. Sản xuất khó hơn. Sử dụng Workers AI để tự động mở rộng lên và xuống mà không cần cung cấp, chạy suy luận gần với người dùng.',
    icon: CubeTransparentIcon,
    color: 'bg-purple-500'
  }
];

export default function Features() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nền tảng điện toán đám mây toàn diện
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Hơn 60 dịch vụ đám mây trên một nền tảng thống nhất, được cung cấp độc đáo bởi mạng lưới đám mây toàn cầu.
          </p>
        </div>

        <div 
          ref={ref}
          className={`mt-20 grid gap-8 md:grid-cols-3 transition-all duration-1000 transform ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {features.map((feature) => (
            <div
              key={feature.name}
              className="relative p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className={`absolute h-10 w-10 rounded-xl ${feature.color} flex items-center justify-center`}>
                <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div className="mt-16">
                <h3 className="text-xl font-medium text-gray-900">{feature.name}</h3>
                <p className="mt-4 text-base text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex rounded-md shadow">
            <a
              href="/features"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Tìm hiểu thêm
              <LightningBoltIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 
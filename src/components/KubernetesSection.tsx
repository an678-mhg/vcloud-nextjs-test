'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';
import {
  ArrowsUpDownIcon,
  ShieldCheckIcon,
  Cog6ToothIcon,
  ChartBarIcon,
} from '@heroicons/react/24/solid';

const features = [
  {
    name: 'Auto-scaling',
    description: 'Tự động mở rộng hoặc thu hẹp tài nguyên dựa trên nhu cầu thực tế',
    icon: ArrowsUpDownIcon,
  },
  {
    name: 'Bảo mật cao',
    description: 'Hệ thống bảo mật đa lớp với chứng chỉ và mã hóa đầu cuối',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Quản lý dễ dàng',
    description: 'Giao diện quản lý trực quan, API đầy đủ và tài liệu chi tiết',
    icon: Cog6ToothIcon,
  },
  {
    name: 'Giám sát thời gian thực',
    description: 'Theo dõi hiệu suất và tài nguyên theo thời gian thực',
    icon: ChartBarIcon,
  },
];

const KubernetesSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="kubernetes" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`text-center transition-all duration-1000 transform ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Kubernetes as a Service
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Nền tảng container hiện đại, linh hoạt và bảo mật
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={feature.name}
                className={`relative transition-all duration-700 delay-${index * 100} ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="bg-white rounded-lg shadow-lg p-6 h-full">
                  <feature.icon className="h-12 w-12 text-green-500 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.name}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KubernetesSection; 
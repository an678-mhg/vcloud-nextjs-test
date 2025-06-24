'use client';

import React from 'react'
import {
  CubeTransparentIcon,
  PlusIcon,
  TrashIcon,
  ArrowPathIcon,
  ChartBarIcon,
  CommandLineIcon,
  ServerIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  RocketLaunchIcon,
  ComputerDesktopIcon,
  Cog6ToothIcon,
  ArrowsPointingOutIcon,
  CheckCircleIcon,
  LockClosedIcon,
  ShieldExclamationIcon,
  PhoneIcon,
  BoltIcon,
  CircleStackIcon
} from '@heroicons/react/24/solid'

const clusters = [
  {
    id: '1',
    name: 'prod-cluster',
    version: '1.26',
    nodeCount: 5,
    status: 'running',
    region: 'asia-southeast1',
    created: '2024-01-01',
  },
  {
    id: '2',
    name: 'staging-cluster',
    version: '1.25',
    nodeCount: 3,
    status: 'updating',
    region: 'asia-southeast1',
    created: '2024-01-02',
  },
  {
    id: '3',
    name: 'dev-cluster',
    version: '1.26',
    nodeCount: 2,
    status: 'running',
    region: 'asia-southeast1',
    created: '2024-01-03',
  },
]

// Pricing data
const pricingData = [
  { feature: "Quản lý cluster production high-availability", vcloud: "MIỄN PHÍ**", compA: "945.000 VNĐ", compB: "1.720.000 VNĐ", compC: "1.720.000 VNĐ", compD: "1.720.000 VNĐ" },
  { feature: "Lưu lượng Egress", vcloud: "MIỄN PHÍ**", compA: "225 VNĐ / GiB", compB: "1.175 VNĐ – 2.125 VNĐ / GiB", compC: "1.650 VNĐ – 1.875 VNĐ / GiB", compD: "1.650 VNĐ – 1.875 VNĐ / GiB" },
  // ... more pricing data
];

// FAQ data
const faqData = [
  {
    question: "Managed Kubernetes service của VCLOUD là gì?",
    answer: "Đây là một dịch vụ quản lý hoàn toàn vòng đời của các Kubernetes cluster, bao gồm cài đặt, cập nhật, mở rộng và bảo trì master nodes (control plane). Điều này cho phép bạn tập trung vào việc triển khai ứng dụng thay vì quản lý hạ tầng Kubernetes phức tạp."
  },
  // ... more FAQ items
];

// Benefits data
const benefits = [
  {
    icon: RocketLaunchIcon,
    title: 'Cấp phát "one-click"',
    description: 'Cấp phát worker nodes chỉ bằng một cú nhấp chuột qua portal, API, hoặc Terraform.'
  },
  {
    icon: ComputerDesktopIcon,
    title: 'Hỗ trợ GPU worker nodes',
    description: 'Chạy các workload nặng về GPU như machine learning, xử lý video, và gaming.'
  },
  // ... more benefits
];

export default function KubernetesPage() {
  const [activePool, setActivePool] = React.useState(1);
  const [pools, setPools] = React.useState([{ id: 1 }]);

  const addPool = () => {
    const newPool = { id: pools.length + 1 };
    setPools([...pools, newPool]);
  };

  const removePool = (id: number) => {
    if (pools.length > 1) {
      setPools(pools.filter(pool => pool.id !== id));
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#00AFCA] text-white py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            Managed Kubernetes VCLOUD
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8">
            Giải pháp Kubernetes mạnh mẽ, linh hoạt và tiết kiệm chi phí để triển khai và quản lý ứng dụng của bạn một cách dễ dàng.
          </p>
          <button className="bg-white text-[#00AFCA] font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 hover:bg-gray-100">
            Bắt đầu ngay
          </button>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <ServerIcon className="w-12 h-12 text-[#00AFCA] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Hỗ trợ Bare-Metal</h3>
              <p className="text-gray-600">
                Hỗ trợ Bare-Metal cho các worker node giúp cải thiện độ trễ và hiệu suất vượt trội cho ứng dụng của bạn.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <ShieldCheckIcon className="w-12 h-12 text-[#00AFCA] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quản lý Cluster Miễn Phí</h3>
              <p className="text-gray-600">
                Quản lý cluster cấp độ production hoàn toàn miễn phí với cam kết SLA 99.9%, đảm bảo sự ổn định.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <CurrencyDollarIcon className="w-12 h-12 text-[#00AFCA] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Giá Trị Vượt Trội</h3>
              <p className="text-gray-600">
                Mức giá cạnh tranh cho worker nodes, tương đương với máy chủ ảo (VMs) và Bare Metal của chúng tôi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-6">
            Công cụ Tính toán Managed Kubernetes VCLOUD
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
            {/* Calculator Form */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tên Cluster
                </label>
                <input
                  type="text"
                  defaultValue="Cluster-VCLOUD-1"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#00AFCA] focus:ring-[#00AFCA]"
                />
              </div>

              {/* Pools */}
              {pools.map(pool => (
                <div key={pool.id} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-semibold">Pool {pool.id}</h4>
                    {pools.length > 1 && (
                      <button
                        onClick={() => removePool(pool.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        &times; Xóa Pool
                      </button>
                    )}
                  </div>
                  {/* Pool Configuration */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Pool form fields */}
                  </div>
                </div>
              ))}

              <button
                onClick={addPool}
                className="text-[#00AFCA] hover:text-[#008CBA] font-medium flex items-center"
              >
                + Thêm pool
              </button>

              {/* Total Cost */}
              <div className="border-t border-gray-200 pt-6 mt-6">
                <h4 className="text-lg font-semibold mb-2">Dịch vụ đã chọn</h4>
                <div className="text-3xl font-bold text-[#00AFCA]">
                  0 VNĐ <span className="text-sm font-normal text-gray-500">(Chưa VAT)</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#00AFCA] hover:bg-[#008CBA] text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
                  Bắt đầu
                </button>
                <button className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
                  Liên hệ Sales
                </button>
                <button className="border border-gray-400 hover:bg-gray-100 text-gray-700 font-semibold py-3 px-8 rounded-lg transition duration-300">
                  Xuất ước tính
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-12">
            Ưu điểm của VCLOUD Managed Kubernetes
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-[#00AFCA]" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-12">
            Câu hỏi thường gặp
          </h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <details key={index} className="group bg-white rounded-lg">
                <summary className="flex justify-between items-center cursor-pointer p-6">
                  <span className="font-medium">{faq.question}</span>
                  <span className="ml-6 flex-shrink-0">+</span>
                </summary>
                <div className="p-6 bg-white">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#00AFCA] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Thử giải pháp của chúng tôi để xây dựng Managed Kubernetes VCLOUD tối ưu
            </h2>
            <button className="bg-white text-[#00AFCA] font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 hover:bg-gray-100">
              Chạy Cluster
            </button>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-12">
            Các sản phẩm khác của VCLOUD
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <BoltIcon className="w-12 h-12 text-[#00AFCA] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Function as a Service</h3>
              <p className="text-gray-600 mb-4">
                Dịch vụ serverless computing để chạy mã trong môi trường sẵn sàng.
              </p>
              <a href="#" className="text-[#00AFCA] hover:text-[#008CBA] font-semibold">
                Tìm hiểu thêm &rarr;
              </a>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <CircleStackIcon className="w-12 h-12 text-[#00AFCA] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Managed Logging</h3>
              <p className="text-gray-600 mb-4">
                Thu thập log từ tất cả các máy chủ của bạn vào một kho lưu trữ duy nhất.
              </p>
              <a href="#" className="text-[#00AFCA] hover:text-[#008CBA] font-semibold">
                Tìm hiểu thêm &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 
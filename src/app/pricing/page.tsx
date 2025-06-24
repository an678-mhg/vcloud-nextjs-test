'use client'

import { useState } from 'react'
import { computePlans } from '@/lib/compute-plans'
import Link from 'next/link'

const CheckmarkIcon = () => (
  <svg className="w-5 h-5 text-[#00C4B3] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
  </svg>
)

const ComputeCard = ({ plan }: { plan: typeof computePlans[0] }) => (
  <div className="pricing-card bg-white p-6 rounded-lg shadow-md border-t-4 border-[#00C4B3] min-h-[600px] flex flex-col">
    {/* Card Header */}
    <div className="flex-none">
      <h3 className="font-bold text-lg mb-4 text-center text-[#0D5E56] uppercase">{plan.name.toUpperCase()}</h3>
    </div>
    
    {/* Card Content */}
    <div className="flex-grow">
      <ul className="space-y-3">
        <li className="flex items-center">
          <CheckmarkIcon /><span><strong>{plan.vcpu} vCPU</strong></span>
        </li>
        <li className="flex items-center">
          <CheckmarkIcon /><span><strong>{plan.ram} GB</strong> RAM</span>
        </li>
        <li className="flex items-center">
          <CheckmarkIcon /><span>Tùy chỉnh dung lượng</span>
        </li>
        <li className="flex items-center">
          <CheckmarkIcon /><span><strong>10 Gbps</strong> Băng thông Uplink</span>
        </li>
        <li className="flex items-center">
          <CheckmarkIcon /><span><strong>Unlimited</strong> Lưu lượng</span>
        </li>
        <li className="flex items-center">
          <CheckmarkIcon /><span><strong>1 IP</strong> Public</span>
        </li>
      </ul>
    </div>
    
    {/* Card Footer */}
    <div className="flex-none mt-6 pt-6 border-t border-gray-100">
      <div className="text-2xl font-bold mb-4 text-[#0D5E56] text-center">Liên hệ</div>
      <Link 
        href="/contact"
        className="block w-full btn-gradient text-white font-bold py-3 px-4 rounded-lg text-center hover:opacity-90"
      >
        Đăng ký ngay
      </Link>
    </div>
  </div>
)

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState<'standard' | 'memory' | 'cpu'>('standard')

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      {/* Header Section */}
      <header className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0D5E56] mb-4">Bảng giá Compute Engine</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Minh bạch, linh hoạt và tối ưu cho mọi nhu cầu. Chọn giải pháp máy chủ ảo phù hợp để phát triển doanh nghiệp của bạn một cách bền vững.
        </p>
      </header>

      {/* Compute Engine Content */}
      <div>
        {/* Sub-tabs for Compute Types */}
        <div className="flex justify-center border-b border-gray-200 mb-10">
          <div className="flex flex-wrap justify-center space-x-6 md:space-x-8">
            {(['standard', 'memory', 'cpu'] as const).map((tab) => (
              <button
                key={tab}
                className={`sub-tab-btn font-semibold text-lg pb-2 ${
                  activeTab === tab 
                    ? 'text-[#00C4B3] border-b-2 border-[#00C4B3]' 
                    : 'text-gray-500'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'memory' ? 'Memory-Optimized' : 
                 tab === 'cpu' ? 'CPU-Optimized' : 'Standard'}
              </button>
            ))}
          </div>
        </div>

        {/* Content for each compute type */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {computePlans
            .filter(plan => plan.type === activeTab)
            .map(plan => (
              <ComputeCard key={plan.name} plan={plan} />
            ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <section className="text-center mt-20 py-16 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-[#0D5E56] mb-4">Bạn có yêu cầu riêng?</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Chúng tôi sẵn sàng tư vấn và xây dựng một giải pháp tùy chỉnh hoàn hảo cho doanh nghiệp của bạn.
        </p>
        <Link
          href="/contact"
          className="btn-gradient text-white font-bold py-3 px-8 rounded-lg text-lg inline-block"
        >
          Liên hệ Tư vấn
        </Link>
      </section>
    </div>
  )
} 
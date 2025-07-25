'use client'

import { useState } from 'react'
import { computePlans, type ComputePlan } from '@/lib/compute-plans'
import Link from 'next/link'

const ComputeCard = ({ plan }: { plan: ComputePlan }) => (
  <div className="pricing-card bg-white p-8 rounded-2xl shadow-lg flex flex-col">
    {/* Card Header */}
    <div className="mb-6">
      <h3 className="font-bold text-2xl mb-2 text-[#2E1065]">{plan.name}</h3>
    </div>
    
    {/* Card Content */}
    <div className="flex-grow space-y-4">
      <div className="flex items-center">
        <svg className="w-5 h-5 text-[#2E1065] mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span>{plan.vcpu} vCPU</span>
      </div>
      <div className="flex items-center">
        <svg className="w-5 h-5 text-[#2E1065] mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span>{plan.ram} GB RAM</span>
      </div>
      <div className="flex items-center">
        <svg className="w-5 h-5 text-[#2E1065] mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span>Tùy chỉnh dung lượng</span>
      </div>
      <div className="flex items-center">
        <svg className="w-5 h-5 text-[#2E1065] mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span>10 Gbps Băng thông Uplink</span>
      </div>
      <div className="flex items-center">
        <svg className="w-5 h-5 text-[#2E1065] mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span>Unlimited Lưu lượng chuyển tải</span>
      </div>
      <div className="flex items-center">
        <svg className="w-5 h-5 text-[#2E1065] mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span>1 IP Public</span>
      </div>
    </div>
    
    {/* Card Footer */}
    <div className="mt-8">
      <Link 
        href="/contact"
        className="block w-full bg-[#2E1065] text-white text-center py-4 rounded-lg font-medium hover:bg-[#1A0B3D] transition-colors"
      >
        Liên hệ tư vấn
      </Link>
    </div>
  </div>
)

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState<'standard' | 'memory' | 'cpu'>('standard')

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2E1065] via-[#1A0B3D] to-[#0F0B3D]">
      <div className="container mx-auto px-4 pt-32 pb-12">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Bảng giá Compute Engine</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Minh bạch, linh hoạt và tối ưu cho mọi nhu cầu. Chọn giải pháp máy chủ ảo phù hợp để phát triển doanh nghiệp của bạn.
          </p>
        </header>

        {/* Compute Engine Content */}
        <div>
          {/* Sub-tabs for Compute Types */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-lg border border-gray-700 bg-white/5 backdrop-blur-sm p-1">
              {(['standard', 'memory', 'cpu'] as const).map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeTab === tab 
                      ? 'bg-[#2E1065] text-white' 
                      : 'text-gray-300 hover:text-white'
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {computePlans
              .filter(plan => plan.type === activeTab)
              .map(plan => (
                <ComputeCard key={plan.id} plan={plan} />
              ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <section className="text-center mt-16 py-12 bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">Bạn có yêu cầu riêng?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Chúng tôi sẵn sàng tư vấn và xây dựng một giải pháp tùy chỉnh hoàn hảo cho doanh nghiệp của bạn.
          </p>
          <Link
            href="/contact"
            className="bg-[#2E1065] text-white font-medium py-3 px-6 rounded-lg inline-block hover:bg-[#1A0B3D] transition-colors"
          >
            Liên hệ Tư vấn
          </Link>
        </section>
      </div>
    </div>
  )
} 
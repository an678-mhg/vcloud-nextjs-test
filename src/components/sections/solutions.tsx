'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ShieldCheck, BrainCircuit, Archive } from 'lucide-react'

type Solution = {
  icon: React.ReactNode
  title: string
  description: string
}

type SolutionsData = {
  [key: string]: Solution[]
}

const Solutions = () => {
  const [activeTab, setActiveTab] = useState('finance')

  const tabs = [
    { id: 'finance', label: 'Tài chính' },
    { id: 'ecommerce', label: 'TMĐT' },
    { id: 'gaming', label: 'Game' },
    { id: 'manufacturing', label: 'Sản xuất' },
  ]

  const solutions: SolutionsData = {
    finance: [
      {
        icon: <ShieldCheck className="w-6 h-6" />,
        title: 'Hạ tầng bảo mật Fintech',
        description: 'Đáp ứng các tiêu chuẩn an ninh tài chính khắt khe nhất với hạ tầng được chứng nhận.',
      },
      {
        icon: <BrainCircuit className="w-6 h-6" />,
        title: 'AI Phân tích Tín dụng',
        description: 'Sử dụng AI để đánh giá rủi ro và chấm điểm tín dụng chính xác hơn.',
      },
      {
        icon: <Archive className="w-6 h-6" />,
        title: 'Lưu trữ Dữ liệu Lâu dài',
        description: 'Giải pháp lưu trữ an toàn, chi phí thấp cho dữ liệu giao dịch và hồ sơ khách hàng.',
      },
    ],
    ecommerce: [],
    gaming: [],
    manufacturing: [],
  }

  return (
    <section 
      id="solutions" 
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden"
      style={{
        backgroundImage: "url('https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/1/45/Nen-Vcloud.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_20%)]">
            Giải pháp cho mọi ngành
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-200 [text-shadow:_0_1px_2px_rgb(0_0_0_/_20%)]">
            Từ hạ tầng đến AI, chúng tôi cung cấp các giải pháp đám mây được tùy chỉnh để giải quyết thách thức riêng của bạn.
          </p>
        </div>

        <div className="mt-12">
          <div className="border-b border-gray-200/20">
            <nav className="-mb-px flex justify-center space-x-6 sm:space-x-8" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg
                    ${activeTab === tab.id 
                      ? 'text-white border-white' 
                      : 'border-transparent text-gray-300 hover:text-white hover:border-gray-300'
                    }
                  `}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
        
        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions[activeTab]?.map((solution: Solution, index: number) => (
              <div key={index} className="p-8 rounded-2xl border border-gray-200/50 shadow-lg bg-white/90 backdrop-blur-sm">
                <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-lg flex items-center justify-center">
                  {solution.icon}
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">{solution.title}</h3>
                <p className="mt-2 text-gray-600">{solution.description}</p>
                <Link href="#" className="mt-4 inline-block text-blue-600 font-semibold">
                  Tìm hiểu thêm →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solutions 
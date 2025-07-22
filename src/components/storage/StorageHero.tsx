'use client'

import Image from 'next/image'

const features = [
  {
    icon: (
      <svg className="w-6 h-6 text-cyan-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    ),
    text: "Dung lượng không giới hạn"
  },
  {
    icon: (
      <svg className="w-6 h-6 text-cyan-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
      </svg>
    ),
    text: "Tiết kiệm chi phí"
  },
  {
    icon: (
      <svg className="w-6 h-6 text-cyan-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
      </svg>
    ),
    text: "Tốc độ vượt trội"
  },
  {
    icon: (
      <svg className="w-6 h-6 text-cyan-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    ),
    text: "Dễ dàng kết nối"
  }
]

export function StorageHero() {
  return (
    <section className="bg-navy-gradient hero-overlay">
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Floating cloud animations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-2">
          <div className="absolute top-20 left-10 text-6xl animate-float opacity-20">☁️</div>
          <div className="absolute top-40 right-20 text-4xl animate-float-delayed opacity-30">☁️</div>
          <div className="absolute bottom-40 left-1/4 text-5xl animate-float opacity-25">☁️</div>
          <div className="absolute top-60 left-1/2 text-3xl animate-float-delayed opacity-20">☁️</div>
          <div className="absolute bottom-60 right-1/3 text-7xl animate-float opacity-15">☁️</div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Lưu trữ Đám mây Thông minh, An toàn và Không giới hạn
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Nền tảng VCLOUD Storage cung cấp các giải pháp lưu trữ đa dạng, hiệu năng cao và có khả năng mở rộng tức thì, 
              đáp ứng mọi nhu cầu từ lưu trữ website, sao lưu dữ liệu đến các ứng dụng Big Data và AI.
            </p>
            <div className="grid grid-cols-2 gap-6 text-gray-200">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  {feature.icon}
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <Image
              src="https://placehold.co/600x500/E6FFFA/0D5E56?text=VCLOUD+Storage"
              alt="VCLOUD Storage Abstract Graphic"
              width={600}
              height={500}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
} 
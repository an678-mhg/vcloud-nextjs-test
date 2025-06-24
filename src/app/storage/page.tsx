'use client'

import Link from 'next/link'
import { StorageHero } from '@/components/storage/StorageHero'
import { WhyStorage } from '@/components/storage/WhyStorage'
import { StorageSolutions } from '@/components/storage/StorageSolutions'

export default function StoragePage() {
  return (
    <main>
      <StorageHero />
      <WhyStorage />
      <StorageSolutions />
      
      {/* Call to Action Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center bg-white rounded-lg shadow-xl p-12">
          <h2 className="text-3xl font-bold text-[#0D5E56] mb-4">Sẵn sàng tối ưu hóa việc lưu trữ?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Khám phá bảng giá chi tiết của chúng tôi hoặc liên hệ với đội ngũ chuyên gia để được tư vấn giải pháp phù hợp nhất cho bạn.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              href="/pricing"
              className="btn-gradient text-white font-bold py-3 px-8 rounded-lg text-lg inline-block"
            >
              Xem bảng giá
            </Link>
            <Link
              href="/contact"
              className="bg-gray-200 text-gray-800 font-bold py-3 px-8 rounded-lg text-lg transition hover:bg-gray-300 inline-block"
            >
              Liên hệ Tư vấn
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 
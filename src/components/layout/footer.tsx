'use client';

import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-vcloud-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-vcloud-cyan to-vcloud-green rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <span className="text-2xl font-bold">VCLOUD</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              VCLOUD tăng tốc training AI, cung cấp dịch vụ cloud toàn diện, cải thiện phân phối nội dung và bảo vệ servers & applications.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-vcloud-cyan transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-vcloud-cyan transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Dịch vụ</h3>
            <ul className="space-y-2">
              <li><Link href="/edge-cloud" className="text-gray-300 hover:text-vcloud-cyan transition-colors">Edge Cloud</Link></li>
              <li><Link href="/ai-training" className="text-gray-300 hover:text-vcloud-cyan transition-colors">AI Training & Inference</Link></li>
              <li><Link href="/cdn" className="text-gray-300 hover:text-vcloud-cyan transition-colors">Content Delivery</Link></li>
              <li><Link href="/support" className="text-gray-300 hover:text-vcloud-cyan transition-colors">Hỗ trợ kỹ thuật</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Công ty</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-vcloud-cyan transition-colors">Về chúng tôi</Link></li>
              <li><Link href="/careers" className="text-gray-300 hover:text-vcloud-cyan transition-colors">Tuyển dụng</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-vcloud-cyan transition-colors">Liên hệ</Link></li>
              <li><Link href="/privacy" className="text-gray-300 hover:text-vcloud-cyan transition-colors">Chính sách bảo mật</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 VCLOUD. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/terms" className="text-gray-400 hover:text-vcloud-cyan text-sm transition-colors">
              Điều khoản dịch vụ
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-vcloud-cyan text-sm transition-colors">
              Chính sách bảo mật
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 
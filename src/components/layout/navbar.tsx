'use client';

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const isActive = (path: string) => {
    return pathname === path
  }

  const isActiveParent = (paths: string[]) => {
    return paths.some(path => pathname?.startsWith(path))
  }

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto">
        {/* Top Header */}
        <div className="flex items-center justify-between px-4 py-2 border-b">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/1/36/Thi%E1%BA%BFt%20k%E1%BA%BF%20ch%C6%B0a%20c%C3%B3%20t%C3%AAn%20(3).svg"
                alt="VCLOUD Logo"
                width={120}
                height={36}
                className="h-8 w-auto"
                priority
              />
            </Link>
          </div>
          
          <div className="flex items-center gap-6">
            <span className="text-sm text-gray-600">Sales: +84 (028) 7306 8789</span>
            <div className="relative group">
              <button className="text-sm text-gray-600 hover:text-primary flex items-center gap-1">
                Support
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute right-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white rounded-lg shadow-lg p-2">
                <Link
                  href="#support"
                  className="block px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100"
                >
                  Hỗ trợ kỹ thuật
                </Link>
                <Link
                  href="#faq"
                  className="block px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100"
                >
                  FAQ
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span>🌐</span>
              <button className="text-sm text-gray-600">VI | EN</button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-600"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="hidden md:block px-4 py-4">
          <ul className="flex items-center gap-8">
            {/* About Us */}
            <li className="relative group">
              <button 
                className={classNames(
                  'text-gray-700 hover:text-primary transition-colors flex items-center gap-1',
                  isActiveParent(['/about']) ? 'text-primary font-medium' : ''
                )}
              >
                Về chúng tôi
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white rounded-lg shadow-lg p-2">
                <Link
                  href="/about"
                  className="block px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100"
                >
                  Giới thiệu chung
                </Link>
                <Link
                  href="/about/development"
                  className="block px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100"
                >
                  Định hướng phát triển
                </Link>
                <Link
                  href="/privacy"
                  className="block px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100"
                >
                  Chính sách bảo mật
                </Link>
                <Link
                  href="/privacy/data"
                  className="block px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100"
                >
                  Chính sách bảo mật dữ liệu cá nhân
                </Link>
                <Link
                  href="/sla"
                  className="block px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100"
                >
                  Chính sách SLA
                </Link>
              </div>
            </li>

            {/* Features */}
            <li className="relative group">
              <button 
                className={classNames(
                  'text-gray-700 hover:text-primary transition-colors flex items-center gap-1',
                  isActiveParent(['/compute', '/networking', '/storage', '/kubernetes', '/database', '/monitoring', '/security']) ? 'text-primary font-medium' : ''
                )}
              >
                Tính năng
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-[800px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white rounded-lg shadow-lg">
                <div className="grid grid-cols-3 gap-6 p-6">
                  {/* Infrastructure */}
                  <div>
                    <h3 className="font-medium text-gray-900 mb-4">Hạ tầng</h3>
                    <ul className="space-y-4">
                      <li>
                        <Link href="/compute" className="flex items-start gap-3">
                          <span className="text-2xl">💻</span>
                          <div>
                            <h4 className="font-medium text-gray-700">Compute</h4>
                            <p className="text-sm text-gray-600">Cung cấp máy chủ ảo (VMs) để chạy các ứng dụng</p>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="/networking" className="flex items-start gap-3">
                          <span className="text-2xl">🌐</span>
                          <div>
                            <h4 className="font-medium text-gray-700">Networking</h4>
                            <p className="text-sm text-gray-600">Quản lý kết nối mạng và bảo mật</p>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="/storage" className="flex items-start gap-3">
                          <span className="text-2xl">💾</span>
                          <div>
                            <h4 className="font-medium text-gray-700">Storage</h4>
                            <p className="text-sm text-gray-600">Giải pháp lưu trữ đám mây</p>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Applications & Data */}
                  <div>
                    <h3 className="font-medium text-gray-900 mb-4">Ứng dụng & Dữ liệu</h3>
                    <ul className="space-y-4">
                      <li>
                        <Link href="/kubernetes" className="flex items-start gap-3">
                          <span className="text-2xl">🚀</span>
                          <div>
                            <h4 className="font-medium text-gray-700">Kubernetes</h4>
                            <p className="text-sm text-gray-600">Nền tảng container tự động hóa</p>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="/database" className="flex items-start gap-3">
                          <span className="text-2xl">🗄️</span>
                          <div>
                            <h4 className="font-medium text-gray-700">Database</h4>
                            <p className="text-sm text-gray-600">Dịch vụ cơ sở dữ liệu được quản lý</p>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Operations & Security */}
                  <div>
                    <h3 className="font-medium text-gray-900 mb-4">Vận hành & Bảo mật</h3>
                    <ul className="space-y-4">
                      <li>
                        <Link href="/monitoring" className="flex items-start gap-3">
                          <span className="text-2xl">📊</span>
                          <div>
                            <h4 className="font-medium text-gray-700">Monitoring</h4>
                            <p className="text-sm text-gray-600">Giám sát và cảnh báo</p>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="/security" className="flex items-start gap-3">
                          <span className="text-2xl">🔒</span>
                          <div>
                            <h4 className="font-medium text-gray-700">Security</h4>
                            <p className="text-sm text-gray-600">Bảo mật và quản lý truy cập</p>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* Blog */}
            <li className="relative group">
              <button 
                className={classNames(
                  'text-gray-700 hover:text-primary transition-colors flex items-center gap-1',
                  isActiveParent(['/blog']) ? 'text-primary font-medium' : ''
                )}
              >
                Blog
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white rounded-lg shadow-lg p-2">
                <Link
                  href="/blog/tech-news"
                  className="block px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100"
                >
                  Tin tức công nghệ
                </Link>
                <Link
                  href="/blog/tech"
                  className="block px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100"
                >
                  Tech Blog
                </Link>
                <Link
                  href="/blog/events"
                  className="block px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100"
                >
                  Sự kiện & Hoạt động
                </Link>
              </div>
            </li>

            <li>
              <Link 
                href="/pricing"
                className={classNames(
                  'text-gray-700 hover:text-primary transition-colors',
                  isActive('/pricing') ? 'text-primary font-medium' : ''
                )}
              >
                Bảng giá
              </Link>
            </li>
          </ul>

          <div className="hidden md:flex items-center gap-4 absolute right-4 top-4">
            <Link
              href="/contact"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Liên hệ ngay
            </Link>
            <Link
              href="/login"
              className="text-gray-700 hover:text-primary font-medium"
            >
              Đăng nhập
            </Link>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          className={classNames(
            'md:hidden',
            isOpen ? 'block' : 'hidden'
          )}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Về chúng tôi
            </Link>
            
            {/* Features Section */}
            <div className="px-3 py-2 text-base font-medium text-gray-900">
              Tính năng
            </div>
            <div className="pl-6">
              <div className="px-3 py-2 text-sm font-medium text-gray-700">Hạ tầng</div>
              <Link
                href="/compute"
                className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              >
                Compute (Tính toán)
              </Link>
              <Link
                href="/networking"
                className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              >
                Networking (Mạng)
              </Link>
              <Link
                href="/storage"
                className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              >
                Storage (Lưu trữ)
              </Link>

              <div className="px-3 py-2 text-sm font-medium text-gray-700">Ứng dụng & Dữ liệu</div>
              <Link
                href="/kubernetes"
                className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              >
                Kubernetes (K8S)
              </Link>
              <Link
                href="/database"
                className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              >
                Database Services
              </Link>

              <div className="px-3 py-2 text-sm font-medium text-gray-700">Vận hành & Bảo mật</div>
              <Link
                href="/monitoring"
                className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              >
                Monitoring (Giám sát)
              </Link>
              <Link
                href="/security"
                className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              >
                Security & Management
              </Link>
            </div>

            <Link
              href="/blog"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Blog
            </Link>
            <Link
              href="/pricing"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Bảng giá
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-blue-600 hover:text-blue-700"
            >
              Liên hệ ngay
            </Link>
            <Link
              href="/login"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Đăng nhập
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
} 
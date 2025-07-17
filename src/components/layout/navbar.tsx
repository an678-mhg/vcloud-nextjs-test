'use client';

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'

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
    <header className="w-full bg-slate-900/95 backdrop-blur-sm shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img 
                src="https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/1/45/VCLOUD.png" 
                alt="VCLOUD Logo" 
                className="h-20 w-auto"
              />
            </Link>
          </div>

          {/* Main Navigation - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {/* About Us */}
            <div className="relative group">
              <button 
                className={`text-gray-300 hover:text-white transition-colors flex items-center gap-1 ${
                  isActiveParent(['/about']) ? 'text-white font-medium' : ''
                }`}
              >
                Về chúng tôi
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white rounded-lg shadow-lg p-2">
                <Link
                  href="/about-us"
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
              </div>
            </div>

            {/* Features */}
            <div className="relative group">
              <button 
                className={`text-gray-300 hover:text-white transition-colors flex items-center gap-1 ${
                  isActiveParent(['/features', '/compute', '/kubernetes', '/database', '/networking', '/storage', '/monitoring', '/security']) ? 'text-white font-medium' : ''
                }`}
              >
                Tính năng
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white rounded-lg shadow-lg p-4">
                <div className="grid grid-cols-3 gap-6">
                  {/* Hạ tầng */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Hạ tầng</h3>
                    <div className="space-y-2">
                      <Link href="/compute" className="flex items-center gap-2 text-sm text-gray-700 hover:text-vcloud-cyan transition-colors">
                        <span>💻</span>
                        <div>
                          <div className="font-medium">Compute</div>
                          <div className="text-xs text-gray-500">Cung cấp máy chủ ảo (VMs)</div>
                        </div>
                      </Link>
                      <Link href="/networking" className="flex items-center gap-2 text-sm text-gray-700 hover:text-vcloud-cyan transition-colors">
                        <span>🌐</span>
                        <div>
                          <div className="font-medium">Networking</div>
                          <div className="text-xs text-gray-500">Quản lý kết nối mạng và bảo mật</div>
                        </div>
                      </Link>
                      <Link href="/storage" className="flex items-center gap-2 text-sm text-gray-700 hover:text-vcloud-cyan transition-colors">
                        <span>💾</span>
                        <div>
                          <div className="font-medium">Storage</div>
                          <div className="text-xs text-gray-500">Giải pháp lưu trữ đám mây</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  
                  {/* Ứng dụng & Dữ liệu */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Ứng dụng & Dữ liệu</h3>
                    <div className="space-y-2">
                      <Link href="/kubernetes" className="flex items-center gap-2 text-sm text-gray-700 hover:text-vcloud-cyan transition-colors">
                        <span>🚀</span>
                        <div>
                          <div className="font-medium">Kubernetes</div>
                          <div className="text-xs text-gray-500">Nền tảng container tự động hóa</div>
                        </div>
                      </Link>
                      <Link href="/database" className="flex items-center gap-2 text-sm text-gray-700 hover:text-vcloud-cyan transition-colors">
                        <span>🗄️</span>
                        <div>
                          <div className="font-medium">Database</div>
                          <div className="text-xs text-gray-500">Dịch vụ cơ sở dữ liệu được quản lý</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  
                  {/* Vận hành & Bảo mật */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Vận hành & Bảo mật</h3>
                    <div className="space-y-2">
                      <Link href="/monitoring" className="flex items-center gap-2 text-sm text-gray-700 hover:text-vcloud-cyan transition-colors">
                        <span>📊</span>
                        <div>
                          <div className="font-medium">Monitoring</div>
                          <div className="text-xs text-gray-500">Giám sát và cảnh báo</div>
                        </div>
                      </Link>
                      <Link href="/security" className="flex items-center gap-2 text-sm text-gray-700 hover:text-vcloud-cyan transition-colors">
                        <span>🔒</span>
                        <div>
                          <div className="font-medium">Security</div>
                          <div className="text-xs text-gray-500">Bảo mật và quản lý truy cập</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <Link
              href="/pricing"
              className={`text-gray-300 ${
                isActive('/pricing') ? 'text-white font-medium' : ''
              }`}
            >
              Bảng giá
            </Link>
          </div>

          {/* Right side menu */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <span className="text-sm text-gray-300">Sales: +84 (028) 7306 8789</span>
            </div>
            <Link href="/contact">
              <Button variant="outline" size="sm" className="hidden md:block border-2 border-white text-white hover:bg-white hover:text-slate-900">
                Liên hệ ngay
              </Button>
            </Link>
            <Link href="/auth/login">
              <Button size="sm" className="bg-gradient-to-r from-cyan-400 to-green-400 hover:from-cyan-500 hover:to-green-500 text-white">
                Đăng nhập
              </Button>
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden text-gray-300 hover:text-white"
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
        </nav>

        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95">
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-vcloud-navy-dark"
            >
              Về chúng tôi
            </Link>
            <Link
              href="/features"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-vcloud-navy-dark"
            >
              Tính năng
            </Link>
            <Link
              href="/pricing"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-vcloud-navy-dark"
            >
              Bảng giá
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
} 
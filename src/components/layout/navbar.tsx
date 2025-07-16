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
    <header className="w-full bg-white/95 backdrop-blur-sm shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-vcloud-cyan to-vcloud-green rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <span className="text-2xl font-bold text-vcloud-text-dark">VCLOUD</span>
            </Link>
          </div>

          {/* Main Navigation - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {/* About Us */}
            <div className="relative group">
              <button 
                className={`text-vcloud-text-dark hover:text-vcloud-cyan transition-colors flex items-center gap-1 ${
                  isActiveParent(['/about']) ? 'text-vcloud-cyan font-medium' : ''
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

            {/* Services */}
            <div className="relative group">
              <button 
                className={`text-vcloud-text-dark hover:text-vcloud-cyan transition-colors flex items-center gap-1 ${
                  isActiveParent(['/services', '/edge-cloud', '/ai-training', '/cdn']) ? 'text-vcloud-cyan font-medium' : ''
                }`}
              >
                Dịch vụ
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white rounded-lg shadow-lg p-2">
                <Link
                  href="/edge-cloud"
                  className="block px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100"
                >
                  Edge Cloud
                </Link>
                <Link
                  href="/ai-training"
                  className="block px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100"
                >
                  AI Training & Inference
                </Link>
                <Link
                  href="/cdn"
                  className="block px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100"
                >
                  Content Delivery
                </Link>
              </div>
            </div>

            {/* Pricing */}
            <Link
              href="/pricing"
              className={`text-vcloud-text-dark hover:text-vcloud-cyan transition-colors ${
                isActive('/pricing') ? 'text-vcloud-cyan font-medium' : ''
              }`}
            >
              Bảng giá
            </Link>
          </div>

          {/* Right side menu */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <span className="text-sm text-gray-600">Sales: +84 (028) 7306 8789</span>
            </div>
            <Button variant="outline" size="sm" className="hidden md:block">
              Liên hệ ngay
            </Button>
            <Button size="sm">
              Đăng nhập
            </Button>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden text-gray-500 hover:text-gray-600"
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
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Về chúng tôi
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Dịch vụ
            </Link>
            <Link
              href="/pricing"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Bảng giá
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
} 
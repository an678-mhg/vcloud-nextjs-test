'use client';

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from '../ui/button'

export function Navbar() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [navbarHeight, setNavbarHeight] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const navbarRef = useRef<HTMLElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout>()

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  // Calculate navbar height and handle resize
  useEffect(() => {
    const calculateHeight = () => {
      if (navbarRef.current) {
        setNavbarHeight(navbarRef.current.offsetHeight)
      }
    }

    calculateHeight()
    window.addEventListener('resize', calculateHeight)
    return () => window.removeEventListener('resize', calculateHeight)
  }, [])

  // Handle scroll effect
  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY
          const shouldBeScrolled = scrollTop > 50

          if (shouldBeScrolled !== isScrolled) {
            setIsScrolled(shouldBeScrolled)
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isScrolled])

  // Handle dropdown interactions
  const handleMouseEnter = (dropdownName: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveDropdown(dropdownName)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 300) // Tăng timeout lên 300ms
  }

  // BƯỚC 4: Check for blocking elements
  useEffect(() => {
    if (activeDropdown) {
      const elements = document.elementsFromPoint(window.innerWidth/2, 200)
      console.log('Elements at dropdown position:', elements)
    }
  }, [activeDropdown])

  const handleFeatureClick = () => {
    console.log('Features button clicked') // Debug log
    setActiveDropdown(activeDropdown === 'features' ? null : 'features')
  }

  const handleItemClick = (href: string) => (e: React.MouseEvent) => {
    console.log('Item clicked:', href) // Debug log
    e.preventDefault()
    e.stopPropagation()
    setActiveDropdown(null)
    router.push(href)
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  const isActiveParent = (paths: string[]) => {
    return paths.some(path => pathname?.startsWith(path))
  }

  // Check if current page has white background (contact, about-us, etc.)
  const hasWhiteBackground = ['/contact', '/about-us', '/pricing'].includes(pathname || '')

  const navigateToCompute = () => {
    setActiveDropdown(null) // Đóng dropdown
    router.push('/compute') // Chuyển trang
  }

  return (
    <>
      <header 
        ref={navbarRef}
        className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled || hasWhiteBackground
            ? 'bg-gradient-to-r from-[#2E1065] via-[#1A0B3D] to-[#0F0B3D] shadow-lg backdrop-blur-sm' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <img 
                  src="https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/1/45/VCLOUD.png" 
                  alt="VCLOUD Logo" 
                  className="h-16 w-auto"
                />
              </Link>
            </div>

            {/* Main Navigation - Desktop */}
            <div className="hidden md:flex items-center gap-8">
              {/* About Us */}
              <div className="relative">
                <button 
                  className={`transition-colors flex items-center gap-1 ${
                    isScrolled || hasWhiteBackground
                      ? `text-gray-200 hover:text-white ${isActiveParent(['/about']) ? 'text-white font-medium' : ''}`
                      : `text-gray-300 hover:text-white ${isActiveParent(['/about']) ? 'text-white font-medium' : ''}`
                  }`}
                  onMouseEnter={() => handleMouseEnter('about')}
                  onMouseLeave={handleMouseLeave}
                >
                  Về chúng tôi
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* Features */}
              <div className="relative"
                onMouseEnter={() => handleMouseEnter('features')}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  className={`transition-colors flex items-center gap-1 ${
                    isScrolled || hasWhiteBackground
                      ? `text-gray-200 hover:text-white ${isActiveParent(['/features', '/compute', '/kubernetes', '/database', '/networking', '/storage', '/monitoring', '/security']) ? 'text-white font-medium' : ''}`
                      : `text-gray-300 hover:text-white ${isActiveParent(['/features', '/compute', '/kubernetes', '/database', '/networking', '/storage', '/monitoring', '/security']) ? 'text-white font-medium' : ''}`
                  }`}
                  type="button"
                  onClick={handleFeatureClick}
                >
                  Tính năng
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* Pricing */}
              <Link
                href="/pricing"
                className={`transition-colors ${
                  isScrolled || hasWhiteBackground
                    ? `text-gray-200 hover:text-white ${isActive('/pricing') ? 'text-white font-medium' : ''}`
                    : `text-gray-300 hover:text-white ${isActive('/pricing') ? 'text-white font-medium' : ''}`
                }`}
              >
                Bảng giá
              </Link>
            </div>

            {/* Right side menu */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-4">
                <span className={`text-sm transition-colors ${
                  isScrolled || hasWhiteBackground ? 'text-gray-200' : 'text-gray-300'
                }`}>
                  Sales: +84 (028) 7306 8789
                </span>
              </div>
              <Link href="/contact">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className={`hidden md:block border-2 transition-all duration-300 ${
                    isScrolled || hasWhiteBackground
                      ? 'border-white text-white hover:bg-white hover:text-slate-900'
                      : 'border-white text-white hover:bg-white hover:text-slate-900'
                  }`}
                >
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
                className={`md:hidden transition-colors ${
                  isScrolled || hasWhiteBackground ? 'text-gray-200 hover:text-white' : 'text-gray-300 hover:text-white'
                }`}
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
            <div className={`px-2 pt-2 pb-3 space-y-1 transition-colors ${
              isScrolled ? 'bg-white/95' : 'bg-slate-900/95'
            }`}>
              <Link
                href="/about"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isScrolled
                    ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                    : 'text-gray-300 hover:text-white hover:bg-vcloud-navy-dark'
                }`}
              >
                Về chúng tôi
              </Link>
              <Link
                href="/features"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isScrolled
                    ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                    : 'text-gray-300 hover:text-white hover:bg-vcloud-navy-dark'
                }`}
              >
                Tính năng
              </Link>
              <Link
                href="/pricing"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isScrolled
                    ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                    : 'text-gray-300 hover:text-white hover:bg-vcloud-navy-dark'
                }`}
              >
                Bảng giá
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Full-width Dropdown Menus */}
      {activeDropdown && (
        <div 
          className="dropdown-menu fixed left-0 w-full bg-white shadow-lg border-t border-gray-200 z-[60] transition-all duration-300"
          style={{ top: `${navbarHeight}px` }}
          onMouseEnter={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current)
          }}
          onMouseLeave={handleMouseLeave}
        >
          <div className="dropdown-content max-w-7xl mx-auto px-4 py-8">
            {/* About Us Dropdown */}
            {activeDropdown === 'about' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="dropdown-section">
                  <h4 className="font-semibold text-gray-900 mb-4 text-lg border-b border-gray-200 pb-2">Về VCLOUD</h4>
                  <div className="space-y-3">
                    <Link
                      href="/about-us"
                      className="dropdown-item block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-medium text-gray-900">Giới thiệu chung</div>
                      <div className="dropdown-description text-sm text-gray-500 mt-1">Tìm hiểu về VCLOUD và sứ mệnh của chúng tôi</div>
                    </Link>
                    <Link
                      href="/about/development"
                      className="dropdown-item block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-medium text-gray-900">Định hướng phát triển</div>
                      <div className="dropdown-description text-sm text-gray-500 mt-1">Tầm nhìn và chiến lược phát triển tương lai</div>
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Features Dropdown */}
            {activeDropdown === 'features' && (
              <div 
                className="fixed left-0 right-0 grid grid-cols-1 md:grid-cols-3 gap-8 bg-white shadow-lg border-t border-gray-200 px-4 py-6"
                style={{ 
                  top: `${navbarHeight}px`,
                  zIndex: 9999 
                }}
              >
                {/* Hạ tầng */}
                <div className="dropdown-section">
                  <h4 className="font-semibold text-gray-900 mb-4 text-lg border-b border-gray-200 pb-2">Hạ tầng</h4>
                  <div className="space-y-3">
                    <button 
                      type="button"
                      onClick={handleItemClick('/compute')}
                      className="w-full text-left dropdown-item flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      <span className="text-xl">💻</span>
                      <div>
                        <div className="font-medium text-gray-900">Compute</div>
                        <div className="dropdown-description text-sm text-gray-500 mt-1">Cung cấp máy chủ ảo (VMs)</div>
                      </div>
                    </button>

                    <button 
                      type="button"
                      onClick={handleItemClick('/networking')}
                      className="w-full text-left dropdown-item flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      <span className="text-xl">🌐</span>
                      <div>
                        <div className="font-medium text-gray-900">Networking</div>
                        <div className="dropdown-description text-sm text-gray-500 mt-1">Quản lý kết nối mạng và bảo mật</div>
                      </div>
                    </button>

                    <button 
                      type="button"
                      onClick={handleItemClick('/storage')}
                      className="w-full text-left dropdown-item flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      <span className="text-xl">💾</span>
                      <div>
                        <div className="font-medium text-gray-900">Storage</div>
                        <div className="dropdown-description text-sm text-gray-500 mt-1">Giải pháp lưu trữ đám mây</div>
                      </div>
                    </button>
                  </div>
                </div>
                
                {/* Ứng dụng & Dữ liệu */}
                <div className="dropdown-section">
                  <h4 className="font-semibold text-gray-900 mb-4 text-lg border-b border-gray-200 pb-2">Ứng dụng & Dữ liệu</h4>
                  <div className="space-y-3">
                    <button 
                      type="button"
                      onClick={handleItemClick('/kubernetes')}
                      className="w-full text-left dropdown-item flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      <span className="text-xl">🚀</span>
                      <div>
                        <div className="font-medium text-gray-900">Kubernetes</div>
                        <div className="dropdown-description text-sm text-gray-500 mt-1">Nền tảng container tự động hóa</div>
                      </div>
                    </button>

                    <button 
                      type="button"
                      onClick={handleItemClick('/database')}
                      className="w-full text-left dropdown-item flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      <span className="text-xl">🗄️</span>
                      <div>
                        <div className="font-medium text-gray-900">Database</div>
                        <div className="dropdown-description text-sm text-gray-500 mt-1">Dịch vụ cơ sở dữ liệu được quản lý</div>
                      </div>
                    </button>
                  </div>
                </div>
                
                {/* Vận hành & Bảo mật */}
                <div className="dropdown-section">
                  <h4 className="font-semibold text-gray-900 mb-4 text-lg border-b border-gray-200 pb-2">Vận hành & Bảo mật</h4>
                  <div className="space-y-3">
                    <button 
                      type="button"
                      onClick={handleItemClick('/monitoring')}
                      className="w-full text-left dropdown-item flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      <span className="text-xl">📊</span>
                      <div>
                        <div className="font-medium text-gray-900">Monitoring</div>
                        <div className="dropdown-description text-sm text-gray-500 mt-1">Giám sát và cảnh báo</div>
                      </div>
                    </button>

                    <button 
                      type="button"
                      onClick={handleItemClick('/security')}
                      className="w-full text-left dropdown-item flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      <span className="text-xl">🔒</span>
                      <div>
                        <div className="font-medium text-gray-900">Security</div>
                        <div className="dropdown-description text-sm text-gray-500 mt-1">Bảo mật và quản lý truy cập</div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
} 
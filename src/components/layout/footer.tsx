'use client';

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-[#f4f8ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Về VCLOUD */}
          <div>
            <h3 className="text-dark-blue font-semibold mb-4">Về VCLOUD</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary">
                  Giới thiệu chung
                </Link>
              </li>
              <li>
                <Link href="/about#development" className="text-gray-600 hover:text-primary">
                  Định hướng phát triển
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-primary">
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link href="/privacy#data" className="text-gray-600 hover:text-primary">
                  Bảo mật dữ liệu cá nhân
                </Link>
              </li>
              <li>
                <Link href="/sla" className="text-gray-600 hover:text-primary">
                  Chính sách SLA
                </Link>
              </li>
            </ul>
          </div>

          {/* Tính năng */}
          <div>
            <h3 className="text-dark-blue font-semibold mb-4">Tính năng</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/features#compute" className="text-gray-600 hover:text-primary">
                  Cloud Server
                </Link>
              </li>
              <li>
                <Link href="/features#storage" className="text-gray-600 hover:text-primary">
                  Storage
                </Link>
              </li>
              <li>
                <Link href="/features#kubernetes" className="text-gray-600 hover:text-primary">
                  Kubernetes
                </Link>
              </li>
              <li>
                <Link href="/features#network" className="text-gray-600 hover:text-primary">
                  Network
                </Link>
              </li>
              <li>
                <Link href="/features#security" className="text-gray-600 hover:text-primary">
                  Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Hỗ trợ */}
          <div>
            <h3 className="text-dark-blue font-semibold mb-4">Hỗ trợ</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/docs" className="text-gray-600 hover:text-primary">
                  Tài liệu hướng dẫn
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-600 hover:text-primary">
                  Trung tâm hỗ trợ
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Liên hệ */}
          <div>
            <h3 className="text-dark-blue font-semibold mb-4">Liên hệ</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <i className="fas fa-phone text-primary"></i>
                <span className="text-gray-600">1900 1234</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-envelope text-primary"></i>
                <span className="text-gray-600">support@vcloud.vn</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-map-marker-alt text-primary"></i>
                <span className="text-gray-600">Hà Nội, Việt Nam</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 py-8">
          <div className="flex flex-col items-center space-y-4">
            {/* Social Links */}
            <div className="flex space-x-6">
              <a href="https://facebook.com/vcloud" className="text-gray-400 hover:text-primary">
                <span className="sr-only">Facebook</span>
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="https://linkedin.com/company/vcloud" className="text-gray-400 hover:text-primary">
                <span className="sr-only">LinkedIn</span>
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="https://youtube.com/vcloud" className="text-gray-400 hover:text-primary">
                <span className="sr-only">YouTube</span>
                <i className="fab fa-youtube text-xl"></i>
              </a>
              <a href="https://github.com/vcloud" className="text-gray-400 hover:text-primary">
                <span className="sr-only">GitHub</span>
                <i className="fab fa-github text-xl"></i>
              </a>
            </div>

            {/* Certifications */}
            <div className="flex space-x-4">
              <Image
                src="https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/certifications/iso-27001.png"
                alt="ISO 27001"
                width={60}
                height={30}
              />
              <Image
                src="https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/certifications/pci-dss.png"
                alt="PCI DSS"
                width={60}
                height={30}
              />
              <Image
                src="https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/certifications/gdpr.png"
                alt="GDPR"
                width={60}
                height={30}
              />
            </div>

            {/* Company Info */}
            <div className="text-center space-y-2">
              <p className="text-gray-600">CÔNG TY CỔ PHẦN VNETWORK</p>
              <p className="text-gray-600">Lầu 23, tòa nhà UOA Tower, 06 Tân Trào, Phường Tân Phú, Quận 7, HCMC</p>
              <p className="text-gray-600">111 North Bridge Road #17-06 Peninsula Plaza Singapore</p>
              <p className="text-gray-600">
                Hotline: <a href="tel:02873068789" className="hover:text-primary">028 7306 8789</a> | 
                Email: <a href="mailto:support@vnetwork.vn" className="hover:text-primary">support@vnetwork.vn</a>
              </p>
            </div>

            {/* Copyright */}
            <div className="text-center space-y-2">
              <p className="text-gray-600">© 2025 VNETWORK JSC. All Rights Reserved</p>
              <p className="text-gray-600">
                <Link href="/terms" className="hover:text-primary">Điều khoản dịch vụ</Link> |{' '}
                <Link href="/privacy" className="hover:text-primary">Chính sách bảo mật</Link> |{' '}
                <Link href="/cookies" className="hover:text-primary">Chính sách Cookie</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 
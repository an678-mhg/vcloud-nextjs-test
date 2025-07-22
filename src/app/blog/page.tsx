'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const categories = [
  { name: 'Tất cả', slug: 'all' },
  { name: 'Công nghệ', slug: 'tech' },
  { name: 'Cloud Computing', slug: 'cloud' },
  { name: 'Bảo mật', slug: 'security' },
  { name: 'Giải pháp', slug: 'solutions' }
]

const blogPosts = [
  {
    id: 1,
    title: 'Xu Hướng Cloud Computing 2024',
    excerpt: 'Khám phá những xu hướng công nghệ điện toán đám mây mới nhất và cách chúng ảnh hưởng đến doanh nghiệp.',
    image: '/images/blog/cloud-trends.jpg',
    date: '03/06/2024',
    author: 'VCLOUD Team',
    category: 'Công Nghệ',
  },
  {
    id: 2,
    title: 'Bảo Mật Đám Mây: Những Điều Cần Biết',
    excerpt: 'Tìm hiểu về các giải pháp bảo mật đám mây hiện đại và cách bảo vệ dữ liệu doanh nghiệp.',
    image: '/images/blog/cloud-security.jpg',
    date: '02/06/2024',
    author: 'VCLOUD Security',
    category: 'Bảo Mật',
  },
  {
    id: 3,
    title: 'Tối Ưu Chi Phí Cloud',
    excerpt: 'Các chiến lược và giải pháp giúp doanh nghiệp tối ưu chi phí khi sử dụng dịch vụ đám mây.',
    image: '/images/blog/cost-optimization.jpg',
    date: '01/06/2024',
    author: 'VCLOUD Team',
    category: 'Giải Pháp',
  },
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('all')

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category.toLowerCase() === selectedCategory)

  return (
    <div className="bg-gray-50 min-h-screen pt-24">
      {/* Hero Section */}
      <section className="bg-navy-gradient py-16 hero-overlay">
        <div className="container mx-auto px-4 relative z-10">
          {/* Floating cloud animations */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-2">
            <div className="absolute top-20 left-10 text-6xl animate-float opacity-20">☁️</div>
            <div className="absolute top-40 right-20 text-4xl animate-float-delayed opacity-30">☁️</div>
            <div className="absolute bottom-40 left-1/4 text-5xl animate-float opacity-25">☁️</div>
            <div className="absolute top-60 left-1/2 text-3xl animate-float-delayed opacity-20">☁️</div>
            <div className="absolute bottom-60 right-1/3 text-7xl animate-float opacity-15">☁️</div>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              VCLOUD Blog
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Cập nhật tin tức, xu hướng và kiến thức mới nhất về công nghệ đám mây
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 to-lime-400/20"></div>
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                    [Hình ảnh blog]
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.category}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.author}</span>
                    <Link 
                      href={`/blog/${post.id}`}
                      className="text-sky-500 hover:text-sky-600 font-medium"
                    >
                      Đọc thêm →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Subscription */}
          <div className="mt-16 bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">
                Đăng ký nhận bản tin VCLOUD
              </h3>
              <p className="text-gray-600 mb-6">
                Cập nhật những tin tức mới nhất về công nghệ đám mây và các ưu đãi đặc biệt
              </p>
              <form className="flex gap-4">
                <input
                  type="email"
                  placeholder="Email của bạn"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-cyan-400 to-green-400 text-white px-6 py-2 rounded-lg hover:shadow-lg transition duration-300"
                >
                  Đăng ký
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 
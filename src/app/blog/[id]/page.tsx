'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

// Giả lập dữ liệu bài viết chi tiết
const post = {
  id: 1,
  title: 'Xu hướng điện toán đám mây năm 2024',
  excerpt: 'Khám phá những xu hướng công nghệ điện toán đám mây mới nhất và cách chúng tác động đến doanh nghiệp.',
  content: `
    <h2>1. Multi-cloud và Hybrid Cloud</h2>
    <p>Trong năm 2024, các doanh nghiệp sẽ tiếp tục xu hướng sử dụng đa nền tảng cloud (multi-cloud) và kết hợp giữa cloud công cộng và private cloud (hybrid cloud). Điều này giúp tối ưu chi phí, tăng tính linh hoạt và giảm thiểu rủi ro phụ thuộc vào một nhà cung cấp.</p>

    <h2>2. AI và Machine Learning trên Cloud</h2>
    <p>Trí tuệ nhân tạo và học máy sẽ trở thành một phần không thể thiếu trong các dịch vụ cloud. Các nền tảng cloud sẽ cung cấp nhiều công cụ và dịch vụ AI/ML hơn, giúp doanh nghiệp dễ dàng tích hợp các tính năng thông minh vào ứng dụng của họ.</p>

    <h2>3. Edge Computing</h2>
    <p>Edge computing sẽ phát triển mạnh mẽ, đặc biệt trong các ứng dụng IoT và xử lý dữ liệu thời gian thực. Việc đưa khả năng tính toán ra gần nguồn dữ liệu hơn giúp giảm độ trễ và tăng hiệu suất xử lý.</p>
  `,
  image: 'https://placehold.co/1200x600/1EE1E1/ffffff?text=Cloud+Trends',
  category: 'Cloud Computing',
  author: {
    name: 'Nguyễn Văn A',
    avatar: 'https://placehold.co/200x200/4EEC8C/ffffff?text=NVA',
    role: 'Cloud Architect'
  },
  date: '2024-03-15',
  readTime: '5 phút',
  tags: ['Cloud Computing', 'AI', 'Edge Computing', 'Multi-cloud']
}

// Bài viết liên quan
const relatedPosts = [
  {
    id: 2,
    title: 'Bảo mật đám mây: Những điều cần biết',
    excerpt: 'Tìm hiểu về các giải pháp bảo mật đám mây hiện đại và cách bảo vệ dữ liệu doanh nghiệp.',
    image: 'https://placehold.co/600x400/4EEC8C/ffffff?text=Cloud+Security',
    category: 'Bảo mật',
    author: 'Trần Thị B',
    date: '2024-03-10'
  },
  {
    id: 3,
    title: 'Kubernetes và microservices',
    excerpt: 'Hướng dẫn chi tiết về việc triển khai ứng dụng microservices trên Kubernetes.',
    image: 'https://placehold.co/600x400/1EE1E1/ffffff?text=Kubernetes',
    category: 'Công nghệ',
    author: 'Lê Văn C',
    date: '2024-03-05'
  }
]

export default function BlogPostPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium">{post.author.name}</div>
                    <div className="text-sm text-gray-500">{post.author.role}</div>
                  </div>
                </div>
                <div className="text-gray-500">•</div>
                <div className="text-gray-500">{post.date}</div>
                <div className="text-gray-500">•</div>
                <div className="text-gray-500">{post.readTime}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12"
            >
              <div className="relative h-[400px] md:h-[500px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-12">
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
                
                {/* Tags */}
                <div className="mt-8 pt-8 border-t">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Author Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg mb-12"
            >
              <div className="flex items-center gap-6">
                <div className="relative w-20 h-20">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{post.author.name}</h3>
                  <p className="text-gray-600 mb-4">{post.author.role}</p>
                  <p className="text-gray-500">
                    Chuyên gia với hơn 10 năm kinh nghiệm trong lĩnh vực điện toán đám mây 
                    và kiến trúc hệ thống. Đã tư vấn và triển khai thành công nhiều dự án 
                    cloud cho các doanh nghiệp lớn.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Related Posts */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Bài viết liên quan</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {relatedPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="relative h-48">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                        {post.category}
                      </span>
                      <h3 className="text-xl font-bold mb-3">
                        <Link href={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span>{post.author}</span>
                        <span className="mx-2">•</span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 
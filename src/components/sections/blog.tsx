'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

type BlogPost = {
  id: number
  title: string
  excerpt: string
  image: string
  category: string
  date: string
  readTime: string
  slug: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Edge Computing và tương lai của điện toán đám mây',
    excerpt: 'Khám phá cách Edge Computing đang định hình lại cách chúng ta xử lý và phân phối dữ liệu trong thời đại số.',
    image: 'https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/blog/edge-computing.jpg',
    category: 'Technology',
    date: '15/05/2024',
    readTime: '5 phút',
    slug: 'edge-computing-tuong-lai-dien-toan-dam-may'
  },
  {
    id: 2,
    title: 'Bảo mật đám mây trong kỷ nguyên số',
    excerpt: 'Tìm hiểu các giải pháp bảo mật toàn diện cho doanh nghiệp trong môi trường cloud computing.',
    image: 'https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/blog/cloud-security.jpg',
    category: 'Security',
    date: '10/05/2024',
    readTime: '7 phút',
    slug: 'bao-mat-dam-may-ky-nguyen-so'
  },
  {
    id: 3,
    title: 'Kubernetes và container hóa ứng dụng',
    excerpt: 'Hướng dẫn chi tiết về việc triển khai và quản lý ứng dụng với Kubernetes trên nền tảng cloud.',
    image: 'https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/blog/kubernetes.jpg',
    category: 'DevOps',
    date: '05/05/2024',
    readTime: '10 phút',
    slug: 'kubernetes-container-hoa-ung-dung'
  }
]

export function Blog() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Blog & Kiến thức
          </h2>
          <p className="text-xl text-gray-600">
            Cập nhật xu hướng và kiến thức mới nhất về cloud computing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm text-primary font-medium">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {post.date}
                    </span>
                    <span className="text-sm text-gray-500">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
          >
            Xem tất cả bài viết
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 
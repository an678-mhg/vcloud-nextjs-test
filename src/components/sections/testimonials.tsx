'use client'

import { Card, CardContent } from '../ui/card'

export function Testimonials() {
  const testimonials = [
    {
      name: "Nguyễn Văn A",
      position: "CTO",
      company: "Tech Startup ABC",
      content: "VCLOUD đã giúp chúng tôi giảm 40% chi phí infrastructure và tăng 3x tốc độ deployment. Dịch vụ AI training đặc biệt ấn tượng.",
      rating: 5,
      avatar: "👨‍💼"
    },
    {
      name: "Trần Thị B",
      position: "Lead Developer",
      company: "E-commerce Platform",
      content: "Edge CDN của VCLOUD giúp website chúng tôi load nhanh hơn 60% trên toàn cầu. Hỗ trợ kỹ thuật 24/7 rất chuyên nghiệp.",
      rating: 5,
      avatar: "👩‍💻"
    },
    {
      name: "Lê Minh C",
      position: "DevOps Engineer",
      company: "Fintech Company",
      content: "Kubernetes managed service của VCLOUD rất stable và dễ sử dụng. Auto-scaling hoạt động hoàn hảo trong các đợt traffic cao.",
      rating: 5,
      avatar: "👨‍🔧"
    }
  ]

  return (
    <section className="py-20 bg-vcloud-gray-lighter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-vcloud-text-dark mb-4">
            Khách hàng nói gì về chúng tôi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hàng nghìn doanh nghiệp tin tưởng VCLOUD cho hạ tầng cloud của họ
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Author info */}
                <div className="flex items-center">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold text-vcloud-text-dark">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.position}
                    </div>
                    <div className="text-sm text-vcloud-cyan font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-vcloud-cyan mb-2">1000+</div>
            <div className="text-gray-600">Khách hàng hài lòng</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-vcloud-green mb-2">99.9%</div>
            <div className="text-gray-600">Độ tin cậy</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-vcloud-cyan mb-2">24/7</div>
            <div className="text-gray-600">Hỗ trợ kỹ thuật</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-vcloud-green mb-2">5⭐</div>
            <div className="text-gray-600">Đánh giá trung bình</div>
          </div>
        </div>
      </div>
    </section>
  )
} 
import Link from 'next/link'
import { Card, CardContent, CardHeader } from '../ui/card'
import { Badge } from '../ui/badge'

export function Services() {
  const services = [
    {
      title: "Edge Cloud",
      description: "Triển khai ứng dụng gần người dùng nhất với mạng lưới edge computing toàn cầu",
      icon: "🌐",
      features: ["Low Latency", "Global CDN", "Auto Scaling", "Real-time Processing"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI Training & Inference",
      description: "Tăng tốc quá trình training AI với GPU clusters và inference API hiệu suất cao",
      icon: "🧠",
      features: ["GPU Clusters", "Model Optimization", "API Integration", "Cost Effective"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Content Delivery",
      description: "Phân phối nội dung nhanh chóng và an toàn với CDN thế hệ mới",
      icon: "⚡",
      features: ["Global CDN", "DDoS Protection", "SSL/TLS", "Real-time Analytics"],
      color: "from-green-500 to-teal-500"
    }
  ]

  return (
    <section className="py-20 bg-white/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Dịch vụ của chúng tôi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Giải pháp cloud toàn diện từ edge computing đến AI training, được thiết kế để tăng tốc doanh nghiệp của bạn
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="relative overflow-hidden group">
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-vcloud-text-dark mb-2">
                  {service.title}
                </h3>
              </CardHeader>
              
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <Badge key={featureIndex} variant="outline" size="sm">
                      {feature}
                    </Badge>
                  ))}
                </div>
                
                {/* CTA */}
                <Link href="/features" className="text-cyan-500 hover:text-cyan-600 font-medium transition-colors duration-200">
                  Tìm hiểu thêm →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 
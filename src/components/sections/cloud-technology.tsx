import { Card, CardContent } from '../ui/card'
import { Badge } from '../ui/badge'

export function CloudTechnology() {
  const technologies = [
    {
      category: "Infrastructure",
      items: [
        { name: "Kubernetes", description: "Container orchestration platform" },
        { name: "Docker", description: "Containerization technology" },
        { name: "Terraform", description: "Infrastructure as Code" },
        { name: "Ansible", description: "Configuration management" }
      ]
    },
    {
      category: "AI & ML",
      items: [
        { name: "TensorFlow", description: "Machine learning framework" },
        { name: "PyTorch", description: "Deep learning platform" },
        { name: "CUDA", description: "GPU acceleration" },
        { name: "MLflow", description: "ML lifecycle management" }
      ]
    },
    {
      category: "Security",
      items: [
        { name: "Zero Trust", description: "Security architecture" },
        { name: "WAF", description: "Web Application Firewall" },
        { name: "DDoS Protection", description: "Attack mitigation" },
        { name: "SSL/TLS", description: "Encryption standards" }
      ]
    }
  ]

  return (
    <section className="py-20 bg-white/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="primary" className="mb-4">
            Technology Stack
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-vcloud-text-dark mb-4">
            Công nghệ tiên tiến
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Được xây dựng trên nền tảng công nghệ hiện đại nhất, đảm bảo hiệu suất và độ tin cậy cao
          </p>
        </div>

        {/* Technology grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-vcloud-text-dark mb-6 text-center">
                  {tech.category}
                </h3>
                <div className="space-y-4">
                  {tech.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-vcloud-cyan rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-vcloud-text-dark">{item.name}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key features */}
        <div className="bg-gradient-to-r from-vcloud-navy to-vcloud-navy-dark rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Tại sao chọn VCLOUD?</h3>
            <p className="text-gray-300 text-lg">
              Chúng tôi cam kết mang đến trải nghiệm cloud tốt nhất
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="font-semibold mb-2">Hiệu suất cao</h4>
              <p className="text-sm text-gray-300">Tối ưu hóa cho tốc độ và hiệu suất</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h4 className="font-semibold mb-2">Bảo mật tuyệt đối</h4>
              <p className="text-sm text-gray-300">Tiêu chuẩn bảo mật enterprise</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📈</div>
              <h4 className="font-semibold mb-2">Mở rộng linh hoạt</h4>
              <p className="text-sm text-gray-300">Scale theo nhu cầu thực tế</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🛠️</div>
              <h4 className="font-semibold mb-2">Hỗ trợ 24/7</h4>
              <p className="text-sm text-gray-300">Đội ngũ kỹ thuật chuyên nghiệp</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
import { ComputePageData } from '../types/compute';

export const computePageData: ComputePageData = {
  hero: {
    badge: "VCLOUD Compute",
    title: "Nền tảng",
    highlightText: "Cloud Compute",
    titleEnd: "mạnh mẽ, linh hoạt cho doanh nghiệp",
    description: "Cloud Compute cung cấp hiệu suất cao, khả năng mở rộng linh hoạt và độ ổn định vượt trội, đáp ứng mọi nhu cầu xử lý từ đơn giản đến chuyên sâu.",
    primaryCTA: "Khởi tạo máy chủ ngay",
    secondaryCTA: "Tư vấn miễn phí"
  },

  whatIs: {
    title: "Cloud Compute là gì?",
    description: "Cloud compute là dịch vụ điện toán đám mây cho phép người dùng tạo và quản lý máy chủ ảo (VM) trên hạ tầng internet. Thay vì đầu tư vào phần cứng vật lý, doanh nghiệp có thể thuê tài nguyên xử lý theo nhu cầu thực tế, đảm bảo tính linh hoạt, tối ưu chi phí và khả năng mở rộng không giới hạn."
  },

  benefits: [
    {
      id: "performance",
      title: "Hiệu suất ổn định", 
      description: "Đạt tiêu chuẩn Tier 3 data center, đảm bảo uptime lên tới 99,997% cho hệ thống doanh nghiệp.",
      metric: "99.997%",
      iconName: "activity"
    },
    {
      id: "cost",
      title: "Tối ưu chi phí",
      description: "Gói dịch vụ được may đo theo nhu cầu sử dụng, phù hợp với tiến độ dự án của doanh nghiệp.", 
      metric: "40%",
      iconName: "trending-down"
    },
    {
      id: "security",
      title: "Tích hợp bảo mật và giám sát",
      description: "Tuân thủ các tiêu chuẩn bảo mật quốc tế: ISO 27001, 2FA. Cơ chế bảo mật SSH Key Pair, Security Group - Firewall Rule.",
      metric: "ISO 27001", 
      iconName: "shield-check"
    },
    {
      id: "scalability",
      title: "Khả năng mở rộng theo nhu cầu",
      description: "Hệ thống linh hoạt, đáp ứng dễ dàng mọi nhu cầu tùy chỉnh đặc thù của doanh nghiệp.",
      metric: "10x",
      iconName: "trending-up"
    }
  ],

  userExperience: [
    {
      id: "ui",
      title: "Giao diện quản lý trực quan",
      description: "Dashboard web-based hiện đại, dễ sử dụng với các thao tác drag & drop, giúp quản lý tài nguyên máy chủ một cách đơn giản và hiệu quả."
    },
    {
      id: "deployment", 
      title: "Triển khai nhanh chóng",
      description: "Khởi tạo VM chỉ trong vài phút với các template có sẵn cho Windows, Linux, và các ứng dụng phổ biến như WordPress, Docker."
    },
    {
      id: "api",
      title: "API toàn diện", 
      description: "REST API đầy đủ cho automation, tích hợp với CI/CD pipeline và infrastructure-as-code tools như Terraform, Ansible."
    },
    {
      id: "support",
      title: "Hỗ trợ 24/7",
      description: "Đội ngũ kỹ thuật chuyên môn cao hỗ trợ qua multiple channels: live chat, phone, email với thời gian phản hồi dưới 15 phút."
    }
  ],

  features: [
    {
      id: "custom-config",
      title: "Tùy chỉnh cấu hình máy chủ ảo theo nhu cầu",
      description: "Tạo VM với số nhân CPU, dung lượng RAM, ổ đĩa SSD theo mức tải và đặc thù ứng dụng của bạn."
    },
    {
      id: "autoscaling",
      title: "Khả năng mở rộng tự động (autoscaling)", 
      description: "Tự động tăng/giảm tài nguyên theo lưu lượng truy cập hoặc nhu cầu xử lý, không gián đoạn hệ thống."
    },
    {
      id: "cloud-native",
      title: "Tích hợp cloud native tools",
      description: "Compute hỗ trợ các công cụ quản lý hạ tầng hiện đại như Terraform, Prometheus, Kubernetes, và API quản trị giúp tăng tốc quy trình vận hành."
    },
    {
      id: "monitoring",
      title: "Hệ thống giám sát và cảnh báo thông minh",
      description: "Theo dõi tình trạng tài nguyên theo thời gian thực, cảnh báo sớm khi vượt ngưỡng tải cho phép."
    }
  ],

  useCases: [
    {
      id: "ai-data",
      title: "Xử lý AI và dữ liệu chuyên sâu",
      description: "Khai thác sức mạnh từ các máy chủ cấu hình cao để huấn luyện mô hình AI, xử lý big data và chạy batch job với hiệu suất vượt trội, độ ổn định cao.",
      features: ["GPU Computing", "High Memory", "Parallel Processing"],
      gradientClass: "from-teal-400 to-cyan-500"
    },
    {
      id: "development",
      title: "Phát triển và thử nghiệm sản phẩm", 
      description: "Dễ dàng tạo môi trường test/staging riêng biệt, hỗ trợ snapshot và rollback giúp tối ưu quy trình phát triển phần mềm nhanh chóng và an toàn.",
      features: ["Dev/Test Environments", "Snapshot & Restore", "CI/CD Integration"],
      gradientClass: "from-teal-400 to-blue-500"
    },
    {
      id: "campaigns",
      title: "Triển khai hệ thống linh hoạt theo chiến dịch",
      description: "Phù hợp cho các chiến dịch marketing, thương mại điện tử cần tài nguyên lớn trong thời gian ngắn. Dễ dàng mở rộng – thu gọn tài nguyên chỉ trong vài thao tác.",
      features: ["Auto Scaling", "Load Balancing", "Traffic Management"], 
      gradientClass: "from-cyan-500 to-blue-600"
    },
    {
      id: "enterprise",
      title: "Vận hành nền tảng nội bộ hoặc hệ thống doanh nghiệp",
      description: "Chạy các hệ thống ERP, CRM, phần mềm kế toán hoặc hệ thống nội bộ doanh nghiệp với độ tin cậy cao, luôn sẵn sàng 24/7 nhờ hạ tầng chuẩn Tier III.",
      features: ["Enterprise Applications", "High Availability", "24/7 Support"],
      gradientClass: "from-teal-400 to-cyan-500"
    }
  ],

  finalCTA: {
    title: "Tăng tốc vận hành, mở rộng hệ thống và bảo mật toàn diện",
    subtitle: "Cùng hạ tầng máy chủ ảo hiệu suất cao ngay hôm nay",
    primaryButton: "Bắt đầu dùng thử miễn phí", 
    secondaryButton: "Liên hệ tư vấn",
    trustSignals: ["ISO 27001", "99.997% Uptime", "24/7 Support", "Tier III Data Center"]
  }
}; 
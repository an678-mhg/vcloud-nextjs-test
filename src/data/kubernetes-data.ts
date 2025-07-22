export const kubernetesPageData = {
  hero: {
    badge: "Managed Kubernetes",
    title: "Nền tảng container",
    highlightText: "tự động hóa",
    titleEnd: "orchestration thông minh",
    description: "VCLOUD Kubernetes giúp triển khai, quản lý và mở rộng ứng dụng container một cách tự động, đảm bảo tính sẵn sàng cao và hiệu quả vận hành.",
    primaryCTA: "Triển khai cluster",
    secondaryCTA: "Tìm hiểu thêm"
  },
  
  services: [
    {
      title: "Container orchestration",
      icon: "🐳",
      description: "Quản lý và điều phối container tự động với Kubernetes native"
    },
    {
      title: "Auto-scaling",
      icon: "📈", 
      description: "Tự động mở rộng ứng dụng theo nhu cầu tải"
    },
    {
      title: "Service mesh",
      icon: "🕸️",
      description: "Kết nối và bảo mật giao tiếp giữa các microservices"
    }
  ],

  about: {
    title: "Kubernetes là gì?",
    description: "Kubernetes là nền tảng mã nguồn mở để tự động hóa việc triển khai, mở rộng và quản lý các ứng dụng được đóng gói trong container. VCLOUD Managed Kubernetes giúp bạn tập trung vào phát triển ứng dụng thay vì quản lý hạ tầng phức tạp."
  },

  benefits: [
    {
      title: 'Cấp phát "one-click"',
      description: "Cấp phát worker nodes chỉ bằng một cú nhấp chuột qua portal, API, hoặc Terraform.",
      icon: "phone"
    },
    {
      title: "Hỗ trợ GPU worker nodes", 
      description: "Chạy các workload nặng về GPU như machine learning, xử lý video, và gaming.",
      icon: "shield-exclamation"
    },
    {
      title: "Hỗ trợ Bare-Metal",
      description: "Hỗ trợ Bare-Metal cho các worker node giúp cải thiện độ trễ và hiệu suất vượt trội cho ứng dụng của bạn.",
      icon: "server"
    },
    {
      title: "Quản lý Cluster Miễn Phí",
      description: "Quản lý cluster cấp độ production hoàn toàn miễn phí với cam kết SLA 99.9%, đảm bảo sự ổn định.",
      icon: "shield-check"
    }
  ],

  features: [
    {
      title: "Kubernetes as a Service",
      description: "Quản lý cluster Kubernetes hoàn toàn tự động với control plane được vận hành bởi VCLOUD"
    },
    {
      title: "Multi-zone deployment",
      description: "Triển khai ứng dụng trên nhiều availability zone để đảm bảo high availability"
    }, 
    {
      title: "Integrated monitoring",
      description: "Giám sát cluster và workload với Prometheus và Grafana tích hợp sẵn"
    },
    {
      title: "DevOps integration",
      description: "Tích hợp với CI/CD pipeline và infrastructure-as-code tools"
    }
  ],

  useCases: [
    {
      id: "microservices",
      title: "Microservices architecture",
      description: "Triển khai và quản lý kiến trúc microservices với service discovery và load balancing tự động",
      features: ["Service Mesh", "Auto Discovery", "Load Balancing"],
      gradientClass: "from-teal-400 to-cyan-500"
    },
    {
      id: "cicd",
      title: "CI/CD automation", 
      description: "Tự động hóa quy trình build, test và deploy với GitOps và container-native workflows",
      features: ["GitOps", "Automated Testing", "Rolling Updates"],
      gradientClass: "from-teal-400 to-blue-500"
    },
    {
      id: "ml",
      title: "Machine Learning workloads",
      description: "Chạy training và inference models với GPU support và distributed computing",
      features: ["GPU Support", "Distributed Training", "Model Serving"],
      gradientClass: "from-cyan-500 to-blue-600"
    },
    {
      id: "traffic",
      title: "High-traffic applications",
      description: "Xử lý lưu lượng cao với auto-scaling và load distribution thông minh",
      features: ["Horizontal Pod Autoscaler", "Vertical Pod Autoscaler", "Cluster Autoscaler"],
      gradientClass: "from-teal-400 to-cyan-500"
    }
  ],

  finalCTA: {
    title: "Triển khai ứng dụng container thông minh",
    subtitle: "Với Managed Kubernetes hiệu suất cao ngay hôm nay",
    primaryButton: "Triển khai cluster ngay", 
    secondaryButton: "Liên hệ tư vấn",
    trustSignals: ["SLA 99.9%", "GPU Support", "Bare Metal", "Auto Scaling"]
  }
}; 
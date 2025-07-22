export const storagePageData = {
  hero: {
    badge: "VCLOUD Storage",
    title: "Giải pháp lưu trữ đám mây",
    highlightText: "an toàn",
    titleEnd: "mở rộng không giới hạn",
    description: "VCLOUD Storage cung cấp không gian lưu trữ linh hoạt với khả năng sao lưu tự động, đảm bảo dữ liệu luôn an toàn và có thể truy cập mọi lúc, mọi nơi.",
    primaryCTA: "Bắt đầu lưu trữ",
    secondaryCTA: "Tìm hiểu thêm"
  },
  
  services: [
    {
      title: "Object Storage",
      icon: "📦",
      description: "Lưu trữ object với khả năng mở rộng không giới hạn, tương thích S3 API"
    },
    {
      title: "Backup & Restore",
      icon: "💿", 
      description: "Sao lưu tự động và khôi phục dữ liệu nhanh chóng khi cần thiết"
    },
    {
      title: "Content Delivery",
      icon: "🌍",
      description: "Phân phối nội dung toàn cầu với CDN tích hợp cho tốc độ tối ưu"
    }
  ],

  about: {
    title: "Storage là gì?",
    description: "Cloud Storage là dịch vụ lưu trữ dữ liệu trên nền tảng đám mây, cho phép lưu trữ, truy cập và quản lý dữ liệu từ bất kỳ đâu. VCLOUD Storage cung cấp giải pháp lưu trữ an toàn, linh hoạt và có thể mở rộng theo nhu cầu của doanh nghiệp."
  },

  benefits: [
    {
      title: "Mở rộng không giới hạn",
      description: "Tăng dung lượng lưu trữ theo nhu cầu thực tế mà không cần đầu tư hạ tầng vật lý.",
      icon: "trending-up"
    },
    {
      title: "Sao lưu tự động", 
      description: "Hệ thống backup tự động đảm bảo dữ liệu luôn được bảo vệ và có thể khôi phục.",
      icon: "refresh"
    },
    {
      title: "Bảo mật dữ liệu",
      description: "Mã hóa dữ liệu end-to-end, kiểm soát truy cập chi tiết và tuân thủ các tiêu chuẩn bảo mật.",
      icon: "shield-check"
    },
    {
      title: "Truy cập toàn cầu",
      description: "Truy cập dữ liệu từ bất kỳ đâu với tốc độ cao nhờ mạng CDN toàn cầu.",
      icon: "globe"
    }
  ],

  features: [
    {
      title: "Object Storage S3-compatible",
      description: "API tương thích với Amazon S3, dễ dàng tích hợp với các ứng dụng và công cụ hiện có"
    },
    {
      title: "Block Storage hiệu năng cao",
      description: "Ổ đĩa SSD với IOPS cao cho các ứng dụng cần hiệu năng xử lý nhanh"
    }, 
    {
      title: "CDN tích hợp",
      description: "Content Delivery Network giúp tăng tốc truy cập nội dung trên toàn cầu"
    },
    {
      title: "Lifecycle Management",
      description: "Tự động quản lý vòng đời dữ liệu, chuyển đổi giữa các tiers lưu trữ để tối ưu chi phí"
    }
  ],

  useCases: [
    {
      id: "static-assets",
      title: "Website Static Assets",
      description: "Lưu trữ và phân phối các file tĩnh như hình ảnh, CSS, JavaScript cho website với tốc độ cao",
      features: ["CDN Integration", "High Bandwidth", "Cache Optimization"],
      gradientClass: "from-teal-400 to-cyan-500"
    },
    {
      id: "database-backup",
      title: "Database Backups", 
      description: "Sao lưu cơ sở dữ liệu tự động với khả năng khôi phục nhanh chóng và đáng tin cậy",
      features: ["Automated Backup", "Point-in-time Recovery", "Cross-region Replication"],
      gradientClass: "from-teal-400 to-blue-500"
    },
    {
      id: "media-streaming",
      title: "Media Streaming",
      description: "Lưu trữ và streaming video, audio với chất lượng cao và độ trễ thấp",
      features: ["Video Transcoding", "Adaptive Bitrate", "Global CDN"],
      gradientClass: "from-cyan-500 to-blue-600"
    },
    {
      id: "data-archiving",
      title: "Data Archiving",
      description: "Lưu trữ dài hạn cho dữ liệu ít truy cập với chi phí tối ưu và độ bền cao",
      features: ["Cold Storage", "Glacier Archive", "Compliance Ready"],
      gradientClass: "from-teal-400 to-cyan-500"
    }
  ],

  finalCTA: {
    title: "Bảo vệ và tối ưu dữ liệu doanh nghiệp",
    subtitle: "Với giải pháp lưu trữ đám mây an toàn và linh hoạt",
    primaryButton: "Bắt đầu lưu trữ ngay", 
    secondaryButton: "Liên hệ tư vấn",
    trustSignals: ["99.999% Durability", "S3 Compatible", "Global CDN", "Auto Backup"]
  }
}; 
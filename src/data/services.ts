import { Service } from '../types/services';

export const services: Service[] = [
  {
    id: 'iaas',
    title: 'Infrastructure as a Service',
    subtitle: 'Hạ Tầng Như Dịch Vụ',
    description: 'IaaS cung cấp hạ tầng điện toán đám mây với khả năng mở rộng linh hoạt, cho phép doanh nghiệp tập trung vào phát triển ứng dụng thay vì quản lý phần cứng.',
    features: [
      'Máy tính ảo (Compute) hiệu suất cao với CPU và RAM tùy chỉnh',
      'Lưu trữ (Storage) linh hoạt với SSD NVMe tốc độ cao',
      'Mạng (Networking) tốc độ cao với load balancer tích hợp',
      'Backup tự động và disaster recovery đảm bảo an toàn dữ liệu'
    ],
    visual: {
      type: 'iaas',
      items: [
        { id: 'compute', name: 'Compute', icon: 'Server', description: 'Máy tính ảo hiệu suất cao' },
        { id: 'storage', name: 'Storage', icon: 'Database', description: 'Lưu trữ SSD NVMe' },
        { id: 'networking', name: 'Networking', icon: 'Globe', description: 'Mạng tốc độ cao' }
      ]
    },
    colors: {
      primary: 'blue-600',
      secondary: 'slate-100',
      accent: 'blue-500'
    }
  },
  {
    id: 'paas',
    title: 'Platform as a Service',
    subtitle: 'Nền Tảng Như Dịch Vụ',
    description: 'PaaS cung cấp nền tảng phát triển hoàn chỉnh với các công cụ, framework và dịch vụ cần thiết để xây dựng, triển khai và quản lý ứng dụng một cách nhanh chóng.',
    features: [
      'Môi trường phát triển tích hợp với nhiều ngôn ngữ lập trình',
      'Tự động scaling và load balancing cho ứng dụng',
      'Tích hợp CI/CD pipeline và DevOps tools',
      'Marketplace với hàng trăm extension và add-ons'
    ],
    visual: {
      type: 'paas',
      items: [
        { id: 'security', name: 'Security & Management', icon: 'Shield', description: 'Bảo mật đa lớp' },
        { id: 'functions', name: 'Function as a Service', icon: 'Zap', description: 'Serverless functions' },
        { id: 'logging', name: 'Managed Logging', icon: 'FileText', description: 'Quản lý log tập trung' },
        { id: 'marketplace', name: 'Application Marketplace', icon: 'Store', description: 'Kho ứng dụng' },
        { id: 'database', name: 'Database Services', icon: 'Database', description: 'Cơ sở dữ liệu managed' },
        { id: 'containers', name: 'Containers as a Service', icon: 'Package', description: 'Container orchestration' },
        { id: 'devops', name: 'DevOps', icon: 'GitBranch', description: 'CI/CD pipeline' },
        { id: 'monitoring', name: 'Monitoring', icon: 'BarChart3', description: 'Giám sát ứng dụng' }
      ]
    },
    colors: {
      primary: 'emerald-600',
      secondary: 'green-100',
      accent: 'emerald-500'
    }
  },
  {
    id: 'management',
    title: 'Management & Operations',
    subtitle: 'Quản Lý & Vận Hành',
    description: 'Bộ công cụ quản lý và vận hành toàn diện giúp doanh nghiệp kiểm soát, tối ưu hóa và tự động hóa các hoạt động cloud computing một cách hiệu quả.',
    features: [
      'Dashboard tổng quan với analytics và reporting chi tiết',
      'API mở và SDK đa nền tảng để tích hợp dễ dàng',
      'Self-service portal cho người dùng cuối',
      'Quản lý billing và cost optimization thông minh'
    ],
    visual: {
      type: 'management',
      items: [
        { id: 'integrations', name: 'Integrations', icon: 'Link', description: 'Tích hợp hệ thống' },
        { id: 'api', name: 'API', icon: 'Code', description: 'RESTful API' },
        { id: 'portal', name: 'Self-service Portal', icon: 'Layout', description: 'Giao diện quản lý' },
        { id: 'billing', name: 'Billing', icon: 'DollarSign', description: 'Quản lý chi phí' },
        { id: 'reports', name: 'Reports', icon: 'PieChart', description: 'Báo cáo chi tiết' },
        { id: 'reservation', name: 'Resource Reservation', icon: 'Users', description: 'Đặt trước tài nguyên' }
      ]
    },
    colors: {
      primary: 'purple-600',
      secondary: 'purple-100',
      accent: 'purple-500'
    }
  }
]; 
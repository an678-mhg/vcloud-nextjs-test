'use client'

const features = [
  {
    icon: (
      <svg className="w-7 h-7 text-[#0D5E56]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
      </svg>
    ),
    title: "An toàn & Bảo mật",
    description: "Dữ liệu được mã hóa và nhân bản trên nhiều vùng, đảm bảo an toàn tuyệt đối và tính toàn vẹn ngay cả khi có sự cố."
  },
  {
    icon: (
      <svg className="w-7 h-7 text-[#0D5E56]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v4m0 0h-4m4 0l-5-5"></path>
      </svg>
    ),
    title: "Mở rộng không giới hạn",
    description: "Bắt đầu với dung lượng nhỏ và mở rộng linh hoạt theo nhu cầu tăng trưởng của doanh nghiệp mà không gián đoạn dịch vụ."
  },
  {
    icon: (
      <svg className="w-7 h-7 text-[#0D5E56]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    ),
    title: "Hiệu năng vượt trội",
    description: "Hạ tầng phần cứng mạnh mẽ và mạng tốc độ cao đảm bảo truy xuất dữ liệu nhanh chóng, ổn định cho mọi ứng dụng."
  },
  {
    icon: (
      <svg className="w-7 h-7 text-[#0D5E56]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
      </svg>
    ),
    title: "Chi phí tối ưu",
    description: "Mô hình \"pay-as-you-go\" giúp bạn chỉ trả tiền cho dung lượng thực sử dụng, loại bỏ chi phí đầu tư hạ tầng ban đầu."
  }
]

export function WhyStorage() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0D5E56]">Vì sao chọn VCLOUD Storage?</h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Nền tảng của chúng tôi được xây dựng trên các tiêu chuẩn hàng đầu để mang lại sự tin cậy và hiệu quả tối đa.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
            <div className="bg-[#e6fffa] inline-block p-3 rounded-full mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
} 
'use client'

const solutions = [
  {
    title: "Object Storage (Tương thích S3)",
    description: "Giải pháp lưu trữ đối tượng an toàn, bền bỉ, chi phí thấp và có khả năng mở rộng không giới hạn. Tương thích hoàn toàn với S3 API, giúp dễ dàng tích hợp và di chuyển ứng dụng.",
    useCases: [
      "Lưu trữ và phân phối hình ảnh, video, tài sản web.",
      "Sao lưu và phục hồi dữ liệu quy mô lớn.",
      "Lưu trữ dữ liệu cho Big Data, AI và Machine Learning."
    ]
  },
  {
    title: "Block Storage (SSD)",
    description: "Lưu trữ khối hiệu năng cao với độ trễ thấp, được thiết kế cho các ứng dụng yêu cầu tốc độ truy xuất dữ liệu nhanh như cơ sở dữ liệu và ứng dụng doanh nghiệp.",
    useCases: [
      "Cơ sở dữ liệu giao dịch (MySQL, PostgreSQL).",
      "Hệ thống ERP, CRM và các ứng dụng nghiệp vụ.",
      "Môi trường phát triển và kiểm thử hiệu năng cao."
    ]
  },
  {
    title: "File Storage",
    description: "Cung cấp một hệ thống tệp tin chia sẻ, được quản lý hoàn toàn, dễ dàng tích hợp và truy cập đồng thời từ nhiều máy chủ ảo, hoạt động như một ổ đĩa mạng (NAS).",
    useCases: [
      "Thư mục chia sẻ chung cho các phòng ban, dự án.",
      "Lưu trữ dữ liệu cho các hệ thống quản lý nội dung (CMS).",
      "Môi trường làm việc cộng tác cần truy cập tệp tin chung."
    ]
  },
  {
    title: "Backup & Archive",
    description: "Dịch vụ sao lưu và lưu trữ dữ liệu dài hạn với chi phí cực thấp. Đảm bảo an toàn cho các tài sản số quan trọng và dữ liệu cần tuân thủ quy định.",
    useCases: [
      "Sao lưu toàn bộ máy chủ ảo và cơ sở dữ liệu.",
      "Lưu trữ dữ liệu tuân thủ (hóa đơn, chứng từ, logs).",
      "Kho lưu trữ tài liệu, media ít khi truy cập."
    ]
  }
]

export function StorageSolutions() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 bg-white rounded-xl shadow-inner">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0D5E56]">Các Giải pháp Lưu trữ</h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Từ lưu trữ media, ứng dụng doanh nghiệp đến sao lưu dài hạn, chúng tôi đều có giải pháp phù hợp.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {solutions.map((solution, index) => (
          <div key={index} className="section-card bg-gray-50 p-8 rounded-lg border-l-4 border-[#00C4B3]">
            <h2 className="text-2xl font-bold text-[#0D5E56] mb-3">{solution.title}</h2>
            <p className="text-gray-600 mb-6">{solution.description}</p>
            <h3 className="font-semibold mb-3 text-gray-700">Lý tưởng cho:</h3>
            <ul className="space-y-2 text-gray-600">
              {solution.useCases.map((useCase, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-[#00C4B3] font-bold mr-2 mt-1">&#10003;</span>
                  <span>{useCase}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
} 
'use client';

import React from 'react';
import Image from 'next/image';

const certifications = [
  {
    id: 1,
    name: "Bureau Veritas Certifications",
    logo: "/images/certifications/bureau-veritas.png", // Bạn sẽ cần upload ảnh này
    standards: ["ISO 27001", "ISO 20000-1"],
    description: "Chứng nhận quản lý bảo mật thông tin và quản lý dịch vụ CNTT",
    color: "from-red-500 to-red-600"
  },
  {
    id: 2,
    name: "MOST-certified Enterprise",
    logo: "/images/certifications/most.png", // Bạn sẽ cần upload ảnh này
    standards: ["MOST-certified Science", "and Technology Enterprise", "No. 59/DNKHCN"],
    description: "Doanh nghiệp Khoa học và Công nghệ được Bộ Khoa học và Công nghệ chứng nhận",
    color: "from-blue-600 to-blue-700"
  },
  {
    id: 3,
    name: "MIC Cybersecurity License",
    logo: "/images/certifications/mic.png", // Bạn sẽ cần upload ảnh này
    standards: ["MIC-Cybersecurity Product", "Trading License", "No. 121/GP-BTTTT"],
    description: "Giấy phép kinh doanh sản phẩm an toàn thông tin mạng",
    color: "from-indigo-600 to-indigo-700"
  }
];

export function Certifications() {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Chứng Nhận & Giấy Phép
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            VCLOUD được chứng nhận bởi các tổ chức uy tín quốc tế và trong nước, 
            đảm bảo tuân thủ các tiêu chuẩn cao nhất về bảo mật, chất lượng dịch vụ 
            và quản lý thông tin.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-8 border border-gray-100"
            >
              {/* Logo */}
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-2xl text-gray-400">🏆</div>
                  {/* Uncomment khi có ảnh thực tế */}
                  {/* <Image
                    src={cert.logo}
                    alt={cert.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-contain"
                  /> */}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                {cert.name}
              </h3>

              {/* Standards */}
              <div className="space-y-2 mb-6">
                {cert.standards.map((standard, index) => (
                  <div
                    key={index}
                    className={`text-center px-4 py-2 rounded-lg bg-gradient-to-r ${cert.color} text-white font-semibold text-sm`}
                  >
                    {standard}
                  </div>
                ))}
              </div>

              {/* Description */}
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Cam Kết Chất Lượng
            </h3>
            <p className="text-gray-600 mb-6">
              Các chứng nhận này khẳng định cam kết của VCLOUD trong việc cung cấp dịch vụ 
              đám mây an toàn, đáng tin cậy và tuân thủ các tiêu chuẩn quốc tế cao nhất.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
                <div className="text-gray-600">Uptime Cam Kết</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                <div className="text-gray-600">Hỗ Trợ Kỹ Thuật</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-gray-600">Tuân Thủ Tiêu Chuẩn</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
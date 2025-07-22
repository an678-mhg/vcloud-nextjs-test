"use client";

import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { CheckCircleIcon, ChipIcon, CloudIcon, CogIcon } from "@heroicons/react/outline";

const tabIcons = [
  ChipIcon, // Infrastructure
  CloudIcon, // Platform
  CogIcon, // Management
];

const features = [
  {
    title: "Infrastructure as a Service",
    description:
      "Cung cấp tài nguyên hạ tầng điện toán đám mây cốt lõi bao gồm máy chủ ảo, lưu trữ và mạng. Toàn quyền kiểm soát và tùy chỉnh linh hoạt.",
    icon: CheckCircleIcon,
    color: "bg-blue-100 text-blue-600",
    highlight: true,
    features: [
      {
        title: "Máy chủ ảo (VMs)",
        description:
          "Hiệu suất cao, tùy chọn cấu hình đa dạng, sẵn sàng đáp ứng mọi nhu cầu.",
      },
      {
        title: "Lưu trữ linh hoạt",
        description:
          "Các giải pháp Block Storage, Object Storage an toàn, bền bỉ và dễ dàng mở rộng.",
      },
      {
        title: "Mạng ảo hóa (VPC)",
        description:
          "Tạo lập môi trường mạng riêng biệt, an toàn với khả năng tùy chỉnh định tuyến và bảo mật.",
      },
      {
        title: "Khả năng mở rộng tự động",
        description:
          "Tự động điều chỉnh tài nguyên theo nhu cầu thực tế, tối ưu chi phí và hiệu suất.",
      },
    ],
  },
  {
    title: "Platform as a Service",
    description:
      "Nền tảng hoàn chỉnh để phát triển, triển khai và quản lý ứng dụng mà không cần lo lắng về hạ tầng bên dưới.",
    icon: CheckCircleIcon,
    color: "bg-green-100 text-green-600",
    highlight: false,
    features: [
      {
        title: "Môi trường Runtime",
        description:
          "Hỗ trợ đa dạng ngôn ngữ lập trình và framework, giúp triển khai nhanh chóng.",
      },
      {
        title: "Cơ sở dữ liệu quản lý",
        description:
          "Các dịch vụ database (SQL, NoSQL) được tối ưu, tự động sao lưu và bảo trì.",
      },
      {
        title: "Nền tảng Container",
        description:
          "Dễ dàng triển khai và quản lý ứng dụng với Kubernetes hoặc dịch vụ container khác.",
      },
      {
        title: "Công cụ DevOps & CI/CD",
        description:
          "Tích hợp sẵn các công cụ giúp tự động hóa quy trình phát triển và triển khai.",
      },
    ],
  },
  {
    title: "Management",
    description:
      "Bộ công cụ toàn diện giúp bạn quản lý, giám sát và tối ưu hóa tài nguyên đám mây một cách hiệu quả và an toàn.",
    icon: CheckCircleIcon,
    color: "bg-purple-100 text-purple-600",
    highlight: false,
    features: [
      {
        title: "Cổng quản lý tập trung",
        description:
          "Giao diện trực quan để quản lý tất cả dịch vụ và tài nguyên của bạn.",
      },
      {
        title: "Giám sát & Cảnh báo",
        description:
          "Theo dõi hiệu suất, phát hiện sự cố sớm và nhận thông báo tức thời.",
      },
      {
        title: "Quản lý định danh & Truy cập (IAM)",
        description:
          "Kiểm soát quyền truy cập vào tài nguyên một cách an toàn và chi tiết.",
      },
      {
        title: "Thanh toán & Tối ưu chi phí",
        description:
          "Công cụ theo dõi, phân tích và quản lý chi tiêu đám mây hiệu quả.",
      },
    ],
  },
];

export default function Features() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 tracking-tight">
            Tính năng nổi bật
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-xl mx-auto">
            Khám phá tính năng mạnh mẽ của VCLOUD giúp doanh nghiệp của bạn vận hành hiệu quả hơn
          </p>
        </div>

        {/* Tab icons */}
        <div className="flex justify-center gap-8 md:gap-16 mb-10 border-b border-gray-200">
          {features.map((feature, idx) => {
            const Icon = tabIcons[idx] || CheckCircleIcon;
            return (
              <button
                key={feature.title}
                className={`flex flex-col items-center px-2 pb-3 focus:outline-none transition-all duration-200 relative group ${
                  activeTab === idx ? "text-blue-600" : "text-gray-500 hover:text-blue-500"
                }`}
                onClick={() => setActiveTab(idx)}
                aria-selected={activeTab === idx}
                aria-controls={`feature-tabpanel-${idx}`}
                tabIndex={0}
              >
                <span
                  className={`rounded-full p-3 mb-2 transition-all duration-200 ${
                    activeTab === idx
                      ? "bg-gradient-to-br from-blue-500 to-emerald-400 shadow-lg text-white"
                      : "bg-gray-100"
                  }`}
                >
                  <Icon className="w-8 h-8" />
                </span>
                <span className="font-semibold text-base">
                  {feature.title.replace(/ as a Service|ment/g, "")}
                </span>
                {activeTab === idx && (
                  <span className="absolute left-0 right-0 -bottom-1 h-1 bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Tab content */}
        <div
          ref={ref}
          className={`mx-auto max-w-3xl bg-white rounded-2xl shadow-xl p-8 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          id={`feature-tabpanel-${activeTab}`}
          role="tabpanel"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            {features[activeTab].title}
          </h3>
          <p className="text-gray-600 mb-6">{features[activeTab].description}</p>
          <ul className="space-y-4 mb-6">
            {features[activeTab].features.map((item) => (
              <li key={item.title} className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-gray-900">{item.title}:</span>{" "}
                  <span className="text-gray-600">{item.description}</span>
                </div>
              </li>
            ))}
          </ul>
          <button
            className="px-5 py-2 bg-gradient-to-r from-blue-500 to-emerald-400 text-white rounded-lg font-semibold shadow hover:from-blue-600 hover:to-emerald-500 transition-all duration-200"
            onClick={() => alert(`Đề xuất Giải pháp AI cho ${features[activeTab].title}`)}
          >
            ✨ Đề xuất Giải pháp AI
          </button>
        </div>
      </div>
    </section>
  );
}

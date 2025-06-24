"use client";

import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { CheckCircleIcon } from "@heroicons/react/outline";

// Styles for modal and other components
const styles = {
  featureColumn: `bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col`,
  highlightColumn: `border-2 border-blue-500`,
  iconPlaceholder: `w-10 h-10 rounded-md flex items-center justify-center mb-4`,
  featureList: `list-none p-0 mt-4 flex-grow space-y-3`,
  aiButton: `mt-6 px-4 py-2 bg-blue-500 text-white rounded-md font-medium text-center cursor-pointer hover:bg-blue-600 transition-colors duration-200`,
  modalOverlay: `fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300`,
  modalContent: `bg-white p-8 rounded-lg shadow-xl w-[90%] max-w-lg max-h-[90vh] overflow-y-auto`,
};

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

  const [modalState, setModalState] = useState({
    isOpen: false,
    service: "",
    loading: false,
    response: "",
  });

  const handleAIButtonClick = (service: string) => {
    setModalState({
      isOpen: true,
      service,
      loading: false,
      response: "",
    });
  };

  const handleModalClose = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleSubmitToGemini = async (problem: string) => {
    setModalState((prev) => ({ ...prev, loading: true }));
    try {
      // Implement Gemini API call here
      setModalState((prev) => ({
        ...prev,
        loading: false,
        response: "API implementation pending...",
      }));
    } catch (error) {
      setModalState((prev) => ({
        ...prev,
        loading: false,
        response: "Đã xảy ra lỗi. Vui lòng thử lại sau.",
      }));
    }
  };

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 tracking-tight">
            Tính năng nổi bật
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-xl mx-auto">
            Khám phá tính năng mạnh mẽ của VCLOUD giúp doanh nghiệp của bạn vận
            hành hiệu quả hơn
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch transition-all duration-1000 transform ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`${styles.featureColumn} ${
                feature.highlight ? styles.highlightColumn : ""
              }`}
            >
              <div className={`${styles.iconPlaceholder} ${feature.color}`}>
                <feature.icon className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>

              <p className="text-sm text-gray-600 mb-4">
                {feature.description}
              </p>

              <ul className={styles.featureList}>
                {feature.features.map((item) => (
                  <li key={item.title} className="flex items-start">
                    <div className="flex-shrink-0 mr-2">
                      <CheckCircleIcon className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <strong className="text-gray-900">{item.title}:</strong>{" "}
                      <span className="text-gray-600">{item.description}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <button
                className={styles.aiButton}
                onClick={() => handleAIButtonClick(feature.title)}
              >
                ✨ Đề xuất Giải pháp AI
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* AI Advisor Modal */}
      {modalState.isOpen && (
        <div className={styles.modalOverlay} onClick={handleModalClose}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              ✨ Cố vấn Giải pháp AI cho {modalState.service}
            </h4>

            <textarea
              className="w-full min-h-[100px] p-3 border border-gray-300 rounded-md mb-4 text-sm"
              placeholder="Mô tả vấn đề hoặc nhu cầu kinh doanh của bạn ở đây..."
            />

            {modalState.loading && (
              <div className="text-center text-gray-600">
                <svg
                  className="animate-spin h-5 w-5 text-blue-500 inline mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Đang xử lý yêu cầu...
              </div>
            )}

            {modalState.response && (
              <div className="mt-4 p-4 bg-gray-50 rounded-md text-sm text-gray-700">
                {modalState.response}
              </div>
            )}

            <div className="flex justify-end gap-2 mt-4">
              <button
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                onClick={handleModalClose}
              >
                Đóng
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={() => handleSubmitToGemini("Sample problem")}
              >
                Gửi yêu cầu
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

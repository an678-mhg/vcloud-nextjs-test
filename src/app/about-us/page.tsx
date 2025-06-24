"use client";

import React from "react";
import {
  ShieldCheckIcon,
  ChartBarIcon,
  CogIcon,
  UserGroupIcon,
  GlobeAltIcon,
  LightBulbIcon,
  ServerIcon,
  ClockIcon,
  HeartIcon,
  RefreshIcon,
} from "@heroicons/react/outline";

const AboutUsPage = () => {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-100 to-lime-100 py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-6">
                Về Chúng Tôi
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 font-medium mb-4">
                Đối tác tin cậy cho hành trình chuyển đổi số của doanh nghiệp
              </p>
              <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0">
                VCLOUD là đơn vị tiên phong cung cấp giải pháp Cloud với độ tin
                cậy cao và hiệu suất mạnh mẽ, đồng hành cùng sự phát triển của
                doanh nghiệp Việt.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-400/20 to-lime-400/20 rounded-lg transform rotate-3"></div>
                <img
                  src="https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/1/45/VCLOUD.png"
                  alt="VCLOUD Team"
                  className="relative z-10 rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            <div className="bg-gradient-to-br from-sky-50 to-sky-100 p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <RefreshIcon className="w-12 h-12 text-sky-600 mr-4" />
                <h2 className="text-2xl font-bold text-sky-600">Sứ Mệnh</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Mang đến nền tảng hạ tầng số linh hoạt, bảo mật và tối ưu chi
                phí, giúp doanh nghiệp tự tin đổi mới, vận hành hiệu quả và phát
                triển bền vững trong thời đại số đầy biến động.
              </p>
            </div>
            <div className="bg-gradient-to-br from-lime-50 to-lime-100 p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <LightBulbIcon className="w-12 h-12 text-lime-600 mr-4" />
                <h2 className="text-2xl font-bold text-lime-600">Tầm Nhìn</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Trở thành nhà cung cấp hạ tầng Cloud hàng đầu tại Việt Nam và
                vươn tầm khu vực Đông Nam Á, dẫn đầu về đổi mới công nghệ, chất
                lượng dịch vụ vượt trội và sự hài lòng của khách hàng.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Giá Trị Cốt Lõi
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <ShieldCheckIcon className="w-12 h-12 text-sky-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Tin Cậy</h3>
              <p className="text-gray-600">
                Cam kết uptime 99.9%, đạt chuẩn Tier 3 Data Center với độ tin
                cậy cao.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <CogIcon className="w-12 h-12 text-sky-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Linh Hoạt</h3>
              <p className="text-gray-600">
                Tùy biến theo nhu cầu, mở rộng dễ dàng theo sự phát triển của
                doanh nghiệp.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <ChartBarIcon className="w-12 h-12 text-sky-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Hiệu Quả</h3>
              <p className="text-gray-600">
                Mô hình thanh toán phù hợp, tối ưu đầu tư cho doanh nghiệp.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <HeartIcon className="w-12 h-12 text-sky-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Tận Tâm</h3>
              <p className="text-gray-600">
                Hỗ trợ kỹ thuật 24/7/365, luôn sẵn sàng đồng hành cùng khách
                hàng.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Vì Sao Chọn VCLOUD?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Performance Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-cyan-500 mb-6">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-12 h-12"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm3.707-11.707a1 1 0 00-1.414 0L11 11.586V7a1 1 0 00-2 0v4.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 000-1.414z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Hiệu Suất Đọc/Ghi Mạnh Mẽ
              </h3>
              <p className="text-gray-600">
                Read 53,000+ IOPS, Write 17,900+ IOPS đảm bảo tốc độ xử lý vượt
                trội cho mọi ứng dụng.
              </p>
            </div>

            {/* Essential Services Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-cyan-500 mb-6">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-12 h-12"
                >
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
                  <path d="M7 12h2v5H7zm4-3h2v8h-2zm4-3h2v11h-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Dịch Vụ Thiết Yếu Sẵn Sàng
              </h3>
              <p className="text-gray-600">
                Load Balancer, Snapshot, Backup và nhiều dịch vụ khác luôn sẵn
                sàng đáp ứng nhu cầu của bạn.
              </p>
            </div>

            {/* Scalability Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-cyan-500 mb-6">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-12 h-12"
                >
                  <path d="M4 4h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 10h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 16h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Mở Rộng Vô Hạn</h3>
              <p className="text-gray-600">
                Hạ tầng linh hoạt, dễ dàng mở rộng tài nguyên theo sự tăng
                trưởng của doanh nghiệp.
              </p>
            </div>

            {/* Custom Service Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-cyan-500 mb-6">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-12 h-12"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Gói Dịch Vụ Thiết Kế Riêng
              </h3>
              <p className="text-gray-600">
                Chúng tôi lắng nghe và tư vấn gói dịch vụ phù hợp nhất với từng
                nhu cầu sử dụng đặc thù.
              </p>
            </div>

            {/* Support Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-cyan-500 mb-6">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-12 h-12"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-14h2v7h-2zm0 8h2v2h-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Hỗ Trợ Kỹ Thuật 24/7/365
              </h3>
              <p className="text-gray-600">
                Đội ngũ chuyên gia luôn túc trực hỗ trợ qua chat, hotline,
                email, đảm bảo hệ thống vận hành ổn định.
              </p>
            </div>

            {/* Data Center Card */}
            <div className="bg-gradient-to-br from-cyan-500 to-green-500 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-white mb-6">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-12 h-12"
                >
                  <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Tier 3 Data Center
              </h3>
              <p className="text-white">
                Hạ tầng Data Center đạt chuẩn quốc tế, đảm bảo an toàn và ổn
                định tối đa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-sky-100 to-lime-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Sẵn Sàng Bắt Đầu?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Hãy để VCLOUD đồng hành cùng doanh nghiệp của bạn trong hành trình
            chuyển đổi số
          </p>
          <button className="bg-gradient-to-r from-sky-500 to-lime-500 text-white font-semibold py-3 px-8 rounded-lg text-lg hover:shadow-lg transition duration-300">
            Liên Hệ Ngay
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;

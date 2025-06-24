"use client";

import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { PhoneIcon } from "@heroicons/react/outline";

type ContactFormData = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  acceptTerms: boolean;
};

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    console.log(data);
    // TODO: Implement form submission
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Trao đổi với đội ngũ hỗ trợ 24/7
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Liên hệ với chúng tôi để được tư vấn chi tiết về các giải pháp hạ
              tầng, truyền tải và bảo mật.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <h2 className="text-2xl font-bold mb-6">Thông tin liên hệ</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Họ và tên <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("fullName", { required: true })}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Nguyen Van A"
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-sm text-red-500">
                        Vui lòng nhập họ và tên
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      {...register("email", {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                      })}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="name@abc.vn"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        Vui lòng nhập email hợp lệ
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Điện thoại <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      {...register("phone", { required: true })}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="0908123xxx"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">
                        Vui lòng nhập số điện thoại
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Doanh nghiệp <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("company", { required: true })}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="ABC JSC"
                    />
                    {errors.company && (
                      <p className="mt-1 text-sm text-red-500">
                        Vui lòng nhập tên doanh nghiệp
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Vấn đề doanh nghiệp cần xử lí
                    </label>
                    <textarea
                      {...register("message")}
                      rows={4}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Mô tả vấn đề của bạn..."
                    />
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        {...register("acceptTerms", { required: true })}
                        className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                      />
                    </div>
                    <div className="ml-3">
                      <label className="text-sm text-gray-600">
                        Bằng việc gửi biểu mẫu này, tôi đồng ý nhận các thông
                        tin tiếp thị cũng như sử dụng thông tin liên hệ và nhận
                        theo chính sách về quyền riêng tư
                      </label>
                    </div>
                  </div>
                  {errors.acceptTerms && (
                    <p className="text-sm text-red-500">
                      Vui lòng đồng ý với điều khoản
                    </p>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-primary text-white font-medium py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Liên hệ ngay
                  </button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-xl font-bold mb-4">Thông tin liên hệ</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <PhoneIcon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Điện thoại</p>
                        <a
                          href="tel:+842873067899"
                          className="text-primary hover:underline"
                        >
                          (+84) 28 7306 8789
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <PhoneIcon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p>
                          Sales:{" "}
                          <a
                            href="mailto:sales@vnetwork.vn"
                            className="text-primary hover:underline"
                          >
                            sales@vnetwork.vn
                          </a>
                        </p>
                        <p>
                          Support:{" "}
                          <a
                            href="mailto:contact@vnetwork.vn"
                            className="text-primary hover:underline"
                          >
                            contact@vnetwork.vn
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative h-[400px] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/contact-illustration.svg"
                    alt="Contact Illustration"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

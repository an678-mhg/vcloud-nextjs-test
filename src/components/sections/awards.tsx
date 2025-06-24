'use client';

import React from 'react';
import Image from 'next/image';

const awards = [
  {
    src: "https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/26/Frame%20194.png",
    alt: "Award 1"
  },
  {
    src: "https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/26/heloooshbsbjsf.png",
    alt: "Award 2"
  },
  {
    src: "https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/26/Frame%201509%20(1).png",
    alt: "Award 3"
  },
  {
    src: "https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/26/Frame%201510%20(1).png",
    alt: "Award 4"
  },
  {
    src: "https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/26/Frame%201511%20(1).png",
    alt: "Award 5"
  },
  {
    src: "https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/26/Frame%20195.png",
    alt: "Award 6"
  },
  {
    src: "https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/26/Frame%20196.png",
    alt: "Award 7"
  },
  {
    src: "https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/26/Frame%201514%20(1).png",
    alt: "Award 8"
  },
  {
    src: "https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/26/anhChungDev.png",
    alt: "Award 9"
  },
  {
    src: "https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/26/Frame%20208.png",
    alt: "Award 10"
  }
];

export function Awards() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
          Giải thưởng và chứng nhận
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          VCLOUD vinh dự đạt được các giải thưởng và chứng nhận uy tín trong lĩnh vực công nghệ, 
          khẳng định vị thế tiên phong trong cung cấp giải pháp hạ tầng Công nghệ thông tin, truyền tải 
          dữ liệu và bảo mật An toàn thông tin chất lượng cao cho doanh nghiệp.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <Image
                src={award.src}
                alt={award.alt}
                width={200}
                height={100}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
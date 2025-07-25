'use client'

import React from 'react';
import Image from 'next/image';

const clientLogos = [
  'https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/23/Cloud_Jollibee.png',
  'https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/23/Cloud_esuhai.png',
  'https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/23/Cloud_SeaTek.png',
  'https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/23/Cloud_Back_Khoa.png',
  'https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/23/Cloud_Cinestar.png',
  'https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/23/Cloud_Thanh_Nien.png',
  'https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/23/Cloud_Sendo.jpg',
  'https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/23/Cloud_Lao_Dong.png',
  'https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/23/Cloud_Bankograph.png',
];

const awards = [
  {
    image: 'https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/26/Frame 1510 (1).png',
    alt: 'VCLOUD Award 1'
  },
  {
    image: 'https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/26/67jdbdsbfsdf.png',
    alt: 'VCLOUD Award 2'
  },
  {
    image: 'https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/26/anhChungDev.png',
    alt: 'VCLOUD Award 3'
  },
  {
    image: 'https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/26/heloooshbsbjsf.png',
    alt: 'VCLOUD Award 4'
  }
];

const FeaturedClients = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-600 uppercase tracking-wider mb-8">
          Khách hàng của VCloud
        </p>
        
        {/* Client Logos Marquee */}
        <div className="overflow-hidden relative mb-16">
          <div className="flex items-center gap-12 animate-marquee whitespace-nowrap">
            {clientLogos.concat(clientLogos).map((logo, idx) => (
              <div key={idx} className="inline-flex justify-center items-center">
                <img
                  src={logo}
                  alt={`Logo khách hàng ${idx+1}`}
                  className="h-16 w-auto max-h-16 max-w-[160px] opacity-80 hover:opacity-100 transition duration-300 mx-6 object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Awards Section */}
        <div className="mt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {awards.map((award, index) => (
              <div key={index} className="flex justify-center items-center">
                <img
                  src={award.image}
                  alt={award.alt}
                  className="h-24 w-auto object-contain hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        `}</style>
      </div>
    </section>
  )
}

export default FeaturedClients 
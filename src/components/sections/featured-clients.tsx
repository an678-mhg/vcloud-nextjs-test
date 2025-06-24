'use client'

import React from 'react';
import Image from 'next/image';

const clients = [
  {
    name: 'Client 1',
    logo: 'https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/clients/client1.png'
  },
  {
    name: 'Client 2',
    logo: 'https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/clients/client2.png'
  },
  {
    name: 'Client 3',
    logo: 'https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/clients/client3.png'
  },
  {
    name: 'Client 4',
    logo: 'https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/clients/client4.png'
  },
  {
    name: 'Client 5',
    logo: 'https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/clients/client5.png'
  },
  {
    name: 'Client 6',
    logo: 'https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/clients/client6.png'
  }
];

export function FeaturedClients() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Khách hàng tiêu biểu
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hơn 500+ doanh nghiệp đã tin tưởng và sử dụng dịch vụ của VCLOUD
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
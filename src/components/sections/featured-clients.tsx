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

const FeaturedClients = () => {
  return (
    <section className="py-12 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-600 uppercase tracking-wider">
          Được tin cậy bởi những công ty hàng đầu
        </p>
        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-6">
          <div className="col-span-1 flex justify-center">
            <img 
              className="h-10 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition" 
              src="https://placehold.co/158x48/000000/ffffff?text=SAMSUNG" 
              alt="Samsung"
            />
          </div>
          <div className="col-span-1 flex justify-center">
            <img 
              className="h-10 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition" 
              src="https://placehold.co/158x48/000000/ffffff?text=HYUNDAI" 
              alt="Hyundai"
            />
          </div>
          <div className="col-span-1 flex justify-center">
            <img 
              className="h-10 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition" 
              src="https://placehold.co/158x48/000000/ffffff?text=PUBG" 
              alt="PUBG"
            />
          </div>
          <div className="col-span-1 flex justify-center">
            <img 
              className="h-10 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition" 
              src="https://placehold.co/158x48/000000/ffffff?text=LG" 
              alt="LG"
            />
          </div>
          <div className="col-span-1 flex justify-center">
            <img 
              className="h-10 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition" 
              src="https://placehold.co/158x48/000000/ffffff?text=LOTTE" 
              alt="Lotte"
            />
          </div>
          <div className="col-span-1 flex justify-center">
            <img 
              className="h-10 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition" 
              src="https://placehold.co/158x48/000000/ffffff?text=SK+TELECOM" 
              alt="SK Telecom"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedClients 
import { Metadata } from 'next';
import { HeroSection } from '../../components/storage/NewHeroSection';
import { WhyStorage } from '../../components/storage/WhyStorage';
import { StorageSolutions } from '../../components/storage/StorageSolutions';
import { ContactSection } from '../../components/sections/contact';

export const metadata: Metadata = {
  title: 'VCLOUD Storage - Giải pháp lưu trữ đám mây an toàn',
  description: 'VCLOUD Storage cung cấp lưu trữ object, backup tự động, CDN tích hợp. Mở rộng không giới hạn với độ bền 99.999%.',
  keywords: 'cloud storage, object storage, backup, CDN, S3 compatible, VCLOUD',
  openGraph: {
    title: 'VCLOUD Storage - Lưu trữ đám mây an toàn',
    description: 'Lưu trữ object với S3 API, backup tự động và CDN toàn cầu',
    type: 'website',
    locale: 'vi_VN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VCLOUD Storage - Lưu trữ đám mây an toàn',
    description: 'Lưu trữ object với S3 API, backup tự động và CDN toàn cầu',
  },
  alternates: {
    canonical: '/storage',
  },
};

export default function StoragePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhyStorage />
      <StorageSolutions />
      
      {/* Call to Action Section */}
      <section className="py-20 lg:py-32 bg-navy-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Bảo vệ và tối ưu dữ liệu doanh nghiệp
            </h2>
            <p className="text-xl lg:text-2xl text-gray-200 mb-12">
              Với giải pháp lưu trữ đám mây an toàn và linh hoạt
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <button className="bg-gradient-to-r from-cyan-400 to-green-400 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-500 hover:to-green-500 transition-all duration-300 shadow-lg hover:shadow-xl">
                Bắt đầu lưu trữ ngay
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300">
                Liên hệ tư vấn
              </button>
            </div>

            {/* Trust signals */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {["99.999% Durability", "S3 Compatible", "Global CDN", "Auto Backup"].map((signal, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-cyan-400 mb-2">
                    ✓
                  </div>
                  <div className="text-sm lg:text-base text-gray-200">
                    {signal}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <ContactSection />
    </main>
  );
} 
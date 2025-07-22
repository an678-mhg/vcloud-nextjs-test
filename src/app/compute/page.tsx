import { Metadata } from 'next';
import { HeroSection } from '../../components/compute/HeroSection';
import { WhatIsCompute } from '../../components/compute/WhatIsCompute';
import { BenefitsSection } from '../../components/compute/BenefitsSection';
import { UserExperience } from '../../components/compute/UserExperience';
import { FeaturesSection } from '../../components/compute/FeaturesSection';
import { UseCasesSection } from '../../components/compute/UseCasesSection';
import { FinalCTA } from '../../components/compute/FinalCTA';
import { ContactSection } from '../../components/sections/contact';

export const metadata: Metadata = {
  title: 'VCLOUD Compute - Cloud Computing mạnh mẽ cho doanh nghiệp',
  description: 'Cloud Compute cung cấp hiệu suất cao, mở rộng linh hoạt, uptime 99.997%. Tối ưu chi phí, bảo mật ISO 27001. Khởi tạo VM ngay.',
  keywords: 'cloud compute, máy chủ ảo, virtual machine, cloud computing vietnam, VCLOUD',
  openGraph: {
    title: 'VCLOUD Compute - Cloud Computing cho doanh nghiệp',
    description: 'Hiệu suất ổn định 99.997%, tối ưu chi phí, bảo mật chuẩn quốc tế',
    type: 'website',
    locale: 'vi_VN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VCLOUD Compute - Cloud Computing cho doanh nghiệp',
    description: 'Hiệu suất ổn định 99.997%, tối ưi chi phí, bảo mật chuẩn quốc tế',
  },
  alternates: {
    canonical: '/compute',
  },
};

export default function ComputePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhatIsCompute />
      <BenefitsSection />
      <UserExperience />
      <FeaturesSection />
      <UseCasesSection />
      <FinalCTA />
      <ContactSection />
    </main>
  );
} 
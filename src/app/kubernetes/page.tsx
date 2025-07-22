import { Metadata } from 'next';
import { HeroSection } from '../../components/kubernetes/HeroSection';
import { ServicesSection } from '../../components/kubernetes/ServicesSection';
import { AboutSection } from '../../components/kubernetes/AboutSection';
import { BenefitsSection } from '../../components/kubernetes/BenefitsSection';
import { FeaturesSection } from '../../components/kubernetes/FeaturesSection';
import { UseCasesSection } from '../../components/kubernetes/UseCasesSection';
import { FinalCTA } from '../../components/kubernetes/FinalCTA';
import { ContactSection } from '../../components/sections/contact';

export const metadata: Metadata = {
  title: 'VCLOUD Kubernetes - Managed Kubernetes Service cho doanh nghiệp',
  description: 'Managed Kubernetes service với control plane miễn phí, GPU support, bare metal nodes. Triển khai container orchestration thông minh.',
  keywords: 'kubernetes, managed kubernetes, container orchestration, k8s, VCLOUD',
  openGraph: {
    title: 'VCLOUD Kubernetes - Container Orchestration',
    description: 'Managed Kubernetes với SLA 99.9%, GPU support và bare metal nodes',
    type: 'website',
    locale: 'vi_VN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VCLOUD Kubernetes - Container Orchestration',
    description: 'Managed Kubernetes với SLA 99.9%, GPU support và bare metal nodes',
  },
  alternates: {
    canonical: '/kubernetes',
  },
};

export default function KubernetesPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <BenefitsSection />
      <FeaturesSection />
      <UseCasesSection />
      <FinalCTA />
      <ContactSection />
    </main>
  );
}

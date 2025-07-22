'use client';

import { motion } from 'framer-motion';
import { Settings, BarChart3, Layers, Bell } from 'lucide-react';
import { Container } from '../ui/Container';
import { FadeInWhenVisible } from '../animations/FadeInWhenVisible';
import { computePageData } from '../../data/compute-data';

const iconMap = {
  'custom-config': Settings,
  'autoscaling': BarChart3,
  'cloud-native': Layers,
  'monitoring': Bell,
};

export function FeaturesSection() {
  return (
    <section className="py-24 bg-slate-50">
      <Container>
        <FadeInWhenVisible className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Tính năng nổi bật
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Các tính năng tiên tiến giúp tối ưu hóa hiệu suất và quản lý hạ tầng
          </p>
        </FadeInWhenVisible>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {computePageData.features.map((feature, index) => {
            const Icon = iconMap[feature.id as keyof typeof iconMap];
            
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-teal-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-slate-500 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
} 
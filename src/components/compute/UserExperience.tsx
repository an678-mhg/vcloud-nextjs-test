'use client';

import { motion } from 'framer-motion';
import { Monitor, Zap, Code, Headphones } from 'lucide-react';
import { Container } from '../ui/Container';
import { FadeInWhenVisible } from '../animations/FadeInWhenVisible';
import { computePageData } from '../../data/compute-data';

const iconMap = {
  'ui': Monitor,
  'deployment': Zap,
  'api': Code,
  'support': Headphones,
};

export function UserExperience() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <FadeInWhenVisible className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Trải nghiệm người dùng
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Giao diện và công cụ được thiết kế để tối ưu hóa hiệu quả làm việc của bạn
          </p>
        </FadeInWhenVisible>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {computePageData.userExperience.map((item, index) => {
            const Icon = iconMap[item.id as keyof typeof iconMap];
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 rounded-xl hover:bg-slate-50 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
} 
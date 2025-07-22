'use client';

import { motion } from 'framer-motion';
import { Activity, TrendingDown, ShieldCheck, TrendingUp } from 'lucide-react';
import { Card } from '../ui/card';
import { Container } from '../ui/Container';
import { FadeInWhenVisible } from '../animations/FadeInWhenVisible';
import { computePageData } from '../../data/compute-data';

const iconMap = {
  'activity': Activity,
  'trending-down': TrendingDown,
  'shield-check': ShieldCheck,
  'trending-up': TrendingUp,
};

export function BenefitsSection() {
  return (
    <section className="py-24 bg-slate-50">
      <Container>
        <FadeInWhenVisible className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Lợi ích chính của Cloud Compute
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Khám phá những lợi ích vượt trội mà VCLOUD Compute mang lại cho doanh nghiệp của bạn
          </p>
        </FadeInWhenVisible>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {computePageData.benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.iconName as keyof typeof iconMap];
            
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="relative p-8 h-full hover:shadow-xl transition-all duration-300 group bg-white border border-gray-100">
                  {/* Metric Badge */}
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-teal-400 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    {benefit.metric}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-teal-600" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-slate-500 leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
} 
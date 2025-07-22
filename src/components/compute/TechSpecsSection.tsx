'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FadeInWhenVisible } from '../animations/FadeInWhenVisible';
import { StaggerChildren } from '../animations/StaggerChildren';
import { TechSpec } from '../../types/compute';

interface TechSpecsSectionProps {
  data: TechSpec[];
}

export function TechSpecsSection({ data }: TechSpecsSectionProps) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeInWhenVisible>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Thông số kỹ thuật
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cấu hình phần cứng và hiệu suất hàng đầu đảm bảo vận hành ổn định và tối ưu
            </p>
          </FadeInWhenVisible>
        </div>

        <div ref={ref} className="mx-auto max-w-4xl grid gap-8 lg:grid-cols-3 justify-items-center">
          <StaggerChildren>
            {data.map((category, index) => (
              <motion.div
                key={category.category}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 w-full max-w-xs"
                whileHover={{ y: -4 }}
              >
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">{category.category}</h3>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4">
                    {category.specs.map((spec, specIndex) => (
                      <motion.div
                        key={spec.name}
                        className={`flex justify-between items-center p-4 rounded-lg transition-all duration-300 ${
                          spec.highlight 
                            ? 'bg-blue-50 border-l-4 border-blue-500' 
                            : 'bg-gray-50 hover:bg-gray-100'
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: (index * 0.1) + (specIndex * 0.05) + 0.3 }}
                      >
                        <div className="flex flex-col">
                          <span className="font-medium text-gray-900 text-sm">{spec.name}</span>
                          <span className={`text-sm ${spec.highlight ? 'text-blue-600 font-medium' : 'text-gray-600'}`}>
                            {spec.value}
                          </span>
                        </div>
                        
                        {spec.highlight && (
                          <div className="flex-shrink-0">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>

        {/* Performance guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20"
        >
          <div className="bg-gray-900 rounded-xl p-8 text-white text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Cam kết hiệu suất</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="text-3xl font-bold">99.997%</div>
                <div className="text-gray-300">Uptime SLA</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold">&lt; 1ms</div>
                <div className="text-gray-300">Network Latency</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-gray-300">Technical Support</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 
'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';

interface MissionProps {
  locale: string;
}

export default function Mission({ locale }: MissionProps) {
  const t = useTranslations('about.mission');

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900">
                {t('title')}
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                {t('description')}
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-6 bg-primary-50 rounded-xl">
                  <div className="text-2xl font-bold text-primary-600 mb-2">5+</div>
                  <div className="text-sm text-neutral-600">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-secondary-50 rounded-xl">
                  <div className="text-2xl font-bold text-secondary-600 mb-2">20+</div>
                  <div className="text-sm text-neutral-600">Expert Teachers</div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-2xl shadow-2xl"
              >
                <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-primary-400 to-secondary-500">
                  <div className="flex items-center justify-center">
                    <div className="text-center text-white p-8">
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl">🎯</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                      <p className="text-white/90">Making language learning accessible and enjoyable for everyone</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent-400 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-400 rounded-full"></div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

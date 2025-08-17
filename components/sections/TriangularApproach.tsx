'use client';

import { useTranslations } from 'next-intl';
import { MessageCircle, BookOpen, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';

interface TriangularApproachProps {
  locale: string;
}

export default function TriangularApproach({ locale }: TriangularApproachProps) {
  const t = useTranslations('method.approach');

  const pillars = [
    {
      icon: MessageCircle,
      title: t('pillar1.title'),
      description: t('pillar1.description'),
      color: 'from-primary-500 to-primary-600',
      position: 'top',
    },
    {
      icon: BookOpen,
      title: t('pillar2.title'),
      description: t('pillar2.description'),
      color: 'from-secondary-500 to-secondary-600',
      position: 'bottom-left',
    },
    {
      icon: Globe,
      title: t('pillar3.title'),
      description: t('pillar3.description'),
      color: 'from-accent-500 to-accent-600',
      position: 'bottom-right',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </AnimatedSection>

        {/* Triangle Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center triangle visualization */}
          <div className="flex justify-center mb-16">
            <motion.div
              initial={{ scale: 0, rotate: 0 }}
              whileInView={{ scale: 1, rotate: 360 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-32 h-32 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 rounded-full opacity-20"></div>
              <div className="absolute inset-4 bg-white rounded-full shadow-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-gradient">T</span>
              </div>
            </motion.div>
          </div>

          {/* Pillars arranged in triangle */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {pillars.map((pillar, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="text-center group"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${pillar.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <pillar.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Connecting lines (visible on larger screens) */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 400 300">
              <motion.path
                d="M200 80 L120 220 L280 220 Z"
                stroke="url(#triangleGradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 1 }}
              />
              <defs>
                <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0ea5e9" />
                  <stop offset="50%" stopColor="#d946ef" />
                  <stop offset="100%" stopColor="#f97316" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

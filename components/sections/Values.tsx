'use client';

import { useTranslations } from 'next-intl';
import { Award, Lightbulb, Heart } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';

interface ValuesProps {
  locale: string;
}

export default function Values({ locale }: ValuesProps) {
  const t = useTranslations('about.values');

  const values = [
    {
      icon: Award,
      title: t('excellence.title'),
      description: t('excellence.description'),
      color: 'from-primary-500 to-primary-600',
      bgColor: 'bg-primary-50',
    },
    {
      icon: Lightbulb,
      title: t('innovation.title'),
      description: t('innovation.description'),
      color: 'from-accent-500 to-accent-600',
      bgColor: 'bg-accent-50',
    },
    {
      icon: Heart,
      title: t('inclusion.title'),
      description: t('inclusion.description'),
      color: 'from-secondary-500 to-secondary-600',
      bgColor: 'bg-secondary-50',
    },
  ];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
            {t('title')}
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <div className={`${value.bgColor} rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-2`}>
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-6`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

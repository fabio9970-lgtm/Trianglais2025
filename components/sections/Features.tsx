'use client';

import { useTranslations } from 'next-intl';
import { BookOpen, Users, Clock } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';

interface FeaturesProps {
  locale: string;
}

export default function Features({ locale }: FeaturesProps) {
  const t = useTranslations('home.features');

  const features = [
    {
      icon: BookOpen,
      title: t('feature1.title'),
      description: t('feature1.description'),
      color: 'from-primary-500 to-primary-600',
    },
    {
      icon: Users,
      title: t('feature2.title'),
      description: t('feature2.description'),
      color: 'from-secondary-500 to-secondary-600',
    },
    {
      icon: Clock,
      title: t('feature3.title'),
      description: t('feature3.description'),
      color: 'from-accent-500 to-accent-600',
    },
  ];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <div className="card group hover:scale-105 transition-transform duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

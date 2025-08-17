'use client';

import { useTranslations } from 'next-intl';
import { CheckCircle } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';

interface MethodBenefitsProps {
  locale: string;
}

export default function MethodBenefits({ locale }: MethodBenefitsProps) {
  const t = useTranslations('method.benefits');

  const benefits = [
    t('benefit1'),
    t('benefit2'),
    t('benefit3'),
    t('benefit4'),
  ];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900">
                {t('title')}
              </h2>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <AnimatedSection key={index} delay={index * 0.1}>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-1">
                        <CheckCircle className="w-4 h-4 text-primary-600" />
                      </div>
                      <p className="text-neutral-700 leading-relaxed">{benefit}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">📈</span>
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900">Learning Progress</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-600">Conversation Skills</span>
                    <span className="text-sm font-medium text-primary-600">95%</span>
                  </div>
                  <div className="w-full bg-neutral-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full w-[95%]"></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-600">Grammar Mastery</span>
                    <span className="text-sm font-medium text-secondary-600">88%</span>
                  </div>
                  <div className="w-full bg-neutral-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-secondary-500 to-secondary-600 h-2 rounded-full w-[88%]"></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-600">Cultural Understanding</span>
                    <span className="text-sm font-medium text-accent-600">92%</span>
                  </div>
                  <div className="w-full bg-neutral-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-accent-500 to-accent-600 h-2 rounded-full w-[92%]"></div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-400 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent-400 rounded-full"></div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

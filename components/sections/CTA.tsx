'use client';

import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Button from '../ui/Button';
import AnimatedSection from '../ui/AnimatedSection';

interface CTAProps {
  locale: string;
}

export default function CTA({ locale }: CTAProps) {
  const t = useTranslations('home.cta');

  return (
    <section className="py-20 gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full"></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/10 rounded-full"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            {t('title')}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('description')}
          </p>

          <Link href={`/${locale}/contact`}>
            <Button size="lg" className="bg-white text-primary-600 hover:bg-neutral-100 shadow-xl hover:shadow-2xl group">
              {t('button')}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

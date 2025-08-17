'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';

interface AboutHeroProps {
  locale: string;
}

export default function AboutHero({ locale }: AboutHeroProps) {
  const t = useTranslations('about.hero');

  return (
    <section className="relative py-32 gradient-bg overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-full"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-20 h-20 bg-white/10 rounded-full"
          animate={{
            y: [0, 20, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
          >
            {t('title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 leading-relaxed"
          >
            {t('subtitle')}
          </motion.p>
        </AnimatedSection>
      </div>
    </section>
  );
}

'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';

interface MethodHeroProps {
  locale: string;
}

export default function MethodHero({ locale }: MethodHeroProps) {
  const t = useTranslations('method.hero');

  return (
    <section className="relative py-32 gradient-bg overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Triangular decorative elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-white/10"
          animate={{
            rotate: [0, 360],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-white/10"
          animate={{
            rotate: [360, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[21px] border-l-transparent border-r-transparent border-b-white/10"
          animate={{
            rotate: [0, -360],
            x: [0, 30, 0],
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

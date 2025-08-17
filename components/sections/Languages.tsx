'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';

interface LanguagesProps {
  locale: string;
}

export default function Languages({ locale }: LanguagesProps) {
  const t = useTranslations('home.languages');

  const languages = [
    {
      name: t('english'),
      flag: '🇺🇸',
      color: 'from-blue-500 to-blue-600',
      description: 'Global communication language',
      students: '500+',
    },
    {
      name: t('french'),
      flag: '🇫🇷',
      color: 'from-red-500 to-red-600',
      description: 'Language of culture and diplomacy',
      students: '300+',
    },
    {
      name: t('spanish'),
      flag: '🇪🇸',
      color: 'from-yellow-500 to-orange-500',
      description: 'Second most spoken language worldwide',
      students: '400+',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
            {t('title')}
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {languages.map((language, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <motion.div
                whileHover={{ y: -10 }}
                className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
              >
                <div className={`h-64 bg-gradient-to-br ${language.color} p-8 text-white relative`}>
                  <div className="absolute top-4 right-4 text-4xl">
                    {language.flag}
                  </div>

                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-2xl font-bold mb-2">{language.name}</h3>
                    <p className="text-white/90 text-sm mb-4">{language.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{language.students} students</span>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
                      >
                        <span className="text-sm">→</span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { useTranslations } from 'next-intl';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';

interface ContactInfoProps {
  locale: string;
}

export default function ContactInfo({ locale }: ContactInfoProps) {
  const t = useTranslations('contact.info');

  const contactItems = [
    {
      icon: MapPin,
      title: 'Address',
      content: t('address'),
      color: 'from-primary-500 to-primary-600',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: t('phone'),
      color: 'from-secondary-500 to-secondary-600',
    },
    {
      icon: Mail,
      title: 'Email',
      content: t('email'),
      color: 'from-accent-500 to-accent-600',
    },
    {
      icon: Clock,
      title: 'Hours',
      content: t('hours'),
      color: 'from-primary-500 to-secondary-500',
    },
  ];

  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-neutral-900 mb-4">
              {t('title')}
            </h2>
          </div>

          <div className="space-y-6">
            {contactItems.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">{item.title}</h3>
                    <p className="text-neutral-600">{item.content}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Map placeholder */}
          <AnimatedSection delay={0.5}>
            <div className="mt-12 bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                  <p className="text-neutral-600">Interactive Map Coming Soon</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </AnimatedSection>
      </div>
    </section>
  );
}

import { useTranslations } from 'next-intl';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Hero from '../../components/sections/Hero';
import Features from '../../components/sections/Features';
import Languages from '../../components/sections/Languages';
import CTA from '../../components/sections/CTA';

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <div className="min-h-screen">
      <Navigation locale={locale} />
      <main>
        <Hero locale={locale} />
        <Features locale={locale} />
        <Languages locale={locale} />
        <CTA locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  );
}

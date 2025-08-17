import { useTranslations } from 'next-intl';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import AboutHero from '../../../components/sections/AboutHero';
import Mission from '../../../components/sections/Mission';
import Values from '../../../components/sections/Values';

export default function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <div className="min-h-screen">
      <Navigation locale={locale} />
      <main>
        <AboutHero locale={locale} />
        <Mission locale={locale} />
        <Values locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  );
}

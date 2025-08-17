import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import ContactHero from '../../../components/sections/ContactHero';
import ContactForm from '../../../components/sections/ContactForm';
import ContactInfo from '../../../components/sections/ContactInfo';

export default function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <div className="min-h-screen">
      <Navigation locale={locale} />
      <main>
        <ContactHero locale={locale} />
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <ContactForm locale={locale} />
          <ContactInfo locale={locale} />
        </div>
      </main>
      <Footer locale={locale} />
    </div>
  );
}

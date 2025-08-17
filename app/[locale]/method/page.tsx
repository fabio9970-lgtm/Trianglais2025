import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import MethodHero from '../../../components/sections/MethodHero';
import TriangularApproach from '../../../components/sections/TriangularApproach';
import MethodBenefits from '../../../components/sections/MethodBenefits';

export default function MethodPage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <div className="min-h-screen">
      <Navigation locale={locale} />
      <main>
        <MethodHero locale={locale} />
        <TriangularApproach locale={locale} />
        <MethodBenefits locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  );
}

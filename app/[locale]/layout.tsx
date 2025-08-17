import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {Inter, Poppins} from 'next/font/google';
import '../globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

export const metadata = {
  title: 'Trianglais - Language Academy',
  description: 'Learn English, French, and Spanish with our innovative teaching method. Transform your future through languages.',
  keywords: 'language learning, English, French, Spanish, academy, online courses',
  authors: [{ name: 'Trianglais Academy' }],
  openGraph: {
    title: 'Trianglais - Language Academy',
    description: 'Learn English, French, and Spanish with our innovative teaching method.',
    type: 'website',
  },
};

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'es'}, {locale: 'fr'}];
}

export default async function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

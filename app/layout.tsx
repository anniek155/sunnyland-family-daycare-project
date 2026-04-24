import type { Metadata } from 'next';
import { Lilita_One, Pacifico, Nunito } from 'next/font/google';
import './globals.css';

const lilitaOne = Lilita_One({ subsets: ['latin'], weight: '400', variable: '--font-lilita-one' });
const pacifico = Pacifico({ subsets: ['latin'], weight: '400', variable: '--font-pacifico' });
const nunito = Nunito({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-nunito' });

export const metadata: Metadata = {
  title: 'Sunnyland Family Daycare | Licensed Family Daycare',
  description:
    'Sunnyland Family Daycare provides warm, nurturing, and fun childcare for children ages 6 months to 5 years. Licensed family daycare open Monday–Friday, 7AM–6PM.',
  keywords: ['family daycare', 'childcare', 'infant care', 'toddler care', 'preschool', 'Sunnyland'],
  openGraph: {
    title: 'Sunnyland Family Daycare',
    description:
      'A nurturing family daycare providing quality care, education, and fun for children in a warm, safe environment.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${lilitaOne.variable} ${pacifico.variable} ${nunito.variable}`}>
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Lilita_One, Pacifico, Nunito } from 'next/font/google';
import StructuredData from '@/components/StructuredData';
import './globals.css';

const lilitaOne = Lilita_One({ subsets: ['latin'], weight: '400', variable: '--font-lilita-one' });
const pacifico = Pacifico({ subsets: ['latin'], weight: '400', variable: '--font-pacifico' });
const nunito = Nunito({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-nunito' });

export const metadata: Metadata = {
  metadataBase: new URL('https://sunnylanddaycare.com'),
  title: {
    default: 'Sunnyland Family Daycare | Licensed Childcare in San Mateo, CA',
    template: '%s | Sunnyland Family Daycare',
  },
  description:
    'Loving, licensed family daycare in San Mateo serving children 6 months to 5 years. Open Monday–Friday 8:30 AM–6 PM. Engaging early-learning programs in a safe, home-like environment.',
  keywords: [
    'family daycare San Mateo',
    'San Mateo daycare',
    'San Mateo childcare',
    'infant care San Mateo',
    'toddler care San Mateo',
    'preschool San Mateo',
    'licensed daycare 94402',
    'home daycare Bay Area',
    'Sunnyland Family Daycare',
  ],
  authors: [{ name: 'Sunnyland Family Daycare' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://sunnylanddaycare.com',
    siteName: 'Sunnyland Family Daycare',
    title: 'Sunnyland Family Daycare | Licensed Childcare in San Mateo, CA',
    description:
      'Where little hearts grow & learn. Licensed family daycare in San Mateo for children 6 months to 5 years, with a warm, home-like atmosphere.',
    locale: 'en_US',
    images: [
      {
        url: '/images/logo.png',
        width: 1174,
        height: 381,
        alt: 'Sunnyland Family Daycare logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sunnyland Family Daycare | Licensed Childcare in San Mateo, CA',
    description:
      'Licensed family daycare in San Mateo serving children 6 months to 5 years in a warm, home-like setting.',
    images: ['/images/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'childcare',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${lilitaOne.variable} ${pacifico.variable} ${nunito.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body>{children}</body>
    </html>
  );
}

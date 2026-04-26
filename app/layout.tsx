import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'MAPPLI — Applications mobiles & web sur mesure',
  description:
    'MAPPLI conçoit des applications mobiles et web sur mesure pour les professionnels et équipes terrain.',
  keywords: [
    'applications mobiles',
    'développement sur mesure',
    'b2b',
    'applications web',
    'terrain',
    'iOS',
    'Android',
    'React Native',
    'Next.js',
  ],
  authors: [{ name: 'MAPPLI' }],
  creator: 'MAPPLI',
  publisher: 'MAPPLI',
  metadataBase: new URL('https://mappli.fr'),
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://mappli.fr',
    siteName: 'MAPPLI',
    title: 'MAPPLI — Applications mobiles & web sur mesure',
    description:
      'MAPPLI conçoit des applications mobiles et web sur mesure pour les professionnels et équipes terrain.',
    images: [
      {
        url: '/og-image.jpg', // Prévoyez de placer une image og-image.jpg dans votre dossier public/
        width: 1200,
        height: 630,
        alt: "MAPPLI - Développement d'applications",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MAPPLI — Applications mobiles & web sur mesure',
    description:
      'MAPPLI conçoit des applications mobiles et web sur mesure pour les professionnels et équipes terrain.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.className}>
      <body className="bg-white text-zinc-800 antialiased">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

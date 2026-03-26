import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { SITE_NAME, SITE_URL } from './config';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Petice za zachování přírodního charakteru Srnčího dolu v čtvrti Žižkův vrch. Podepište a přidejte svůj hlas.',
  openGraph: {
    siteName: SITE_NAME,
    locale: 'cs_CZ',
    type: 'website',
    images: [{ url: '/images/bg-main.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}

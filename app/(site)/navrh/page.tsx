import type { Metadata } from 'next';
import { ContentPage } from '../../components/ContentPage';
import { OG_IMAGE } from '../../config';

export const metadata: Metadata = {
  title: 'Návrh řešení – Srnčí důl',
  description:
    'Návrh řešení pro zachování přírodního charakteru Srnčího dolu v čtvrti Žižkův vrch.',
  openGraph: {
    title: 'Návrh řešení – Srnčí důl',
    description:
      'Návrh řešení pro zachování přírodního charakteru Srnčího dolu v čtvrti Žižkův vrch.',
    url: '/navrh',
    images: [OG_IMAGE],
  },
};

export default function AboutPage() {
  return <ContentPage slug="navrh" />;
}

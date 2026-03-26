import type { Metadata } from 'next';
import { ContentPage } from '../components/ContentPage';
import { OG_IMAGE } from '../config';

export const metadata: Metadata = {
  title: 'Petice za zachování Srnčího dolu',
  description:
    'Podepište petici za zachování přírodního charakteru Srnčího dolu. Přidejte svůj hlas k obyvatelům Žižkova vrchu a pomozte ochránit toto jedinečné území.',
  openGraph: {
    title: 'Petice za zachování Srnčího dolu',
    description:
      'Podepište petici za zachování přírodního charakteru Srnčího dolu. Přidejte svůj hlas k obyvatelům Žižkova vrchu.',
    url: '/',
    images: [OG_IMAGE],
  },
};

export default function Homepage() {
  return <ContentPage slug="petice" />;
}

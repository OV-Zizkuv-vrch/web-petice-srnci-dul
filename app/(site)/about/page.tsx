import type { Metadata } from 'next';
import { ContentPage } from '../../components/ContentPage';
import { OG_IMAGE } from '../../config';

export const metadata: Metadata = {
  title: 'O nás',
  description:
    'Osadní výbor Žižkův vrch je nepolitická skupina zastupující zájmy obyvatel čtvrti v jednáních s primátorem a zastupiteli města.',
  openGraph: {
    title: 'O nás – Osadní výbor Žižkův vrch',
    description:
      'Osadní výbor Žižkův vrch zastupuje zájmy obyvatel čtvrti v jednáních s primátorem a zastupiteli města.',
    url: '/about',
    images: [OG_IMAGE],
  },
};

export default function AboutPage() {
  return <ContentPage slug="o-nas" />;
}

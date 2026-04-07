import type { Metadata } from 'next';
import Link from 'next/link';
import { ContentPage } from '../../components/ContentPage';
import { EPETITION_URL, OG_IMAGE } from '../../config';

export const metadata: Metadata = {
  title: 'Podepsat petici – Srnčí důl',
  description:
    'Přidejte svůj podpis k petici za prověření alternativní trasy západní tangenty v oblasti Srnčího dolu.',
  openGraph: {
    title: 'Podepsat petici – Srnčí důl',
    description:
      'Přidejte svůj podpis k petici za prověření alternativní trasy západní tangenty v oblasti Srnčího dolu.',
    url: '/podpis',
    images: [OG_IMAGE],
  },
};

export default function PodpisPage() {
  return (
    <div className="py-8">
      <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Podepište petici</h1>
      <p className="text-slate-600 mb-8">
        Vyberte si způsob, který vám nejlépe vyhovuje.
      </p>

      <div className="grid gap-6 md:grid-cols-3 mb-12">
        {/* Option 1: Online */}
        <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 p-6 shadow-sm">
          <div className="text-3xl">💻</div>
          <h2 className="text-lg font-bold text-slate-900">Online podpis</h2>
          <p className="text-slate-600 text-sm flex-1">
            Podepište petici elektronicky prostřednictvím oficiální státní služby ePetice. Stačí přihlášení
            datovou schránkou nebo prostřednictvím Identity občana.
          </p>
          <a
            href={EPETITION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-center bg-green-600 text-white font-semibold px-5 py-3 rounded-full shadow hover:bg-green-700 transition-colors text-sm"
          >
            Podepsat online
          </a>
        </div>

        {/* Option 2: Print and deliver */}
        <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 p-6 shadow-sm">
          <div className="text-3xl">🖨️</div>
          <h2 className="text-lg font-bold text-slate-900">Tisk a odevzdání</h2>
          <p className="text-slate-600 text-sm flex-1">
            Stáhněte si{' '}
            <a
              href="/files/podpisovy-arch-petice-srnci-dul.pdf"
              className="text-green-700 font-medium hover:underline"
            >
              podpisový arch
            </a>
            , vytiskněte ho, vyplňte a odevzdejte na některém z podpisových míst (viz níže).
          </p>
          <a
            href="/files/podpisovy-arch.pdf"
            className="inline-block text-center border border-slate-300 text-slate-700 font-semibold px-5 py-3 rounded-full hover:bg-slate-50 transition-colors text-sm"
          >
            Stáhnout arch (PDF)
          </a>
        </div>

        {/* Option 3: In person */}
        <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 p-6 shadow-sm">
          <div className="text-3xl">📍</div>
          <h2 className="text-lg font-bold text-slate-900">Osobně na místě</h2>
          <p className="text-slate-600 text-sm flex-1">
            Přijďte a podepište přímo na jednom z podpisových míst (viz níže). Arch bude k dispozici, stačí
            se podepsat a uvést adresu trvalého bydliště.
          </p>
        </div>
      </div>

      <ContentPage slug="podpis" />
    </div>
  );
}

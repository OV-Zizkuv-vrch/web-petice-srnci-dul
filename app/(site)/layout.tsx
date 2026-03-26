import type { ReactNode } from 'react';
import { Navbar } from '../components/Navbar';
import { EPETITION_URL } from '../config';

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen">

      {/* Right column — Navbar + page content */}
      <div className="flex-[7] flex flex-col overflow-hidden shadow-xl">
        <Navbar />
        <div className="flex-1 overflow-hidden">
          {children}
        </div>
      </div>
      {/* Left column — CTA */}
      <div
        className="flex-[3] flex flex-col justify-center items-center px-8 py-12"
        style={{
          backgroundImage: "url('/images/bg-main.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="bg-white/88 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-center flex flex-col gap-6">
          
          <a
            href={EPETITION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-green-700 transition-colors"
          >
            Podepsat petici
          </a>
          <p className="text-black/90 leading-relaxed">
            Přidejte svůj hlas k ostatním obyvatelům Žižkova vrchu. Vaše podpora je
            klíčová pro zachování přírodního rázu Srnčího dolu <strong>pro nás i pro budoucí
            generace</strong>.
          </p>
          <p className="text-black/60 text-sm">
            Petice je vedena prostřednictvím oficiální služby ePetice.
          </p>
        </div>
      </div>
    </div>
  );
}

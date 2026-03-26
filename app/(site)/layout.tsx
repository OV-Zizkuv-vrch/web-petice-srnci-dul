import type { ReactNode } from 'react';
import { Navbar } from '../components/Navbar';
import { EPETITION_URL } from '../config';

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className="flex h-screen items-stretch justify-center"
      style={{
        backgroundImage: "url('/images/bg-main.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Centered column */}
      <div className="flex flex-col w-full max-w-4xl shadow-2xl">
        <Navbar />

        <div className="flex-1 overflow-hidden bg-white/92">
          {children}
        </div>

        {/* Bottom CTA bar */}
        <div className="shrink-0 flex flex-col md:flex-row items-center gap-4 py-6 px-6 md:gap-6 md:py-8 md:px-10 bg-slate-800/90 backdrop-blur-sm border-t border-white/10">
          <p className="text-white/90 text-sm leading-relaxed flex-1 text-center md:text-left">
            Přidejte svůj hlas k ostatním obyvatelům Žižkova vrchu. Vaše podpora je klíčová pro zachování
            přírodního rázu Srnčího dolu <strong>pro nás i pro budoucí generace</strong>.
          </p>
          <a
            href={EPETITION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-block bg-green-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-green-700 transition-colors"
          >
            Podepsat petici
          </a>
          <p className="shrink-0 text-white/50 text-xs">
            Petice je vedena prostřednictvím<br />oficiální služby ePetice.
          </p>
        </div>
      </div>
    </div>
  );
}

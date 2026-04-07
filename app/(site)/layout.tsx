import type { ReactNode } from 'react';
import Link from 'next/link';
import { Navbar } from '../components/Navbar';

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
      <div className="flex flex-col w-full max-w-5xl shadow-2xl">
        <Navbar />

        <div className="flex-1 overflow-hidden bg-white/92">
          <div className="h-full overflow-y-auto flex justify-center items-start px-6 py-6">
            <div className="bg-white rounded-2xl shadow-xl px-10 pb-10 max-w-4xl w-full my-auto">
              {children}
            </div>
          </div>
        </div>

        {/* Bottom CTA bar */}
        <div className="shrink-0 flex flex-col md:flex-row items-center gap-4 py-6 px-6 md:gap-6 md:py-8 md:px-10 bg-slate-800/90 backdrop-blur-sm border-t border-white/10">
          <p className="text-white/90 text-sm leading-relaxed flex-1 text-center md:text-left hidden md:block">
            Přidejte svůj hlas k ostatním obyvatelům Žižkova vrchu. Vaše podpora je klíčová pro zachování
            přírodního rázu Srnčího dolu <strong>pro nás i pro budoucí generace</strong>.
          </p>
          <Link
            href="/podpis"
            className="shrink-0 inline-block bg-green-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-green-700 transition-colors"
          >
            Podepsat petici
          </Link>
        </div>
      </div>
    </div>
  );
}

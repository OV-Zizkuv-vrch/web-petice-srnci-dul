import Link from 'next/link';
import { EPETITION_URL } from '../config';

export function Navbar() {
  return (
    <nav className="flex items-center gap-4 md:gap-8 px-4 md:px-8 py-3 md:py-4 bg-white border-b border-slate-200 shrink-0">
      <Link
        href="/"
        className="text-sm md:text-base text-slate-700 font-semibold hover:text-slate-900 transition-colors"
      >
        Domů
      </Link>
      <Link
        href="/about"
        className="text-sm md:text-base text-slate-700 font-semibold hover:text-slate-900 transition-colors"
      >
        O nás
      </Link>
      <div className="ml-auto">
        <a
          href={EPETITION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 text-white font-semibold px-3 py-1.5 md:px-5 md:py-2 rounded-full shadow hover:bg-green-700 transition-colors text-xs md:text-sm whitespace-nowrap"
        >
          <span className="sm:hidden">Podepsat</span>
          <span className="hidden sm:inline">Podepsat petici</span>
        </a>
      </div>
    </nav>
  );
}

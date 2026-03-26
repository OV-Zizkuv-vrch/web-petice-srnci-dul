import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="flex items-center gap-8 px-8 py-4 bg-white border-b border-slate-200 shrink-0">
      <Link
        href="/"
        className="text-slate-700 font-semibold hover:text-slate-900 transition-colors"
      >
        Domů
      </Link>
      <Link
        href="/about"
        className="text-slate-700 font-semibold hover:text-slate-900 transition-colors"
      >
        O nás
      </Link>
    </nav>
  );
}

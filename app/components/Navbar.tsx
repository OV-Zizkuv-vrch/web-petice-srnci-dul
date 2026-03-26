import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center gap-8 px-8 py-4 bg-white/15 backdrop-blur-md border-b border-white/30">
      <Link
        href="/"
        className="text-white font-semibold hover:text-white/75 transition-colors"
      >
        Domů
      </Link>
      <Link
        href="/about"
        className="text-white font-semibold hover:text-white/75 transition-colors"
      >
        O nás
      </Link>
    </nav>
  );
}

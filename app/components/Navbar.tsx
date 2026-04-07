import Link from 'next/link';

function NavbarLink({ href, title }: { href: string; title: string }) {
  return (
    <Link
      href={href}
      className="text-sm md:text-base text-slate-700 font-semibold hover:text-slate-900 transition-colors"
    >
      {title}
    </Link>
  );
}

function NavbarCTAButton({ href, shortLabel, label }: { href: string; shortLabel: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-block bg-green-600 text-white font-semibold px-3 py-1.5 md:px-5 md:py-2 rounded-full shadow hover:bg-green-700 transition-colors text-xs md:text-sm whitespace-nowrap"
    >
      <span className="sm:hidden">{shortLabel}</span>
      <span className="hidden sm:inline">{label}</span>
    </Link>
  );
}

export function Navbar() {
  return (
    <nav className="flex items-center gap-4 md:gap-8 px-4 md:px-8 py-3 md:py-4 bg-white border-b border-slate-200 shrink-0">
      <NavbarLink href="/" title="Petice" />
      <NavbarLink href="/navrh" title="Návrh řešení" />
      <NavbarLink href="/about" title="O nás" />
      <div className="ml-auto">
        <NavbarCTAButton
          href="/podpis"
          shortLabel="Podepsat"
          label="Podepsat petici" />
      </div>
    </nav>
  );
}

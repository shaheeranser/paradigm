import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { label: '</Home>', href: '/' },
  { label: '</AboutMe>', href: '/about' },
  { label: '</Skills>', href: '/skills' },
  { label: '</Projects>', href: '/projects' }
];

export function CodeNavbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-dark-navy/80 border-b border-white/5">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-purple-500/50">
            <Image src="/avatar.svg" alt="logo" width={48} height={48} className="object-cover" priority />
          </div>
          <span className="ml-2 font-semibold text-white">Paradigm</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-sm text-text-muted hover:text-white relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyber-purple to-cyber-cyan group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg hover:bg-white/5 transition-colors" aria-label="settings">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-text-muted">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06A2 2 0 1 1 2.3 17.8l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09c.7 0 1.25-.45 1.51-1A1.65 1.65 0 0 0 3.3 5.2L3.24 5.14A2 2 0 1 1 6.07 2.3l.06.06c.48.48 1.2.66 1.82.33.52-.28 1.12-.44 1.82-.44H12c.7 0 1.3.16 1.82.44.62.33 1.34.15 1.82-.33l.06-.06A2 2 0 1 1 21.7 6.07l-.06.06c-.28.52-.44 1.12-.44 1.82V9c0 .7.16 1.3.44 1.82.33.62.15 1.34-.33 1.82z"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

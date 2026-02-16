"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FiMenu, FiX, FiSettings } from 'react-icons/fi';

const navItems = [
  { label: '</Home>', id: 'home' },
  { label: '</AboutMe>', id: 'about' },
  { label: '</Skills>', id: 'skills' },
  { label: '</Projects>', id: 'projects' }
];

export function CodeNavbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navItems.forEach((it) => {
      const el = document.getElementById(it.id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(it.id);
          });
        },
        { root: null, threshold: 0.45 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-dark-navy/90 border-b border-white/5">
      <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-purple-500/50">
            <Image src="/avatar.svg" alt="logo" width={40} height={40} className="object-cover" priority />
          </div>
          <span className="ml-2 font-semibold text-white">Paradigm</span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`font-mono text-sm relative group focus:outline-none ${active === item.id ? 'text-white' : 'text-text-muted hover:text-white'}`}
              aria-current={active === item.id ? 'page' : undefined}
            >
              {item.label}
              {active === item.id && <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full" />}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyber-purple to-cyber-cyan group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 md:hidden">
          <button className="p-2 rounded-lg hover:bg-white/5 transition-colors" aria-label="settings">
            <FiSettings className="w-5 h-5 text-text-muted" />
          </button>

          <button
            onClick={() => setOpen((s) => !s)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            {open ? <FiX className="w-6 h-6 text-white" /> : <FiMenu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden bg-dark-navy/95 border-t border-white/5 transition-max-height duration-300 overflow-hidden ${open ? 'max-h-[400px] py-4' : 'max-h-0'}`}>
        <div className="container mx-auto px-4 flex flex-col gap-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`w-full text-left font-mono px-4 py-3 rounded-lg ${active === item.id ? 'bg-purple-500/10 text-white' : 'text-text-muted hover:text-white hover:bg-white/2'}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

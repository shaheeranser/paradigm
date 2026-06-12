"use client";
import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { NAV_ITEMS } from '@/lib/constants';

export function CodeNavbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add this inside your CodeNavbar component
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    NAV_ITEMS.forEach((it) => {
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
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
        ? 'glass shadow-lg shadow-black/10'
        : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-5 md:px-8 py-3.5 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollTo('home')} className="flex items-center gap-3 focus:outline-none group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center font-bold text-white text-sm shadow-lg shadow-purple-500/20">
            S
          </div>
          <span className="font-semibold text-white text-lg tracking-tight group-hover:text-purple-300 transition-colors">SyncroOps</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`relative font-mono text-sm px-4 py-2 rounded-xl transition-all duration-300 focus:outline-none ${active === item.id
                ? 'text-white bg-white/[0.06]'
                : 'text-text-muted hover:text-white hover:bg-white/[0.04]'
                }`}
              aria-current={active === item.id ? 'page' : undefined}
            >
              {item.label}
              {active === item.id && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
              )}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((s) => !s)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="md:hidden p-2.5 rounded-xl hover:bg-white/[0.06] transition-colors"
        >
          {open ? <FiX className="w-5 h-5 text-white" /> : <FiMenu className="w-5 h-5 text-white" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${open
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
          }`}
      >
        {/* Dedicated Close Button for the Overlay */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6 p-3 rounded-full bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] transition-colors"
          aria-label="Close menu"
        >
          <FiX className="w-8 h-8 text-white" />
        </button>
        {/* Opaque Background */}
        <div className="absolute inset-0 bg-[#0a0a0b] flex flex-col pt-24 px-6">
          <div className="flex flex-col gap-4">
            {NAV_ITEMS.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                style={{ transitionDelay: open ? `${index * 50}ms` : '0ms' }}
                className={`w-full text-left font-mono text-2xl py-4 border-b border-white/[0.05] transition-all duration-500 transform ${open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  } ${active === item.id
                    ? 'text-white'
                    : 'text-text-muted hover:text-white'
                  }`}
              >
                <span className="text-purple-500 mr-4 text-sm">0{index + 1}.</span>
                {item.label}
              </button>
            ))}
          </div>

          {/* Optional: Add social links or contact at the bottom since it's full screen */}
          <div className="mt-auto mb-10">
            <p className="text-text-muted text-xs uppercase tracking-widest mb-4">Get in touch</p>
            <a href="mailto:hello@syncroops.com" className="text-white font-mono">hello@syncroops.com</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

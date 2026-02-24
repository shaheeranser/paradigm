import { CodeNavbar } from '@/components/layout/CodeNavbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--bg-secondary)' }}>
      <CodeNavbar />

      <HeroSection />
      <AboutSection />
      <TeamSection />
      <ContactSection />

      {/* Footer */}
      <footer className="relative border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center text-xs font-bold text-white">P</span>
            <span className="text-sm text-text-muted">© {new Date().getFullYear()} Paradigm — Built with care</span>
          </div>
          <div className="flex gap-6 text-xs text-text-muted">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#team" className="hover:text-white transition-colors">Team</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

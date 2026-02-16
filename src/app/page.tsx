import { CodeNavbar } from '@/components/layout/CodeNavbar';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { PROJECTS } from '@/lib/constants';

export default function Home() {
  const projects = PROJECTS;

  return (
    <main className="bg-gradient-radial-dark min-h-screen">
      <CodeNavbar />
      <ScrollIndicator />

      <HeroSection />
      <AboutSection />

      <TeamSection />

      {/* Contact */}
      <ContactSection />

      {/* (Projects remain in constants for developer modals; not shown here) */}

      <footer className="py-8 text-center text-text-muted">© Paradigm — Built with care</footer>
    </main>
  );
}

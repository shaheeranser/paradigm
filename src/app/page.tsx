import { CodeNavbar } from '@/components/layout/CodeNavbar';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { DeveloperCard } from '@/components/cards/DeveloperCard';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { DEVELOPERS, PROJECTS } from '@/lib/constants';

export default function Home() {
  const developers = DEVELOPERS;
  const projects = PROJECTS;

  return (
    <main className="bg-gradient-radial-dark min-h-screen">
      <CodeNavbar />
      <ScrollIndicator />

      <HeroSection />
      <AboutSection />
      <SkillsSection />

      {/* Team / Developers */}
      <section id="team" className="py-16 md:py-20 px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader>Team</SectionHeader>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {developers.map((d, idx) => (
              <DeveloperCard key={d.name + idx} developer={d} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 md:py-20 px-6 md:px-8">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <footer className="py-8 text-center text-text-muted">© Paradigm — Built with care</footer>
    </main>
  );
}

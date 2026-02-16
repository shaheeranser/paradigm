import { CodeNavbar } from '@/components/layout/CodeNavbar';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { DeveloperCard } from '@/components/cards/DeveloperCard';
import { ProjectCard } from '@/components/cards/ProjectCard';

export default function Home() {
  const dev = {
    name: 'Alex Chen',
    role: 'Senior Full-Stack Developer',
    avatar: '/avatar.svg',
    skills: ['React', 'Next.js', 'TypeScript']
  };

  const project = {
    title: 'Sample Project',
    description: 'A compact demo showing design + interactions.',
    image: '/placeholder-project.svg',
    githubUrl: '#',
    liveUrl: '#'
  };

  return (
    <main className="bg-gradient-radial-dark min-h-screen">
      <CodeNavbar />
      <ScrollIndicator />

      <HeroSection />
      <AboutSection />
      <SkillsSection />

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-3 gap-6">
          <DeveloperCard developer={dev} />
          <ProjectCard project={project} />
          <ProjectCard project={project} />
        </div>
      </section>

      <footer className="py-8 text-center text-text-muted">© Paradigm — Built with care</footer>
    </main>
  );
}

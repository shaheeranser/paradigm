import { SectionHeader } from '@/components/ui/SectionHeader';
import { DEVELOPERS } from '@/lib/constants';
import { DeveloperCard } from '@/components/cards/DeveloperCard';

export function TeamSection() {
  return (
    <section id="team" className="py-16 md:py-20 px-6 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader align="center">&lt;/Team&gt;</SectionHeader>

        <h3 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">Meet the team</h3>
        <p className="text-center text-text-secondary max-w-2xl mx-auto mb-8">
          We are a multidisciplinary team focused on delivering reliable, scalable web
          platforms and data-driven products. Our specialists collaborate across design,
          engineering and operations to build measurable outcomes for clients.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {DEVELOPERS.map((dev) => (
            <DeveloperCard key={dev.name} developer={dev} />
          ))}
        </div>
      </div>
    </section>
  );
}

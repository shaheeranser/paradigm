"use client";
import { useState } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { DEVELOPERS, PROJECTS, Developer } from '@/lib/constants';
import { DeveloperCard } from '@/components/cards/DeveloperCard';
import { DeveloperDetailModal } from '@/components/modals/DeveloperDetailModal';

export function TeamSection() {
  const [selected, setSelected] = useState<Developer | null>(null);

  const open = (dev: Developer) => setSelected(dev);
  const close = () => setSelected(null);

  const projectsFor = (devId: string) => PROJECTS.filter((p) => p.contributors?.includes(devId));

  return (
    <section id="team" className="relative py-24 md:py-32 px-6 md:px-8 overflow-hidden">
      {/* decorative glow */}
      <div className="glow-orb glow-orb-cyan w-[300px] h-[300px] top-20 -right-20" />
      <div className="glow-orb glow-orb-purple w-[250px] h-[250px] bottom-10 -left-16" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionHeader align="center">&lt;/Team&gt;</SectionHeader>

        <h3 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">Meet the team</h3>
        <p className="text-center text-text-secondary max-w-2xl mx-auto mb-12">
          We are a multidisciplinary team focused on delivering reliable, scalable web
          platforms and data-driven products. Our specialists collaborate across design,
          engineering and operations to build measurable outcomes for clients.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DEVELOPERS.map((dev) => (
            <button key={dev.id} onClick={() => open(dev)} className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded-2xl">
              <DeveloperCard developer={dev} />
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <DeveloperDetailModal developer={selected} projects={projectsFor(selected.id)} onClose={close} />
      )}
    </section>
  );
}

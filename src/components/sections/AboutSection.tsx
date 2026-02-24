import Image from 'next/image';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FiCode, FiDatabase, FiLayout, FiZap } from 'react-icons/fi';

const HIGHLIGHTS = [
  { icon: FiCode, label: 'Full-Stack' },
  { icon: FiDatabase, label: 'Data / ML' },
  { icon: FiLayout, label: 'UI / UX' },
  { icon: FiZap, label: 'DevOps' },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6 md:px-8 overflow-hidden">
      {/* glow orbs */}
      <div className="glow-orb glow-orb-purple w-[350px] h-[350px] -top-20 right-0" />
      <div className="glow-orb glow-orb-cyan w-[250px] h-[250px] bottom-0 -left-20" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionHeader>&lt;/AboutUs&gt;</SectionHeader>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — copy */}
          <div className="space-y-6">
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              Hi! We are Paradigm, a cutting-edge software agency specializing in modern web 
              Instead of creating just another software company, we started enjoying the
              challenge of building custom solutions. Creating bespoke systems for our clients
              has taught us a lot about design, development, and collaboration!
            </p>

            {/* Capability chips */}
            <div className="grid grid-cols-2 gap-3">
              {HIGHLIGHTS.map(({ icon: Icon, label }) => (
                <div key={label} className="glass float-card flex items-center gap-3 px-4 py-3 rounded-2xl">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-purple-400" />
                  </div>
                  <span className="text-sm font-medium text-white">{label}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="btn-icon" aria-label="GitHub">
                <AiFillGithub className="w-5 h-5 text-purple-300" />
              </a>
              <a href="#" className="btn-icon" aria-label="LinkedIn">
                <AiFillLinkedin className="w-5 h-5 text-purple-300" />
              </a>
            </div>
          </div>

          {/* Right — stock image */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-purple-500/30 to-cyan-500/30 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
            <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80"
                alt="Team collaborating"
                width={900}
                height={520}
                className="w-full h-auto object-cover"
                priority
              />
              {/* gradient veil */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c1d]/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

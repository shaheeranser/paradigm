import Image from 'next/image';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-20 px-6 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader>&lt;/AboutMe&gt;</SectionHeader>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              Hi! We are Paradigm, a cutting-edge software agency specializing in modern web 
              Instead of creating just another software company, we started enjoying the
              challenge of building custom solutions. Creating bespoke systems for our clients
              has taught us a lot about design, development, and collaboration!
            </p>

            <div className="flex items-center gap-4 mt-4">
              <a href="#" className="btn-icon" aria-label="GitHub">
                <AiFillGithub className="w-4 h-4 text-purple-300" />
              </a>

              <a href="#" className="btn-icon" aria-label="LinkedIn">
                <AiFillLinkedin className="w-4 h-4 text-purple-300" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <Image src="/team-photo.svg" alt="Team" width={900} height={520} className="w-full h-auto rounded-2xl shadow-lg" priority />
              <div className="absolute inset-0 border-4 border-transparent bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl -z-10 blur-xl opacity-40" />
            </div>
            <div className="absolute top-8 right-8 w-3 h-3 bg-white rounded-full shadow-glow-purple animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}

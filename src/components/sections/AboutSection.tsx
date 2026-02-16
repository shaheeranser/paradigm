import Image from 'next/image';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function AboutSection() {
  return (
    <section className="py-20 px-6">
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
              <a href="#" className="p-3 rounded-lg bg-purple-500/20 border border-purple-500/30 hover:bg-purple-500/30 transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-purple-300">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.49 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.54 2.36 1.1 2.94.84.09-.66.35-1.1.63-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.51.337 1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.72 0 .27.16.59.67.49A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/>
                </svg>
              </a>

              <a href="#" className="p-3 rounded-lg bg-purple-500/20 border border-purple-500/30 hover:bg-purple-500/30 transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-purple-300">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8a6 6 0 1 1-12 0 6 6 0 0 1 12 0zM2 20c1.5-4 6-6 10-6s8.5 2 10 6"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <Image src="/team-photo.jpg" alt="Team" width={900} height={520} className="w-full h-auto rounded-2xl shadow-lg" priority />
              <div className="absolute inset-0 border-4 border-transparent bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl -z-10 blur-xl opacity-40" />
            </div>
            <div className="absolute top-8 right-8 w-3 h-3 bg-white rounded-full shadow-glow-purple animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';
import { GradientButton } from '@/components/ui/GradientButton';
import { FiArrowRight } from 'react-icons/fi';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ── Stock background image ─────────────────────────── */}
      <Image
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
        alt=""
        fill
        priority
        className="object-cover -z-30"
      />
      {/* dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c1d]/80 via-[#0c0c1d]/70 to-[#0c0c1d] -z-20" />

      {/* ── Decorative glow orbs ───────────────────────────── */}
      <div className="glow-orb glow-orb-purple w-[500px] h-[500px] -top-40 -left-40 -z-10" />
      <div className="glow-orb glow-orb-cyan w-[400px] h-[400px] bottom-10 right-[-8rem] -z-10" />
      <div className="glow-orb glow-orb-blue w-[300px] h-[300px] top-1/3 right-1/4 -z-10 opacity-10" />

      {/* ── Content ────────────────────────────────────────── */}
      <div className="relative z-10 container mx-auto px-6 md:px-8 pt-24 pb-20">
        <div className="max-w-3xl animate-fade-up">
          <p className="font-mono text-purple-400/80 mb-5 text-sm tracking-widest uppercase">Greetings(); We are</p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.05]">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Paradigm</span>
            <span className="text-white">.</span>
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white/90 mb-6">We design &amp; code for agencies.</h2>

          <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mb-10 leading-relaxed">
            Software development team with experience in Digital Solutions, Modern Web Platforms,
            and Enterprise Applications. We love innovative tech, collaboration and building products.
          </p>

          <div className="flex flex-wrap gap-4">
            <GradientButton href="#contact">
              Contact us
              <FiArrowRight className="w-4 h-4 ml-1" />
            </GradientButton>

            <a href="#about" className="btn btn-ghost group">
              Learn more
              <FiArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ───────────────────────────────── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-7 h-11 border-2 border-purple-400/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-purple-400/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}

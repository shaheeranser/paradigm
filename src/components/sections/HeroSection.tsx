import { GradientButton } from '@/components/ui/GradientButton';
import { FiPlus } from 'react-icons/fi';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-radial-dark -z-10" />

      <div className="relative z-10 container mx-auto px-6 md:px-8">
        <div className="max-w-4xl">
          <p className="font-mono text-text-secondary mb-4 text-lg">Greetings(); We are</p>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-[1.02]">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Paradigm</span>
            <span className="text-white">.</span>
          </h1>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">We design & code for agencies.</h2>

          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mb-6 leading-relaxed">
            Software development team with experience in Digital Solutions, Modern Web Platforms,
            and Enterprise Applications. We love innovative tech, collaboration and building products.
          </p>

          <div className="flex flex-wrap gap-4">
            <GradientButton href="#contact">Contact us</GradientButton>

            <button className="btn btn-ghost" aria-label="settings">
              <FiPlus className="w-5 h-5 text-purple-400" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-purple-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}

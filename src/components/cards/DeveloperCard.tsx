import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';

export interface DevShort {
  name: string;
  role: string;
  avatar: string;
  skills: string[];
}

interface DeveloperCardProps {
  developer: DevShort;
}

export function DeveloperCard({ developer }: DeveloperCardProps) {
  return (
    <div className="group relative glass float-card cursor-pointer rounded-2xl overflow-hidden h-full p-6 sm:p-7">
      {/* shimmer */}
      <div className="shimmer-sweep opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

      {/* Avatar */}
      <div className="relative mb-5 flex justify-center">
        <div className="relative">
          <div className="absolute -inset-2 bg-gradient-to-br from-purple-500/40 to-cyan-500/40 rounded-full blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
          <Image
            src={developer.avatar}
            alt={developer.name}
            width={120}
            height={120}
            className="relative w-[7rem] h-[7rem] rounded-full object-cover ring-2 ring-white/10 group-hover:ring-purple-400/50 transition-all duration-500"
          />
          <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 rounded-full ring-[3px] ring-[#14142a]" />
        </div>
      </div>

      {/* Info */}
      <h3 className="text-xl font-bold text-white mb-1 text-center group-hover:bg-gradient-primary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
        {developer.name}
      </h3>
      <p className="text-xs text-text-muted text-center mb-5 font-mono tracking-wide">{developer.role}</p>

      {/* Skill chips */}
      <div className="flex flex-wrap gap-2 justify-center mb-5">
        {developer.skills.slice(0, 3).map((s) => (
          <span key={s} className="px-3 py-1 text-[0.68rem] font-medium bg-white/[0.04] text-purple-300 rounded-xl border border-white/[0.08] group-hover:border-purple-500/30 transition-colors duration-300">
            {s}
          </span>
        ))}
      </div>

      {/* CTA */}
      <div className="flex items-center justify-center gap-2 text-cyan-400 text-sm font-medium group-hover:gap-3 transition-all duration-300">
        <span>View Profile</span>
        <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      </div>
    </div>
  );
}

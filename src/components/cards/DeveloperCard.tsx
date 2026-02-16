import Image from 'next/image';

export interface DevShort {
  name: string;
  role: string;
  avatar: string;
  skills: string[];
}

interface DeveloperCardProps {
  developer: DevShort;
  onClick?: () => void;
}

export function DeveloperCard({ developer, onClick }: DeveloperCardProps) {
  return (
    <div onClick={onClick} className="group relative cursor-pointer bg-bg-card backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-purple-500/50 hover:-translate-y-2 hover:shadow-card-hover p-6">
      <div className="relative mb-6 flex justify-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-primary rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
          <Image src={developer.avatar} alt={developer.name} width={128} height={128} className="relative w-32 h-32 rounded-full object-cover ring-2 ring-purple-500/50 group-hover:ring-purple-400 transition-all duration-500" />
          <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 rounded-full ring-4 ring-bg-card" />
        </div>
      </div>

      <h3 className="text-2xl font-bold text-white mb-2 text-center group-hover:bg-gradient-primary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{developer.name}</h3>
      <p className="text-sm text-text-muted text-center mb-6 font-mono">{developer.role}</p>

      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {developer.skills.slice(0, 3).map((s) => (
          <span key={s} className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 rounded-full border border-purple-500/30">{s}</span>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 text-cyan-400 font-medium group-hover:gap-4 transition-all duration-300">
        <span>View Profile</span>
        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </div>
    </div>
  );
}

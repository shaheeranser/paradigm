import Image from 'next/image';
import { AiFillGithub } from 'react-icons/ai';
import { FiArrowRight } from 'react-icons/fi';

export interface ProjectShort {
  title: string;
  description: string;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  categories?: string[];
}

interface ProjectCardProps {
  project: ProjectShort;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative glass float-card rounded-2xl overflow-hidden">
      {/* shimmer on hover */}
      <div className="shimmer-sweep opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* ── Image — always visible ─────────────────────── */}
        <div className="relative aspect-video md:aspect-auto overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={920}
            height={520}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          {/* gradient veil */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c1d]/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#0c0c1d]/40" />

          {/* category chips (top-left) */}
          {project.categories && project.categories.length > 0 && (
            <div className="absolute top-3 left-3 flex gap-2">
              {project.categories.map((c) => (
                <span key={c} className="text-[0.65rem] font-medium uppercase tracking-wider px-2.5 py-1 rounded-lg bg-black/40 backdrop-blur-sm text-white/80 border border-white/10">
                  {c}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* ── Content ────────────────────────────────────── */}
        <div className="p-6 sm:p-7 flex flex-col justify-center">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:bg-gradient-primary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
            {project.title}
          </h3>
          <p className="text-sm text-text-secondary mb-5 leading-relaxed line-clamp-3">{project.description}</p>

          <div className="flex items-center gap-3">
            {project.githubUrl && project.githubUrl !== '#' && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-icon" aria-label="GitHub">
                <AiFillGithub className="w-5 h-5 text-purple-300" />
              </a>
            )}

            {project.liveUrl && project.liveUrl !== '#' && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn-outline flex items-center gap-2 text-sm px-4 py-2" aria-label="Live view">
                <span>Live view</span>
                <FiArrowRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from 'next/image';

export interface ProjectShort {
  title: string;
  description: string;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

interface ProjectCardProps {
  project: ProjectShort;
}

import { AiFillGithub } from 'react-icons/ai';
import { FiArrowRight } from 'react-icons/fi';

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative bg-bg-card backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-purple-500/50 hover:shadow-card-hover">
      <div className="grid md:grid-cols-2 gap-6 p-6 items-center">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-text-secondary mb-4">{project.description}</p>

          <div className="flex items-center gap-4">
            <a href={project.githubUrl || '#'} className="p-3 rounded-lg bg-purple-500/20 border border-purple-500/30 hover:bg-purple-500/30 transition-all" aria-label="GitHub">
              <AiFillGithub className="w-4 h-4 text-purple-300" />
            </a>

            <a href={project.liveUrl || '#'} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 text-cyan-400 font-medium hover:gap-3 transition-all" aria-label="Live view">
              <span>Live view</span>
              <FiArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="relative rounded-lg overflow-hidden hidden md:block">
          <div className="aspect-video w-full h-40">
            <Image src={project.image} alt={project.title} width={720} height={400} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-lg" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-cyan-500/0 group-hover:from-purple-500/20 group-hover:to-cyan-500/20 transition-all duration-500 rounded-lg" />
        </div>
      </div>
    </div>
  );
}

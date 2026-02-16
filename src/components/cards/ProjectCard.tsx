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

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative bg-bg-card backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-purple-500/50 hover:shadow-card-hover">
      <div className="grid md:grid-cols-2 gap-6 p-6 items-center">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-text-secondary mb-4">{project.description}</p>

          <div className="flex items-center gap-4">
            <a href={project.githubUrl || '#'} className="p-3 rounded-lg bg-purple-500/20 border border-purple-500/30 hover:bg-purple-500/30 transition-all">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-purple-300">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.49 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.54 2.36 1.1 2.94.84.09-.66.35-1.1.63-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.51.337 1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.72 0 .27.16.59.67.49A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/>
              </svg>
            </a>

            <a href={project.liveUrl || '#'} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 text-cyan-400 font-medium hover:gap-3 transition-all">
              <span>Live view</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
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

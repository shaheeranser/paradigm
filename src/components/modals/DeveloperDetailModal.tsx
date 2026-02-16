"use client";

import { useEffect } from 'react';
import Image from 'next/image';
import { FiX, FiArrowRight } from 'react-icons/fi';

import type { Developer, Project } from '@/lib/constants';

interface Props {
  developer: Developer;
  projects: Project[];
  onClose: () => void;
}

export function DeveloperDetailModal({ developer, projects, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!developer) return null;

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative z-50 w-full max-w-5xl mx-4 bg-bg-card border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        <div className="flex items-start justify-between gap-4 p-6">
          <div className="flex items-center gap-4">
            <div className="w-28 h-28 rounded-full overflow-hidden ring-2 ring-purple-500/50">
              <Image src={developer.avatar} alt={developer.name} width={112} height={112} className="object-cover" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{developer.name}</h3>
              <p className="text-text-muted">{developer.role} — {developer.yearsOfExperience} yrs</p>
            </div>
          </div>

          <button className="p-2 rounded-lg hover:bg-white/5" onClick={onClose} aria-label="close modal">
            <FiX className="w-6 h-6 text-text-muted" />
          </button>
        </div>

        <div className="border-t border-white/5 p-6 grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">About</h4>
            <p className="text-text-secondary mb-4">{developer.bio}</p>

            <h4 className="text-lg font-semibold text-white mb-2">Skills</h4>
            <div className="flex flex-wrap gap-2">
              {developer.skills.map((s: string) => (
                <span key={s} className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-text-secondary">{s}</span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Projects & Experience</h4>
            <div className="space-y-3">
              {projects.length === 0 && <p className="text-text-secondary">No public projects listed.</p>}
              {projects.map((p) => (
                <a key={p.id} href={p.liveUrl || p.githubUrl || '#'} className="flex items-start gap-3 p-3 rounded-lg bg-white/3 hover:bg-white/5 transition-all" target="_blank" rel="noreferrer">
                  <div className="w-12 h-8 bg-white/5 rounded-md flex items-center justify-center text-sm text-text-muted">Img</div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h5 className="text-sm font-semibold text-white">{p.title}</h5>
                      <span className="text-xs text-text-muted">{p.categories?.join(', ')}</span>
                    </div>
                    <p className="text-text-secondary text-sm">{p.description}</p>
                  </div>
                  <FiArrowRight className="ml-auto w-5 h-5 text-cyan-400" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

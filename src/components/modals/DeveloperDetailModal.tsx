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
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  if (!developer) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={onClose} />

      {/* Modal */}
      <div className="relative z-50 w-full max-w-4xl max-h-[90vh] overflow-y-auto glass rounded-3xl shadow-2xl shadow-purple-500/5 animate-fade-up">
        {/* Header */}
        <div className="sticky top-0 z-10 glass border-b border-white/[0.06] rounded-t-3xl px-6 sm:px-8 py-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-purple-500/30 to-cyan-500/30 rounded-full blur-md" />
              <Image
                src={developer.avatar}
                alt={developer.name}
                width={64}
                height={64}
                className="relative w-16 h-16 rounded-full object-cover ring-2 ring-white/10"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{developer.name}</h3>
              <p className="text-sm text-text-muted font-mono">{developer.role}</p>
            </div>
          </div>

          <button className="p-2.5 rounded-xl hover:bg-white/[0.06] transition-colors" onClick={onClose} aria-label="close modal">
            <FiX className="w-5 h-5 text-text-muted" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 flex flex-col md:grid-cols-2 gap-8">
          {/* Profile */}
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-2">About</h4>
              <p className="text-text-secondary text-sm leading-relaxed">{developer.bio}</p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-3">Skills</h4>
              <div className="flex flex-wrap gap-2">
                {developer.skills.map((s: string) => (
                  <span key={s} className="px-3 py-1.5 rounded-xl text-xs font-medium bg-white/[0.04] border border-white/[0.08] text-text-secondary hover:border-purple-500/30 hover:text-purple-300 transition-colors duration-200">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Projects */}
          {/* Projects Section */}
          <div className="mt-8">
            <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-5 px-1">
              Projects & Experience
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.length === 0 && (
                <p className="text-text-secondary text-sm col-span-full text-center py-10">
                  No public projects listed.
                </p>
              )}

              {projects.map((p) => (
                <a
                  key={p.id}
                  href={p.liveUrl || p.githubUrl || '#'}
                  className="group/proj flex flex-col overflow-hidden rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-purple-500/30 transition-all duration-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  {/* Project Image - Two-thirds visual weight */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-white/[0.04]">
                    {p.image && p.image !== '/placeholder-project.svg' ? (
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover group-hover/proj:scale-110 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-xs text-text-muted">
                        Preview Coming Soon
                      </div>
                    )}
                    {/* Subtle Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Project Details - One-third height */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h5 className="text-base font-bold text-white group-hover/proj:text-purple-300 transition-colors leading-tight">
                        {p.title}
                      </h5>
                      <FiArrowRight className="w-5 h-5 text-cyan-400 -translate-x-2 opacity-0 group-hover/proj:translate-x-0 group-hover/proj:opacity-100 transition-all duration-300" />
                    </div>

                    <p className="text-text-secondary text-xs leading-relaxed line-clamp-2 mb-4">
                      {p.description}
                    </p>

                    <div className="mt-auto flex flex-wrap gap-1.5">
                      {p.categories?.map((c) => (
                        <span key={c} className="text-[0.6rem] uppercase font-mono tracking-widest text-purple-300/70 bg-purple-500/10 px-2 py-0.5 rounded-md">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

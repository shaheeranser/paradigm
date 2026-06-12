"use client";

import { useState } from 'react';
import { FiSend } from 'react-icons/fi';

export function ContactSection() {
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const form = e.target as HTMLFormElement;
      const fd = new FormData(form);
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '';
      if (!accessKey) {
        console.error('Missing NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY');
        setStatus('error');
        setTimeout(() => setStatus('idle'), 2000);
        return;
      }
      fd.append('access_key', accessKey);
      fd.append('subject', 'New contact request - SyncroOps');

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: fd
      });

      const json = await res.json();
      if (json.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 4000);
  };

  const inputClass =
    'w-full px-5 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-text-muted focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all duration-300';

  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 md:px-8 overflow-hidden">
      {/* glow orbs */}
      <div className="glow-orb glow-orb-purple w-[350px] h-[350px] -top-10 left-1/4" />
      <div className="glow-orb glow-orb-cyan w-[250px] h-[250px] bottom-0 right-10" />

      <div className="container mx-auto max-w-2xl relative z-10">
        <div className="glass rounded-3xl p-8 sm:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Get in touch</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              We help organisations design and build production-ready web and data systems. Tell us about your project and we will get back within one business day.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="name" placeholder="Your name" required className={inputClass} />
              <input name="email" type="email" placeholder="Email address" required className={inputClass} />
            </div>
            <textarea name="message" placeholder="Brief message" required className={`${inputClass} resize-none`} rows={5} />
            <input type="hidden" name="botcheck" />

            <div className="flex flex-col items-center gap-4 pt-2">
              <button type="submit" className="btn btn-primary gap-2 w-full sm:w-auto" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send message'}
                <FiSend className="w-4 h-4" />
              </button>

              {status === 'success' && (
                <p className="text-green-400 text-sm animate-fade-up">Thanks — we will respond shortly.</p>
              )}
              {status === 'error' && (
                <p className="text-rose-400 text-sm animate-fade-up">Submission failed — please try again later.</p>
              )}
            </div>
          </form>

          <p className="text-text-muted mt-8 text-center text-xs">
            Or email us at{' '}
            <a href="mailto:ahmadtariq2004@gmail.com" className="text-purple-400 hover:text-purple-300">
              ahmadtariq2004@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

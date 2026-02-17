"use client";

import { useState } from 'react';

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
      fd.append('subject', 'New contact request - Paradigm');

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

  return (
    <section id="contact" className="py-20 px-6 md:px-8">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get in touch</h2>
        <p className="text-text-secondary mb-8">We help organisations design and build production-ready web and data systems. Tell us about your project and we will get back within one business day.</p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input name="name" placeholder="Your name" required className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-text-muted" />
          <input name="email" type="email" placeholder="Email address" required className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-text-muted" />
          <textarea name="message" placeholder="Brief message" required className="sm:col-span-2 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-text-muted" rows={5} />
          <input type="hidden" name="botcheck" />

          <div className="sm:col-span-2 flex flex-col items-center gap-3">
            <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Contact us'}
            </button>

            {status === 'success' && <div className="text-green-400">Thanks — we will respond shortly.</div>}
            {status === 'error' && <div className="text-rose-400">Submission failed — please try again later.</div>}
          </div>
        </form>

        <p className="text-text-muted mt-6 text-sm">Or email us at <a href="mailto:ahmadtariq2004@gmail.com" className="text-purple-400">ahmadtariq2004@gmail.com</a></p>
      </div>
    </section>
  );
}

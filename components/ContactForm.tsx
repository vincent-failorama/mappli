'use client';

import { useState, useRef } from 'react';

interface ContactFormProps {
  defaultSubject?: string;
}

export default function ContactForm({ defaultSubject = '' }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: fd.get('name') as string,
      email: fd.get('email') as string,
      subject: fd.get('subject') as string,
      message: fd.get('message') as string,
      _hp: fd.get('_hp') as string, // honeypot
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? 'Une erreur est survenue.');
        setStatus('error');
      } else {
        setStatus('success');
        formRef.current?.reset();
      }
    } catch {
      setErrorMsg('Impossible de joindre le serveur. Vérifiez votre connexion.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-10 text-center">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-xl font-bold text-white mb-2">Message envoyé !</h3>
        <p className="text-slate-300">
          Nous vous répondrons sous 24 h à l&apos;adresse indiquée.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm text-sky-400 hover:underline"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot — invisible, les bots le remplissent */}
      <input
        type="text"
        name="_hp"
        tabIndex={-1}
        aria-hidden="true"
        autoComplete="off"
        style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="cf-name" className="block text-sm font-medium text-slate-300 mb-1.5">
            Nom *
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jean Dupont"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-sky-400/60 focus:bg-white/8 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="block text-sm font-medium text-slate-300 mb-1.5">
            Email *
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jean@exemple.fr"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-sky-400/60 focus:bg-white/8 transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-subject" className="block text-sm font-medium text-slate-300 mb-1.5">
          Sujet
        </label>
        <input
          id="cf-subject"
          name="subject"
          type="text"
          autoComplete="off"
          defaultValue={defaultSubject}
          placeholder="Demande de démo, question sur une app…"
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-sky-400/60 focus:bg-white/8 transition-colors"
        />
      </div>

      <div>
        <label htmlFor="cf-message" className="block text-sm font-medium text-slate-300 mb-1.5">
          Message *
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={6}
          placeholder="Décrivez votre projet ou votre question…"
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-sky-400/60 focus:bg-white/8 transition-colors resize-none"
        />
      </div>

      {status === 'error' && (
        <p role="alert" className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary w-full text-white font-bold px-8 py-4 rounded-xl text-lg disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Envoi en cours…' : 'Envoyer le message →'}
      </button>

      <p className="text-xs text-zinc-500 text-center">
        Aucune donnée transmise à des tiers. Réponse sous 24 h.
      </p>
    </form>
  );
}

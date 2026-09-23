'use client';

import { useState } from 'react';
import { contactEmail } from '@/lib/site';

export function CopyEmail() {
  const [message, setMessage] = useState('');

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setMessage('Correo copiado');
      window.setTimeout(() => setMessage(''), 2200);
    } catch {
      window.location.href = `mailto:${contactEmail}`;
    }
  }

  return (
    <div className="copy-email-wrap">
      <button className="button button--outline" type="button" onClick={copyEmail}>
        Copiar correo <span aria-hidden="true">⎘</span>
      </button>
      <span className="visually-hidden" aria-live="polite">{message}</span>
    </div>
  );
}

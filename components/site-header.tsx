'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { contactEmail } from '@/lib/site';

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/laboratorio', label: 'Laboratorio' },
  { href: '/notas', label: 'Notas' },
  { href: '/sobre-mi', label: 'Sobre mí' },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand" href="/" aria-label="Mario Ibarra Gómez, inicio" onClick={() => setOpen(false)}>
          <span className="brand__mark">MI</span>
          <span className="brand__name">Mario Ibarra Gómez</span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="menu-toggle__line" />
          <span className="menu-toggle__line" />
        </button>

        <nav id="primary-navigation" className={`primary-navigation${open ? ' is-open' : ''}`} aria-label="Navegación principal">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a className="header-contact" href={`mailto:${contactEmail}`}>
          <span>Contacto</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Icon } from '@/components/icon';
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
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); toggleRef.current?.focus(); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand" href="/" aria-label="Mario Ibarra Gómez, inicio" onClick={() => setOpen(false)}>
          <span className="brand__mark" aria-hidden="true">&gt;_</span><span className="brand__name">Mario Ibarra</span>
        </Link>
        <button ref={toggleRef} className="menu-toggle" type="button" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen((value) => !value)}>
          <span className="menu-toggle__line" /><span className="menu-toggle__line" />
        </button>
        <nav id="primary-navigation" className={'primary-navigation' + (open ? ' is-open' : '')} aria-label="Navegación principal">
          {links.map((link) => <Link href={link.href} key={link.href} aria-current={pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href + '/')) ? 'page' : undefined} onClick={() => setOpen(false)}>{link.label}</Link>)}
          <a className="header-contact header-contact--mobile" href={'mailto:' + contactEmail}>Escríbeme <Icon name="arrow" size={16} /></a>
        </nav>
        <a className="header-contact header-contact--desktop" href={'mailto:' + contactEmail}>Escríbeme <Icon name="arrow" size={16} /></a>
      </div>
    </header>
  );
}

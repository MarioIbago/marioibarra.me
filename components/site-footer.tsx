import Link from 'next/link';
import { contactEmail, linkedInUrl } from '@/lib/site';

const footerLinks = [
  { href: '/servicios', label: 'Áreas de trabajo' }, { href: '/proyectos', label: 'Proyectos' },
  { href: '/laboratorio', label: 'Laboratorio' }, { href: '/notas', label: 'Notas' }, { href: '/sobre-mi', label: 'Sobre mí' },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-container">
        <div className="footer-main">
          <div><Link className="brand" href="/"><span className="brand__mark" aria-hidden="true">&gt;_</span><span className="brand__name">Mario Ibarra</span></Link><p>Proyectos, ideas y herramientas para conectar sistemas, datos y personas.</p></div>
          <nav className="footer-nav" aria-label="Navegación del pie de página"><strong>Explorar</strong>{footerLinks.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}</nav>
          <div className="footer-contact"><strong>Contacto</strong><a href={'mailto:' + contactEmail}>{contactEmail}</a><a href="https://github.com/MarioIbago" target="_blank" rel="noreferrer">GitHub ↗</a><a href={linkedInUrl} target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Mario Ibarra Gómez</span><a href="#contenido">Volver arriba ↑</a></div>
      </div>
    </footer>
  );
}

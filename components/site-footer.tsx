import Link from 'next/link';
import { contactEmail, linkedInUrl } from '@/lib/site';

const footerLinks = [
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/laboratorio', label: 'Laboratorio' },
  { href: '/notas', label: 'Notas' },
  { href: '/sobre-mi', label: 'Sobre mí' },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="footer-main">
          <Link className="brand brand--footer" href="/">
            <span className="brand__mark">MI</span>
            <span className="brand__name">Mario Ibarra Gómez</span>
          </Link>
          <p>Ideas claras, sistemas útiles.</p>
        </div>
        <nav className="footer-nav" aria-label="Navegación del pie de página">
          {footerLinks.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}
        </nav>
        <div className="footer-contact">
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          <a href={linkedInUrl} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Mario Ibarra Gómez</span>
          <a href="#contenido">Volver arriba <span aria-hidden="true">↑</span></a>
        </div>
      </div>
    </footer>
  );
}

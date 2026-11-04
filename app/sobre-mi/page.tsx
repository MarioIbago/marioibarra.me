import type { Metadata } from 'next';
import Link from 'next/link';
import { contactEmail, linkedInUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Sobre mí',
  description: 'Mario Ibarra Gómez desarrolla aplicaciones, sistemas e infraestructura que conectan personas, datos y procesos.',
  alternates: { canonical: '/sobre-mi' },
};

export default function AboutPage() {
  return (
    <>
      <section className="page-intro page-intro--center"><div className="page-container"><p className="eyebrow">SOBRE MÍ</p><h1>Hola, soy Mario Ibarra Gómez.</h1><p className="page-intro__description">Me gusta convertir ideas y necesidades en tecnología que las personas puedan usar.</p></div></section>
      <section className="page-section"><div className="page-container about-layout">
        <div className="about-copy"><p className="eyebrow">MI ENFOQUE</p><h2>Me interesa todo el sistema, desde la interfaz hasta lo que ocurre detrás.</h2><p>Desarrollo productos digitales y conecto las piezas que los hacen funcionar: interfaces, datos, servicios, modelos de inteligencia artificial e infraestructura.</p><p>En Cuantly, Billqo y PaperMaxing he trabajado con problemas diferentes. En cada uno busco entender la necesidad, construir un flujo claro y elegir las herramientas adecuadas para el trabajo.</p><div className="about-contact"><a className="button" href={'mailto:' + contactEmail}>Escríbeme <span aria-hidden="true">→</span></a><a className="button button--outline" href={linkedInUrl} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a></div></div>
        <aside className="about-aside" aria-label="Áreas de trabajo"><div className="about-aside__row"><span>01 / Producto</span><span>Aplicaciones e interfaces</span></div><div className="about-aside__row"><span>02 / Sistemas</span><span>Procesos, servicios y datos</span></div><div className="about-aside__row"><span>03 / IA</span><span>Herramientas con contexto</span></div><div className="about-aside__row"><span>04 / Trabajo</span><span><Link href="/proyectos">Ver proyectos ↗</Link></span></div></aside>
      </div></section>
    </>
  );
}

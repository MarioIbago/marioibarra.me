import type { Metadata } from 'next';
import Link from 'next/link';
import { contactEmail, linkedInUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Sobre mí',
  description: 'Mario Ibarra estudia Economía en la UDEM, programa, experimenta con IA y comparte los proyectos que construye.',
  alternates: { canonical: '/sobre-mi' },
};

export default function AboutPage() {
  return (
    <>
      <section className="page-intro page-intro--center"><div className="page-container"><p className="eyebrow">SOBRE MÍ</p><h1>Hola, soy Mario Ibarra Gómez.</h1><p className="page-intro__description">Estudio Economía en la UDEM, me encanta programar y soy curioso por naturaleza.</p></div></section>
      <section className="page-section"><div className="page-container about-layout">
        <div className="about-copy"><p className="eyebrow">LO QUE ME MUEVE</p><h2>Cuando algo me da curiosidad, quiero descubrir cómo funciona.</h2><p>Por eso me gusta crear aplicaciones, aprender herramientas nuevas y conectar piezas: interfaces, bases de datos, servicios, modelos de inteligencia artificial e infraestructura.</p><p>Soy fundador de Cuantly, una plataforma de práctica matemática. En proyectos como Billqo y PaperMaxing también exploro cómo la tecnología puede resolver problemas cotidianos. No siempre sale bien a la primera: pruebo, me equivoco, mejoro y comparto lo que aprendo.</p><div className="about-contact"><a className="button" href={'mailto:' + contactEmail}>Escríbeme <span aria-hidden="true">→</span></a><a className="button button--outline" href={linkedInUrl} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a></div></div>
        <aside className="about-aside" aria-label="Áreas de trabajo"><div className="about-aside__row"><span>01 / Estudio</span><span>Economía · UDEM</span></div><div className="about-aside__row"><span>02 / Construyo</span><span>Apps, sistemas y datos</span></div><div className="about-aside__row"><span>03 / Exploro</span><span>IA, código y herramientas</span></div><div className="about-aside__row"><span>04 / Comparto</span><span><Link href="/proyectos">Mis proyectos ↗</Link></span></div></aside>
      </div></section>
    </>
  );
}

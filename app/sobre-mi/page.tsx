import type { Metadata } from 'next';
import Link from 'next/link';
import { contactEmail, linkedInUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Sobre mí',
  description: 'Conoce a Mario Ibarra Gómez: desarrollo productos digitales que conectan inteligencia artificial, datos y sistemas útiles.',
  alternates: { canonical: '/sobre-mi' },
};

export default function AboutPage() {
  return (
    <>
      <section className="page-intro">
        <div className="page-container page-intro__grid">
          <h1>Hola, soy Mario.</h1>
          <p className="page-intro__description">Me interesa construir tecnología que se pueda explicar, usar y mejorar.</p>
        </div>
      </section>
      <section className="page-section">
        <div className="page-container about-layout">
          <div className="about-copy">
            <p className="section-index"><span aria-hidden="true">//</span> SOBRE MÍ</p>
            <h2>Me gusta conectar ideas con sistemas que funcionan.</h2>
            <p>Desarrollo productos digitales donde se cruzan inteligencia artificial, aprendizaje y organización de información. Me interesa tanto lo que ve la persona como las piezas que hacen posible la experiencia: datos, modelos, APIs y despliegue.</p>
            <p>En proyectos como Cuantly, Billqo y PaperMaxing trabajo con problemas distintos, pero con una misma pregunta: ¿cómo hacer que una herramienta ayude sin volver más complicado el trabajo?</p>
            <div className="about-contact">
              <a className="button" href={`mailto:${contactEmail}`}>Escríbeme <span aria-hidden="true">↗</span></a>
              <a className="button button--outline" href={linkedInUrl} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <aside className="about-aside" aria-label="Áreas de trabajo">
            <div className="about-aside__row"><span>01 / Producto</span><span>Interfaces simples y flujos claros</span></div>
            <div className="about-aside__row"><span>02 / Sistemas</span><span>Servicios, datos y búsqueda</span></div>
            <div className="about-aside__row"><span>03 / IA</span><span>Herramientas conectadas a tareas reales</span></div>
            <div className="about-aside__row"><span>04 / Trabajo</span><span><Link href="/proyectos">Proyectos y experimentos ↗</Link></span></div>
          </aside>
        </div>
      </section>
    </>
  );
}

import Link from 'next/link';
import { ProjectCard } from '@/components/project-card';
import { SectionHeading } from '@/components/section-heading';
import { StackExplorer } from '@/components/stack-explorer';
import { contactEmail } from '@/lib/site';
import { projects } from '@/lib/projects';

const featuredOrder = ['billqo', 'papermaxing', 'cuantly', 'economia', 'medical-ai-rag'];
const selectedProjects = projects
  .filter((project) => project.featured)
  .sort((first, second) => featuredOrder.indexOf(first.slug) - featuredOrder.indexOf(second.slug));

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="home-title">
        <div className="hero__graphic" aria-hidden="true">
          <svg viewBox="0 0 900 640" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="hero-route hero-route--dashed" d="M70 75H328V144H470V232H635V116H782V260H846" />
            <path className="hero-route hero-route--dashed" d="M12 478H188V390H360V531H533V422H696V568H864" />
            <path className="hero-route" d="M47 284C161 284 152 160 270 160S386 269 493 269 617 112 702 166 772 344 872 344" />
            <path className="hero-route hero-route--moving" d="M47 284C161 284 152 160 270 160S386 269 493 269 617 112 702 166 772 344 872 344" />
            <path className="hero-route" d="M110 572C212 572 193 330 308 330S420 466 548 466 654 286 748 286" />
            <rect className="hero-route-node" x="262" y="152" width="16" height="16" />
            <rect className="hero-route-node" x="485" y="261" width="16" height="16" />
            <rect className="hero-route-node" x="694" y="158" width="16" height="16" />
            <rect className="hero-route-node" x="540" y="458" width="16" height="16" />
            <circle className="hero-route-node" cx="47" cy="284" r="5" />
            <circle className="hero-route-node" cx="872" cy="344" r="5" />
            <text className="hero-route-label" x="321" y="136">// CONTEXTO / 01</text>
            <text className="hero-route-label" x="604" y="101">// RUTAS / 02</text>
            <text className="hero-route-label" x="570" y="518">// SISTEMAS / 03</text>
          </svg>
          <div className="hero__graphic-note"><span>[ 01 ] IDEA</span><span>[ 02 ] SISTEMA</span><span>[ 03 ] HERRAMIENTA</span></div>
        </div>
        <div className="hero__inner">
          <div className="hero__copy">
            <h1 id="home-title">Construyo herramientas para aprender, pensar y resolver problemas.</h1>
            <p className="hero__intro">Desarrollo productos de inteligencia artificial, sistemas de aprendizaje y software útil que conectan ideas con resultados reales.</p>
            <div className="hero__actions">
              <Link className="button" href="/proyectos">Ver proyectos <span aria-hidden="true">→</span></Link>
              <Link className="button button--outline" href="/sobre-mi">Sobre mí</Link>
            </div>
            <p className="hero__meta">Producto · sistemas · inteligencia artificial</p>
          </div>
        </div>
      </section>

      <section className="page-section page-section--dark" aria-labelledby="projects-title">
        <div className="page-container">
          <SectionHeading index="01 / Trabajo" title="Proyectos que ya puedes explorar." description="Productos y herramientas para aprender, organizar información y resolver tareas con software." />
          <div className="projects-grid">
            {selectedProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
          </div>
          <div className="projects-more"><Link className="text-link" href="/proyectos">Ver todos los proyectos <span className="arrow-mark" aria-hidden="true">↗</span></Link></div>
        </div>
      </section>

      <section className="page-section page-section--pattern" aria-labelledby="cuantly-title">
        <div className="page-container learning-split">
          <div className="learning-copy">
            <p className="section-index"><span aria-hidden="true">//</span> CUANTLY / TUTORES Y RECURSOS</p>
            <h2 id="cuantly-title">Aprender también es diseñar mejores sistemas.</h2>
            <p>Cuantly conecta práctica adaptativa, tutores y lectura del progreso. También abre espacio para compartir cómo se construye el producto y qué decisiones hay detrás.</p>
            <Link className="button" href="/proyectos/cuantly">Explorar Cuantly <span aria-hidden="true">→</span></Link>
          </div>
          <div className="learning-map" aria-hidden="true">
            <svg viewBox="0 0 520 280" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32 142H134V72H262V191H374V114H485" />
              <path d="M32 142C97 142 84 74 150 74S214 192 278 192 347 111 413 111s31 31 72 31" />
              <rect x="126" y="64" width="16" height="16" />
              <rect x="254" y="183" width="16" height="16" />
              <rect x="366" y="106" width="16" height="16" />
              <text x="40" y="128">PRÁCTICA</text>
              <text x="193" y="222">RETROALIMENTACIÓN</text>
              <text x="402" y="96">SIGUIENTE PASO</text>
            </svg>
            <div className="learning-map__note">Los errores también pueden indicar por dónde continuar.</div>
          </div>
        </div>
      </section>

      <section className="page-section page-section--dark" aria-label="Tecnologías y herramientas">
        <div className="page-container">
          <SectionHeading index="02 / Herramientas" title="Una idea, varias capas." description="Diseño la experiencia y conecto las piezas de software que la sostienen: interfaces, modelos, datos y despliegue." />
          <StackExplorer />
          <p className="stack-note">El stack cambia según el problema; la herramienta es parte del diseño, no el objetivo.</p>
        </div>
      </section>

      <section className="page-section page-section--compact" aria-label="Notas y contacto">
        <div className="page-container journal-contact">
          <article className="journal-panel">
            <p className="section-index"><span aria-hidden="true">//</span> NOTAS</p>
            <h2>Un diario para ideas en proceso.</h2>
            <p>Las primeras notas están en camino. Aquí compartiré apuntes sobre proyectos, sistemas y aprendizajes.</p>
            <Link className="journal-panel__link" href="/notas" aria-label="Abrir la sección de notas">→</Link>
          </article>
          <article className="contact-panel">
            <p className="section-index"><span aria-hidden="true">//</span> CONTACTO</p>
            <h2>¿Tienes una idea?</h2>
            <p>Estoy abierto a conversar sobre productos, colaboraciones y proyectos que valga la pena construir.</p>
            <a className="contact-panel__email" href={`mailto:${contactEmail}`}>{contactEmail} <span aria-hidden="true">↗</span></a>
          </article>
        </div>
      </section>
    </>
  );
}

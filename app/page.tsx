import Link from 'next/link';
import { Icon } from '@/components/icon';
import { ProjectCard } from '@/components/project-card';
import { ProjectVisual } from '@/components/project-visual';
import { StackExplorer } from '@/components/stack-explorer';
import { ToolRail } from '@/components/tool-rail';
import { Workflow } from '@/components/workflow';
import { WorkProcess } from '@/components/work-process';
import { projects } from '@/lib/projects';
import { services } from '@/lib/services';
import { contactEmail, linkedInUrl } from '@/lib/site';

const featured = ['cuantly', 'billqo', 'papermaxing']
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is NonNullable<typeof project> => Boolean(project));
const spotlight = projects.find((project) => project.slug === 'cuantly');

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="home-title">
        <div className="hero__ambient" aria-hidden="true">
          <svg viewBox="0 0 1440 520" preserveAspectRatio="none">
            <path d="M-30 170C180 70 300 280 490 230S760 75 955 190s315 120 515-20" />
            <path d="M-40 280C180 155 315 380 525 315S770 155 970 275s310 115 515-25" />
            <path d="M-20 385C205 250 355 475 560 405s250-145 435-35 300 105 470-20" />
          </svg>
        </div>
        <div className="page-container hero__inner">
          <p className="hero__eyebrow">Hola, soy Mario Ibarra · Estudio Economía en la UDEM</p>
          <h1 id="home-title">Curioso por naturaleza.<br /><span>Me encanta crear cosas que funcionan.</span></h1>
          <p className="hero__intro">Programo, experimento con IA y conecto sistemas para convertir ideas en herramientas. Soy fundador de Cuantly y aquí comparto proyectos, trucos y lo que voy aprendiendo.</p>
          <div className="hero__actions">
            <Link className="button" href="/proyectos">Explorar mis proyectos <Icon name="arrow" size={17} /></Link>
            <Link className="button button--outline" href="/sobre-mi">Conóceme</Link>
          </div>
        </div>
      </section>

      {spotlight && (
        <section className="featured-spotlight" aria-labelledby="spotlight-title">
          <div className="page-container featured-spotlight__grid">
            <div className="featured-spotlight__copy">
              <p className="eyebrow">UN PROYECTO QUE ESTOY CONSTRUYENDO</p>
              <h2 id="spotlight-title">Cuantly: practicar matemáticas de una forma más personal.</h2>
              <p>Una plataforma de aprendizaje que utiliza la práctica y los errores para ayudar a decidir qué reforzar después. Una de las formas en las que uno mis ganas de programar y mi interés por la educación.</p>
              <Link className="text-link" href="/proyectos/cuantly">Conoce cómo funciona <Icon name="arrow" size={18} /></Link>
            </div>
            <Link className="featured-spotlight__visual" href="/proyectos/cuantly" aria-label="Explorar el proyecto Cuantly y su demostración">
              <ProjectVisual project={spotlight} />
              <span className="featured-spotlight__visual-footer">Captura real de la demo <span>Explorar proyecto <Icon name="arrow" size={17} /></span></span>
            </Link>
          </div>
        </section>
      )}

      <ToolRail />

      <section className="page-section" aria-labelledby="projects-title">
        <div className="page-container">
          <div className="section-topline">
            <div>
              <p className="eyebrow">PROYECTOS</p>
              <h2 id="projects-title">De ideas a aplicaciones reales.</h2>
              <p>Algunas herramientas que he construido para aprender y resolver problemas diferentes.</p>
            </div>
            <Link className="text-link" href="/proyectos">Ver todos los proyectos <Icon name="arrow" size={17} /></Link>
          </div>
          <div className="projects-grid projects-grid--home">{featured.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
        </div>
      </section>

      <section className="page-section page-section--soft explorer-section" aria-labelledby="explorer-title">
        <div className="page-container">
          <div className="explorer-section__heading">
            <p className="eyebrow">MARIO.IBARRA / EXPLORADOR</p>
            <h2 id="explorer-title">Un poco de código para explorar mi mundo.</h2>
            <p>Abre una pestaña y descubre proyectos, herramientas y cómo conecto las distintas piezas.</p>
          </div>
          <Workflow />
        </div>
      </section>

      <section className="page-section" id="enfoque" aria-labelledby="focus-title">
        <div className="page-container split-section">
          <div className="split-section__intro">
            <p className="eyebrow">LO QUE ME INTERESA</p>
            <h2 id="focus-title">Me gusta entender cómo funciona todo.</h2>
            <p>No solo la pantalla: también los datos, las APIs, la inteligencia artificial y la infraestructura que hay detrás.</p>
            <Link className="text-link" href="/sobre-mi">Más sobre mí <Icon name="arrow" size={17} /></Link>
          </div>
          <div className="service-rows">{services.map((service) => <Link className="service-row" href={'/servicios#' + service.id} key={service.id}><span className="service-row__icon"><Icon name={service.icon} size={21} /></span><span><strong>{service.title}</strong><small>{service.summary}</small></span><span className="service-row__arrow"><Icon name="arrow" size={18} /></span></Link>)}</div>
        </div>
      </section>

      <section className="page-section page-section--soft" id="herramientas" aria-labelledby="stack-title">
        <div className="page-container split-section split-section--stack">
          <div className="split-section__intro">
            <p className="eyebrow">HERRAMIENTAS</p>
            <h2 id="stack-title">Las herramientas detrás de mis proyectos.</h2>
            <p>Cada proyecto requiere algo distinto. Explora cómo conecto interfaces, modelos de IA, datos y servicios.</p>
          </div>
          <StackExplorer />
        </div>
      </section>

      <section className="page-section" aria-labelledby="process-title">
        <div className="page-container split-section">
          <div className="split-section__intro">
            <p className="eyebrow">CÓMO APRENDO CONSTRUYENDO</p>
            <h2 id="process-title">Preguntar, probar y mejorar.</h2>
            <p>Una idea rara vez funciona exactamente como la imaginé. Así es como intento convertirla en una herramienta útil.</p>
          </div>
          <WorkProcess />
        </div>
      </section>

      <section className="notes-strip" aria-labelledby="notes-title">
        <div className="page-container notes-strip__inner">
          <div><p className="eyebrow">NOTAS</p><h2 id="notes-title">Lo que voy aprendiendo.</h2><p>Trucos, experimentos y descubrimientos que quiero compartir.</p></div>
          <div className="notes-strip__empty"><Icon name="document" size={23} /><span>Las primeras notas están en camino.</span></div>
          <Link className="text-link" href="/notas">Explorar notas <Icon name="arrow" size={17} /></Link>
        </div>
      </section>

      <section className="contact-cta" id="contacto" aria-labelledby="contact-title">
        <div className="page-container contact-cta__inner">
          <h2 id="contact-title">¿Tienes una idea o algo interesante que compartir?</h2>
          <p>Me gusta conocer proyectos, herramientas y personas curiosas. Si quieres conversar, aquí me encuentras.</p>
          <div className="contact-cta__actions">
            <a className="button" href={'mailto:' + contactEmail}><Icon name="mail" size={18} /> Escríbeme</a>
            <a className="button button--outline" href="https://github.com/MarioIbago" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
            <a className="button button--outline" href={linkedInUrl} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from 'next/link';
import { Icon } from '@/components/icon';
import { ProjectCard } from '@/components/project-card';
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
          <p className="hero__name">Mario Ibarra Gómez</p>
          <h1 id="home-title">Conecto ideas con sistemas.<br /><span>Construyo tecnología útil.</span></h1>
          <p className="hero__intro">Creo aplicaciones y sistemas que conectan datos, inteligencia artificial e infraestructura. Aquí comparto mis proyectos, procesos y herramientas.</p>
          <div className="hero__actions"><Link className="button" href="/proyectos">Explorar proyectos <Icon name="arrow" size={17} /></Link><Link className="button button--outline" href="/sobre-mi">Sobre mí</Link></div>
          <Workflow />
        </div>
      </section>

      <ToolRail />

      <section className="page-section page-section--soft" aria-labelledby="projects-title">
        <div className="page-container">
          <div className="section-topline"><div><p className="eyebrow">PROYECTOS</p><h2 id="projects-title">Ideas convertidas en herramientas.</h2><p>Una selección de productos en los que he trabajado.</p></div><Link className="text-link" href="/proyectos">Ver todos los proyectos <Icon name="arrow" size={17} /></Link></div>
          <div className="projects-grid projects-grid--home">{featured.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
        </div>
      </section>

      <section className="page-section" id="enfoque" aria-labelledby="focus-title">
        <div className="page-container split-section">
          <div className="split-section__intro"><p className="eyebrow">EN QUÉ ME ENFOCO</p><h2 id="focus-title">Me interesa el sistema completo.</h2><p>Desde la interfaz que ve una persona hasta los datos, servicios e infraestructura que hacen posible la experiencia.</p><Link className="text-link" href="/sobre-mi">Conocer mi enfoque <Icon name="arrow" size={17} /></Link></div>
          <div className="service-rows">{services.map((service) => <Link className="service-row" href={'/servicios#' + service.id} key={service.id}><span className="service-row__icon"><Icon name={service.icon} size={21} /></span><span><strong>{service.title}</strong><small>{service.summary}</small></span><span className="service-row__arrow"><Icon name="arrow" size={18} /></span></Link>)}</div>
        </div>
      </section>

      <section className="page-section page-section--soft" id="herramientas" aria-labelledby="stack-title"><div className="page-container split-section split-section--stack"><div className="split-section__intro"><p className="eyebrow">HERRAMIENTAS</p><h2 id="stack-title">Las piezas que conecto.</h2><p>La tecnología cambia según el problema. Explora algunas de las capas que pueden formar un producto.</p></div><StackExplorer /></div></section>

      <section className="page-section" aria-labelledby="process-title"><div className="page-container split-section"><div className="split-section__intro"><p className="eyebrow">CÓMO TRABAJO</p><h2 id="process-title">Un proceso claro, de principio a fin.</h2><p>Cada proyecto es distinto, pero empieza por comprender qué necesita funcionar mejor.</p></div><WorkProcess /></div></section>

      <section className="notes-strip" aria-labelledby="notes-title"><div className="page-container notes-strip__inner"><div><p className="eyebrow">DIARIO</p><h2 id="notes-title">Notas</h2><p>Ideas y aprendizajes sobre proyectos, sistemas y tecnología.</p></div><div className="notes-strip__empty"><Icon name="document" size={23} /><span>Aún no hay publicaciones.</span></div><Link className="text-link" href="/notas">Ir a notas <Icon name="arrow" size={17} /></Link></div></section>

      <section className="contact-cta" id="contacto" aria-labelledby="contact-title"><div className="page-container contact-cta__inner"><h2 id="contact-title">¿Conectamos?</h2><p>Si te interesa uno de mis proyectos o quieres conversar sobre una idea, puedes escribirme.</p><div className="contact-cta__actions"><a className="button" href={'mailto:' + contactEmail}><Icon name="mail" size={18} /> {contactEmail}</a><a className="button button--outline" href="https://github.com/MarioIbago" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a><a className="button button--outline" href={linkedInUrl} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a></div></div></section>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ProjectVisual } from '@/components/project-visual';
import { getProject, projects } from '@/lib/projects';
import { contactEmail } from '@/lib/site';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: 'Proyecto no encontrado' };
  return {
    title: project.name,
    description: project.description,
    alternates: { canonical: `/proyectos/${project.slug}` },
    openGraph: {
      title: `${project.name} — Mario Ibarra Gómez`,
      description: project.description,
      url: `/proyectos/${project.slug}`,
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const currentIndex = projects.findIndex((entry) => entry.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <section className="detail-hero">
        <div className="page-container">
          <div className="detail-hero__top">
            <Link className="back-link" href="/proyectos"><span aria-hidden="true">←</span> Todos los proyectos</Link>
            <span className="detail-hero__index">{project.category} / {String(currentIndex + 1).padStart(2, '0')}</span>
          </div>
          <div className="detail-hero__grid">
            <div>
              <h1>{project.name}</h1>
              <p className="detail-hero__description">{project.description}</p>
              <div className="detail-hero__links">
                {project.demoUrl && <a className="text-link" href={project.demoUrl} target="_blank" rel="noreferrer">Abrir la app <span className="arrow-mark" aria-hidden="true">↗</span></a>}
                {project.sourceUrl && <a className="text-link" href={project.sourceUrl} target="_blank" rel="noreferrer">Ver código <span className="arrow-mark" aria-hidden="true">↗</span></a>}
              </div>
              <div className="detail-meta" aria-label="Tecnologías del proyecto">
                {project.stack.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
            <div className="detail-hero__art"><ProjectVisual project={project} /></div>
          </div>
        </div>
      </section>

      <section className="page-section page-section--dark">
        <div className="page-container detail-copy">
          <p className="detail-copy__label">Qué hace</p>
          <div className="detail-copy__body">
            {project.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>

      <section className="page-section page-section--pattern">
        <div className="page-container">
          <div className="section-heading">
            <p className="section-index"><span aria-hidden="true">//</span> CÓMO SE PIENSA</p>
            <div><h2>Las decisiones también son parte del producto.</h2></div>
          </div>
          <div className="principles-grid">
            {project.principles.map((principle, index) => (
              <article className="principle" key={principle.title}>
                <p className="section-index"><span aria-hidden="true">0{index + 1}</span></p>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {project.slug === 'cuantly' && (
        <section className="page-section page-section--dark" aria-labelledby="cuantly-resources">
          <div className="page-container">
            <div className="section-heading">
              <p className="section-index"><span aria-hidden="true">//</span> CUANTLY / RECURSOS</p>
              <div><h2 id="cuantly-resources">Tutores y whitepapers.</h2><p className="section-heading__description">El proyecto también incluye materiales para quienes acompañan la práctica y documentación que hace visibles las decisiones detrás del sistema.</p></div>
            </div>
            <div className="resource-grid">
              <article className="resource-panel">
                <p className="section-index"><span aria-hidden="true">01</span> TUTORES</p>
                <h3>Un espacio para aprender acompañado.</h3>
                <p>Cuantly reúne práctica adaptativa y recursos para que el acompañamiento también forme parte del recorrido.</p>
                <a href={project.demoUrl} target="_blank" rel="noreferrer">Conocer Cuantly <span aria-hidden="true">↗</span></a>
              </article>
              <article className="resource-panel">
                <p className="section-index"><span aria-hidden="true">02</span> WHITEPAPERS</p>
                <h3>Cómo se construyen estos sistemas.</h3>
                <p>Una línea de documentación sobre tutores, adaptación e infraestructura. Si quieres conocer los materiales, escríbeme.</p>
                <a href={`mailto:${contactEmail}?subject=Cuantly%20%7C%20whitepapers`}>Preguntar por whitepapers <span aria-hidden="true">↗</span></a>
              </article>
            </div>
          </div>
        </section>
      )}

      <section className="page-section page-section--compact">
        <div className="page-container detail-next">
          <p>Siguiente proyecto</p>
          <Link href={`/proyectos/${nextProject.slug}`}>{nextProject.name} <span aria-hidden="true">→</span></Link>
        </div>
      </section>
    </>
  );
}

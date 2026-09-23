import Link from 'next/link';
import type { Project } from '@/lib/projects';
import { ProjectVisual } from '@/components/project-visual';

function ExternalArrow() {
  return <span className="arrow-mark" aria-hidden="true">↗</span>;
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project-card${project.featured ? ' project-card--featured' : ''}`}>
      <Link className="project-card__visual-link" href={`/proyectos/${project.slug}`} aria-label={`Conocer ${project.name}`}>
        <ProjectVisual project={project} />
        <span className="project-card__number" aria-hidden="true">{String(projectsIndex(project.slug)).padStart(2, '0')}</span>
        <span className="project-card__corner" aria-hidden="true">↗</span>
      </Link>
      <div className="project-card__body">
        <div className="project-card__heading">
          <p className="project-card__category">{project.category}</p>
          <h3><Link href={`/proyectos/${project.slug}`}>{project.name}</Link></h3>
        </div>
        <p className="project-card__summary">{project.short}</p>
        <div className="project-card__links">
          <Link href={`/proyectos/${project.slug}`} className="text-link">Ver proyecto <ExternalArrow /></Link>
          {project.demoUrl && <a className="text-link text-link--quiet" href={project.demoUrl} target="_blank" rel="noreferrer">Abrir app <ExternalArrow /></a>}
          {project.sourceUrl && <a className="text-link text-link--quiet" href={project.sourceUrl} target="_blank" rel="noreferrer">Código <ExternalArrow /></a>}
        </div>
      </div>
    </article>
  );
}

function projectsIndex(slug: string) {
  const order = ['cuantly', 'papermaxing', 'billqo', 'economia', 'medical-ai-rag', 'notes-to-latex'];
  return order.indexOf(slug) + 1;
}

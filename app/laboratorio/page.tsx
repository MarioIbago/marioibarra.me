import type { Metadata } from 'next';
import Link from 'next/link';
import { projects } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Laboratorio',
  description: 'Herramientas y experimentos para explorar IA, lectura de documentos y escritura matemática.',
  alternates: { canonical: '/laboratorio' },
};

const labProjects = ['notes-to-latex', 'papermaxing'].map((slug) => projects.find((project) => project.slug === slug)!).filter(Boolean);

export default function LabPage() {
  return (
    <>
      <section className="page-intro">
        <div className="page-container page-intro__grid">
          <h1>Un laboratorio de herramientas concretas.</h1>
          <p className="page-intro__description">Prototipos y proyectos pequeños que exploran cómo la IA puede ayudar con tareas específicas, sin esconder el proceso.</p>
        </div>
      </section>
      <section className="page-content">
        <div className="page-container">
          <div className="lab-list">
            {labProjects.map((project, index) => (
              <Link className="lab-row" href={`/proyectos/${project.slug}`} key={project.slug}>
                <span className="lab-row__type">{project.category} / 0{index + 1}</span>
                <h2>{project.name}</h2>
                <p>{project.short}</p>
                <span className="lab-row__arrow" aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
          <div className="lab-callout">
            <h2>Lo pequeño también necesita buen diseño.</h2>
            <p>Una herramienta sirve cuando hace más simple una acción real: pasar de una foto a una fórmula editable o de un artículo a una pregunta que puedas revisar.</p>
          </div>
        </div>
      </section>
    </>
  );
}

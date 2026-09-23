import type { Metadata } from 'next';
import { ProjectFilter } from '@/components/project-filter';
import { projects } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Proyectos',
  description: 'Productos y herramientas de Mario Ibarra Gómez sobre aprendizaje, inteligencia artificial, documentos e infraestructura.',
  alternates: { canonical: '/proyectos' },
};

export default function ProjectsPage() {
  return (
    <>
      <section className="page-intro">
        <div className="page-container page-intro__grid">
          <h1>Proyectos con una idea detrás.</h1>
          <p className="page-intro__description">Cada página cuenta qué hace el proyecto, qué problema aborda y cómo se conectan sus partes.</p>
        </div>
      </section>
      <section className="page-content" aria-label="Explorar proyectos">
        <div className="page-container">
          <ProjectFilter projects={projects} />
        </div>
      </section>
    </>
  );
}

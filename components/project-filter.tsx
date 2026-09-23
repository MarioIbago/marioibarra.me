'use client';

import { useMemo, useState } from 'react';
import { ProjectCard } from '@/components/project-card';
import type { Project, ProjectCategory } from '@/lib/projects';

const filters: (ProjectCategory | 'Todos')[] = ['Todos', 'Aprendizaje', 'IA y documentos', 'Sistemas', 'Herramientas'];

export function ProjectFilter({ projects }: { projects: Project[] }) {
  const [selected, setSelected] = useState<(typeof filters)[number]>('Todos');
  const visible = useMemo(
    () => selected === 'Todos' ? projects : projects.filter((project) => project.category === selected),
    [projects, selected],
  );

  return (
    <div className="project-browser">
      <div className="project-filters" role="group" aria-label="Filtrar proyectos por tema">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={`filter-button${selected === filter ? ' is-selected' : ''}`}
            aria-pressed={selected === filter}
            onClick={() => setSelected(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <p className="filter-status" aria-live="polite">{visible.length} {visible.length === 1 ? 'proyecto' : 'proyectos'}</p>
      <div className="projects-grid projects-grid--browse">
        {visible.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </div>
    </div>
  );
}

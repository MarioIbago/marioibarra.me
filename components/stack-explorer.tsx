'use client';

import { useState } from 'react';

const stackLayers = [
  {
    label: 'Interfaz',
    title: 'Lo que una persona ve y puede hacer.',
    description: 'React, Next.js y Vite sirven para construir interfaces web. HTML, CSS y TypeScript organizan su estructura, apariencia e interacción.',
    tools: ['React', 'Next.js', 'Vite', 'TypeScript', 'HTML', 'CSS'],
    flow: ['Pantalla', 'Interacción', 'Producto'],
  },
  {
    label: 'IA y datos',
    title: 'El contexto acompaña a la respuesta.',
    description: 'Python y las APIs conectan procesos. Según el proyecto, los datos viven en Firebase, SQL o NoSQL; Pinecone permite buscar contexto por significado.',
    tools: ['Python', 'APIs', 'Firebase', 'SQL / NoSQL', 'Pinecone', 'RAG'],
    flow: ['Pregunta', 'Contexto', 'Respuesta'],
  },
  {
    label: 'Infraestructura',
    title: 'Las piezas se despliegan y se comunican.',
    description: 'Vercel publica aplicaciones web, Cloudflare aporta servicios de red y GitHub mantiene el historial del código.',
    tools: ['Vercel', 'Cloudflare', 'GitHub', 'Node.js', 'Codex', 'Claude Code'],
    flow: ['Código', 'Red', 'Despliegue'],
  },
] as const;

export function StackExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeLayer = stackLayers[activeIndex];

  return (
    <div className="stack-explorer">
      <div className="stack-explorer__controls" role="group" aria-label="Capas del stack tecnológico">
        {stackLayers.map((layer, index) => (
          <button
            key={layer.label}
            className={`stack-explorer__control${activeIndex === index ? ' is-active' : ''}`}
            type="button"
            aria-pressed={activeIndex === index}
            aria-controls="stack-explorer-panel"
            onClick={() => setActiveIndex(index)}
          >
            <span className="stack-explorer__number">{String(index + 1).padStart(2, '0')}</span>
            <span>{layer.label}</span>
            <span className="stack-explorer__arrow" aria-hidden="true">↗</span>
          </button>
        ))}
      </div>

      <section className="stack-explorer__panel" id="stack-explorer-panel" aria-live="polite">
        <p className="section-index"><span aria-hidden="true">//</span> {activeLayer.label}</p>
        <h3>{activeLayer.title}</h3>
        <p className="stack-explorer__description">{activeLayer.description}</p>
        <ul className="stack-explorer__tools" aria-label={`Herramientas de ${activeLayer.label}`}>
          {activeLayer.tools.map((tool) => <li key={tool}>{tool}</li>)}
        </ul>
        <ol className="stack-explorer__flow" aria-label={`Recorrido de ${activeLayer.label}`}>
          {activeLayer.flow.map((step, index) => (
            <li className="stack-explorer__step" key={step}>
              {index > 0 && <span className="stack-explorer__connector" aria-hidden="true">→</span>}{step}
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}

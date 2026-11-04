'use client';

import { useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import Link from 'next/link';
import { Icon, type IconName } from '@/components/icon';

type Step = { icon: IconName; title: string; description: string; note: string; href?: string };
type Workflow = { id: string; label: string; icon: IconName; command: string; title: string; description: string; steps: Step[] };

const workflows: Workflow[] = [
  {
    id: 'proyectos', label: 'Proyectos', icon: 'layers', command: 'ls proyectos',
    title: 'Algunas cosas que he construido.',
    description: 'Productos que exploran aprendizaje, finanzas y documentos.',
    steps: [
      { icon: 'spark', title: 'Cuantly', description: 'Práctica de matemáticas adaptativa para estudiantes y tutores.', note: 'Ver proyecto →', href: '/proyectos/cuantly' },
      { icon: 'database', title: 'Billqo', description: 'Finanzas personales conectadas a una hoja de Google propia.', note: 'Ver proyecto →', href: '/proyectos/billqo' },
      { icon: 'document', title: 'PaperMaxing', description: 'Lectura de artículos y preguntas con las fuentes a la vista.', note: 'Ver proyecto →', href: '/proyectos/papermaxing' },
    ],
  },
  {
    id: 'stack', label: 'Stack', icon: 'code', command: 'cat stack',
    title: 'Herramientas para cada capa.',
    description: 'Elijo las piezas según lo que necesita cada proyecto.',
    steps: [
      { icon: 'code', title: 'Interfaces', description: 'React, Next.js, TypeScript, Vite, HTML y CSS.', note: 'Web y experiencia' },
      { icon: 'spark', title: 'IA y datos', description: 'Python, APIs, RAG, Firebase y Pinecone.', note: 'Modelos y contexto' },
      { icon: 'cloud', title: 'Infraestructura', description: 'Vercel, Cloudflare, GitHub y Node.js.', note: 'Servicios y despliegue' },
    ],
  },
  {
    id: 'enfoque', label: 'Enfoque', icon: 'link', command: 'cat enfoque',
    title: 'Me interesa cómo se conecta todo.',
    description: 'De la primera idea a las piezas que hacen posible la experiencia.',
    steps: [
      { icon: 'search', title: 'Entender', description: 'Exploro el problema, el contexto y lo que las personas necesitan.', note: 'Preguntas y contexto' },
      { icon: 'code', title: 'Construir', description: 'Diseño y desarrollo herramientas que se puedan probar y mejorar.', note: 'Producto y código' },
      { icon: 'link', title: 'Conectar', description: 'Integro interfaces, datos y servicios para que trabajen juntos.', note: 'Sistemas y procesos' },
    ],
  },
];

function StepContent({ step }: { step: Step }) {
  return <><span className="workflow-step__icon"><Icon name={step.icon} size={20} /></span><h3>{step.title}</h3><p>{step.description}</p><span className="workflow-step__note">{step.note}</span></>;
}

function StepCard({ step }: { step: Step }): ReactNode {
  return step.href
    ? <Link className="workflow-step workflow-step--link" href={step.href}><StepContent step={step} /></Link>
    : <article className="workflow-step"><StepContent step={step} /></article>;
}

export function Workflow() {
  const [selected, setSelected] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  function moveTab(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % workflows.length;
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index - 1 + workflows.length) % workflows.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = workflows.length - 1;
    else return;
    event.preventDefault();
    setSelected(next);
    tabs.current[next]?.focus();
  }

  return (
    <div className="workflow-frame">
      <div className="workflow">
        <div className="workflow__top">
          <div className="workflow__brand"><span className="workflow__mark" aria-hidden="true">&gt;_</span><strong>mario.ibarra</strong></div>
          <span className="workflow__context">~/portafolio</span>
          <span className="workflow__hint">Explora mi trabajo</span>
        </div>
        <div className="workflow__body">
          <div className="workflow__tabs" role="tablist" aria-label="Explorar el portafolio">
            {workflows.map((item, index) => (
              <button key={item.id} ref={(node) => { tabs.current[index] = node; }} type="button" role="tab" id={'workflow-tab-' + item.id} aria-selected={selected === index} aria-controls={'workflow-panel-' + item.id} tabIndex={selected === index ? 0 : -1} className={'workflow__tab' + (selected === index ? ' is-active' : '')} onClick={() => setSelected(index)} onKeyDown={(event) => moveTab(event, index)}>
                <Icon name={item.icon} size={18} /><span>{item.label}</span>
              </button>
            ))}
          </div>
          {workflows.map((item, index) => (
            <div key={item.id} className="workflow__panel" role="tabpanel" id={'workflow-panel-' + item.id} aria-labelledby={'workflow-tab-' + item.id} hidden={selected !== index} tabIndex={0}>
              <p className="workflow__command"><span>mario.ibarra:~$</span> {item.command}</p>
              <h2>{item.title}</h2>
              <p className="workflow__description">{item.description}</p>
              <div className="workflow__steps">{item.steps.map((step) => <StepCard key={step.title} step={step} />)}</div>
            </div>
          ))}
        </div>
        <div className="workflow__bottom"><span>Proyectos, herramientas e ideas en construcción.</span><Link href="/proyectos">Ver todos los proyectos <Icon name="arrow" size={16} /></Link></div>
      </div>
    </div>
  );
}

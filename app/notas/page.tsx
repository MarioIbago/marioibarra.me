import type { Metadata } from 'next';
import { SectionHeading } from '@/components/section-heading';

export const metadata: Metadata = {
  title: 'Notas',
  description: 'Un diario personal sobre proyectos, herramientas, sistemas y aprendizajes. Próximamente.',
  alternates: { canonical: '/notas' },
};

export default function NotesPage() {
  return (
    <>
      <section className="page-intro">
        <div className="page-container page-intro__grid">
          <h1>Notas de trabajo, no ruido.</h1>
          <p className="page-intro__description">Un espacio para escribir sobre proyectos, sistemas e ideas mientras toman forma.</p>
        </div>
      </section>
      <section className="page-content">
        <div className="page-container">
          <SectionHeading index="01 / Diario" title="Todavía no hay publicaciones." description="Prefiero abrir esta sección cuando tenga una primera nota que valga la pena compartir." />
          <div className="empty-journal">
            <div>
              <h2>Las primeras notas están en camino.</h2>
              <p>Cuando publique algo, aparecerá aquí. Por ahora, puedes conocer los proyectos y cómo están construidos.</p>
            </div>
            <div className="empty-journal__graphic" aria-hidden="true">
              <svg viewBox="0 0 360 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 130H91V48H165V103H239V31H340" />
                <path d="M18 130C68 130 61 53 112 53S143 110 192 110 255 34 300 34s12 56 40 56" />
                <circle cx="91" cy="48" r="4" /><circle cx="165" cy="103" r="4" /><circle cx="239" cy="31" r="4" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="page-section page-section--deep not-found-page">
      <div className="page-container">
        <p className="section-index"><span aria-hidden="true">//</span> 404</p>
        <h1>Esta ruta no existe.</h1>
        <p>Vuelve a los proyectos o regresa al inicio.</p>
        <Link className="button" href="/">Volver al inicio <span aria-hidden="true">→</span></Link>
      </div>
    </section>
  );
}

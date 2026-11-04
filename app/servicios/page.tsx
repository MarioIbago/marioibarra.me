import type { Metadata } from 'next';
import { Icon } from '@/components/icon';
import { WorkProcess } from '@/components/work-process';
import { services } from '@/lib/services';
import { contactEmail } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Áreas de trabajo',
  description: 'Desarrollo de aplicaciones, sistemas web, inteligencia artificial e infraestructura con Mario Ibarra Gómez.',
  alternates: { canonical: '/servicios' },
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-intro page-intro--center">
        <div className="page-container"><p className="eyebrow">ÁREAS DE TRABAJO</p><h1>Una idea necesita piezas que trabajen juntas.</h1><p className="page-intro__description">Diseño y desarrollo herramientas para conectar personas, procesos, datos y servicios.</p><a className="button" href={'mailto:' + contactEmail}>Hablemos <Icon name="arrow" size={17} /></a></div>
      </section>
      <section className="page-section">
        <div className="page-container service-detail-list">
          {services.map((service, index) => (
            <article className="service-detail" id={service.id} key={service.id}>
              <div><p className="eyebrow">0{index + 1} / ÁREAS</p><h2>{service.title}</h2><p>{service.summary}</p></div>
              <div className="service-detail__items"><span className="service-detail__icon"><Icon name={service.icon} size={25} /></span><ul>{service.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></div>
            </article>
          ))}
        </div>
      </section>
      <section className="page-section page-section--soft">
        <div className="page-container split-section"><div className="split-section__intro"><p className="eyebrow">CÓMO TRABAJO</p><h2>De la conversación a una herramienta que puedas usar.</h2><p>El alcance y las herramientas se definen según las necesidades de cada proyecto.</p></div><WorkProcess /></div>
      </section>
      <section className="contact-cta"><div className="page-container contact-cta__inner"><h2>Hablemos de lo que necesitas.</h2><p>Cuéntame tu idea, el proceso que quieres mejorar o el sistema que tienes en mente.</p><a className="button" href={'mailto:' + contactEmail}><Icon name="mail" size={18} /> {contactEmail}</a></div></section>
    </>
  );
}

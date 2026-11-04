import type { Metadata, Viewport } from 'next';
import { headers } from 'next/headers';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { siteUrl } from '@/lib/site';
import '@fontsource-variable/host-grotesk';
import './globals.css';

const siteDescription = 'Portafolio de Mario Ibarra Gómez: proyectos, aplicaciones, sistemas, inteligencia artificial e infraestructura.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Mario Ibarra Gómez — portafolio de sistemas e inteligencia artificial',
    template: '%s | Mario Ibarra Gómez',
  },
  description: siteDescription,
  applicationName: 'Mario Ibarra Gómez',
  alternates: { canonical: '/' },
  keywords: ['Mario Ibarra Gómez', 'desarrollo de software', 'sistemas web', 'inteligencia artificial', 'infraestructura', 'integración de procesos'],
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: '/',
    siteName: 'Mario Ibarra Gómez',
    title: 'Mario Ibarra Gómez — portafolio de sistemas e inteligencia artificial',
    description: siteDescription,
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Portafolio de Mario Ibarra Gómez' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mario Ibarra Gómez — portafolio de sistemas e inteligencia artificial',
    description: siteDescription,
    images: ['/opengraph-image'],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
  colorScheme: 'light',
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mario Ibarra Gómez',
  url: siteUrl,
  email: 'mailto:mario.ibago@gmail.com',
  sameAs: ['https://www.linkedin.com/in/marioibarrag/', 'https://github.com/MarioIbago'],
  knowsAbout: ['Desarrollo de software', 'Inteligencia artificial aplicada', 'Integración de sistemas', 'Datos', 'Infraestructura web'],
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const nonce = (await headers()).get('x-nonce') ?? undefined;

  return (
    <html lang="es-MX">
      <body>
        <a className="skip-link" href="#contenido">Saltar al contenido</a>
        <SiteHeader />
        <main id="contenido">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          nonce={nonce}
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, '\\u003c') }}
        />
      </body>
    </html>
  );
}

# marioibarra.me

Portfolio personal de Mario Ibarra Gómez, construido con Next.js App Router y diseñado para presentar proyectos, procesos y herramientas en español.

## Rutas

- `/` — portada y proyectos seleccionados
- `/servicios` — áreas de trabajo y proceso
- `/proyectos` — catálogo filtrable
- `/proyectos/[slug]` — páginas individuales de proyecto
- `/laboratorio` — herramientas y prototipos
- `/notas` — diario personal, vacío hasta publicar la primera nota
- `/sobre-mi` — perfil y contacto

## Desarrollo

```bash
npm install
npm run dev
```

## Verificación

```bash
npm run typecheck
npm run build
```

La portada incluye un panel de exploración con pestañas y enlaces a proyectos. Los datos de proyectos viven en `lib/projects.ts`; el diario permanece vacío hasta que se publique una nota.

Las imágenes de `public/projects/` son capturas de una demo de Cuantly y de la pantalla de acceso de Billqo. Los iconos de herramientas y sus avisos de licencia están en `public/tools/`. La tipografía Host Grotesk se sirve desde el propio proyecto.

La web no integra analítica de terceros ni formularios; el contacto abre el correo del visitante. Las cabeceras de seguridad se configuran en `next.config.ts` y la política CSP con nonce en `proxy.ts`.

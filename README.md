# marioibarra.me

Portfolio personal de Mario Ibarra Gómez, construido con Next.js App Router y diseñado para presentar proyectos, procesos y herramientas en español.

## Rutas

- `/` — portada y proyectos seleccionados
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

La web no integra analítica de terceros ni formularios; el contacto abre el correo del visitante. Las cabeceras de seguridad se configuran en `next.config.ts`.

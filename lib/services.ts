import type { IconName } from '@/components/icon';

export type Service = { id: string; icon: IconName; title: string; summary: string; details: string[] };

export const services: Service[] = [
  {
    id: 'aplicaciones', icon: 'code', title: 'Aplicaciones y sistemas web',
    summary: 'Productos digitales con interfaces claras y flujos pensados para quienes los usan.',
    details: ['Diseño y desarrollo de interfaces web', 'Herramientas para organizar información y tareas', 'Conexión con bases de datos y servicios'],
  },
  {
    id: 'ia-datos', icon: 'spark', title: 'IA y organización de información',
    summary: 'Herramientas que conectan modelos y documentos con tareas concretas.',
    details: ['Asistentes y experiencias con IA', 'Búsqueda y consulta de documentos', 'Integración de datos y bases vectoriales'],
  },
  {
    id: 'infraestructura', icon: 'server', title: 'Infraestructura y conexión de procesos',
    summary: 'Las piezas técnicas para que aplicaciones, datos y servicios trabajen juntos.',
    details: ['Integración de APIs y servicios', 'Bases de datos, autenticación y permisos', 'Preparación de despliegues y pruebas'],
  },
];

export type ProjectCategory = 'Aprendizaje' | 'IA y documentos' | 'Sistemas' | 'Herramientas';

export type Project = {
  slug: string;
  name: string;
  category: ProjectCategory;
  short: string;
  description: string;
  overview: string[];
  principles: { title: string; body: string }[];
  stack: string[];
  demoUrl?: string;
  sourceUrl?: string;
  featured?: boolean;
  visualLabel: string;
};

export const projects: Project[] = [
  {
    slug: 'cuantly',
    name: 'Cuantly',
    category: 'Aprendizaje',
    short: 'Práctica de matemáticas que se adapta a lo que cada estudiante necesita reforzar.',
    description: 'Una plataforma de aprendizaje que convierte el desempeño en una ruta de práctica más clara para estudiantes y tutores.',
    overview: [
      'Cuantly parte de una pregunta concreta: ¿qué conviene practicar después? La plataforma toma en cuenta el avance y los errores para ajustar la práctica y dar una idea más clara de qué sigue.',
      'El producto reúne tutores, práctica y una lectura del progreso. La infraestructura ayuda a que esas piezas trabajen juntas sin volver la experiencia más difícil para quien aprende.',
    ],
    principles: [
      { title: 'Práctica con sentido', body: 'Los ejercicios buscan responder a lo que la persona ya domina y a lo que necesita volver a trabajar.' },
      { title: 'Apoyo a tutores', body: 'La plataforma contempla herramientas y recursos para acompañar la práctica, no solo para entregar respuestas.' },
      { title: 'Documentación del sistema', body: 'Los whitepapers forman parte del proyecto como una manera de explicar decisiones de producto, aprendizaje e infraestructura.' },
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Firebase', 'Vercel'],
    demoUrl: 'https://cermat.cuantly.com/',
    featured: true,
    visualLabel: 'PRÁCTICA → RETROALIMENTACIÓN → SIGUIENTE PASO',
  },
  {
    slug: 'papermaxing',
    name: 'PaperMaxing',
    category: 'IA y documentos',
    short: 'Un espacio para leer artículos científicos y hacer preguntas con el documento a la vista.',
    description: 'Un espacio de investigación con IA para importar artículos, conservarlos en el navegador y responder preguntas a partir de sus fuentes.',
    overview: [
      'PaperMaxing permite trabajar con artículos en PDF, DOI o URL. El texto y el análisis se mantienen en el navegador, y las respuestas se construyen alrededor del contenido importado.',
      'La idea central es mantener cerca la evidencia: explorar un artículo, entender sus partes y volver a la fuente cuando una respuesta necesita contexto.',
    ],
    principles: [
      { title: 'Cada documento por separado', body: 'Los artículos importados se convierten en registros propios; no se mezclan con el análisis de demostración.' },
      { title: 'La fuente acompaña la respuesta', body: 'La conversación parte del texto del artículo para que sea más sencillo revisar de dónde sale una explicación.' },
      { title: 'Almacenamiento local', body: 'Los archivos y el texto se guardan en IndexedDB del navegador como parte del flujo normal de lectura.' },
    ],
    stack: ['Next.js', 'IndexedDB', 'RAG', 'Vercel'],
    sourceUrl: 'https://github.com/MarioIbago/PaperMaxing',
    featured: true,
    visualLabel: 'DOCUMENTO → CONTEXTO → RESPUESTA CON FUENTE',
  },
  {
    slug: 'billqo',
    name: 'Billqo',
    category: 'Sistemas',
    short: 'Finanzas personales con una arquitectura donde la persona conserva su propia hoja de datos.',
    description: 'Una aplicación de finanzas personales que usa Google Sheets como fuente de datos y limita el acceso a lo necesario para conectar cada cuenta.',
    overview: [
      'Billqo permite organizar movimientos, categorías y presupuestos desde una hoja de Google que pertenece a la persona que la usa.',
      'La arquitectura separa los datos financieros de los metadatos técnicos de conexión. La aplicación usa OAuth para autorizar el acceso y mantiene las credenciales sensibles del lado del servidor.',
    ],
    principles: [
      { title: 'Datos bajo control', body: 'La hoja financiera se crea en el Drive de la persona y permanece en su cuenta.' },
      { title: 'Acceso acotado', body: 'La conexión solicita permisos limitados al archivo que la aplicación crea o que la persona autoriza.' },
      { title: 'Credenciales protegidas', body: 'Los tokens de renovación se manejan en el servidor y se cifran antes de guardarse.' },
    ],
    stack: ['Firebase Authentication', 'Google Sheets', 'Google Cloud', 'OAuth 2.0'],
    demoUrl: 'https://billqo.vercel.app/',
    sourceUrl: 'https://github.com/MarioIbago/Billqo',
    featured: true,
    visualLabel: 'PERSONA → SU HOJA → CONTROL DE GASTOS',
  },
  {
    slug: 'economia',
    name: 'EconomIA',
    category: 'Aprendizaje',
    short: 'Un tutor de economía para conversar, practicar y explorar gráficas paso a paso.',
    description: 'Un espacio de estudio en español con tutor conversacional, práctica guiada y herramientas para explorar gráficas y fórmulas.',
    overview: [
      'EconomIA conecta explicación, ejercicios y representaciones visuales para que conceptos de economía puedan estudiarse desde distintos ángulos.',
      'Las preguntas pueden apoyarse en documentos con fragmentos y fuentes visibles. Las gráficas editables ayudan a mover variables y observar cómo cambia una relación.',
    ],
    principles: [
      { title: 'Explicar con claridad', body: 'El tutor acompaña la conversación y mantiene el foco en el problema que se está resolviendo.' },
      { title: 'Practicar activamente', body: 'La práctica guiada permite responder, revisar una explicación y volver a intentar.' },
      { title: 'Hacer visibles las relaciones', body: 'Las gráficas y fórmulas dan una forma visual a ideas que también aparecen en el texto.' },
    ],
    stack: ['React', 'TypeScript', 'Pinecone', 'Firebase', 'RAG'],
    featured: true,
    visualLabel: 'PREGUNTA → GRÁFICA → PRÁCTICA',
  },
  {
    slug: 'medical-ai-rag',
    name: 'Medical AI RAG',
    category: 'IA y documentos',
    short: 'Un asistente de estudio que consulta materiales y mantiene las fuentes cerca de la respuesta.',
    description: 'Un sistema de consulta y práctica sobre documentos médicos que recupera contexto antes de generar explicaciones y preguntas.',
    overview: [
      'El flujo empieza con una pregunta o un tema. Después busca fragmentos relacionados en los materiales disponibles y usa ese contexto para preparar una respuesta o una pregunta de práctica.',
      'La interfaz presenta el estudio como una conversación y un conjunto de ejercicios, con los documentos como referencia para revisar el contenido.',
    ],
    principles: [
      { title: 'Recuperar antes de responder', body: 'La búsqueda documental prepara el contexto que recibe el modelo.' },
      { title: 'Mantener visible el origen', body: 'La respuesta puede acompañarse de referencias a los fragmentos consultados.' },
      { title: 'Separar experiencias', body: 'La conversación y la generación de preguntas son recorridos distintos dentro de la aplicación.' },
    ],
    stack: ['React', 'TypeScript', 'Pinecone', 'Firebase', 'Vercel'],
    featured: true,
    visualLabel: 'PREGUNTA → BÚSQUEDA → FUENTES',
  },
  {
    slug: 'notes-to-latex',
    name: 'Notes to LaTeX',
    category: 'Herramientas',
    short: 'Una foto de apuntes matemáticos se convierte en LaTeX que puedes revisar y editar.',
    description: 'Una herramienta visual para convertir ecuaciones o páginas de apuntes en código LaTeX, con vista previa y descarga.',
    overview: [
      'Notes to LaTeX recibe una imagen y permite elegir entre extraer fórmulas o convertir una página completa en un documento editable.',
      'El resultado se puede revisar en pantalla, copiar o descargar como archivo .tex para continuar trabajando en otro editor.',
    ],
    principles: [
      { title: 'Entrada sencilla', body: 'El punto de partida es una fotografía o imagen de apuntes.' },
      { title: 'Resultado revisable', body: 'El código y su vista previa quedan juntos para facilitar una comprobación visual.' },
      { title: 'Salida reutilizable', body: 'El documento puede copiarse o descargarse para seguir editándolo.' },
    ],
    stack: ['Python', 'Streamlit', 'OpenAI Vision', 'LaTeX'],
    demoUrl: 'https://notes-2-latex.streamlit.app/',
    sourceUrl: 'https://github.com/MarioIbago/notes-2-LaTeX',
    visualLabel: 'FOTO → EXPRESIÓN → LATEX EDITABLE',
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

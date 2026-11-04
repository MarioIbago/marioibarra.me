const steps = [
  { title: 'Entender', body: 'Reviso la necesidad y el contexto para definir qué debe resolver la herramienta.' },
  { title: 'Construir', body: 'Diseño el recorrido y desarrollo las piezas necesarias para convertir la idea en un producto que se pueda probar.' },
  { title: 'Conectar y mejorar', body: 'Integro datos y servicios, pruebo el flujo y ajusto lo que haga falta con la retroalimentación.' },
];

export function WorkProcess() {
  return <div className="process-list">{steps.map((step, index) => (
    <details className="process-item" key={step.title} open={index === 0 || undefined}>
      <summary><span className="process-item__number">0{index + 1}</span><span>{step.title}</span><span className="process-item__plus" aria-hidden="true">+</span></summary>
      <p>{step.body}</p>
    </details>
  ))}</div>;
}

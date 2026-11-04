const tools = [
  { name: 'React', icon: 'react.svg' },
  { name: 'Next.js', icon: 'nextdotjs.svg' },
  { name: 'Python', icon: 'python.svg' },
  { name: 'Firebase', icon: 'firebase.svg' },
  { name: 'Pinecone' },
  { name: 'Cloudflare', icon: 'cloudflare.svg' },
  { name: 'Vercel', icon: 'vercel.svg' },
  { name: 'GitHub', icon: 'github.svg' },
  { name: 'Codex', icon: 'openai.svg' },
  { name: 'Claude Code', icon: 'claudecode.svg' },
];

export function ToolRail() {
  return (
    <section className="tool-rail" aria-label="Herramientas con las que trabajo">
      <div className="page-container">
        <p>Algunas herramientas con las que trabajo</p>
        <ul>{tools.map((tool) => <li key={tool.name}>{tool.icon && <img src={'/tools/' + tool.icon} width="22" height="22" alt="" loading="lazy" />}<span>{tool.name}</span></li>)}</ul>
      </div>
    </section>
  );
}

export function SectionHeading({ index, title, description }: { index: string; title: string; description?: string }) {
  return (
    <div className="section-heading">
      <p className="section-index"><span aria-hidden="true">//</span> {index}</p>
      <div>
        <h2>{title}</h2>
        {description && <p className="section-heading__description">{description}</p>}
      </div>
    </div>
  );
}

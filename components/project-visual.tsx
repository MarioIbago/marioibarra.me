import type { Project } from '@/lib/projects';

export function ProjectVisual({ project }: { project: Pick<Project, 'slug' | 'visualLabel'> }) {
  return (
    <div className={`project-visual project-visual--${project.slug}`} aria-hidden="true">
      <svg className="project-visual__svg" viewBox="0 0 600 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="visual-line visual-line--soft" d="M38 211H144V98H254V162H365V75H481V211H562" />
        <path className="visual-line visual-line--accent" d="M38 211C103 211 96 95 163 95S212 172 281 172 364 73 431 73s60 138 131 138" />
        <path className="visual-line visual-line--dotted" d="M38 250H562M38 51H562" />
        <g className="visual-markers">
          <rect x="135" y="89" width="18" height="18" />
          <rect x="272" y="163" width="18" height="18" />
          <rect x="422" y="64" width="18" height="18" />
          <circle cx="38" cy="211" r="5" />
          <circle cx="562" cy="211" r="5" />
        </g>
        {project.slug === 'cuantly' && (
          <g className="visual-labels">
            <rect x="64" y="119" width="122" height="47" rx="2" />
            <rect x="223" y="197" width="144" height="38" rx="2" />
            <rect x="386" y="104" width="150" height="47" rx="2" />
            <path d="M186 143H218M367 217H385" />
          </g>
        )}
        {project.slug === 'papermaxing' && (
          <g className="visual-labels">
            <rect x="72" y="85" width="128" height="114" rx="2" />
            <path d="M91 111H177M91 128H165M91 145H181M91 162H154" />
            <rect x="390" y="122" width="141" height="66" rx="2" />
            <path d="M200 139H263L289 168H390" />
          </g>
        )}
        {project.slug === 'billqo' && (
          <g className="visual-labels">
            <rect x="73" y="97" width="179" height="111" rx="2" />
            <path d="M93 125H229M93 149H207M93 173H218" />
            <rect x="363" y="108" width="163" height="83" rx="2" />
            <path d="M385 134H500M385 158H472" />
            <path d="M252 151H362" />
          </g>
        )}
        {project.slug === 'economia' && (
          <g className="visual-labels">
            <path d="M112 202V86M112 202H500" />
            <path d="M143 181C201 170 224 111 280 125S369 178 452 96" />
            <path d="M143 112C216 146 265 168 332 144S413 109 478 122" />
          </g>
        )}
        {project.slug === 'medical-ai-rag' && (
          <g className="visual-labels">
            <rect x="62" y="129" width="114" height="63" rx="2" />
            <rect x="245" y="89" width="128" height="63" rx="2" />
            <rect x="432" y="129" width="114" height="63" rx="2" />
            <path d="M176 160H245M373 121H432" />
            <circle cx="211" cy="160" r="3" />
            <circle cx="404" cy="121" r="3" />
          </g>
        )}
        {project.slug === 'notes-to-latex' && (
          <g className="visual-labels">
            <rect x="66" y="90" width="140" height="120" rx="2" />
            <path d="M89 121H183M89 143H173M89 165H189" />
            <rect x="390" y="105" width="151" height="91" rx="2" />
            <path d="M206 149H283L312 131H390" />
            <path d="M426 137H505M426 159H482" />
          </g>
        )}
      </svg>
      <span className="project-visual__caption">{project.visualLabel}</span>
    </div>
  );
}

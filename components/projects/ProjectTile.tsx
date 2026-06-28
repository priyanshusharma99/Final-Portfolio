import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";

type Props = {
  project: Project;
  index: number;
};

const formatUrl = (url?: string) => {
  if (!url || url === "#") return "#";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `https://${url}`;
};

export function ProjectTile({ project, index }: Props) {
  const indexStr = (index + 1).toString().padStart(2, "0");
  const href = formatUrl(project.liveUrl);
  const isExternal = href !== "#";

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="group flex flex-col gap-5 w-full text-left cursor-pointer"
    >
      {/* ── Tile Header (Index & Arrow) ── */}
      <div className="flex justify-between items-center px-1">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-text-faint group-hover:text-accent transition-colors">
          [{indexStr}]
        </span>
        <ArrowUpRight className="h-4 w-4 text-text-faint group-hover:text-accent transition-colors" />
      </div>

      {/* ── Image Container with Dark Overlays ── */}
      <div className="relative aspect-[16/10] w-full overflow-hidden border border-border group-hover:border-border-strong transition-colors">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 50vw"
          suppressHydrationWarning
        />
        {/* Dark overlay that matches the editorial screenshot style */}
        <div className="absolute inset-0 bg-background/70 mix-blend-multiply group-hover:bg-background/50 transition-colors duration-300" />
      </div>

      {/* ── Metadata & Details ── */}
      <div className="mt-2 flex flex-col">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
          {project.category}
        </span>
        <h3 className="font-display text-[clamp(1.4rem,2.2vw,1.8rem)] leading-[1] text-text-primary mt-2 tracking-[-0.03em]">
          {project.title}
        </h3>
        <p className="font-mono text-[13px] leading-[1.6] text-text-muted mt-3">
          {project.summary}
        </p>

        {/* ── Square Bordered Tech Tags ── */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.stack.map((tag) => (
            <span
              key={tag}
              className="border border-border-strong px-2 py-1 font-mono text-[9px] uppercase tracking-[0.15em] text-text-muted group-hover:text-text-secondary transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

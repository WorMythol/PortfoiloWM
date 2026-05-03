import type { ProjectCategory } from "@/lib/data";

const CFG: Record<ProjectCategory, { label: string; tag: string }> = {
  minecraft:  { label: "mc-preview.mp4",    tag: "VIDEO" },
  blockbench: { label: "model.bbmodel",     tag: "MODEL" },
  design:     { label: "artwork.psd",        tag: "DESIGN" },
  stickers:   { label: "sticker-pack.png",  tag: "STICKER" },
  websites:   { label: "website.vercel",    tag: "SITE" },
  branding:   { label: "brand-kit.ai",      tag: "BRAND" },
  bots:       { label: "bot.ts",            tag: "BOT" },
};

export default function PlaceholderImage({ category }: { category: ProjectCategory }) {
  const c = CFG[category];
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        background: "#15140f",
        border: "2px solid #f5f1e8",
        overflow: "hidden",
      }}
    >
      {/* Diagonal cross */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      >
        <line x1="0" y1="0" x2="100" y2="100" stroke="#8a857a" strokeWidth="0.4" />
        <line x1="100" y1="0" x2="0" y2="100" stroke="#8a857a" strokeWidth="0.4" />
      </svg>
      {/* Tag chip */}
      <div
        style={{
          position: "absolute",
          top: 14,
          left: 14,
          background: "var(--accent)",
          color: "#0a0a0a",
          padding: "5px 10px",
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: 11,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          fontWeight: 700,
        }}
      >
        {c.tag}
      </div>
      {/* filename */}
      <div
        style={{
          position: "absolute",
          bottom: 12,
          left: 14,
          right: 14,
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: 11,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#8a857a",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>{c.label}</span>
        <span>[placeholder]</span>
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useMessages } from "next-intl";
import { PROJECTS, CATEGORIES, type ProjectCategory } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function Portfolio() {
  const t = useTranslations("portfolio");
  const messages = useMessages();
  const catLabels = (messages as any).portfolio.categories as Record<string, string>;

  const [active, setActive] = useState<ProjectCategory | "all">("all");
  const filtered = active === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  const ALL_CATS = [
    { id: "all" as const, label: t("all"), emoji: "◆" },
    ...CATEGORIES.map((c) => ({ id: c.id, label: catLabels[c.id] ?? c.label, emoji: c.emoji })),
  ];

  return (
    <section id="portfolio" style={{ padding: "120px 40px", background: "#0a0a0a", borderTop: "4px solid #f5f1e8" }}>
      <div style={{ maxWidth: 1600, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ marginBottom: 64 }}>
          <div className="eyebrow" style={{ color: "#f5f1e8", marginBottom: 24 }}>{t("eyebrow")}</div>
          <h2 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(40px, 7vw, 120px)", fontWeight: 700, lineHeight: 0.85, letterSpacing: "-0.04em", textTransform: "uppercase", color: "#f5f1e8" }}>
            {t("headline1")}<br /><span style={{ color: "var(--accent)" }}>{t("headline2")}</span>
          </h2>
        </motion.div>

        {/* Category filter */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }}
          style={{ display: "flex", flexWrap: "wrap", gap: 0, borderTop: "2px solid #f5f1e8", borderBottom: "2px solid #f5f1e8", marginBottom: 64 }}>
          {ALL_CATS.map((cat, i) => (
            <button key={cat.id} onClick={() => setActive(cat.id as ProjectCategory | "all")}
              style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: active === cat.id ? 700 : 400, color: active === cat.id ? "#0a0a0a" : "#8a857a", background: active === cat.id ? "var(--accent)" : "transparent", border: "none", borderRight: i < ALL_CATS.length - 1 ? "2px solid #f5f1e8" : "none", padding: "16px 20px", transition: "all 0.15s", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: 8 }}
              onMouseEnter={(e) => { if (active !== cat.id) e.currentTarget.style.color = "#f5f1e8"; }}
              onMouseLeave={(e) => { if (active !== cat.id) e.currentTarget.style.color = "#8a857a"; }}
            >
              <span>{cat.emoji}</span>
              <span className="hidden sm:inline">{cat.label}</span>
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 2 }}>
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

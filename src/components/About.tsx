"use client";
import { motion } from "framer-motion";
import { useTranslations, useMessages } from "next-intl";
import { SKILLS, TOOLS } from "@/lib/data";

export default function About() {
  const t = useTranslations("about");
  const messages = useMessages();
  const stats = (messages as any).about.stats as Array<{ n: string; l: string }>;

  return (
    <section id="about" style={{ padding: "120px 40px", background: "#0a0a0a", borderTop: "4px solid #f5f1e8" }}>
      <div style={{ maxWidth: 1600, margin: "0 auto" }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ marginBottom: 80 }}>
          <div className="eyebrow" style={{ color: "#f5f1e8", marginBottom: 24 }}>{t("eyebrow")}</div>
          <h2 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(40px, 8vw, 120px)", fontWeight: 700, lineHeight: 0.88, letterSpacing: "-0.04em", textTransform: "uppercase", color: "#f5f1e8" }}>
            {t("headline1")}<br /><span style={{ color: "var(--accent)" }}>{t("headline2")}</span>
          </h2>
        </motion.div>

        {/* Bio + photo */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 64, alignItems: "start", marginBottom: 80 }}>
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p style={{ fontSize: 20, lineHeight: 1.5, color: "#f5f1e8", maxWidth: 600, marginBottom: 40 }}>{t("bio")}</p>
            <div>
              <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8a857a", marginBottom: 16 }}>
                {t("toolsLabel")}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {TOOLS.map((tool) => (
                  <span key={tool.name} style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#f5f1e8", border: "2px solid #f5f1e8", padding: "6px 12px", display: "flex", alignItems: "center", gap: 6 }}>
                    {tool.icon} {tool.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Team photo placeholder */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            style={{ position: "relative", aspectRatio: "4 / 5", background: "#15140f", border: "2px solid #f5f1e8", overflow: "hidden" }}>
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
              <line x1="0" y1="0" x2="100" y2="100" stroke="#8a857a" strokeWidth="0.3" />
              <line x1="100" y1="0" x2="0" y2="100" stroke="#8a857a" strokeWidth="0.3" />
            </svg>
            <div style={{ position: "absolute", top: 14, left: 14, background: "var(--accent)", color: "#0a0a0a", fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700, padding: "5px 10px" }}>TEAM</div>
            <div style={{ position: "absolute", bottom: 14, left: 14, fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8a857a" }}>{t("teamPhotoLabel")}</div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: "4px solid #f5f1e8", borderBottom: "4px solid #f5f1e8", marginBottom: 80 }}>
          {stats.map((s, i) => (
            <div key={i} style={{ padding: "48px 32px", borderRight: i < stats.length - 1 ? "2px solid #f5f1e8" : "none" }}>
              <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8a857a", marginBottom: 12 }}>0{i + 1}</div>
              <div style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(48px, 8vw, 120px)", fontWeight: 700, lineHeight: 0.85, letterSpacing: "-0.04em", color: i === 0 ? "var(--accent)" : "#f5f1e8", marginBottom: 16 }}>{s.n}</div>
              <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "#f5f1e8", fontWeight: 600 }}>{s.l}</div>
            </div>
          ))}
        </motion.div>

        {/* Skills table */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div className="eyebrow" style={{ color: "#f5f1e8", marginBottom: 32 }}>{t("skillsEyebrow")}</div>
          <div style={{ borderTop: "2px solid #f5f1e8" }}>
            {SKILLS.map((s, i) => (
              <motion.div key={s.name} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.05 }}
                style={{ display: "grid", gridTemplateColumns: "60px 240px 1fr 60px", alignItems: "center", gap: 24, padding: "20px 0", borderBottom: "2px solid #f5f1e8" }}>
                <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 12, letterSpacing: "0.16em", color: "#8a857a" }}>{String(i + 1).padStart(2, "0")}</div>
                <div style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(20px, 2.5vw, 32px)", fontWeight: 700, letterSpacing: "-0.01em", textTransform: "uppercase" }}>{s.name}</div>
                <div style={{ height: 10, background: "#15140f", border: "1px solid #f5f1e8", position: "relative", overflow: "hidden" }}>
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${s.level}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3 + i * 0.05, ease: "easeOut" }}
                    style={{ position: "absolute", inset: 0, background: "var(--accent)", width: `${s.level}%` }} />
                </div>
                <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 20, fontWeight: 700, textAlign: "right", letterSpacing: "0.05em", color: "#f5f1e8" }}>{s.level}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

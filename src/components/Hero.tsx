"use client";
import { motion } from "framer-motion";
import { useTranslations, useMessages } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");
  const messages = useMessages();
  const disciplines = (messages as any).hero.disciplines as string[];

  return (
    <section id="hero" style={{ minHeight: "100vh", background: "#0a0a0a", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 40px 80px", position: "relative", overflow: "hidden" }}>
      {/* Top chrome rule */}
      <div style={{ position: "absolute", top: 88, left: 40, right: 40, height: 2, background: "#f5f1e8" }} />

      {/* Year — top right */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ position: "absolute", top: 96, right: 40, fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(120px, 16vw, 200px)", fontWeight: 700, lineHeight: 0.85, letterSpacing: "-0.05em", color: "var(--accent)", userSelect: "none", pointerEvents: "none" }}
      >
        2026
      </motion.div>

      {/* Top-left brand label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{ position: "absolute", top: 56, left: 40, fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 14, letterSpacing: "0.14em", textTransform: "uppercase", color: "#8a857a", display: "flex", alignItems: "center", gap: 14 }}
      >
        <span style={{ display: "inline-block", width: 12, height: 12, background: "var(--accent)" }} />
        <strong style={{ color: "#f5f1e8" }}>WorMythol</strong>
        <span>— {t("badge")}</span>
      </motion.div>

      {/* Main content */}
      <div style={{ maxWidth: 1600, position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 14, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8a857a", marginBottom: 24, display: "flex", alignItems: "center", gap: 14 }}
        >
          <span style={{ display: "block", width: 56, height: 4, background: "var(--accent)" }} />
          §&nbsp;00 — {t("badge")}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(72px, 14vw, 220px)", fontWeight: 700, lineHeight: 0.82, letterSpacing: "-0.05em", textTransform: "uppercase", color: "#f5f1e8", marginBottom: 32 }}
        >
          Wor<span style={{ color: "var(--accent)" }}>Mythol</span><br />студия.
        </motion.h1>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          style={{ borderTop: "4px solid #f5f1e8", paddingTop: 24, display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 24 }}
        >
          {/* Team */}
          <div>
            <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "#8a857a", marginBottom: 8 }}>
              {t("teamLabel")}
            </div>
            <div style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(24px, 3vw, 44px)", fontWeight: 700, letterSpacing: "-0.01em", color: "#f5f1e8" }}>
              {t("teamValue")}
            </div>
          </div>

          {/* Disciplines */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 24px", fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 14, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            {disciplines.map((d, i) => (
              <motion.span key={d} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 + i * 0.07 }} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ color: "var(--accent)", fontWeight: 700 }}>★</span>
                <span style={{ fontWeight: 600, color: "#f5f1e8" }}>{d}</span>
              </motion.span>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 16 }}>
            <a href="#portfolio"
              style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#0a0a0a", background: "var(--accent)", padding: "14px 28px", textDecoration: "none", display: "inline-block", transition: "opacity 0.15s" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              {t("cta_primary")}
            </a>
            <a href="#contact"
              style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#f5f1e8", border: "2px solid #f5f1e8", padding: "12px 28px", textDecoration: "none", display: "inline-block", transition: "background 0.15s, color 0.15s" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#f5f1e8"; e.currentTarget.style.color = "#0a0a0a"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#f5f1e8"; }}
            >
              {t("cta_secondary")}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{ position: "absolute", bottom: 40, right: 40, fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8a857a", writingMode: "vertical-rl", display: "flex", alignItems: "center", gap: 10 }}
      >
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}>↓</motion.span>
        {t("scroll")}
      </motion.div>
    </section>
  );
}

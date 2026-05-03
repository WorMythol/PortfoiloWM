"use client";
import { motion } from "framer-motion";
import { useTranslations, useMessages } from "next-intl";

export default function Process() {
  const t = useTranslations("process");
  const messages = useMessages();
  const steps = (messages as any).process.steps as Array<{ n: string; title: string; description: string }>;

  return (
    <section id="process" style={{ padding: "120px 40px", background: "#0a0a0a", borderTop: "4px solid #f5f1e8" }}>
      <div style={{ maxWidth: 1600, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ marginBottom: 64 }}>
          <div className="eyebrow" style={{ color: "#f5f1e8", marginBottom: 24 }}>{t("eyebrow")}</div>
          <h2 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(40px, 7vw, 110px)", fontWeight: 700, lineHeight: 0.88, letterSpacing: "-0.04em", textTransform: "uppercase", color: "#f5f1e8" }}>
            {t("headline1")}{" "}<span style={{ color: "var(--accent)" }}>{t("headline2")}</span>
          </h2>
        </motion.div>

        <div style={{ borderTop: "2px solid #f5f1e8", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
          {steps.map((s, i) => (
            <motion.div key={s.n} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
              style={{ padding: "40px 32px", borderRight: i < steps.length - 1 ? "2px solid #f5f1e8" : "none", borderBottom: "2px solid #f5f1e8", display: "flex", flexDirection: "column", gap: 28 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 56, fontWeight: 700, color: "var(--accent)", lineHeight: 1, flexShrink: 0 }}>{s.n}</div>
                {i < steps.length - 1 && <div style={{ flex: 1, height: 4, background: "#f5f1e8", marginLeft: 8 }} />}
              </div>
              <div style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "-0.01em", color: "#f5f1e8" }}>{s.title}</div>
              <div style={{ fontSize: 16, lineHeight: 1.5, color: "#8a857a" }}>{s.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

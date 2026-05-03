"use client";
import { motion } from "framer-motion";
import { useTranslations, useMessages } from "next-intl";

export default function Testimonials() {
  const t = useTranslations("testimonials");
  const messages = useMessages();
  const items = (messages as any).testimonials.items as Array<{ quote: string; author: string; role: string }>;

  return (
    <section style={{ padding: "120px 40px", background: "#0a0a0a", borderTop: "4px solid #f5f1e8" }}>
      <div style={{ maxWidth: 1600, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ marginBottom: 64 }}>
          <div className="eyebrow" style={{ color: "#f5f1e8", marginBottom: 24 }}>{t("eyebrow")}</div>
          <h2 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(40px, 7vw, 110px)", fontWeight: 700, lineHeight: 0.88, letterSpacing: "-0.04em", textTransform: "uppercase", color: "#f5f1e8" }}>
            {t("headline1")}<br /><span style={{ color: "var(--accent)" }}>{t("headline2")}</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 2 }}>
          {items.map((q, i) => (
            <motion.div key={q.author} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
              style={{ border: "2px solid #f5f1e8", padding: "36px 32px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 28, background: "#0a0a0a" }}>
              <div style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: 120, lineHeight: 0.6, color: "var(--accent)", fontWeight: 700, height: 50, overflow: "visible", userSelect: "none" }}>
                &ldquo;
              </div>
              <p style={{ fontSize: 18, lineHeight: 1.4, color: "#f5f1e8", fontWeight: 500, flex: 1 }}>{q.quote}</p>
              <div style={{ borderTop: "2px solid #f5f1e8", paddingTop: 18, fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                <div style={{ fontWeight: 700, color: "#f5f1e8", marginBottom: 4 }}>{q.author}</div>
                <div style={{ color: "#8a857a" }}>— {q.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { SOCIAL_LINKS } from "@/lib/data";

function SocialIcon({ icon }: { icon: string }) {
  if (icon === "telegram") return <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 20, height: 20 }}><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>;
  if (icon === "discord") return <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 20, height: 20 }}><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.012.043.028.056a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" /></svg>;
  if (icon === "github") return <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 20, height: 20 }}><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>;
  return <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 20, height: 20 }}><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" /></svg>;
}

type Status = "idle" | "sending" | "sent";

export default function Contact() {
  const t = useTranslations("contact");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
  };

  const inputBase = { width: "100%", background: "transparent", border: "none", borderBottom: "2px solid #f5f1e8", padding: "12px 0", fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: 18, color: "#f5f1e8", outline: "none", transition: "border-color 0.15s" } as const;

  return (
    <section id="contact" style={{ padding: "120px 40px", background: "#0a0a0a", borderTop: "4px solid #f5f1e8" }}>
      <div style={{ maxWidth: 1600, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ marginBottom: 80 }}>
          <div className="eyebrow" style={{ color: "#f5f1e8", marginBottom: 24 }}>{t("eyebrow")}</div>
          <h2 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(60px, 12vw, 180px)", fontWeight: 700, lineHeight: 0.82, letterSpacing: "-0.05em", textTransform: "uppercase", color: "#f5f1e8" }}>
            {t("headline1")}<br /><span style={{ color: "var(--accent)" }}>{t("headline2")}</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 80, alignItems: "start" }}>
          {/* Form */}
          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {[
              { key: "name",  label: t("nameLabel"),    placeholder: t("namePlaceholder"),    type: "text" },
              { key: "email", label: t("emailLabel"),   placeholder: t("emailPlaceholder"),   type: "email" },
            ].map(({ key, label, placeholder, type }) => (
              <div key={key}>
                <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8a857a", marginBottom: 8 }}>{label}</div>
                <input type={type} required placeholder={placeholder} value={form[key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })} style={{ ...inputBase }}
                  onFocus={(e) => (e.currentTarget.style.borderBottomColor = "var(--accent)")}
                  onBlur={(e) => (e.currentTarget.style.borderBottomColor = "#f5f1e8")} />
              </div>
            ))}
            <div>
              <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8a857a", marginBottom: 8 }}>{t("messageLabel")}</div>
              <textarea required rows={5} placeholder={t("messagePlaceholder")} value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                style={{ ...inputBase, resize: "none", display: "block" }}
                onFocus={(e) => (e.currentTarget.style.borderBottomColor = "var(--accent)")}
                onBlur={(e) => (e.currentTarget.style.borderBottomColor = "#f5f1e8")} />
            </div>
            <button type="submit" disabled={status === "sending" || status === "sent"}
              style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 13, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#0a0a0a", background: status === "sent" ? "#4ade80" : "var(--accent)", border: "none", padding: "18px 36px", alignSelf: "flex-start", opacity: status === "sending" ? 0.7 : 1, transition: "background 0.2s", display: "flex", alignItems: "center", gap: 10 }}>
              {status === "sent" ? t("sent") : status === "sending" ? <><span style={{ width: 14, height: 14, border: "2px solid rgba(10,10,10,0.3)", borderTopColor: "#0a0a0a", borderRadius: "50%", display: "inline-block", animation: "spin 0.7s linear infinite" }} />{t("sending")}</> : t("submit")}
            </button>
          </motion.form>

          {/* Social */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <p style={{ fontSize: 18, lineHeight: 1.5, color: "#8a857a", marginBottom: 48, maxWidth: 480 }}>{t("bio")}</p>
            <div style={{ borderTop: "4px solid #f5f1e8", borderBottom: "4px solid #f5f1e8", display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
              {SOCIAL_LINKS.map((s, i) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{ padding: "28px 24px", borderRight: i % 2 === 0 ? "2px solid #f5f1e8" : "none", borderBottom: i < 2 ? "2px solid #f5f1e8" : "none", display: "flex", flexDirection: "column", gap: 12, textDecoration: "none", background: "#0a0a0a", transition: "background 0.15s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#15140f")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#0a0a0a")}>
                  <span style={{ color: "var(--accent)" }}><SocialIcon icon={s.icon} /></span>
                  <div>
                    <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 700, marginBottom: 4 }}>—— {s.label}</div>
                    <div style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: 20, fontWeight: 700, color: "#f5f1e8", letterSpacing: "-0.01em" }}>{s.handle}</div>
                  </div>
                </a>
              ))}
            </div>
            <div style={{ marginTop: 32, display: "flex", alignItems: "center", gap: 12, fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "#f5f1e8" }}>
              <span style={{ width: 10, height: 10, background: "#4ade80", display: "inline-block", borderRadius: "50%", boxShadow: "0 0 8px #4ade80" }} />
              {t("available")}
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}

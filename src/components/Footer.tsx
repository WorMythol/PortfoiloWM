"use client";
import { useTranslations } from "next-intl";
export default function Footer() {
  const t = useTranslations("footer");
  return (
    <footer
      style={{
        borderTop: "4px solid #f5f1e8",
        padding: "32px 40px",
        background: "#0a0a0a",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: 13,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#f5f1e8",
        }}
      >
        <span style={{ display: "inline-block", width: 10, height: 10, background: "var(--accent)" }} />
        WorMythol
      </div>
      <div
        style={{
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: 11,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#8a857a",
        }}
      >
        © {new Date().getFullYear()} — {t("copyright")}
      </div>
      <a
        href="#hero"
        style={{
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: 11,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#8a857a",
          textDecoration: "none",
          transition: "color 0.15s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#8a857a")}
      >
        {t("toTop")}
      </a>
    </footer>
  );
}

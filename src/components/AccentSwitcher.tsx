"use client";
import { useTranslations } from "next-intl";
import { ACCENTS, useAccent } from "@/contexts/AccentContext";

export default function AccentSwitcher() {
  const { accent, setAccent } = useAccent();
  const t = useTranslations("accent");

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: 10,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#8a857a",
          whiteSpace: "nowrap",
        }}
      >
        {t("label")}
      </span>
      <div style={{ display: "flex", gap: 4 }}>
        {ACCENTS.map((a) => (
          <button
            key={a.value}
            title={a.label}
            onClick={() => setAccent(a.value)}
            style={{
              width: 16,
              height: 16,
              background: a.value,
              border: accent === a.value ? "2px solid #f5f1e8" : "2px solid transparent",
              padding: 0,
              transition: "transform 0.15s, border-color 0.15s",
              transform: accent === a.value ? "scale(1.25)" : "scale(1)",
            }}
            onMouseEnter={(e) => {
              if (accent !== a.value) e.currentTarget.style.transform = "scale(1.15)";
            }}
            onMouseLeave={(e) => {
              if (accent !== a.value) e.currentTarget.style.transform = "scale(1)";
            }}
            aria-label={`Set accent to ${a.label}`}
          />
        ))}
      </div>
    </div>
  );
}

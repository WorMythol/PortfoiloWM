"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import AccentSwitcher from "./AccentSwitcher";

export default function Navbar() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const LINKS = [
    { label: t("work"),    href: "#portfolio" },
    { label: t("about"),   href: "#about" },
    { label: t("process"), href: "#process" },
    { label: t("contact"), href: "#contact" },
  ];

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled ? "rgba(10,10,10,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: scrolled ? "2px solid #f5f1e8" : "none",
        transition: "all 0.3s",
      }}
    >
      <div
        style={{
          maxWidth: 1600,
          margin: "0 auto",
          padding: "0 40px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        {/* Logo */}
        <a href="#hero" style={{ display: "flex", alignItems: "center", gap: 14, textDecoration: "none", flexShrink: 0 }}>
          <span style={{ display: "inline-block", width: 12, height: 12, background: "var(--accent)", flexShrink: 0 }} />
          <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 14, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#f5f1e8" }}>
            WorMythol
          </span>
        </a>

        {/* Desktop links + switcher */}
        <div className="hidden md:flex" style={{ alignItems: "center", gap: 32, flex: 1, justifyContent: "flex-end" }}>
          {/* Accent switcher */}
          <AccentSwitcher />

          <div style={{ width: "1px", height: 20, background: "#f5f1e8", opacity: 0.2 }} />

          {LINKS.map((l) => (
            <a
              key={l.href} href={l.href}
              style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "#8a857a", textDecoration: "none", transition: "color 0.15s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f5f1e8")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#8a857a")}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#0a0a0a", background: "var(--accent)", padding: "8px 18px", textDecoration: "none", transition: "opacity 0.15s" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            {t("hire")}
          </a>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden"
          style={{ color: "#f5f1e8", background: "none", border: "none", padding: 4, cursor: "none" }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ background: "#0a0a0a", borderTop: "2px solid #f5f1e8", overflow: "hidden" }}
          >
            <div style={{ padding: "24px 40px", display: "flex", flexDirection: "column", gap: 20 }}>
              {LINKS.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                  style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 14, letterSpacing: "0.14em", textTransform: "uppercase", color: "#f5f1e8", textDecoration: "none" }}>
                  {l.label}
                </a>
              ))}
              <div style={{ paddingTop: 12, borderTop: "1px solid #f5f1e820" }}>
                <AccentSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

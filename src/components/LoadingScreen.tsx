"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(id);
          setTimeout(() => setVisible(false), 300);
          return 100;
        }
        return Math.min(100, p + Math.random() * 14 + 2);
      });
    }, 70);
    return () => clearInterval(id);
  }, []);

  const pct = Math.min(Math.round(progress), 100);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            background: "#0a0a0a",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 40,
          }}
        >
          {/* Logo wordmark */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontSize: "clamp(40px, 8vw, 80px)",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              color: "#f5f1e8",
            }}
          >
            Wor<span style={{ color: "var(--accent)" }}>Mythol</span>
          </motion.div>

          {/* Progress bar + counter */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, width: 240 }}>
            <div
              style={{
                width: "100%",
                height: 3,
                background: "#15140f",
                border: "1px solid #f5f1e8",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <motion.div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "var(--accent)",
                  width: `${pct}%`,
                }}
                transition={{ ease: "easeOut" }}
              />
            </div>
            <div
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: 12,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#8a857a",
              }}
            >
              {String(pct).padStart(3, "0")} / 100
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

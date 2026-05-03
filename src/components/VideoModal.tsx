"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface Props {
  url: string;
  title: string;
  onClose: () => void;
}

export default function VideoModal({ url, title, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const isLocal = url.endsWith(".mp4") || url.endsWith(".webm") || url.endsWith(".ogg");

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: "fixed", inset: 0, zIndex: 300,
          background: "rgba(0,0,0,0.85)",
          backdropFilter: "blur(8px)",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: 16,
        }}
      >
        <motion.div
          initial={{ scale: 0.88, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.88, opacity: 0 }}
          transition={{ type: "spring", stiffness: 320, damping: 28 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            position: "relative", width: "100%", maxWidth: 900,
            background: "#0a0a0a", border: "2px solid #f5f1e8", overflow: "hidden",
          }}
        >
          {/* Header */}
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "14px 20px", borderBottom: "2px solid #f5f1e8",
          }}>
            <span style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "#f5f1e8",
            }}>
              {title}
            </span>
            <button
              onClick={onClose}
              style={{ background: "none", border: "none", color: "#8a857a", cursor: "pointer", display: "flex", padding: 4 }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#8a857a")}
            >
              <X size={18} />
            </button>
          </div>

          {/* Video */}
          <div style={{ aspectRatio: "16 / 9" }}>
            {isLocal ? (
              <video
                src={url}
                controls
                autoPlay
                style={{ width: "100%", height: "100%", display: "block", background: "#000" }}
              />
            ) : (
              <iframe
                src={`${url}?autoplay=1`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ width: "100%", height: "100%", border: "none" }}
              />
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

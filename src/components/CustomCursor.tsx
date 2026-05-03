"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos]       = useState({ x: 0, y: 0 });
  const [trail, setTrail]   = useState({ x: 0, y: 0 });
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const el = e.target as HTMLElement | null;
      setHovering(el?.closest("a,button,[role='button'],input,textarea,label") !== null);
    };
    const onDown = () => setClicking(true);
    const onUp   = () => setClicking(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup",   onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup",   onUp);
    };
  }, []);

  useEffect(() => {
    const id = setTimeout(() => setTrail(pos), 70);
    return () => clearTimeout(id);
  }, [pos]);

  return (
    <>
      {/* Outer square ring */}
      <motion.div
        style={{
          pointerEvents: "none", position: "fixed", zIndex: 9999,
          border: `2px solid ${hovering ? "var(--accent)" : "#f5f1e8"}`,
          top: 0, left: 0,
        }}
        animate={{
          x: trail.x - 18, y: trail.y - 18,
          width:  hovering ? 44 : 36,
          height: hovering ? 44 : 36,
          opacity: hovering ? 1 : 0.6,
        }}
        transition={{ type: "spring", stiffness: 220, damping: 28, mass: 0.4 }}
      />
      {/* Center dot */}
      <motion.div
        style={{
          pointerEvents: "none", position: "fixed", zIndex: 9999,
          background: "var(--accent)", top: 0, left: 0, width: 6, height: 6,
        }}
        animate={{
          x: pos.x - 3, y: pos.y - 3,
          scale: clicking ? 0.4 : hovering ? 1.6 : 1,
        }}
        transition={{ type: "spring", stiffness: 700, damping: 32 }}
      />
    </>
  );
}

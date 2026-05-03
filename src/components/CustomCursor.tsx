"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const down = () => setClicking(true);
    const up = () => setClicking(false);
    const check = (e: MouseEvent) => {
      setHovering((e.target as HTMLElement).closest("a,button,[role='button'],input,textarea") !== null);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mousemove", check);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousemove", check);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, []);

  useEffect(() => {
    const id = setTimeout(() => setTrail(pos), 70);
    return () => clearTimeout(id);
  }, [pos]);

  return (
    <>
      {/* Outer square ring — brutalist */}
      <motion.div
        style={{
          pointerEvents: "none",
          position: "fixed",
          zIndex: 9999,
          border: `2px solid ${hovering ? "var(--accent)" : "#f5f1e8"}`,
          top: 0,
          left: 0,
        }}
        animate={{
          x: trail.x - 18,
          y: trail.y - 18,
          width: hovering ? 44 : 36,
          height: hovering ? 44 : 36,
          opacity: hovering ? 1 : 0.6,
        }}
        transition={{ type: "spring", stiffness: 220, damping: 28, mass: 0.4 }}
      />
      {/* Center dot */}
      <motion.div
        style={{
          pointerEvents: "none",
          position: "fixed",
          zIndex: 9999,
          background: "var(--accent)",
          top: 0,
          left: 0,
          width: 6,
          height: 6,
        }}
        animate={{
          x: pos.x - 3,
          y: pos.y - 3,
          scale: clicking ? 0.4 : hovering ? 1.6 : 1,
        }}
        transition={{ type: "spring", stiffness: 700, damping: 32 }}
      />
    </>
  );
}

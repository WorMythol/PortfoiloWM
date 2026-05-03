"use client";
import { createContext, useContext, useState, useEffect } from "react";

export const ACCENTS = [
  { value: "#8000FF", label: "Violet" },
  { value: "#ff5b1f", label: "Orange" },
  { value: "#ffd60a", label: "Yellow" },
  { value: "#5ad7ff", label: "Cyan" },
  { value: "#ff4dd2", label: "Magenta" },
  { value: "#4ade80", label: "Green" },
];

const DEFAULT_ACCENT = "#8000FF";

interface AccentCtx {
  accent: string;
  setAccent: (v: string) => void;
}

const Ctx = createContext<AccentCtx>({ accent: DEFAULT_ACCENT, setAccent: () => {} });

export function useAccent() {
  return useContext(Ctx);
}

function applyAccent(v: string) {
  document.documentElement.style.setProperty("--accent", v);
  const r = parseInt(v.slice(1, 3), 16);
  const g = parseInt(v.slice(3, 5), 16);
  const b = parseInt(v.slice(5, 7), 16);
  document.documentElement.style.setProperty("--accent-rgb", `${r}, ${g}, ${b}`);
}

export default function AccentProvider({ children }: { children: React.ReactNode }) {
  const [accent, setAccentState] = useState(DEFAULT_ACCENT);

  const setAccent = (v: string) => {
    setAccentState(v);
    applyAccent(v);
  };

  // Apply default CSS variables on first mount
  useEffect(() => {
    applyAccent(DEFAULT_ACCENT);
  }, []);

  return <Ctx.Provider value={{ accent, setAccent }}>{children}</Ctx.Provider>;
}

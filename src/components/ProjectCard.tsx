"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useTranslations } from "next-intl";
import type { Project } from "@/lib/data";
import VideoModal from "./VideoModal";
import PlaceholderImage from "./PlaceholderImage";

interface Props {
  project: Project;
  index: number;
}

function Thumbnail({ project, hovered }: { project: Project; hovered: boolean }) {
  const isVideo = project.thumbnail.endsWith(".mp4");
  const isImage = project.thumbnail.match(/\.(png|jpe?g|webp|gif|svg)$/i);

  if (isVideo) {
    return (
      <video
        src={project.thumbnail}
        autoPlay
        muted
        loop
        playsInline
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
    );
  }

  if (isImage) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={project.thumbnail}
        alt={project.title}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s", transform: hovered ? "scale(1.04)" : "scale(1)" }}
      />
    );
  }

  return <PlaceholderImage category={project.category} />;
}

export default function ProjectCard({ project, index }: Props) {
  const t = useTranslations("portfolio");
  const [modal, setModal] = useState(false);
  const [hovered, setHovered] = useState(false);

  const hasVideo = !!project.videoUrl;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.4, delay: index * 0.06 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          border: `2px solid ${hovered ? "var(--accent)" : "#f5f1e8"}`,
          background: "#0a0a0a",
          display: "flex",
          flexDirection: "column",
          transition: "border-color 0.2s",
        }}
      >
        {/* Thumbnail */}
        <div style={{ position: "relative", aspectRatio: "16 / 10", overflow: "hidden" }}>
          <Thumbnail project={project} hovered={hovered} />

          {hasVideo && (
            <button
              onClick={() => setModal(true)}
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(10,10,10,0.45)",
                opacity: hovered ? 1 : 0,
                transition: "opacity 0.2s",
                border: "none",
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  width: 56,
                  height: 56,
                  background: "var(--accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transform: hovered ? "scale(1.05)" : "scale(0.9)",
                  transition: "transform 0.2s",
                }}
              >
                <Play size={20} fill="#0a0a0a" color="#0a0a0a" style={{ marginLeft: 2 }} />
              </span>
            </button>
          )}
        </div>

        {/* Content */}
        <div style={{ padding: "24px 24px 20px", flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
          <div
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: 11,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--accent)",
            }}
          >
            {String(index + 1).padStart(2, "0")} — {project.category}
          </div>

          <h3
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontSize: "clamp(18px, 2vw, 24px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              color: "#f5f1e8",
              lineHeight: 1.05,
            }}
          >
            {project.title}
          </h3>

          <p style={{ fontSize: 15, lineHeight: 1.45, color: "#8a857a", flex: 1 }}>
            {project.description}
          </p>

          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: 10,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#8a857a",
                  border: "1px solid #8a857a",
                  padding: "3px 8px",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {hasVideo && (
            <button
              onClick={() => setModal(true)}
              style={{
                marginTop: 4,
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--accent)",
                background: "none",
                border: "none",
                padding: 0,
                textAlign: "left",
                display: "flex",
                alignItems: "center",
                gap: 8,
                cursor: "pointer",
              }}
            >
              {t("watchVideo")}
            </button>
          )}
        </div>
      </motion.div>

      {modal && project.videoUrl && (
        <VideoModal url={project.videoUrl} title={project.title} onClose={() => setModal(false)} />
      )}
    </>
  );
}

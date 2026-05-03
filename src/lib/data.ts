export const SOCIAL_LINKS = [
  { label: "Telegram", href: "https://t.me/yourhandle",        icon: "telegram", handle: "@yourhandle" },
  { label: "Discord",  href: "https://discord.gg/yourserver",   icon: "discord",  handle: "yourhandle" },
  { label: "GitHub",   href: "https://github.com/WorMythol",    icon: "github",   handle: "github.com/WorMythol" },
  { label: "YouTube",  href: "https://youtube.com/@yourhandle", icon: "youtube",  handle: "@yourhandle" },
];

export const SKILLS = [
  { name: "Blockbench",    level: 95 },
  { name: "Tailwind",      level: 92 },
  { name: "Figma",         level: 90 },
  { name: "Blender",       level: 90 },
  { name: "Next.js",       level: 88 },
  { name: "Photoshop",     level: 85 },
  { name: "Bootstrap",     level: 78 },
  { name: "After Effects", level: 75 },
];

export const TOOLS = [
  { name: "Blender",       icon: "🎬" },
  { name: "Blockbench",    icon: "🟩" },
  { name: "Photoshop",     icon: "🎨" },
  { name: "Illustrator",   icon: "✏️" },
  { name: "After Effects", icon: "🌀" },
  { name: "Figma",         icon: "🖼️" },
  { name: "Next.js",       icon: "⚡" },
  { name: "VS Code",       icon: "💻" },
];

export type ProjectCategory =
  | "minecraft"
  | "blockbench"
  | "design"
  | "stickers"
  | "websites"
  | "branding"
  | "bots";

export interface Project {
  id: string;
  category: ProjectCategory;
  title: string;
  thumbnail: string;
  videoUrl?: string;
  tags: string[];
}

export const CATEGORIES: { id: ProjectCategory; label: string; emoji: string }[] = [
  { id: "minecraft",  label: "Minecraft Animations", emoji: "🎬" },
  { id: "blockbench", label: "3D / Blockbench",       emoji: "🟩" },
  { id: "design",     label: "Graphic Design",        emoji: "🎨" },
  { id: "stickers",   label: "Sticker Packs",         emoji: "🎭" },
  { id: "websites",   label: "Websites",              emoji: "🌐" },
  { id: "branding",   label: "Branding",              emoji: "✨" },
  { id: "bots",       label: "Bots",                  emoji: "🤖" },
];

export const PROJECTS: Project[] = [
  {
    id: "mc-1",
    category: "minecraft",
    title: "Epic PvP Montage",
    thumbnail: "/images/анимация1.mp4",
    videoUrl: "/images/анимация1.mp4",
    tags: ["Blender", "Minecraft", "Animation"],
  },
  {
    id: "mc-2",
    category: "minecraft",
    title: "Server Intro",
    thumbnail: "/images/анимация2.mp4",
    videoUrl: "/images/анимация2.mp4",
    tags: ["Blender", "Motion Graphics"],
  },
  {
    id: "mc-3",
    category: "minecraft",
    title: "Cinematic Trailer",
    thumbnail: "/images/анимация3.mp4",
    videoUrl: "/images/анимация3.mp4",
    tags: ["Blender", "Cycles", "Cinematic"],
  },
  {
    id: "bb-1",
    category: "blockbench",
    title: "Bird Model",
    thumbnail: "/images/моделька-птицы.png",
    tags: ["Blockbench", "3D", "Resource Pack"],
  },
  {
    id: "bb-2",
    category: "blockbench",
    title: "Bison Mob",
    thumbnail: "/images/моделька-бизона.png",
    tags: ["Blockbench", "Rigging", "Animation"],
  },
  {
    id: "bb-3",
    category: "blockbench",
    title: "Armor Set",
    thumbnail: "",
    tags: ["Blockbench", "Texturing"],
  },
  {
    id: "d-1",
    category: "design",
    title: "Server Banner Set",
    thumbnail: "/images/арт.jpg",
    tags: ["Photoshop", "Design", "Branding"],
  },
  {
    id: "d-2",
    category: "design",
    title: "Discord Server Art",
    thumbnail: "",
    tags: ["Illustrator", "Design"],
  },
  {
    id: "s-1",
    category: "stickers",
    title: "Gaming Emote Pack",
    thumbnail: "",
    tags: ["Illustrator", "Emotes", "Stickers"],
  },
  {
    id: "s-2",
    category: "stickers",
    title: "Minecraft Character Stickers",
    thumbnail: "",
    tags: ["Photoshop", "Stickers"],
  },
  {
    id: "w-1",
    category: "websites",
    title: "Server Landing",
    thumbnail: "/images/пример-сайта.png",
    tags: ["Next.js", "Tailwind", "React"],
  },
  {
    id: "w-2",
    category: "websites",
    title: "Creator Portfolio",
    thumbnail: "",
    tags: ["Next.js", "Framer Motion"],
  },
  {
    id: "br-1",
    category: "branding",
    title: "PixelForge Studio",
    thumbnail: "",
    tags: ["Illustrator", "Branding", "Logo"],
  },
  {
    id: "br-2",
    category: "branding",
    title: "StreamKit Identity",
    thumbnail: "",
    tags: ["Figma", "Branding"],
  },
  {
    id: "bot-1",
    category: "bots",
    title: "Server Companion",
    thumbnail: "",
    tags: ["Node.js", "TypeScript", "Discord"],
  },
  {
    id: "bot-2",
    category: "bots",
    title: "Community Hub",
    thumbnail: "/images/тг-бот.png",
    tags: ["Python", "Aiogram", "Telegram"],
  },
  {
    id: "bot-3",
    category: "bots",
    title: "Stats Bridge",
    thumbnail: "",
    tags: ["Node.js", "Discord", "Telegram"],
  },
];

export const SOCIAL_LINKS = [
  { label: "Telegram",  href: "https://t.me/yourhandle",          icon: "telegram", handle: "@yourhandle" },
  { label: "Discord",   href: "https://discord.gg/yourserver",     icon: "discord",  handle: "yourhandle" },
  { label: "GitHub",    href: "https://github.com/WorMythol",      icon: "github",   handle: "github.com/WorMythol" },
  { label: "YouTube",   href: "https://youtube.com/@yourhandle",   icon: "youtube",  handle: "@yourhandle" },
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

export const TESTIMONIALS = [
  {
    quote: "Сделал интро за неделю — попало в эстетику сервера лучше, чем мы её сами понимали.",
    author: "Админ MC-сервера",
    role: "FreKuro",
  },
  {
    quote: "Одна команда закрывает анимации, модели и брендинг. Это редкость и это удобно.",
    author: "Продюсер",
    role: "Инди-студия",
  },
  {
    quote: "Стикерпак до сих пор живёт в нашем Discord — спустя два года всё так же узнаваемо.",
    author: "Комьюнити-менеджер",
    role: "Twitch-канал",
  },
];

export const PROCESS_STEPS = [
  {
    n: "01",
    title: "Заявка",
    description: "Пишешь в Telegram или Discord — обсуждаем идею, масштаб и сроки. Без лишних форм.",
  },
  {
    n: "02",
    title: "Бриф",
    description: "Формируем ТЗ, считаем смету, фиксируем этапы. Обычно 1–2 дня.",
  },
  {
    n: "03",
    title: "Производство",
    description: "Команда работает параллельно. Правки включены на ключевых этапах.",
  },
  {
    n: "04",
    title: "Сдача",
    description: "Финальные файлы + исходники + права на использование. Всё чисто.",
  },
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
  description: string;
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
  { id: "bots",       label: "Боты",                  emoji: "🤖" },
];

export const PROJECTS: Project[] = [
  {
    id: "mc-1",
    category: "minecraft",
    title: "Epic PvP Montage",
    description: "Боевая постановка с custom-шейдерами и спецэффектами. Рендер 60s в Blender.",
    thumbnail: "/images/анимация1.mp4",
    videoUrl: "/images/анимация1.mp4",
    tags: ["Blender", "Minecraft", "Animation"],
  },
  {
    id: "mc-2",
    category: "minecraft",
    title: "Server Intro",
    description: "Логотип-реплейс с частицами и камерой через биом. Motion 12s.",
    thumbnail: "/images/анимация2.mp4",
    videoUrl: "/images/анимация2.mp4",
    tags: ["Blender", "Motion Graphics"],
  },
  {
    id: "mc-3",
    category: "minecraft",
    title: "Cinematic Trailer",
    description: "Атмосферный трейлер RPG-сервера; рендер ~36ч, 1920×1080 / 60fps.",
    thumbnail: "/images/анимация3.mp4",
    videoUrl: "/images/анимация3.mp4",
    tags: ["Blender", "Cycles", "Cinematic"],
  },
  {
    id: "bb-1",
    category: "blockbench",
    title: "Bird Model",
    description: "Анимированная птица с кастомными текстурами для ресурс-пака. Детальный риг.",
    thumbnail: "/images/моделька-птицы.png",
    tags: ["Blockbench", "3D", "Resource Pack"],
  },
  {
    id: "bb-2",
    category: "blockbench",
    title: "Bison Mob",
    description: "Кастомный моб-бизон с анимацией передвижения и атаки. Риг 24 кости.",
    thumbnail: "/images/моделька-бизона.png",
    tags: ["Blockbench", "Rigging", "Animation"],
  },
  {
    id: "bb-3",
    category: "blockbench",
    title: "Armor Set",
    description: "Полный сет брони с эффектом окисления. 4 части.",
    thumbnail: "",
    tags: ["Blockbench", "Texturing"],
  },
  {
    id: "d-1",
    category: "design",
    title: "Server Banner Set",
    description: "Баннеры, эмоуты и полный thumbnail-пак для Minecraft YouTube-канала.",
    thumbnail: "/images/арт.jpg",
    tags: ["Photoshop", "Design", "Branding"],
  },
  {
    id: "d-2",
    category: "design",
    title: "Discord Server Art",
    description: "Комплексное Discord-оформление: баннеры, иконки и набор эмоутов.",
    thumbnail: "",
    tags: ["Illustrator", "Design"],
  },
  {
    id: "s-1",
    category: "stickers",
    title: "Gaming Emote Pack",
    description: "30 кастомных Twitch/Discord эмоутов с единым стилем и палитрой.",
    thumbnail: "",
    tags: ["Illustrator", "Emotes", "Stickers"],
  },
  {
    id: "s-2",
    category: "stickers",
    title: "Minecraft Character Stickers",
    description: "Cute pixel-art стикерпак по мотивам Minecraft-персонажей.",
    thumbnail: "",
    tags: ["Photoshop", "Stickers"],
  },
  {
    id: "w-1",
    category: "websites",
    title: "Server Landing",
    description: "Лендинг для Minecraft-сервера с live player count. Next.js + Tailwind.",
    thumbnail: "/images/пример-сайта.png",
    tags: ["Next.js", "Tailwind", "React"],
  },
  {
    id: "w-2",
    category: "websites",
    title: "Creator Portfolio",
    description: "Минимал-портфолио для контент-криэйтора с витриной видео и анимациями.",
    thumbnail: "",
    tags: ["Next.js", "Framer Motion"],
  },
  {
    id: "br-1",
    category: "branding",
    title: "PixelForge Studio",
    description: "Полный фирстиль для геймдев-студии — логотип, палитра, типографика, гайдлайн 24 стр.",
    thumbnail: "",
    tags: ["Illustrator", "Branding", "Logo"],
  },
  {
    id: "br-2",
    category: "branding",
    title: "StreamKit Identity",
    description: "Стриминговые оверлеи и полный брендбук для контент-криэйтора.",
    thumbnail: "",
    tags: ["Figma", "Branding"],
  },
  {
    id: "bot-1",
    category: "bots",
    title: "Server Companion",
    description: "Discord-бот: модерация, роли по уровням, привязка Minecraft-аккаунта. Node.js + TS.",
    thumbnail: "",
    tags: ["Node.js", "TypeScript", "Discord"],
  },
  {
    id: "bot-2",
    category: "bots",
    title: "Community Hub",
    description: "Telegram-бот: анонсы, опросы, мини-игры и магазин внутренней валюты. Aiogram.",
    thumbnail: "/images/тг-бот.png",
    tags: ["Python", "Aiogram", "Telegram"],
  },
  {
    id: "bot-3",
    category: "bots",
    title: "Stats Bridge",
    description: "Двусторонний мост DC ↔ TG ↔ MC: чат, статистика игроков, события сервера.",
    thumbnail: "",
    tags: ["Node.js", "Discord", "Telegram"],
  },
];

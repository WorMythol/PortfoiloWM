/* ============================================================
   PORTFOLIO DECK — Brutalist Editorial
   Variant A: BLACK / accent (default)
   Variant B: NEWSPRINT cream / black ink + accent
   ============================================================ */

const TYPE_SCALE = {
  display: 200,   // huge editorial numerals
  headline: 120,  // big headlines
  title: 72,      // standard slide title
  subtitle: 44,
  body: 30,
  small: 24,
  micro: 20,
};

const SPACING = {
  paddingTop: 96,
  paddingBottom: 88,
  paddingX: 110,
  titleGap: 48,
  itemGap: 28,
  ruleThick: 4,
};

/* ---------- THEMES ---------- */
const THEMES = {
  ink: {
    name: "INK",
    bg: "#0a0a0a",
    fg: "#f5f1e8",
    muted: "#8a857a",
    rule: "#f5f1e8",
    paper: "#15140f",
    chip: "#1f1d18",
  },
  paper: {
    name: "PAPER",
    bg: "#ece6d6",   // newsprint cream
    fg: "#0a0a0a",
    muted: "#6b6757",
    rule: "#0a0a0a",
    paper: "#dcd4bf",
    chip: "#dcd4bf",
  },
};

/* ============================================================
   PRIMITIVES
   ============================================================ */

function Frame({ theme, accent, children, style, padX = SPACING.paddingX }) {
  const t = THEMES[theme];
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: t.bg,
        color: t.fg,
        fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif",
        padding: `${SPACING.paddingTop}px ${padX}px ${SPACING.paddingBottom}px`,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        ...style,
      }}
    >
      <SlideChrome theme={theme} accent={accent} />
      {children}
    </div>
  );
}

function SlideChrome({ theme, accent }) {
  const t = THEMES[theme];
  return (
    <>
      {/* Top hairline rule */}
      <div
        style={{
          position: "absolute",
          top: 48,
          left: SPACING.paddingX,
          right: SPACING.paddingX,
          height: 2,
          background: t.fg,
        }}
      />
      {/* Top-left: brand mark */}
      <div
        style={{
          position: "absolute",
          top: 16,
          left: SPACING.paddingX,
          fontSize: TYPE_SCALE.micro,
          fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: 2,
          textTransform: "uppercase",
          display: "flex",
          alignItems: "center",
          gap: 14,
        }}
      >
        <span style={{
          display: "inline-block",
          width: 14, height: 14,
          background: accent,
        }} />
        <span style={{ fontWeight: 700 }}>WorMythol</span>
        <span style={{ color: t.muted }}>— команда / портфолио 2026</span>
      </div>
      {/* Top-right: section marker, set by slide */}
      {/* Bottom-left: page no, set globally below by slide section */}
    </>
  );
}

function Eyebrow({ children, accent, theme }) {
  return (
    <div
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: TYPE_SCALE.small,
        letterSpacing: 3,
        textTransform: "uppercase",
        display: "flex",
        alignItems: "center",
        gap: 18,
        color: THEMES[theme].fg,
      }}
    >
      <span style={{
        display: "inline-block",
        width: 56, height: 4, background: accent,
      }} />
      <span>{children}</span>
    </div>
  );
}

function PageNo({ n, total, theme }) {
  const t = THEMES[theme];
  return (
    <div
      style={{
        position: "absolute",
        bottom: 48,
        left: SPACING.paddingX,
        right: SPACING.paddingX,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: TYPE_SCALE.micro,
        letterSpacing: 2,
        color: t.muted,
        textTransform: "uppercase",
      }}
    >
      <span>—— {String(n).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
      <span>WorMythol × Creator</span>
    </div>
  );
}

/* Placeholder image card — square or any aspect, brutalist */
function Placeholder({ label, tag, theme, accent, height = 360, ratio }) {
  const t = THEMES[theme];
  const wrapStyle = ratio
    ? { aspectRatio: ratio }
    : { height };
  return (
    <div
      style={{
        position: "relative",
        background: t.paper,
        border: `2px solid ${t.fg}`,
        overflow: "hidden",
        ...wrapStyle,
      }}
    >
      {/* Diagonal cross — classic placeholder */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      >
        <line x1="0" y1="0" x2="100" y2="100" stroke={t.muted} strokeWidth="0.3" />
        <line x1="100" y1="0" x2="0" y2="100" stroke={t.muted} strokeWidth="0.3" />
      </svg>
      {/* Tag */}
      {tag && (
        <div
          style={{
            position: "absolute",
            top: 14, left: 14,
            background: accent,
            color: "#0a0a0a",
            padding: "6px 10px",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 16,
            letterSpacing: 2,
            textTransform: "uppercase",
            fontWeight: 700,
          }}
        >
          {tag}
        </div>
      )}
      {/* Label */}
      <div
        style={{
          position: "absolute",
          bottom: 14, left: 14, right: 14,
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 16,
          letterSpacing: 1.5,
          textTransform: "uppercase",
          color: t.muted,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>{label}</span>
        <span>[ placeholder ]</span>
      </div>
    </div>
  );
}

/* ============================================================
   SLIDES
   ============================================================ */

const TOTAL = 15;

/* --- 01: Cover ----------------------------------------------------- */
function Cover({ theme, accent }) {
  const t = THEMES[theme];
  return (
    <Frame theme={theme} accent={accent}>
      {/* big number */}
      <div style={{
        position: "absolute",
        top: 96, right: SPACING.paddingX,
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: TYPE_SCALE.display,
        fontWeight: 700,
        lineHeight: 0.85,
        letterSpacing: -8,
      }}>
        <span style={{ color: accent }}>2026</span>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: TYPE_SCALE.small,
          letterSpacing: 4,
          textTransform: "uppercase",
          marginBottom: 32,
          color: t.muted,
        }}>
── Портфолио команды &nbsp;·&nbsp; Том I
        </div>
        <div style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 240,
          fontWeight: 700,
          lineHeight: 0.82,
          letterSpacing: -10,
          marginBottom: 32,
          textTransform: "uppercase",
        }}>
          Wor<span style={{ color: accent }}>Mythol</span><br/>
          студия.
        </div>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          borderTop: `4px solid ${t.fg}`,
          paddingTop: 24,
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: TYPE_SCALE.small,
          letterSpacing: 2,
          textTransform: "uppercase",
        }}>
          <div>
            <div style={{ color: t.muted, marginBottom: 6 }}>Команда</div>
            <div style={{ fontSize: TYPE_SCALE.subtitle, fontWeight: 700, letterSpacing: 0 }}>WorMythol · 6+ человек</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ color: t.muted, marginBottom: 6 }}>Дисциплины</div>
            <div style={{ fontSize: TYPE_SCALE.small, fontWeight: 600, letterSpacing: 1.5 }}>
              Анимация · 3D · Дизайн · Web · Боты
            </div>
          </div>
        </div>
      </div>

      <PageNo n={1} total={TOTAL} theme={theme} />
    </Frame>
  );
}

/* --- 02: About ---------------------------------------------------- */
function About({ theme, accent }) {
  const t = THEMES[theme];
  return (
    <Frame theme={theme} accent={accent}>
      <Eyebrow accent={accent} theme={theme}>§ 01 — О нас</Eyebrow>
      <div style={{ height: SPACING.titleGap }} />

      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 80, flex: 1 }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: TYPE_SCALE.headline,
            fontWeight: 700,
            lineHeight: 0.92,
            letterSpacing: -3,
            margin: 0,
            textTransform: "uppercase",
          }}>
            Делаем то,<br/>
            <span style={{ color: accent }}>во что играем.</span>
          </h1>
          <div style={{
            marginTop: 48,
            fontSize: TYPE_SCALE.body,
            lineHeight: 1.45,
            maxWidth: 640,
            textWrap: "pretty",
            color: t.fg,
          }}>
            WorMythol — команда из 6+ человек. Каждый закрывает свою дисциплину: анимация, 3D, графика, веб, брендинг. Не универсалы-одиночки — специалисты под одной крышей, работающие над проектами вместе.
          </div>
          <div style={{
            marginTop: 40,
            display: "flex",
            gap: 36,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: TYPE_SCALE.small,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: t.muted,
          }}>
            <span><b style={{ color: t.fg, fontSize: 40, marginRight: 8 }}>6+</b>в команде</span>
            <span><b style={{ color: t.fg, fontSize: 40, marginRight: 8 }}>5</b>дисциплин</span>
            <span><b style={{ color: t.fg, fontSize: 40, marginRight: 8 }}>40+</b>проектов</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <Placeholder label="team-photo.jpg" tag="01" theme={theme} accent={accent} ratio="4 / 5" />
        </div>
      </div>

      <PageNo n={2} total={TOTAL} theme={theme} />
    </Frame>
  );
}

/* --- 03: What I do ----------------------------------------------- */
function WhatIDo({ theme, accent }) {
  const t = THEMES[theme];
  const items = [
    { n: "A", title: "Анимируем", body: "Кинематографичные Minecraft-ролики и motion-графика на Blender." },
    { n: "B", title: "Моделируем", body: "Кастомные модели, оружие, мобы и текстуры в Blockbench." },
    { n: "C", title: "Рисуем", body: "Графика, баннеры, стикерпаки, эмоуты, артворк для Discord и Twitch." },
    { n: "D", title: "Кодим", body: "Лендинги и портфолио на Next.js — быстрые, аккуратные, со вкусом." },
    { n: "E", title: "Автоматизируем", body: "Боты для Discord и Telegram: модерация, игры, экономика, интеграции с серверами." },
  ];
  return (
    <Frame theme={theme} accent={accent}>
      <Eyebrow accent={accent} theme={theme}>§ 02 — Чем занимаемся</Eyebrow>
      <div style={{ height: SPACING.titleGap }} />
      <h1 style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: TYPE_SCALE.title,
        fontWeight: 700,
        lineHeight: 0.95,
        letterSpacing: -2,
        margin: 0,
        textTransform: "uppercase",
        maxWidth: 1400,
      }}>
        Пять дисциплин — <span style={{ color: accent }}>одна команда.</span>
      </h1>

      <div style={{
        marginTop: 64,
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: 0,
        borderTop: `2px solid ${t.fg}`,
        borderBottom: `2px solid ${t.fg}`,
      }}>
        {items.map((it, i) => (
          <div key={it.n} style={{
            padding: "40px 32px",
            borderRight: i < items.length - 1 ? `2px solid ${t.fg}` : "none",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            minHeight: 360,
          }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 72,
              fontWeight: 700,
              color: accent,
              lineHeight: 1,
            }}>
              {it.n}
            </div>
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: TYPE_SCALE.subtitle,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: -1,
            }}>{it.title}</div>
            <div style={{
              fontSize: TYPE_SCALE.body,
              lineHeight: 1.4,
              color: t.fg,
              textWrap: "pretty",
            }}>{it.body}</div>
          </div>
        ))}
      </div>

      <PageNo n={3} total={TOTAL} theme={theme} />
    </Frame>
  );
}

/* --- 04: Tools ---------------------------------------------------- */
function Tools({ theme, accent }) {
  const t = THEMES[theme];
  const tools = [
    ["Figma",       "ui / design",      90],
    ["Photoshop",   "graphics",         85],
    ["Blockbench",  "models / rigs",    95],
    ["Blender",     "3D / animation",   90],
    ["Next.js",     "web",              88],
    ["Bootstrap",   "css framework",    78],
    ["Tailwind",    "styling",          92],
  ];
  return (
    <Frame theme={theme} accent={accent}>
      <Eyebrow accent={accent} theme={theme}>§ 03 — Инструменты</Eyebrow>
      <div style={{ height: SPACING.titleGap }} />
      <h1 style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: TYPE_SCALE.title,
        fontWeight: 700,
        lineHeight: 0.95,
        letterSpacing: -2,
        margin: 0,
        textTransform: "uppercase",
      }}>
        Стек.
      </h1>

      <div style={{
        marginTop: 56,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        borderTop: `2px solid ${t.fg}`,
      }}>
        {tools.map(([name, role, lvl], i) => (
          <div key={name} style={{
            display: "grid",
            gridTemplateColumns: "60px 320px 1fr 80px",
            alignItems: "center",
            gap: 32,
            padding: "22px 0",
            borderBottom: `2px solid ${t.fg}`,
            fontFamily: "'JetBrains Mono', monospace",
          }}>
            <div style={{ color: t.muted, fontSize: TYPE_SCALE.small, letterSpacing: 2 }}>
              {String(i + 1).padStart(2, "0")}
            </div>
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 40,
              fontWeight: 700,
              letterSpacing: -1,
              textTransform: "uppercase",
            }}>{name}</div>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}>
              <div style={{ color: t.muted, fontSize: TYPE_SCALE.small, letterSpacing: 2, textTransform: "uppercase", width: 200 }}>
                {role}
              </div>
              <div style={{ flex: 1, height: 12, background: t.paper, position: "relative", border: `1px solid ${t.fg}` }}>
                <div style={{ position: "absolute", inset: 0, width: `${lvl}%`, background: accent }} />
              </div>
            </div>
            <div style={{
              fontSize: 28,
              fontWeight: 700,
              textAlign: "right",
              letterSpacing: 1,
            }}>{lvl}</div>
          </div>
        ))}
      </div>

      <PageNo n={4} total={TOTAL} theme={theme} />
    </Frame>
  );
}

/* --- 05: Categories overview (section divider) ------------------- */
function Categories({ theme, accent }) {
  const t = THEMES[theme];
  const cats = ["Minecraft Animations", "3D / Blockbench", "Graphic Design", "Sticker Packs", "Websites", "Branding", "Discord & Telegram боты"];
  return (
    <Frame theme={theme} accent={accent}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Eyebrow accent={accent} theme={theme}>§ 04 — Часть II / Работы</Eyebrow>
        <div style={{ height: 32 }} />
        <h1 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 180,
          fontWeight: 700,
          lineHeight: 0.85,
          letterSpacing: -8,
          margin: 0,
          textTransform: "uppercase",
        }}>
          Семь<br/>
          <span style={{ color: accent }}>категорий.</span>
        </h1>
        <div style={{
          marginTop: 64,
          display: "flex",
          flexWrap: "wrap",
          gap: "16px 32px",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: TYPE_SCALE.subtitle,
          letterSpacing: 1,
          textTransform: "uppercase",
        }}>
          {cats.map((c, i) => (
            <span key={c} style={{ display: "inline-flex", gap: 16, alignItems: "baseline" }}>
              <span style={{ color: accent, fontSize: 32 }}>★</span>
              <span style={{ fontWeight: 700 }}>{c}</span>
              {i < cats.length - 1 && <span style={{ color: t.muted, marginLeft: 16 }}>/</span>}
            </span>
          ))}
        </div>
      </div>
      <PageNo n={5} total={TOTAL} theme={theme} />
    </Frame>
  );
}

/* --- 06: Minecraft Animations ----------------------------------- */
function CaseGrid({ theme, accent, n, eyebrow, title, lede, items, ratio = "16 / 10" }) {
  const t = THEMES[theme];
  return (
    <Frame theme={theme} accent={accent}>
      <Eyebrow accent={accent} theme={theme}>{eyebrow}</Eyebrow>
      <div style={{ height: SPACING.titleGap }} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "end" }}>
        <h1 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: TYPE_SCALE.title,
          fontWeight: 700,
          lineHeight: 0.95,
          letterSpacing: -2,
          margin: 0,
          textTransform: "uppercase",
        }}>{title}</h1>
        <div style={{
          fontSize: TYPE_SCALE.body,
          lineHeight: 1.4,
          color: t.fg,
          maxWidth: 640,
          textWrap: "pretty",
        }}>{lede}</div>
      </div>

      <div style={{
        marginTop: 56,
        display: "grid",
        gridTemplateColumns: `repeat(${items.length}, 1fr)`,
        gap: 32,
        flex: 1,
      }}>
        {items.map((it, i) => (
          <div key={it.title} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Placeholder
              label={it.file}
              tag={it.tag}
              theme={theme}
              accent={accent}
              ratio={ratio}
            />
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: TYPE_SCALE.micro,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: t.muted,
            }}>{String(i + 1).padStart(2, "0")} — {it.meta}</div>
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 36,
              fontWeight: 700,
              letterSpacing: -1,
              lineHeight: 1.05,
              textTransform: "uppercase",
            }}>{it.title}</div>
            <div style={{
              fontSize: TYPE_SCALE.small,
              lineHeight: 1.4,
              color: t.fg,
              textWrap: "pretty",
            }}>{it.body}</div>
          </div>
        ))}
      </div>

      <PageNo n={n} total={TOTAL} theme={theme} />
    </Frame>
  );
}

function CaseMinecraft({ theme, accent }) {
  return (
    <CaseGrid
      theme={theme} accent={accent} n={6}
      eyebrow="§ 05 — Категория 01"
      title={<>Minecraft<br/>анимации.</>}
      lede="Кинематографичные ролики на Blender — кастомные шейдеры, рендеры и постпрод. Идут как интро серверов и YouTube-боевики."
      items={[
        { title: "Epic PvP Montage", file: "mc-pvp-01.mp4", tag: "video", meta: "Blender · 60s",  body: "Боевая постановка с custom-шейдерами и спецэффектами." },
        { title: "Server Intro",     file: "mc-intro-01.mp4", tag: "video", meta: "Motion · 12s",  body: "Логотип-реплейс с частицами и камерой через биом." },
        { title: "Cinematic Trailer",file: "mc-trail-01.mp4", tag: "video", meta: "Blender · 45s",  body: "Атмосферный трейлер RPG-сервера; рендер ~36ч." },
      ]}
    />
  );
}

/* --- 07: 3D / Blockbench ---------------------------------------- */
function Case3D({ theme, accent }) {
  return (
    <CaseGrid
      theme={theme} accent={accent} n={7}
      eyebrow="§ 06 — Категория 02"
      title={<>3D-модели<br/>Blockbench.</>}
      lede="Игровые модели, оптимизированные под ресурс-паки и кастомные сервера: оружие, мобы, броня."
      items={[
        { title: "Weapon Pack",  file: "bb-weap-01.bbmodel", tag: "model", meta: "12 моделей",   body: "Меч, топор, копьё с анимацией ударов." },
        { title: "Dragon Mob",   file: "bb-drag-01.bbmodel", tag: "rigged", meta: "rig · 24 кости", body: "Анимированный дракон с кастомными текстурами." },
        { title: "Armor Set",    file: "bb-armor-01.bbmodel", tag: "set",  meta: "4 части",      body: "Полный сет с эффектом окисления." },
      ]}
    />
  );
}

/* --- 08: Graphic Design + Stickers (combined) -------------------- */
function CaseGraphics({ theme, accent }) {
  const t = THEMES[theme];
  return (
    <Frame theme={theme} accent={accent}>
      <Eyebrow accent={accent} theme={theme}>§ 07 — Категория 03 / 04</Eyebrow>
      <div style={{ height: SPACING.titleGap }} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "end" }}>
        <h1 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: TYPE_SCALE.title,
          fontWeight: 700,
          lineHeight: 0.95,
          letterSpacing: -2,
          margin: 0,
          textTransform: "uppercase",
        }}>Графика<br/>и стикеры.</h1>
        <div style={{
          fontSize: TYPE_SCALE.body,
          lineHeight: 1.4,
          maxWidth: 640,
          textWrap: "pretty",
        }}>
          Баннеры, эмоуты, стикерпаки и Discord-арт: единый стиль, понятная палитра, всё в одной системе.
        </div>
      </div>

      <div style={{
        marginTop: 56,
        display: "grid",
        gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
        gridTemplateRows: "1fr 1fr",
        gap: 24,
        flex: 1,
      }}>
        <div style={{ gridRow: "1 / span 2" }}>
          <Placeholder label="banner-set.psd" tag="design" theme={theme} accent={accent} height="100%" />
        </div>
        <Placeholder label="emote-rage.png" tag="emote" theme={theme} accent={accent} height="100%" />
        <Placeholder label="emote-pog.png" tag="emote" theme={theme} accent={accent} height="100%" />
        <Placeholder label="emote-w.png" tag="emote" theme={theme} accent={accent} height="100%" />
        <Placeholder label="sticker-mc-01" tag="sticker" theme={theme} accent={accent} height="100%" />
        <Placeholder label="sticker-mc-02" tag="sticker" theme={theme} accent={accent} height="100%" />
        <Placeholder label="discord-art" tag="set" theme={theme} accent={accent} height="100%" />
      </div>

      <PageNo n={8} total={TOTAL} theme={theme} />
    </Frame>
  );
}

/* --- 09: Websites + Branding ------------------------------------ */
function CaseWeb({ theme, accent }) {
  return (
    <CaseGrid
      theme={theme} accent={accent} n={9}
      eyebrow="§ 08 — Категория 05 / 06"
      title={<>Сайты<br/>и брендинг.</>}
      lede="Лендинги для серверов, портфолио для креаторов и фирстиль с нуля: логотип, палитра, типографика."
      items={[
        { title: "Server Landing",  file: "web-srv-01",  tag: "site",   meta: "Next.js · Tailwind", body: "Лендинг для Minecraft-сервера с live player count." },
        { title: "Creator Portfolio",file: "web-port-01", tag: "site",   meta: "Framer Motion",      body: "Минимал-портфолио с витриной видео." },
        { title: "PixelForge ID",    file: "br-pix-01",   tag: "brand",  meta: "Полный фирстиль",    body: "Логотип, палитра, типографика, гайдлайн на 24 стр." },
      ]}
    />
  );
}

/* --- 09b: Bots --------------------------------------------------- */
function CaseBots({ theme, accent }) {
  return (
    <CaseGrid
      theme={theme} accent={accent} n={10}
      eyebrow="§ 09 — Категория 07"
      title={<>Discord и Telegram<br/>боты.</>}
      lede="Разрабатываем ботов для серверов и сообществ: модерация, мини-игры, экономика, интеграции с Minecraft и аналитика."
      items={[
        { title: "Server Companion", file: "bot-disc-01.js", tag: "discord", meta: "Node · TS",      body: "Модерация, роли по уровням, привязка Minecraft-аккаунта." },
        { title: "Community Hub",    file: "bot-tg-01.py",   tag: "telegram", meta: "Aiogram",        body: "Анонсы, опросы, мини-игры и магазин внутренней валюты." },
        { title: "Stats Bridge",     file: "bot-bridge-01",  tag: "bridge",   meta: "DC ↔ TG ↔ MC",  body: "Двусторонний мост: чат, статистика игроков, события сервера." },
      ]}
    />
  );
}

/* --- 10: Deep dive --------------------------------------------- */
function DeepDive({ theme, accent }) {
  const t = THEMES[theme];
  const stages = [
    ["01 / Бриф",       "Идея сервера, музыка, опорные кадры"],
    ["02 / Сторибoрд",  "Раскадровка, тайминги, фокус-точки"],
    ["03 / 3D-сцена",   "Сборка карты, постановка света и камер"],
    ["04 / Анимация",   "Кейфреймы, физика, движение камеры"],
    ["05 / Рендер",     "Cycles · 36ч · 1920×1080 / 60fps"],
    ["06 / Постпрод",   "Цвет, грейдинг, звук, монтаж"],
  ];
  return (
    <Frame theme={theme} accent={accent}>
      <Eyebrow accent={accent} theme={theme}>§ 09 — Кейс / Deep dive</Eyebrow>
      <div style={{ height: SPACING.titleGap }} />

      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 64, flex: 1 }}>
        {/* Left: hero */}
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ flex: 1 }}>
            <Placeholder label="epic-pvp-montage.mp4" tag="hero" theme={theme} accent={accent} height="100%" />
          </div>
          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 84,
            fontWeight: 700,
            lineHeight: 0.92,
            letterSpacing: -2,
            margin: 0,
            textTransform: "uppercase",
          }}>
            Epic PvP<br/>
            <span style={{ color: accent }}>Montage.</span>
          </h1>
          <div style={{
            display: "flex", gap: 32,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: TYPE_SCALE.small,
            letterSpacing: 2, textTransform: "uppercase", color: t.muted,
          }}>
            <span>Клиент <span style={{ color: t.fg }}>· сервер N</span></span>
            <span>Срок <span style={{ color: t.fg }}>· 3 недели</span></span>
            <span>Тулы <span style={{ color: t.fg }}>· Blender / AE</span></span>
          </div>
        </div>

        {/* Right: process */}
        <div style={{ display: "flex", flexDirection: "column", borderTop: `2px solid ${t.fg}` }}>
          {stages.map(([k, v], i) => (
            <div key={k} style={{
              display: "grid",
              gridTemplateColumns: "180px 1fr",
              alignItems: "baseline",
              gap: 24,
              padding: "22px 0",
              borderBottom: `2px solid ${t.fg}`,
            }}>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: TYPE_SCALE.small,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: accent,
                fontWeight: 700,
              }}>{k}</div>
              <div style={{
                fontSize: 28,
                lineHeight: 1.3,
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
              }}>{v}</div>
            </div>
          ))}
        </div>
      </div>

      <PageNo n={11} total={TOTAL} theme={theme} />
    </Frame>
  );
}

/* --- 11: Numbers ------------------------------------------------ */
function Numbers({ theme, accent }) {
  const t = THEMES[theme];
  const stats = [
    { n: "2.4M",  l: "просмотров на роликах" },
    { n: "40+",   l: "сданных проектов" },
    { n: "12",    l: "постоянных клиентов" },
    { n: "98%",   l: "повторных заказов" },
  ];
  return (
    <Frame theme={theme} accent={accent}>
      <Eyebrow accent={accent} theme={theme}>§ 10 — За плечами</Eyebrow>
      <div style={{ height: SPACING.titleGap }} />
      <h1 style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: TYPE_SCALE.title,
        fontWeight: 700,
        lineHeight: 0.95,
        letterSpacing: -2,
        margin: 0,
        textTransform: "uppercase",
      }}>Цифры.</h1>

      <div style={{
        marginTop: 64,
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        flex: 1,
        borderTop: `4px solid ${t.fg}`,
        borderBottom: `4px solid ${t.fg}`,
      }}>
        {stats.map((s, i) => (
          <div key={s.l} style={{
            padding: "48px 32px",
            borderRight: i < stats.length - 1 ? `2px solid ${t.fg}` : "none",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 20,
          }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: TYPE_SCALE.micro,
              letterSpacing: 2, textTransform: "uppercase",
              color: t.muted,
            }}>0{i + 1}</div>
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 180,
              fontWeight: 700,
              lineHeight: 0.85,
              letterSpacing: -6,
              color: i === 0 ? accent : t.fg,
            }}>{s.n}</div>
            <div style={{
              fontSize: TYPE_SCALE.small,
              lineHeight: 1.3,
              textTransform: "uppercase",
              letterSpacing: 1,
              color: t.fg,
              fontWeight: 600,
              fontFamily: "'JetBrains Mono', monospace",
            }}>{s.l}</div>
          </div>
        ))}
      </div>

      <PageNo n={12} total={TOTAL} theme={theme} />
    </Frame>
  );
}

/* --- 12: Testimonials -------------------------------------------- */
function Testimonials({ theme, accent }) {
  const t = THEMES[theme];
  const quotes = [
    {
      q: "Сделал интро за неделю — попало в эстетику сервера лучше, чем мы её сами понимали.",
      a: "Админ MC-сервера",
      role: "FreKuro",
    },
    {
      q: "Один автор закрывает анимации, модели и брендинг. Это редкость и это удобно.",
      a: "Продюсер",
      role: "Inde-студия",
    },
    {
      q: "Стикерпак до сих пор живёт в нашем Discord — спустя два года всё так же узнаваемо.",
      a: "Комьюнити-менеджер",
      role: "Twitch-канал",
    },
  ];
  return (
    <Frame theme={theme} accent={accent}>
      <Eyebrow accent={accent} theme={theme}>§ 11 — Голоса</Eyebrow>
      <div style={{ height: SPACING.titleGap }} />
      <h1 style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: TYPE_SCALE.title,
        fontWeight: 700,
        lineHeight: 0.95,
        letterSpacing: -2,
        margin: 0,
        textTransform: "uppercase",
      }}>Что говорят.</h1>

      <div style={{
        marginTop: 56,
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 32,
        flex: 1,
      }}>
        {quotes.map((q, i) => (
          <div key={i} style={{
            border: `2px solid ${t.fg}`,
            padding: "36px 32px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 28,
            background: t.bg,
            position: "relative",
          }}>
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 180,
              lineHeight: 0.6,
              color: accent,
              fontWeight: 700,
              height: 64,
            }}>“</div>
            <div style={{
              fontSize: 30,
              lineHeight: 1.3,
              flex: 1,
              fontWeight: 500,
              textWrap: "pretty",
            }}>{q.q}</div>
            <div style={{
              borderTop: `2px solid ${t.fg}`,
              paddingTop: 18,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: TYPE_SCALE.small,
              letterSpacing: 1.5,
              textTransform: "uppercase",
            }}>
              <div style={{ fontWeight: 700 }}>{q.a}</div>
              <div style={{ color: t.muted, marginTop: 4 }}>— {q.role}</div>
            </div>
          </div>
        ))}
      </div>

      <PageNo n={13} total={TOTAL} theme={theme} />
    </Frame>
  );
}

/* --- 13: Process / How to work with me -------------------------- */
function Process({ theme, accent }) {
  const t = THEMES[theme];
  const steps = [
    { n: "01", t: "Заявка",     d: "Пишешь в Telegram или Discord — обсуждаем идею и сроки." },
    { n: "02", t: "Бриф",       d: "Формируем ТЗ, считаем смету, фиксируем этапы. 1–2 дня." },
    { n: "03", t: "Производство", d: "Команда работает параллельно с правками на ключевых этапах." },
    { n: "04", t: "Сдача",      d: "Финальные файлы + исходники + права на использование." },
  ];
  return (
    <Frame theme={theme} accent={accent}>
      <Eyebrow accent={accent} theme={theme}>§ 12 — Как с нами работать</Eyebrow>
      <div style={{ height: SPACING.titleGap }} />
      <h1 style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: TYPE_SCALE.title,
        fontWeight: 700,
        lineHeight: 0.95,
        letterSpacing: -2,
        margin: 0,
        textTransform: "uppercase",
      }}>Процесс — <span style={{ color: accent }}>4 шага.</span></h1>

      <div style={{
        marginTop: 64,
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 0,
        flex: 1,
        borderTop: `2px solid ${t.fg}`,
      }}>
        {steps.map((s, i) => (
          <div key={s.n} style={{
            padding: "40px 32px",
            borderRight: i < steps.length - 1 ? `2px solid ${t.fg}` : "none",
            borderBottom: `2px solid ${t.fg}`,
            display: "flex",
            flexDirection: "column",
            gap: 28,
            position: "relative",
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 64, fontWeight: 700, color: accent, lineHeight: 1,
              }}>{s.n}</div>
              {i < steps.length - 1 && (
                <div style={{ flex: 1, height: 4, background: t.fg, marginLeft: 16 }} />
              )}
            </div>
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: TYPE_SCALE.subtitle,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: -1,
            }}>{s.t}</div>
            <div style={{
              fontSize: TYPE_SCALE.body,
              lineHeight: 1.4,
              textWrap: "pretty",
            }}>{s.d}</div>
          </div>
        ))}
      </div>

      <PageNo n={14} total={TOTAL} theme={theme} />
    </Frame>
  );
}

/* --- 14: Contacts / CTA ----------------------------------------- */
function Contacts({ theme, accent }) {
  const t = THEMES[theme];
  const links = [
    ["Telegram", "@yourhandle"],
    ["Discord",  "yourhandle"],
    ["GitHub",   "github.com/yourhandle"],
    ["YouTube",  "youtube.com/@yourhandle"],
  ];
  return (
    <Frame theme={theme} accent={accent}>
      <Eyebrow accent={accent} theme={theme}>§ 13 — Финал</Eyebrow>
      <div style={{ height: SPACING.titleGap }} />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <h1 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 200,
          fontWeight: 700,
          lineHeight: 0.85,
          letterSpacing: -10,
          margin: 0,
          textTransform: "uppercase",
        }}>
          Делаем<br/>
          <span style={{ color: accent }}>проект?</span>
        </h1>
        <div style={{
          marginTop: 56,
          fontSize: TYPE_SCALE.subtitle,
          lineHeight: 1.3,
          maxWidth: 1100,
          textWrap: "pretty",
        }}>
          Если близко по духу — пиши в любой удобный канал. Отвечу в течение суток.
        </div>

        <div style={{
          marginTop: 64,
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          borderTop: `4px solid ${t.fg}`,
          borderBottom: `4px solid ${t.fg}`,
        }}>
          {links.map(([k, v], i) => (
            <div key={k} style={{
              padding: "32px 24px",
              borderRight: i < links.length - 1 ? `2px solid ${t.fg}` : "none",
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: TYPE_SCALE.micro,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: accent,
                fontWeight: 700,
              }}>—— {k}</div>
              <div style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 32,
                fontWeight: 700,
                letterSpacing: -1,
                wordBreak: "break-all",
              }}>{v}</div>
            </div>
          ))}
        </div>
      </div>

      <PageNo n={15} total={TOTAL} theme={theme} />
    </Frame>
  );
}

/* ============================================================
   DECK ASSEMBLY
   ============================================================ */
const SLIDES = [
  { label: "01 Cover",        Comp: Cover },
  { label: "02 About",        Comp: About },
  { label: "03 What I Do",    Comp: WhatIDo },
  { label: "04 Tools",        Comp: Tools },
  { label: "05 Categories",   Comp: Categories },
  { label: "06 Minecraft",    Comp: CaseMinecraft },
  { label: "07 3D",           Comp: Case3D },
  { label: "08 Graphics",     Comp: CaseGraphics },
  { label: "09 Web/Brand",    Comp: CaseWeb },
  { label: "10 Bots",         Comp: CaseBots },
  { label: "11 Deep Dive",    Comp: DeepDive },
  { label: "12 Numbers",      Comp: Numbers },
  { label: "13 Testimonials", Comp: Testimonials },
  { label: "14 Process",      Comp: Process },
  { label: "15 Contacts",     Comp: Contacts },
];

Object.assign(window, {
  THEMES, TYPE_SCALE, SPACING, SLIDES,
});

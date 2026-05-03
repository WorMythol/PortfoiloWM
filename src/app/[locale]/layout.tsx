import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import AccentProvider from "@/contexts/AccentContext";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "WorMythol — Creative Studio",
    template: "%s | WorMythol",
  },
  description:
    "Minecraft animations, 3D models, graphic design, sticker packs, websites, branding and bots. WorMythol — 6+ specialists.",
  keywords: [
    "WorMythol", "minecraft animation", "blender", "blockbench", "3d models",
    "graphic design", "sticker pack", "web development", "branding", "discord bot",
  ],
  openGraph: {
    title: "WorMythol — Creative Studio",
    description: "Minecraft animations, 3D models, design, web & bots.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!(routing.locales as readonly string[]).includes(locale)) notFound();

  const messages = (await import(`../../../messages/${locale}.json`)).default;

  return (
    <html lang={locale} className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AccentProvider>
            {children}
          </AccentProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

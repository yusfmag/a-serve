import type { Metadata, Viewport } from "next";
import { Chakra_Petch, Inter } from "next/font/google";
import "./globals.css";

const display = Chakra_Petch({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Chlamba — Modern Practice Server",
  description:
    "Chlamba is a modern 1.21.11 Minecraft practice server: ranked kits, ELO divisions, a seasonal battle pass, daily rewards, unique cosmetics and perks for new players.",
};

export const viewport: Viewport = { themeColor: "#07080d" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}

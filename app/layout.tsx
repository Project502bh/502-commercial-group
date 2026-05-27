import type { Metadata } from "next";
import { Orbitron, Montserrat } from "next/font/google";
import { LangProvider } from "@/lib/LangContext";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "502 Commercial Group | Amos Aroma — Bahrain",
  description: "Exclusive distributor of Amos Aroma smart scent diffusers and 64 signature fragrance oils in Bahrain.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${orbitron.variable} ${montserrat.variable}`}>
      <body className="min-h-screen">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}

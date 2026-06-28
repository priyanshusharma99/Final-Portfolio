import type { Metadata } from "next";
import { Archivo_Black, IBM_Plex_Mono, Inter_Tight } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

const display = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

const sans = Inter_Tight({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Priyanshu | Full Stack Developer",
  description:
    "Portfolio of Priyanshu — a developer building web apps and AI tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${mono.variable} ${sans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Dancing_Script } from "next/font/google";
import "./globals.css";
import SakuraPetals from "@/components/SakuraPetals";
import MusicPlayer from "@/components/MusicPlayer";
import PerformanceOptimizer from "@/components/PerformanceOptimizer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hey Mate, Can We Start Again? | For Anshita",
  description: "A small space made with big love for someone unforgettable.",
  keywords: ["love", "friendship", "memories", "anshita"],
  authors: [{ name: "Someone who cares deeply" }],
  openGraph: {
    title: "Hey Mate, Can We Start Again?",
    description: "A small space made with big love for someone unforgettable.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💕</text></svg>" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Dancing+Script:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${inter.variable} ${dancingScript.variable} antialiased heart-cursor`}
      >
        <PerformanceOptimizer />
        <SakuraPetals />
        <MusicPlayer />
        {children}
      </body>
    </html>
  );
}

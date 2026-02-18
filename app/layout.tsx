import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Azurite - Automated Dropshipping Across Global Marketplaces",
  description:
    "Azurite automates cross-border dropshipping between AliExpress, Temu, Alibaba, and Amazon across 50+ countries. Scale your e-commerce business with intelligent trade automation.",
  keywords: [
    "dropshipping automation",
    "AliExpress",
    "Temu",
    "Alibaba",
    "Amazon",
    "cross-border trade",
    "e-commerce automation",
  ],
};

export const viewport: Viewport = {
  themeColor: "#0a1628",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

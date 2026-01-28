import type { Metadata } from "next";
import { clashDisplay } from "@/fonts/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Démo Next.js",
  description: "Démo Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${clashDisplay.variable} antialiased`}>{children}</body>
    </html>
  );
}

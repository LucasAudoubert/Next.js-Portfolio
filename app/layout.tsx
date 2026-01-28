import type { Metadata } from "next";
import { roboto400 } from "@/fonts/fonts";
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
      <body className={`${roboto400.variable} antialiased`}>{children}</body>
    </html>
  );
}

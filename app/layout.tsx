import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const neueMontreal = localFont({
  src: [
    { path: "../public/fonts/NeueMontreal-Regular.otf", weight: "400", style: "normal" },
    { path: "../public/fonts/NeueMontreal-Medium.otf", weight: "500", style: "normal" },
  ],
  variable: "--font-neue-montreal",
});

export const metadata: Metadata = {
  title: "Triuno | Inteligencia Digital & Escalabilidad",
  description: "Construimos arquitecturas tecnológicas sólidas, seguras y escalables para impulsar el crecimiento de empresas visionarias en la era digital.",
  keywords: ["Next.js", "Docker", "Desarrollo Web", "Arquitectura", "Seguridad"],
  openGraph: {
    title: "Triuno | Inteligencia Digital",
    description: "Desarrollo tecnológico escalable para tu empresa.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Triuno | Inteligencia Digital",
    description: "Desarrollo tecnológico escalable para tu empresa.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${neueMontreal.variable} ${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

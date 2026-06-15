import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BT Personal - Coxas e Glúteos PRO",
  description:
    "Programa especializado para mulheres que querem coxas e glúteos maiores e mais definidos em poucas semanas, com técnicas que quase ninguém ensina.",
  openGraph: {
    title: "BT Personal - Coxas e Glúteos PRO",
    description:
      "Programa especializado para mulheres que querem coxas e glúteos maiores e mais definidos em poucas semanas.",
    images: [
      "https://res.cloudinary.com/dhyeghmuy/image/upload/w_1200,q_90/v1770738834/hero-bruno_oeihj5.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

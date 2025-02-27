import type { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";
import "./globals.css";

const franklin = Libre_Franklin({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Nizzi Propiedades",
  description: "Venta inmobiliaria en Mar del Plata",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${franklin.className} bg-main-bg`}>{children}</body>
    </html>
  );
}

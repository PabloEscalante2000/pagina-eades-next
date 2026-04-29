import type { Metadata } from "next";
import { poppins, openSans, breathing } from "./fonts";
import Footer from "@/components/Footer"

import "./globals.css";
import PromoPopup from "@/components/PromoPopUp";
import MetaPixel from "@/components/MetaPixel";
import GoogleTagManager, { GoogleTagManagerNoScript } from "@/components/GoogleTagManager";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata : Metadata = {
  title: "EADES | Psicólogo en Lima | Centro Psicoterapéutico",
  description: "EADES – Centro psicológico en Lima especializado en terapia psicológica individual, de pareja y familiar. Psicoterapia Lima Perú con enfoque integral: ansiedad, depresión, estrés y más. Atención presencial y online. Agenda tu cita hoy.",
  icons: "/favicon.ico",
  keywords: [
    "psicólogo en Lima",
    "centro psicológico Lima",
    "terapia psicológica Lima",
    "psicoterapia Lima Perú",
    "terapia para ansiedad Lima",
    "psicólogo para depresión Lima",
    "terapia de pareja Lima",
    "ayuda psicológica estrés",
    "psicólogo económico en Lima",
    "terapia psicológica online Perú",
    "cómo tratar la ansiedad sin medicamentos",
    "psicólogo recomendado en Lima",
    "psicología",
    "psicoanálisis",
    "salud mental",
  ],
  openGraph: {
    title: "EADES | Psicólogo en Lima | Centro Psicoterapéutico",
    description: "EADES – Centro psicológico en Lima especializado en terapia psicológica individual, de pareja y familiar. Psicoterapia Lima Perú con enfoque integral: ansiedad, depresión, estrés y más. Atención presencial y online. Agenda tu cita hoy.",
    url: "https://grupoeades.org/",
    siteName: "EADES | Centro Psicoterapéutico",
    locale: "es_PE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${poppins.variable} ${openSans.variable} ${breathing.variable}`}>
      <head>
        <GoogleTagManager/>
        <GoogleAnalytics/>
      </head>
      <body>
        <GoogleTagManagerNoScript/>
        {children}
        <Footer/>
        {/* <PromoPopup/> */}
        <MetaPixel/>
      </body>
    </html>
  );
}

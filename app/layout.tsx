import type { Metadata } from "next";
import { poppins, openSans, breathing } from "./fonts";
import Footer from "@/components/Footer"

import "./globals.css";

export const metadata : Metadata = {
  title: "EADES | Centro Psicoterapéutico",
  description: "EADES – Consultorio psicológico especializado en salud mental: terapia individual, de pareja y familiar, neuropsicología, talleres y atención a niños, adolescentes y adultos. Descubre nuestro enfoque integral, sesión personalizada y reserva online. Agenda tu cita hoy.",
  icons: "/favicon.ico",
  keywords: ["psicología", "terapia", "blog", "psicoanálisis"],
  openGraph: {
    title: "EADES | Centro Psicoterapéutico",
    description: "EADES – Consultorio psicológico especializado en salud mental: terapia individual, de pareja y familiar, neuropsicología, talleres y atención a niños, adolescentes y adultos. Descubre nuestro enfoque integral, sesión personalizada y reserva online. Agenda tu cita hoy.",
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
      <body>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

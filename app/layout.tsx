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
  openGraph: {
    title: "EADES | Psicólogo en Lima | Centro Psicoterapéutico",
    description: "EADES – Centro psicológico en Lima especializado en terapia psicológica individual, de pareja y familiar. Psicoterapia Lima Perú con enfoque integral: ansiedad, depresión, estrés y más. Atención presencial y online. Agenda tu cita hoy.",
    url: "https://eadespsicoterapia.com/",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "MedicalOrganization"],
              "name": "EADES Centro Psicoterapéutico",
              "url": "https://eadespsicoterapia.com",
              "description": "Centro psicológico en Lima especializado en psicoterapia individual, de pareja y familiar. Más de 25 años de experiencia en salud mental.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "General Silva 570",
                "addressLocality": "Miraflores",
                "addressRegion": "Lima",
                "addressCountry": "PE"
              },
              "telephone": "+51930509438",
              "priceRange": "$$",
              "medicalSpecialty": "Psicología clínica y psicoterapia"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "César Escalante Sifuentes",
              "jobTitle": "Psicólogo Clínico y Psicoterapeuta",
              "worksFor": {
                "@type": "Organization",
                "name": "EADES Centro Psicoterapéutico"
              },
              "description": "Psicólogo clínico, psicoterapeuta psicoanalítico y magíster en neuropsicología con más de 25 años de experiencia en educación y salud mental.",
              "memberOf": [
                { "@type": "Organization", "name": "Sociedad Interamericana de Psicología (SIP)" },
                { "@type": "Organization", "name": "Centro Intercultural de Londres (LIC)" },
                { "@type": "Organization", "name": "Asociación Internacional de Terapeutas (IAOTH)" },
                { "@type": "Organization", "name": "Asociación Europea de Psicología Aplicada (EAAP)" },
                { "@type": "Organization", "name": "Sociedad Internacional de Neuropsicoanálisis" }
              ]
            })
          }}
        />
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

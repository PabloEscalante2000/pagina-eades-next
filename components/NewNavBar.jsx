"use client"

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { faBars, faCaretDown, faCaretUp, faXmark } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const testLinks = [
  { label: "Test de Ansiedad", href: "/test/ansiedad" },
  { label: "Test de Depresión", href: "/test/depresion" },
  { label: "Test de TLP", href: "/test/tlp" },
];

export default function NewNavBar() {
  const [visible, setVisible] = useState(false);
  const [testOpen, setTestOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile overlay */}
      <div
        className={`${visible ? "block" : "hidden"} fixed w-screen h-dvh top-0 left-0 bg-black bg-opacity-80 z-40`}
        onClick={() => setVisible(false)}
      />

      {/* Mobile side drawer */}
      <nav className={`fixed left-full pt-5 w-52 z-50 text-azul font-poppins transition-all ease-in-out bg-marroncito h-dvh duration-500 flex flex-col justify-between ${visible ? "top-0 -translate-x-full opacity-100" : "top-0 translate-x-0 opacity-0"}`}>
        <section>
          <div className="flex justify-end p-5">
            <button className="text-3xl" onClick={() => setVisible(false)} aria-label="Cerrar menú">
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
          <ul className="flex-col justify-stretch">
            {[
              { label: "INICIO", href: "/inicio" },
              { label: "QUIÉNES SOMOS", href: "/quienes-somos" },
              { label: "SERVICIOS", href: "/servicios" },
              { label: "EVALUACIONES", href: "/evaluaciones" },
            ].map(({ label, href }) => (
              <li key={href} className="flex justify-end items-center border-b-2 border-azul relative overflow-hidden" onClick={() => setVisible(false)}>
                <Link
                  className={`hover:bg-azul hover:text-marroncito transition-all duration-500 ease-in-out py-3 px-2 text-right w-full ${pathname === href ? "bg-azul text-marroncito" : "bg-marroncito text-azul"}`}
                  href={href}
                >
                  {label}
                </Link>
              </li>
            ))}

            {/* TEST accordion */}
            <li className="border-b-2 border-azul">
              <button
                aria-label="Desplegar test"
                className={`flex w-full justify-between items-center transition-all ease-in-out duration-500 ${testOpen ? "bg-azul text-marroncito" : "bg-marroncito text-azul"}`}
                onClick={() => setTestOpen(prev => !prev)}
              >
                <span className="block px-3 text-lg">
                  <FontAwesomeIcon icon={testOpen ? faCaretUp : faCaretDown} />
                </span>
                <Link
                  href="/test"
                  className={`py-3 px-2 text-right w-full ${pathname.startsWith("/test") ? "bg-azul text-marroncito" : "bg-marroncito text-azul"}`}
                  onClick={() => setVisible(false)}
                >
                  TEST
                </Link>
              </button>
              <div className={`transition-all ease-in-out duration-500 overflow-hidden ${testOpen ? "max-h-40" : "max-h-0"}`}>
                {testLinks.map(({ label, href }) => (
                  <div key={href} className="flex justify-end items-center border-t border-azul/30 overflow-hidden" onClick={() => setVisible(false)}>
                    <Link
                      className={`hover:bg-azul hover:text-marroncito transition-all duration-500 py-2.5 px-4 text-right w-full text-sm ${pathname === href ? "bg-azul text-marroncito" : "bg-marroncito text-azul"}`}
                      href={href}
                    >
                      {label}
                    </Link>
                  </div>
                ))}
              </div>
            </li>

            <li className="flex justify-end items-center border-b-2 border-azul relative overflow-hidden" onClick={() => setVisible(false)}>
              <Link
                className={`hover:bg-azul hover:text-marroncito transition-all duration-500 ease-in-out py-3 px-2 text-right w-full ${pathname === "/blog" ? "bg-azul text-marroncito" : "bg-marroncito text-azul"}`}
                href="/blog"
              >
                BLOG
              </Link>
            </li>
          </ul>
        </section>
        <section className="flex justify-center p-5">
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=51930509438&text=Buenas%2C%20estoy%20interesad%40%20en%20sus%20servicios%2C%20mi%20nombre%20es..."
            aria-label="WhatsApp"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2 rounded-full transition-all duration-300 w-full justify-center"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
            <span>WhatsApp</span>
          </a>
        </section>
      </nav>

      {/* Desktop header — relative z-30 creates a stacking context above the hero carousel (z-10) */}
      <header className="relative z-30 flex justify-between items-center gap-5 sm:px-10 px-5 font-poppins w-full bg-marroncito text-azul">
        <Link href="/inicio">
          <Image width={192} height={192} className="h-44 w-auto" src="/logo_eades.webp" alt="EADES" />
        </Link>
        <ul className="sm:flex justify-center items-center gap-6 hidden">
          {[
            { label: "INICIO", href: "/inicio" },
            { label: "QUIÉNES SOMOS", href: "/quienes-somos" },
            { label: "SERVICIOS", href: "/servicios" },
            { label: "EVALUACIONES", href: "/evaluaciones" },
          ].map(({ label, href }) => (
            <li key={href}>
              <Link
                className={`font-medium hover:text-azul/70 transition-colors duration-200 pb-0.5 ${pathname === href ? "border-b-2 border-azul" : ""}`}
                href={href}
              >
                {label}
              </Link>
            </li>
          ))}

          {/* TEST dropdown */}
          <li className="relative group">
            <Link
              href="/test"
              className={`flex items-center gap-1.5 font-medium hover:text-azul/70 transition-colors duration-200 pb-0.5 ${pathname.startsWith("/test") ? "border-b-2 border-azul" : ""}`}
            >
              TEST
              <FontAwesomeIcon
                icon={faCaretDown}
                className="text-xs opacity-60 transition-transform duration-200 group-hover:rotate-180"
              />
            </Link>

            {/* Dropdown panel — top-full sin gap para que el hover del grupo no se interrumpa.
                El pt-2 interno es transparente y actúa de puente visual entre el nav y el panel blanco. */}
            <ul className="absolute top-full left-1/2 -translate-x-1/2 pt-2 min-w-[200px] opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto transition-all duration-200 z-30">
              <div className="relative bg-white border border-celeste shadow-xl rounded-xl py-2">
              {/* Triangle caret */}
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white drop-shadow-sm" />
              {testLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`block px-5 py-2.5 font-open-sans text-sm transition-colors duration-150 rounded-lg mx-1 ${pathname === href ? "bg-celeste/40 text-azul font-bold" : "text-azul hover:bg-celeste/30"}`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              </div>
            </ul>
          </li>

          <li>
            <Link
              className={`font-medium hover:text-azul/70 transition-colors duration-200 pb-0.5 ${pathname === "/blog" ? "border-b-2 border-azul" : ""}`}
              href="/blog"
            >
              BLOG
            </Link>
          </li>

          <li>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=51930509438&text=Buenas%2C%20estoy%20interesad%40%20en%20sus%20servicios%2C%20mi%20nombre%20es..."
              aria-label="WhatsApp"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-full transition-all duration-300"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-lg" />
              <span>WhatsApp</span>
            </a>
          </li>
        </ul>

        <button className="cursor-pointer text-3xl sm:hidden block" aria-label="Abrir menú" onClick={() => setVisible(true)}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </header>
    </>
  );
}

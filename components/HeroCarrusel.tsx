"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

const slides = [
  {
    bg: "/assets/IMG_4924.jpg",
    text: "Psicoterapia para comprender lo que sientes y transformar tu experiencia.",
  },
  {
    bg: "/assets/bg-3.jpg",
    text: "Trabajamos la forma en que se organizan tus emociones, pensamientos y decisiones.",
  },
  {
    bg: "/assets/bg-tercero.jpg",
    text: "Psicoterapia enfocada a tratar problemas de pareja.",
  },
]

export default function HeroCarrusel() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <div className="w-full aspect-video relative max-h-[calc(100dvh-128px)] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          <Image
            src={slide.bg}
            alt=""
            fill
            className="object-cover object-center"
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-azul/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 gap-8">
            <h1 className="font-poppins font-bold text-white text-3xl sm:text-4xl lg:text-5xl max-w-3xl leading-tight drop-shadow-lg">
              {slide.text}
            </h1>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://api.whatsapp.com/send?phone=51930509438&text=Buenas%2C%20estoy%20interesad%40%20en%20sus%20servicios%2C%20mi%20nombre%20es..."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-marroncito text-azul font-poppins font-bold text-base sm:text-lg rounded transition-all duration-300 hover:bg-white"
              >
                Agenda tu primera sesión
              </a>
              <Link
                href="/servicios"
                className="px-6 py-3 border-2 border-white text-white font-poppins font-bold text-base sm:text-lg rounded transition-all duration-300 hover:bg-white hover:text-azul"
              >
                Conoce cómo trabajamos
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white text-2xl bg-black/30 hover:bg-black/50 transition-all duration-300 w-10 h-10 flex items-center justify-center rounded-full"
        aria-label="Anterior"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white text-2xl bg-black/30 hover:bg-black/50 transition-all duration-300 w-10 h-10 flex items-center justify-center rounded-full"
        aria-label="Siguiente"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${i === current ? "bg-white scale-125" : "bg-white/50"}`}
            aria-label={`Ir a slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

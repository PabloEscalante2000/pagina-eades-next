"use client"

import resTest from "../public/data/RespuestaTest.json";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const nivelConfig = {
  bajo: {
    label: "Síntomas Leves",
    bg: "bg-green-50",
    border: "border-green-300",
    text: "text-green-700",
    icon: "🌱",
  },
  medio: {
    label: "Síntomas Moderados",
    bg: "bg-yellow-50",
    border: "border-yellow-300",
    text: "text-yellow-700",
    icon: "⚠️",
  },
  alto: {
    label: "Síntomas Significativos",
    bg: "bg-red-50",
    border: "border-red-300",
    text: "text-red-700",
    icon: "❗",
  },
};

function TestResult({ tipo, nivel }) {
  const respuesta = resTest.find(e => e.tipo === tipo && e.nivel === nivel);
  const config = nivelConfig[nivel] || nivelConfig.medio;

  return (
    <div className="flex-1 flex items-center justify-center px-5 py-12">
      <div className="w-full max-w-2xl space-y-6">
        <div className="text-center">
          <h2 className="font-poppins font-bold text-azul text-3xl sm:text-4xl">Tu resultado</h2>
          <p className="font-open-sans text-azul/60 text-sm mt-1">Basado en tus respuestas</p>
        </div>

        {/* Level badge */}
        <div className={`rounded-2xl border-2 ${config.bg} ${config.border} p-5 flex items-center justify-center gap-3`}>
          <span className="text-2xl">{config.icon}</span>
          <span className={`font-poppins font-bold text-lg ${config.text}`}>
            {config.label}
          </span>
        </div>

        {/* Result text */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-celeste">
          <p className="font-open-sans text-azul text-base sm:text-lg leading-relaxed text-center">
            «{respuesta?.des}»
          </p>
        </div>

        {/* CTA */}
        <div className="bg-celeste/30 rounded-2xl p-6 border border-celeste">
          <p className="font-poppins font-bold text-azul text-center mb-4 text-sm">
            ¿Quieres hablar con un profesional?
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://api.whatsapp.com/send?phone=51930509438&text=Buenas%2C%20estoy%20interesad%40%20en%20sus%20servicios%2C%20mi%20nombre%20es..."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-poppins font-bold text-sm py-3.5 rounded-xl transition-all duration-300"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-lg" />
              Contactar por WhatsApp
            </a>
            <Link
              href="/test"
              className="flex-1 flex items-center justify-center gap-2 border-2 border-azul text-azul hover:bg-azul hover:text-white font-poppins font-bold text-sm py-3.5 rounded-xl transition-all duration-300"
            >
              <FontAwesomeIcon icon={faChevronLeft} className="text-sm" />
              Volver a los tests
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestResult;

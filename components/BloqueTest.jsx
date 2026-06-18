"use client"

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import TestResult from "./TestResult";
import NewNavBarLoader from "./NewNavBarLoader";

const tipoLabel = (tipo) => {
  if (tipo === "depresión") return "Depresión";
  if (tipo === "tlp") return "TLP";
  return "Ansiedad";
};

export default function BloqueTest({ test, tipo }) {
  const [position, setPosition] = useState(0);
  const [selections, setSelections] = useState({});
  const [nivel, setNivel] = useState("");
  const [end, setEnd] = useState(false);
  const [showError, setShowError] = useState(false);

  const currentSelections = selections[position] || [];
  const currentQ = test[position];
  const isLastQuestion = position === test.length - 1;
  const progressPct = Math.round((position / test.length) * 100);

  const toggleOption = (index) => {
    if (currentQ.tipo === "radio") {
      setSelections(prev => ({ ...prev, [position]: [index] }));
    } else {
      const current = selections[position] || [];
      const updated = current.includes(index)
        ? current.filter(i => i !== index)
        : [...current, index];
      setSelections(prev => ({ ...prev, [position]: updated }));
    }
    setShowError(false);
  };

  const isSelected = (index) => currentSelections.includes(index);

  const handleNext = () => {
    if (currentSelections.length === 0) { setShowError(true); return; }

    if (isLastQuestion) {
      let total = 0;
      for (let i = 0; i < test.length; i++) {
        const sel = selections[i] || [];
        const middle = (test[i].respuestas.length - 1) / 2;
        total += sel.reduce((sum, num) => sum + (num - middle), 0);
      }
      if (total > 3) setNivel("bajo");
      else if (total >= -3) setNivel("medio");
      else setNivel("alto");
      setEnd(true);
    } else {
      setPosition(p => p + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (position > 0) {
      setPosition(p => p - 1);
      setShowError(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (end) {
    return (
      <div className="min-h-dvh bg-marroncito flex flex-col">
        <NewNavBarLoader />
        <TestResult tipo={tipo} nivel={nivel} />
      </div>
    );
  }

  return (
    <div className="min-h-dvh bg-marroncito flex flex-col">
      <NewNavBarLoader />

      {/* Header band */}
      <div className="bg-azul text-white pt-8 pb-7 px-5 text-center">
        <p className="font-open-sans text-celeste/80 text-xs uppercase tracking-widest mb-2">
          Test psicológico
        </p>
        <h1 className="font-poppins font-bold text-2xl sm:text-3xl">
          Test de {tipoLabel(tipo)}
        </h1>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-celeste/40 h-1.5">
        <div
          className="bg-azul h-1.5 transition-all duration-500 ease-out"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      {/* Counter */}
      <div className="max-w-2xl mx-auto w-full px-5 pt-5 pb-1 flex justify-between text-azul/60 font-open-sans text-sm">
        <span>Pregunta {position + 1} de {test.length}</span>
        <span>{progressPct}% completado</span>
      </div>

      {/* Question + answers */}
      <div className="flex-1 px-5 py-4 flex flex-col items-center pb-12">
        <div className="w-full max-w-2xl">
          <h2 className="font-poppins font-bold text-azul text-xl sm:text-2xl leading-snug mb-2">
            {currentQ.titulo}
          </h2>
          <p className="font-open-sans text-sm text-azul/50 italic mb-6">
            {currentQ.tipo === "check"
              ? "Puedes marcar más de una opción"
              : "Selecciona la opción que más te representa"}
          </p>

          <div className="space-y-3">
            {currentQ.respuestas.map((respuesta, index) => (
              <button
                key={index}
                type="button"
                onClick={() => toggleOption(index)}
                className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-200 flex items-start gap-4 cursor-pointer ${
                  isSelected(index)
                    ? "border-azul bg-azul text-white shadow-md"
                    : "border-celeste bg-white text-azul hover:border-azul/50 hover:shadow-sm"
                }`}
              >
                {/* Custom radio/check indicator */}
                <span className={`mt-0.5 flex-none w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                  isSelected(index) ? "border-white" : "border-azul"
                }`}>
                  {isSelected(index) && (
                    <span className="w-2.5 h-2.5 rounded-full bg-white block" />
                  )}
                </span>
                <span className="font-open-sans text-base leading-relaxed">{respuesta}</span>
              </button>
            ))}
          </div>

          {showError && (
            <p className="mt-4 text-red-500 font-open-sans text-sm">
              ⚠ Selecciona al menos una opción para continuar.
            </p>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <button
              type="button"
              onClick={handlePrev}
              disabled={position === 0}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl border-2 border-azul font-poppins font-bold text-sm transition-all duration-200 ${
                position === 0
                  ? "opacity-30 cursor-not-allowed text-azul"
                  : "text-azul hover:bg-azul hover:text-white"
              }`}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
              Anterior
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-azul text-white font-poppins font-bold text-sm transition-all duration-200 hover:bg-azul/80 active:scale-95"
            >
              {isLastQuestion ? "Ver resultado" : "Siguiente"}
              {!isLastQuestion && <FontAwesomeIcon icon={faChevronRight} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

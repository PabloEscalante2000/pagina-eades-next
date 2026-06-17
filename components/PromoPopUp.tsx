"use client"

import { useState } from "react";
import { X, MessageCircle, Calendar, Clock, BookOpen } from "lucide-react";
import { Dialog, DialogOverlay, DialogPortal } from "@/components/ui/dialog";

const PromoPopup = () => {
  const [open, setOpen] = useState(true);
  const whatsappCurso = "https://api.whatsapp.com/send?phone=51939491875&text=Hola%2C%20quisiera%20inscribirme%20al%20programa%20M%C3%A1s%20all%C3%A1%20del%20Diagn%C3%B3stico";

  return (
    <Dialog open={open} onOpenChange={() => setOpen(false)}>
      <DialogPortal>
        <DialogOverlay className="bg-black/70" />
        <div className="fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%] w-[90vw] max-w-md">

          <button
            onClick={() => setOpen(false)}
            className="absolute -top-3 -right-3 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white text-gray-800 shadow-lg hover:bg-gray-100 transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="rounded-2xl overflow-hidden shadow-2xl animate-scale-in bg-white">
            <div className="bg-[#1B3A5C] px-6 pt-6 pb-4 text-white">
              <p className="font-poppins text-xs font-semibold uppercase tracking-widest text-[#C9A96E] mb-1">
                Programa de Formación · Pseres
              </p>
              <h2 className="font-poppins font-bold text-2xl leading-tight">
                Más allá del Diagnóstico
              </h2>
              <p className="font-open-sans text-sm text-white/75 mt-1">
                Neurociencias en el Aula
              </p>
            </div>

            <div className="px-6 py-4 space-y-3">
              <div className="flex items-center gap-3 text-[#1B3A5C]">
                <Calendar className="w-4 h-4 flex-none text-[#C9A96E]" />
                <span className="font-open-sans text-sm">
                  Inicio <strong>23 de junio 2026</strong> · martes y jueves 7:30–9:30 p.m.
                </span>
              </div>
              <div className="flex items-center gap-3 text-[#1B3A5C]">
                <Clock className="w-4 h-4 flex-none text-[#C9A96E]" />
                <span className="font-open-sans text-sm">
                  <strong>18 horas</strong> académicas · 4 módulos virtuales + clase presencial
                </span>
              </div>
              <div className="flex items-center gap-3 text-[#1B3A5C]">
                <BookOpen className="w-4 h-4 flex-none text-[#C9A96E]" />
                <span className="font-open-sans text-sm">
                  TDAH · TEA · Dislexia · Intervención pedagógica
                </span>
              </div>

              <div className="bg-[#F6F1E1] rounded-xl p-3 flex items-center justify-between mt-1">
                <div>
                  <p className="font-open-sans text-xs text-gray-500">Desde</p>
                  <p className="font-poppins font-bold text-2xl text-[#1B3A5C]">S/ 50</p>
                  <p className="font-open-sans text-xs text-gray-500">Pago en cuotas disponible</p>
                </div>
                <div className="text-right">
                  <p className="font-open-sans text-xs text-[#777743] font-semibold">Certificado</p>
                  <p className="font-open-sans text-xs text-[#777743]">internacional avalado</p>
                </div>
              </div>
            </div>

            <div className="px-6 pb-6">
              <a
                href={whatsappCurso}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold font-poppins rounded-full shadow-lg transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                <span>¡Inscríbete ahora!</span>
              </a>
              <a
                href="https://pseres.pe/landing/mas-alla-del-diagnostico/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center mt-2 font-open-sans text-xs text-[#1B3A5C] underline underline-offset-2 hover:opacity-70 transition-opacity"
              >
                Ver información completa del programa
              </a>
            </div>
          </div>

        </div>
      </DialogPortal>
    </Dialog>
  );
};

export default PromoPopup;

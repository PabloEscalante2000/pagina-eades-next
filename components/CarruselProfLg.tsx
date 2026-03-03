"use client"

import dataProfesional from '../public/data/psicologos.json';
import "swiper/css"
import "swiper/css/pagination"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';

export default function CarruselProfLg() {
  const swiperRef             = useRef<SwiperType | null>(null);
  const [isStart, setIsStart] = useState(true);
  const [isEnd,   setIsEnd]   = useState(false);

  return (
    <div className="relative w-full px-12">

      {/* Flecha izquierda */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        disabled={isStart}
        className="absolute left-0 top-[45%] -translate-y-1/2 z-10 w-11 h-11 rounded-full border-2 border-azul bg-celeste flex items-center justify-center text-azul transition-all duration-300 hover:bg-azul hover:text-marroncito disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Anterior"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      {/* Flecha derecha */}
      <button
        onClick={() => swiperRef.current?.slideNext()}
        disabled={isEnd}
        className="absolute right-0 top-[45%] -translate-y-1/2 z-10 w-11 h-11 rounded-full border-2 border-azul bg-celeste flex items-center justify-center text-azul transition-all duration-300 hover:bg-azul hover:text-marroncito disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Siguiente"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>

      <Swiper
        modules={[Pagination]}
        onSwiper={(swiper) => { swiperRef.current = swiper; }}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640:  { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => {
          setIsStart(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onInit={(swiper) => {
          setIsStart(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        className="team-swiper"
      >
        {dataProfesional.map((val, index) => (
          <SwiperSlide key={index} className="h-auto">
            <div className="bg-white rounded-2xl overflow-hidden border border-azul/10 shadow-sm h-full flex flex-col">
              <Image
                src={val.img_url}
                alt={val.nombre}
                width={400}
                height={400}
                className="w-full h-96 object-cover flex-none"
                style={{ objectPosition: val.obj_pos ?? "center top" }}
              />
              <div className="p-5 space-y-3 flex flex-col flex-1">
                <div>
                  <h3 className="font-poppins font-bold text-azul text-lg leading-tight">{val.nombre}</h3>
                  {val.cpp && (
                    <p className="font-open-sans text-xs text-azul/50 mt-0.5">{val.cpp}</p>
                  )}
                </div>
                <ul className="space-y-1.5">
                  {val.datos.map((e, i) => (
                    <li key={i} className="flex items-start gap-2 font-open-sans text-sm text-azul/80 leading-snug">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-azul flex-none shrink-0" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

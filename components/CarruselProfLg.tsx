"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import psicologos from "@/public/data/psicologos.json"
import { useState } from "react"
import Image from "next/image"

function CarruselProfSm() {

  const [psi, setPsi] = useState(0)

  //State derivado
  const psicologo = psicologos[psi]

  const nextPsi = () => {
    if (psi < psicologos.length - 1) {
      setPsi(prevPsi => prevPsi + 1)
    }
  }

  const backPsi = () => {
    if (psi > 0) {
      setPsi(prevPsi => prevPsi - 1)
    }
  }

  return (
    <div className="sm:block hidden">
      <section className={`bg-marroncito p-10`}>
        <h2 className="font-poppins mb-5! text-4xl! text-azul!">Conoce nuestro equipo de Psicoterapeutas</h2>
        <section className={"flex justify-center items-center gap-5"}>
          <span onClick={backPsi} className={`text-azul text-[32px] pb-5 ${psi <= 0 ? "text-gray-500 cursor-default" : ""} `}><FontAwesomeIcon icon={faArrowLeft} /></span>
          <section className={"psi-data"}>
            <Image width={300} height={300} src={psicologo.img_url} alt={psicologo.nombre} className={""} />
            <aside>
              <h3>{psicologo.nombre}</h3>
              <em>{psicologo?.cpp}</em>
              <ul>
                {psicologo.datos.map((e, index: number) => {
                  return (<li key={index}>{e}</li>)
                })}
              </ul>
              <a href="https://api.whatsapp.com/send?phone=51930509438&text=Buenas%2C%20estoy%20interesad%40%20en%20sus%20servicios%2C%20mi%20nombre%20es..." target="_blank" className="border-2 border-azul px-3 py-1 bg-azul text-marroncito transition-all ease-in-out font-poppins hover:bg-marroncito hover:text-azul duration-500">Agenda tu cita</a>
            </aside>
          </section>
          <span onClick={nextPsi} className={`text-azul text-[32px] pb-5 ${psi >= psicologos.length - 1 ? "text-gray-500 cursor-default" : ""} `}><FontAwesomeIcon icon={faArrowRight} /></span>
        </section>
        <aside className={"clave-psi"}>
          {psicologos.map((e, index: number) => {
            return (
              <div key={index} onClick={() => setPsi(index)} className={psi === index ? "active-cl" : "def-cl"}></div>)
          })}
        </aside>
      </section>
    </div>
  )
}

export default CarruselProfSm;
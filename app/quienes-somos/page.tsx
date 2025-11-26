"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import  psicologos  from "@/public/data/psicologos.json"
import { useState } from "react"
import NewNavBar from "@/components/NewNavBar"
import CarruselProfSm from "@/components/CarruselProfSm"
import Image from "next/image"
import styles from "./page.module.css"

function QuienesSomosPage() {

  const [psi, setPsi] = useState(0)

  const psiImageClasses = [
    styles.cesarImg,
    styles.mateoImg,
    styles.mayteImg,
    styles.melissaImg,
    styles.natyImg
  ];

  //State derivado
  const psicologo = psicologos[psi]

  const nextPsi = ()=>{
    if(psi < psicologos.length - 1){
      setPsi(prevPsi => prevPsi + 1)
    }
  }

  const backPsi = ()=>{
    if(psi > 0){
      setPsi(prevPsi => prevPsi - 1)
    }
  }

  return (
    <div className="bg-marroncito overflow-x-hidden">
      <NewNavBar/>
      <section className="flex w-full justify-stretch items-stretch aspect-video lg:flex-row flex-col" style={{
        height:"calc(100dvh - 128px)"
      }}>
        <div className="relative basis-7/12 bg-red-50 md:min-h-[400px] min-h-64">
          <Image width={1900} height={1900} src="/quienes_somos_port.jpg" className="absolute inset-0 size-full object-cover" alt="EADES" style={{
            objectPosition:"50% 35%"
          }}/>
        </div>
        <div className="basis-5/12 flex justify-center items-center ">
          <div className="md:p-20 sm:p-10 p-5 sm:space-y-10 space-y-5">
            <h2 className="font-poppins text-azul font-bold xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl">Centro <br/> Psicoterapéutico <br/> EADES</h2>
            <p className="font-open-sans text-azul xl:text-2xl lg:text-xl md:text-lg">
            Espacio de bienestar emocional, trabajamos desde un enfoque integral que considera tus pensamientos, emociones, cuerpo y relaciones para ayudarte a encontrar equilibrio en todas las áreas de tu vida.
            </p>
          </div>
        </div>
      </section>
      <div className="sm:block hidden">
        <section className={`bg-marroncito p-10`}>
          <h2 className="font-poppins mb-5! text-4xl! text-azul!">Conoce nuestro equipo de Psicoterapeutas</h2>
          <section className={ styles["qs-cont-psi"]}>
            <span onClick={backPsi} className={psi <= 0 ? styles.unactive : ""}><FontAwesomeIcon icon={faArrowLeft}/></span>
            <section className={styles["psi-data"]}>
              <Image width={300} height={300} src={psicologo.img_url} alt={psicologo.nombre} className={psiImageClasses[psi] || styles.cesarImg} />
              <aside>
                <h3>{psicologo.nombre}</h3>
                <em>{psicologo?.cpp}</em>
                <ul>
                  {psicologo.datos.map((e,index:number)=>{
                    return(<li key={index}>{e}</li>)
                  })}
                </ul>
                <a href="https://api.whatsapp.com/send?phone=51930509438&text=Buenas%2C%20estoy%20interesad%40%20en%20sus%20servicios%2C%20mi%20nombre%20es..." target="_blank" className="border-2 border-azul px-3 py-1 bg-azul text-marroncito transition-all ease-in-out font-poppins hover:bg-marroncito hover:text-azul duration-500">Agenda tu cita</a>
              </aside>
            </section>
            <span onClick={nextPsi} className={psi >= psicologos.length - 1 ? styles.unactive : ""}><FontAwesomeIcon icon={faArrowRight}/></span>
          </section>
          <aside className={styles["clave-psi"]}>
            {psicologos.map((e,index:number)=>{
              return (
              <div key={index} onClick={()=>setPsi(index)} className={psi===index ? styles["active-cl"] : styles["def-cl"]}></div>)
            })}
          </aside>
        </section>
      </div>
      <div className="sm:hidden block w-screen py-5">
        <h2 className="px-5 font-poppins font-bold text-2xl text-center text-azul">Conoce nuestro equipo de Psicoterapeutas</h2>
        <CarruselProfSm/>
      </div>
      <section className={styles["sec-qs"]}>
        <h2 className="">Alianzas con nuestro Centro Psicoterapéutico</h2>
        <section>
          <Image width={100} height={100} src={"/educare.webp"} alt="Educare convenio EADES"/>
          
          <Image width={100} height={100} src={"/esc_convenio_eades.webp"} alt="ESC Escucha Soluciona Crece convenio EADES"/>
          <Image width={100} height={100} src={"/ilumina_convenio_eades.webp"} alt="Ilumina convenio EADES"/>
        </section>
      </section>
     
    </div>
  )
}

export default QuienesSomosPage

"use client"

import { faWhatsapp, faSquareFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { faBars, faCaretDown, faCaretUp, faXmark } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
// Asumo que tienes un contexto llamado useUbiContext, lo dejo como estaba.
// import { useUbiContext } from "@/context/UbiContext"; 

export default function NewNavBar() {
  const router = useRouter();
  // const { actualizarUbi } = useUbiContext(); // Descomenta esto si estás usando el contexto
  const [visible, setVisible] = useState(false);
  const [listaDespegable, setListaDespegable] = useState(0);
  const pathname = usePathname();

  const servLista = [
    {
      nombre:"NIÑOS",
      id:"bs-1"
    },
    {
      nombre:"JÓVENES",
      id:"bs-2"
    },
    {
      nombre:"ADULTOS",
      id:"bs-3"
    },
    {
      nombre:"ADULTOS MAYORES",
      id:"bs-4"
    },
    {
      nombre:"FORMACIÓN PSICOTERAPÉUTICA",
      id:"bes-5"
    },
    {
      nombre:"TALLERES Y EVENTOS",
      id:"bes-6"
    }
  ];

  // Función de marcador de posición si no estás usando el contexto
  const actualizarUbi = (id) => {
    console.log("Navegando a servicios con la sección:", id);
  };

  return (
    <>
    <div className={`${visible ? "block":"hidden"} fixed w-screen h-dvh top-0 left-0 bg-black bg-opacity-80 z-40`} onClick={() => setVisible(false)}></div>
    <nav className={`fixed left-full pt-5 w-52 z-50 text-azul font-poppins transition-all ease-in-out bg-marroncito h-dvh duration-500 flex flex-col justify-between ${visible ? "top-0 -translate-x-full opacity-100":"top-0 translate-x-0 opacity-0"}`}>
      <section>
      <div className="flex justify-end p-5">
        <button className="text-3xl" onClick={() => setVisible(false)} aria-label="cancel">
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      <ul className="flex-col justify-stretch ">
        <li className="flex justify-end items-center border-y-2 border-azul relative overflow-hidden" onClick={() => setVisible(false)}>
          <Link className={`hover:bg-azul hover:text-marroncito  transition-all duration-500 ease-in-out relative py-3 px-2 text-right w-full ${pathname === "/inicio" ? "bg-azul text-marroncito":"bg-marroncito text-azul"}`} href={"/inicio"}>INICIO</Link>
        </li>
        <li className="flex justify-end items-center border-b-2 border-azul relative overflow-hidden" onClick={() => setVisible(false)}>
          <Link className={`hover:bg-azul hover:text-marroncito transition-all duration-500 ease-in-out relative py-3 px-2 text-right w-full ${pathname === "/quienes-somos" ? "bg-azul text-marroncito":"bg-marroncito text-azul"}`} href={"/quienes-somos"}>QUIÉNES SOMOS</Link>
        </li>
        <li className="flex justify-end items-center border-b-2 border-azul relative overflow-hidden">
          <div className={`hover:bg-azul hover:text-marroncito transition-all duration-500 ease-in-out relative text-right w-full flex justify-between`}>
            <button aria-label="desplegar" onClick={() => setListaDespegable((prev) => prev === 2 ? 0 : 2)} className="px-3 py-3 text-lg">
            {listaDespegable === 2 ? (
              <FontAwesomeIcon icon={faCaretUp} />
            ):(
              <FontAwesomeIcon icon={faCaretDown} />
            )}
            </button>
            <Link href={"/servicios"} className={`px-2 py-3 w-full ${pathname === "/servicios" ? "bg-azul text-marroncito":"bg-marroncito text-azul"}`} onClick={() => setVisible(false)}>SERVICIOS</Link>
          </div>
        </li>
        <div className={`transition-all ease-in-out duration-500 ${listaDespegable === 2 ? "h-[325px]":"h-0"} overflow-hidden `}>
          {servLista.map((val,i) => (
            <li key={i} className="flex justify-end items-center border-b-2 border-azul relative overflow-hidden">
            <button aria-label="nombre servicios" className={`hover:bg-azul hover:text-marroncito transition-all duration-500 ease-in-out relative py-3 px-2 text-right w-full bg-marroncito text-azul`} onClick={() => {
              actualizarUbi(val.id)
              router.push("/servicios")
              setVisible(false)
            }}>{val.nombre}</button>
          </li>
          ))}
        </div>
        <button aria-label="desplegar nav" className={`flex w-full justify-between items-center border-b-2 border-azul relative overflow-hidden transition-all ease-in-out duration-500 ${listaDespegable === 1 ? "bg-azul text-marroncito":""}`} onClick={() => setListaDespegable((prev) => prev === 1 ? 0 : 1)}>
          <span className="block px-3 text-lg">
            {listaDespegable === 1 ? (
              <FontAwesomeIcon icon={faCaretUp} />
            ):(
              <FontAwesomeIcon icon={faCaretDown} />
            )}
          </span>
          <Link href={"/test"} className={`py-3 px-2 text-right w-full ${pathname.startsWith("/test") ? "bg-azul text-marroncito":"bg-marroncito text-azul"}`} onClick={() => setVisible(false)}>TEST</Link>
        </button>
        <div className={`transition-all ease-in-out duration-500 ${listaDespegable === 1 ? "h-[150px]":"h-0"} overflow-hidden `}>
          <li className="flex justify-end items-center border-b-2 border-azul relative overflow-hidden" onClick={() => setVisible(false)}>
            <Link className={`hover:bg-azul hover:text-marroncito transition-all duration-500 ease-in-out relative py-3 px-2 text-right w-full ${pathname === "/test/test-de-ansiedad" ? "bg-azul text-marroncito":"bg-marroncito text-azul"}`} href={"/test/ansiedad"}>TEST DE ANSIEDAD</Link>
          </li>
          <li className="flex justify-end items-center border-b-2 border-azul relative overflow-hidden" onClick={() => setVisible(false)}>
            <Link className={`hover:bg-azul hover:text-marroncito transition-all duration-500 ease-in-out relative py-3 px-2 text-right w-full ${pathname === "/test/test-de-depresion" ? "bg-azul text-marroncito":"bg-marroncito text-azul"}`} href={"/test/depresion"}>TEST DE DEPRESIÓN</Link>
          </li>
          <li className="flex justify-end items-center border-b-2 border-azul relative overflow-hidden" onClick={() => setVisible(false)}>
            <Link className={`hover:bg-azul hover:text-marroncito  transition-all duration-500 ease-in-out relative py-3 px-2 text-right w-full ${pathname === "/test/tlp" ? "bg-azul text-marroncito":"bg-marroncito text-azul"}`} href={"/test/test-de-transtorno-de-la-personalidad-tlp"}>TEST DE TLP</Link>
          </li>
        </div>
        <li className="flex justify-end items-center border-b-2 border-azul relative overflow-hidden" onClick={() => setVisible(false)}>
          <Link className={`hover:bg-azul hover:text-marroncito transition-all duration-500 ease-in-out relative py-3 px-2 text-right w-full ${pathname === "/blog" ? "bg-azul text-marroncito":"bg-marroncito text-azul"}`} href={"/blog"}>BLOG</Link>
        </li>
      </ul>
      </section>
      <section className="flex justify-end gap-2 text-xl p-5 ">
        <a 
          target="_blank" 
          href="https://api.whatsapp.com/send?phone=51930509438&text=Buenas%2C%20estoy%20interesad%40%20en%20sus%20servicios%2C%20mi%20nombre%20es..." 
          aria-label="Whatsapp"
          className="hover:text-celeste transition-all duration-500"
        > 
          <FontAwesomeIcon icon={faWhatsapp}/> 
        </a>
        <a
          target="_blank" href="https://www.facebook.com/EADESPeru" aria-label="Facebook"
          className="hover:text-celeste transition-all duration-500"
        >
          <FontAwesomeIcon icon={faSquareFacebook} />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/eadespsicoterapia/"
          aria-label="Instagram"
          className="hover:text-celeste transition-all duration-500"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          target="_blank"
          href="https://www.youtube.com/@eadespsicoterapia"
          aria-label="Youtube"
          className="hover:text-celeste transition-all duration-500"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </section>
    </nav>
    <header className="flex justify-between items-center gap-5 sm:px-10 px-5  font-poppins w-full bg-marroncito text-azul">
      <Image width={128} height={128} className="h-32 w-auto" src={"/logo_eades.webp"} alt="EADES"/>
      <ul className="sm:flex justify-center items-center gap-5 hidden">
        <li>
          <Link className={`${pathname === "/inicio" ? "border-b-2 border-azul":""}`} href={"/inicio"}>INICIO</Link>
        </li>
        <li>
          <Link className={`${pathname === "/quienes-somos" ? "border-b-2 border-azul":""}`} href={"/quienes-somos"}>QUIÉNES SOMOS</Link>
        </li>
        <li className="relative group">
          <Link className={`${pathname === "/servicios" ? "border-b-2 border-azul":""}`} href={"/servicios"}>SERVICIOS</Link>
          <ul className="absolute bg-marroncito p-0 space-y-3 transition-all duration-300 opacity-0 z-0 h-0 overflow-hidden group-hover:z-10 group-hover:opacity-100 group-hover:h-fit group-hover:p-3">
            {servLista.map(service => (
              <li key={service.id}>
                <button aria-label={service.nombre.toLowerCase()} onClick={() => {
                  actualizarUbi(service.id)
                  router.push("/servicios")
                }}>{service.nombre}</button>
              </li>
            ))}
          </ul>
        </li>
        <li className="relative group">
          <Link className={`${pathname.startsWith("/test") ? "border-b-2 border-azul":""}`} href={"/test"}>TEST</Link>
          <ul className="absolute bg-marroncito p-0 space-y-3 transition-all duration-300 opacity-0 z-0 h-0 overflow-hidden group-hover:z-10 group-hover:opacity-100 group-hover:h-fit group-hover:p-3">
            <li>
              <Link href={"/test/ansiedad"}>Test de Ansiedad</Link>
            </li>
            <li>
              <Link href={"/test/depresion"}>Test de Depresión</Link>
            </li>
            <li>
              <Link href={"/test/tlp"}>Test de TLP </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link className={`${pathname === "/blog" ? "border-b-2 border-azul":""}`} href={"/blog"}>BLOG</Link>
        </li>
        <li className="flex justify-between items-center gap-2">
          <a 
            target="_blank" 
            href="https://api.whatsapp.com/send?phone=51930509438&text=Buenas%2C%20estoy%20interesad%40%20en%20sus%20servicios%2C%20mi%20nombre%20es..." 
            aria-label="Whatsapp"
            className="hover:text-celeste transition-all duration-500"
          > 
            <FontAwesomeIcon icon={faWhatsapp}/> 
          </a>
          <a
            target="_blank" href="https://www.facebook.com/EADESPeru" aria-label="Facebook"
            className="hover:text-celeste transition-all duration-500"
          >
            <FontAwesomeIcon icon={faSquareFacebook} />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/eadespsicoterapia/"
            aria-label="Instagram"
            className="hover:text-celeste transition-all duration-500"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/@eadespsicoterapia"
            aria-label="Youtube"
            className="hover:text-celeste transition-all duration-500"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </li>
      </ul>
      <button className="cursor-pointer text-3xl sm:hidden block" aria-label="Nav EADES" onClick={() => setVisible(true)}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </header>
    </>
  )
}

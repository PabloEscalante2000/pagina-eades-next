"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import NewNavBar from "@/components/NewNavBar"
import Link from "next/link"
import Image from "next/image"
import { faQuestion } from "@fortawesome/free-solid-svg-icons"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CardTest = ({icon, text, span, link}: {icon: any, text: string, span: string, link: string}) => {
    return (
        <Link className="flex justify-between items-center gap-5 px-5 py-3 rounded-xl bg-white text-azul w-fit transition-all ease-in-out duration-500 hover:scale-95 hover:shadow-none border-2 border-celeste shadow-sm" href={link}>
            <div className="text-white bg-azul size-12 rounded-full flex justify-center items-center text-4xl flex-none">
                <FontAwesomeIcon icon={icon} />
            </div>
            <div>
                <p className="font-poppins font-bold">
                    {text}
                </p>
                <p className="opacity-50 font-poppins">
                    {span}
                </p>
            </div>
        </Link>
    )
}

function TestHome() {
  return (
    <div className="bg-marroncito">
        <NewNavBar />
        <main className="w-full md:flex hidden overflow-hidden" style={{
            height:"calc(100dvh - 128px)"
        }}>
            <div className="basis-1/2 relative flex-none">
                <Image src="/nuevo_eades_4.jpeg" alt="test EADES" fill priority className="object-cover object-center"/>
            </div>
            <div className="lg:p-20 p-10 flex justify-center items-center">
                <div className="space-y-5 text-azul">
                    <h2 className="font-poppins font-bold xl:text-5xl lg:text-4xl md:text-3xl">Conoce nuestros <br/> <span className=""> test de calidad </span></h2>
                    <p className="font-open-sans xl:text-2xl lg:text-xl md:text-lg">Hechos por psicólogos especializados que te dirán los malestares que padeces además de un consejo para lidiar con tus problemas. </p>
                    <CardTest icon={faQuestion} text="¿Tienes Ansiedad?" span={"Test de Ansiedad"} link={'/test/test-de-ansiedad'} />
                    <CardTest icon={faQuestion} text="¿Tienes Depresión?" span={"Test de Depresión"} link={'/test/test-de-depresion'} />
                    <CardTest icon={faQuestion} text="¿Tienes síntomas de TLP?" span={"Test de TLP"} link={'/test/test-de-transtorno-de-la-personalidad-tlp'} />
                </div>
            </div>
        </main>
        <main className="md:hidden flex justify-center items-center relative" style={{
            height:"calc(100dvh - 128px)"
        }}>
            <Image src="/nuevo_eades_4.jpeg" alt="test EADES" fill priority className="object-cover object-center"/>
            <div className="p-5 flex justify-center items-center relative bg-marroncito bg-opacity-80 backdrop-blur-sm m-5 rounded-lg shadow-sm max-w-96">
                <div className="space-y-5 text-azul">
                    <h2 className="font-poppins font-bold text-xl">Conoce nuestros test de calidad</h2>
                    <p className="font-open-sans text-base">Hechos por psicólogos especializados que te dirán los malestares que padeces además de un consejo para lidiar con tus problemas. </p>
                    <div className="flex justify-center items-center gap-5 flex-col">
                        <CardTest icon={faQuestion} text="¿Tienes Ansiedad?" span={"Test de Ansiedad"} link={'/test/ansiedad'} />
                        <CardTest icon={faQuestion} text="¿Tienes Depresión?" span={"Test de Depresión"} link={'/test/depresion'} />
                        <CardTest icon={faQuestion} text="¿Tienes síntomas de TLP?" span={"Test de TLP"} link={'/test/tlp'} />
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default TestHome

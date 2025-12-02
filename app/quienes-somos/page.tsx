import NewNavBar from "@/components/NewNavBar"
import CarruselProfSm from "@/components/CarruselProfSm"
import CarruselProfLg from "@/components/CarruselProfLg"
import Image from "next/image"
import styles from "./page.module.css"

export const metadata = {
  title: "EADES | Centro Psicoterapéutico | Quiénes Somos",
  description: "EADES — Equipo de psicólogos expertos en salud mental: conocé a nuestros profesionales, misión y valores. Compromiso con la salud emocional, confidencialidad y cuidado integral. Descubre por qué somos tu mejor opción para acompañarte en tu proceso terapéutico.",
};


function QuienesSomosPage() {

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
      <CarruselProfLg/>
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

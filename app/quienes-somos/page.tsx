import NewNavBar from "@/components/NewNavBar"
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
      <NewNavBar />
      <section className="flex w-full justify-stretch items-stretch aspect-video lg:flex-row flex-col" style={{
        height: "calc(100dvh - 128px)"
      }}>
        <div className="relative basis-7/12 bg-red-50 md:min-h-[400px] min-h-64">
          <Image width={1900} height={1900} src="/form_terapeutica.jpg" className="absolute inset-0 size-full object-cover" alt="EADES" style={{
            objectPosition: "50% 35%"
          }} />
        </div>
        <div className="basis-5/12 flex justify-center items-center ">
          <div className="md:p-20 sm:p-10 p-5 sm:space-y-10 space-y-5">
            <h2 className="font-poppins text-azul font-bold xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl">Centro <br /> Psicoterapéutico <br /> EADES</h2>
            <p className="font-open-sans text-azul xl:text-2xl lg:text-xl md:text-lg">
              Espacio de bienestar emocional, trabajamos desde un enfoque integral que considera tus pensamientos, emociones, cuerpo y relaciones para ayudarte a encontrar equilibrio en todas las áreas de tu vida.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-24 sm:px-16 px-6 max-w-[1200px] mx-auto">
        <h2 className="font-poppins font-bold sm:text-4xl text-3xl text-azul mb-8">Equipo Profesional</h2>
        <div className="space-y-5">
          <p className="font-open-sans text-lg text-azul">
            El equipo de EADES está conformado por psicólogos clínicos formados en el enfoque del centro y supervisados de manera permanente por la dirección clínica.
          </p>
          <p className="font-open-sans text-lg text-azul">
            Cada terapeuta trabaja desde una mirada integral, adaptando la intervención a la singularidad de cada persona.
          </p>
        </div>
      </section>
      <section className="py-16 sm:py-24 sm:px-16 px-6 bg-celeste">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-10">
            <p className="font-poppins text-sm font-semibold text-azul/60 uppercase tracking-widest mb-2">Nuestro equipo</p>
            <h2 className="font-poppins font-bold sm:text-6xl text-4xl text-azul">Conoce a nuestros especialistas</h2>
          </div>
          <CarruselProfLg />
        </div>
      </section>
      <section className="py-16 sm:py-24 sm:px-16 px-6 max-w-[1200px] mx-auto">
        <h2 className="font-poppins font-bold sm:text-4xl text-3xl text-azul mb-10">Nuestro enfoque</h2>
        <div className="space-y-6 border-l-4 border-azul pl-8">
          <p className="font-open-sans text-lg text-azul">
            En EADES abordamos ansiedad, depresión, conflictos vinculares y crisis personales desde una mirada integral.
          </p>
          <p className="font-open-sans text-lg text-azul">
            No aplicamos recetas ni trabajamos una sola dimensión del problema. Analizamos cómo se articulan tus emociones, pensamientos y formas de actuar.
          </p>
          <p className="font-open-sans text-lg text-azul font-semibold">
            Porque el cambio real no ocurre al aliviar un síntoma, sino al reorganizar la experiencia que lo produce.
          </p>
        </div>
      </section>
      <section className={styles["sec-qs"]}>
        <h2 className="">Alianzas con nuestro Centro Psicoterapéutico</h2>
        <section>
          <Image width={100} height={100} src={"/educare.webp"} alt="Educare convenio EADES" />
          <Image width={100} height={100} src={"/esc_convenio_eades.webp"} alt="ESC Escucha Soluciona Crece convenio EADES" />
          <Image width={100} height={100} src={"/ilumina_convenio_eades.webp"} alt="Ilumina convenio EADES" />
        </section>
      </section>



    </div>
  )
}

export default QuienesSomosPage

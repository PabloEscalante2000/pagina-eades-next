import servicios from "@/public/data/servicios.json"
import NewNavBar from "@/components/NewNavBar";
import BloqServicio from "@/components/BloqServicio";
import Image from "next/image";

export const metadata = {
  title: "EADES | Centro Psicoterapéutico | Servicios",
  description: "Conoce los servicios de EADES: terapia psicológica individual, de pareja y familiar, neuropsicología, atención a niños, adolescentes y adultos. Enfoque integral y personalizado, con terapias presenciales y online. Mejora tu bienestar mental con nuestro equipo profesional.",
};

function ServiciosPage() {

  return (
    <div className="overflow-x-hidden overflow-y-hidden">
    
      <main className=" relative pri-serv h-dvh w-screen flex justify-end flex-col bg-cover bg-center"  id="bs">
        <div className="absolute top-0 left-0 z-10 w-full">
        <NewNavBar/>
        </div>
        <h1 className="sm:text-5xl text-3xl font-poppins text-azul sm:p-10 p-5 bg-marroncito/80 sm:m-10 m-5 max-w-[600px] font-bold">Conoce nuestros serivicios psicoterapéuticos</h1>
      </main>
      <section className="my-10 flex flex-col justify-stretch items-stretch gap-5 m-auto">
        {servicios.slice(0,3).map((serv,i) => (
          <BloqServicio key={i} servicio={serv} num={i % 2 === 0 ? 1:2}/>
        ))}
      </section>
      <section className="bg-marroncito">
        <div className="max-w-[1200px] mx-auto sm:px-10 px-5 sm:py-16 py-10 flex md:flex-row flex-col gap-10 items-start">
          <Image
            src="/CesarEscalante.webp"
            alt="César Escalante Sifuentes"
            width={320}
            height={320}
            className="w-72 h-72 object-cover object-top rounded-lg flex-none"
          />
          <div className="space-y-4">
            <div>
              <p className="font-poppins text-sm font-semibold text-azul/70 uppercase tracking-widest mb-1">Dirección Clínica</p>
              <h2 className="font-poppins font-bold sm:text-4xl text-3xl text-azul">César Escalante</h2>
              <p className="font-open-sans text-base text-azul/80 mt-1">Director de EADES &mdash; Más de 25 años de experiencia en educación y salud mental.</p>
            </div>
            <div className="space-y-3 border-l-4 border-azul pl-6">
              <p className="font-open-sans text-lg text-azul">
                Neuropsicólogo y psicoterapeuta con formación en Terapia Cognitivo-Conductual, Psicoanálisis y Terapia Sistémico-Familiar.
              </p>
              <p className="font-open-sans text-lg text-azul">
                Su trayectoria le permite integrar distintos enfoques clínicos según las necesidades de cada caso, evitando intervenciones rígidas o reduccionistas.
              </p>
              <p className="font-open-sans text-lg text-azul">
                Supervisa todos los procesos terapéuticos del centro, garantizando coherencia, profundidad y criterio clínico en cada tratamiento.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServiciosPage
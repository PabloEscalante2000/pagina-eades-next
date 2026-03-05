import servicios from "@/public/data/servicios.json"
import NewNavBar from "@/components/NewNavBar";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "EADES | Centro Psicoterapéutico | Servicios",
  description: "Conoce los servicios de EADES: terapia psicológica individual, de pareja y familiar, neuropsicología, atención a niños, adolescentes y adultos. Enfoque integral y personalizado, con terapias presenciales y online. Mejora tu bienestar mental con nuestro equipo profesional.",
};

function ServiciosPage() {

  return (
    <div className="overflow-x-hidden overflow-y-hidden">

      <main className=" relative pri-serv h-dvh w-screen flex justify-end flex-col bg-cover bg-top " id="bs">
        <div className="absolute top-0 left-0 z-10 w-full">
          <NewNavBar />
        </div>
        <h1 className="sm:text-5xl text-3xl font-poppins text-azul sm:p-10 p-5 bg-marroncito/80 sm:m-10 m-5 max-w-[600px] font-bold">Conoce nuestros serivicios psicoterapéuticos</h1>
      </main>
      <section className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {[
            { serv: servicios[0], bg: "bg-celeste", text: "text-azul", descText: "text-azul/80" },
            { serv: servicios[1], bg: "bg-marroncito", text: "text-azul", descText: "text-azul/80" },
            { serv: servicios[2], bg: "bg-celeste", text: "text-azul", descText: "text-azul/80" },
          ].map(({ serv, bg, text, descText }, i) => (
            <div key={i} className={`overflow-hidden ${bg} flex flex-col`}>
              <div className="relative w-full aspect-[16/9]">
                <Image fill src={serv.img} alt={serv.nombre} className="object-cover object-center" />
              </div>
              <div className={`p-7 flex flex-col gap-3 ${text}`}>
                <h2 className="font-poppins font-bold text-2xl sm:text-3xl">{serv.nombre}</h2>
                {serv.descripcion.map((d, j) => (
                  <p key={j} className={`font-open-sans text-base leading-relaxed ${descText}`}>{d}</p>
                ))}
              </div>
            </div>
          ))}
          <div className="overflow-hidden flex flex-col bg-pseres-dark">
            <div className="relative w-full aspect-[16/9]">
              <Image fill src={servicios[3].img} alt={servicios[3].nombre} className="object-cover object-center" />
            </div>
            <div className="p-7 flex flex-col gap-3">
              <h2 className="font-poppins font-bold text-2xl sm:text-3xl text-pseres-cream">{servicios[3].nombre}</h2>
              {servicios[3].descripcion.map((d, j) => (
                <p key={j} className="font-open-sans text-base leading-relaxed text-pseres-cream/80">{d}</p>
              ))}
              <div className="mt-2 flex items-center gap-4">
                <Link href="https://pseres.pe/" target="_blank" rel="noopener noreferrer" className="px-5 py-2 font-poppins font-bold text-sm rounded transition-all duration-300 hover:opacity-80 bg-pseres-cream text-pseres-dark">
                  Visitar Pseres →
                </Link>
                <Image src="/logo_pseres_blanco.webp" width={100} height={32} alt="Pseres" className="h-7 w-auto opacity-60" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-marroncito">
        <div className="max-w-[1200px] mx-auto sm:px-10 px-5 sm:py-16 py-10 flex md:flex-row flex-col gap-10 items-start">
          <Image
            src="/cesar_new-min.webp"
            alt="César Escalante Sifuentes"
            width={320}
            height={320}
            className="w-72 h-72 object-cover rounded-lg flex-none"
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
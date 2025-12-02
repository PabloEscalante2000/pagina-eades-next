import servicios from "@/public/data/servicios.json"
import NewNavBar from "@/components/NewNavBar";
import BloqServicio from "@/components/BloqServicio";

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
        {servicios.slice(0,4).map((serv,i) => (
          <BloqServicio key={i} servicio={serv} num={i % 2 === 0 ? 1:2}/>
        ))}
        <h2 className="text-azul font-poppins sm:text-4xl text-xl mt-5">Conoce nuestros servicios enfocados en la formación</h2>
        {servicios.slice(4,6).map((serv,i) => (
          <BloqServicio key={i} servicio={serv} num={i % 2 === 0 ? 1:3}/>
        ))}
      </section>
    </div>
  )
}

export default ServiciosPage
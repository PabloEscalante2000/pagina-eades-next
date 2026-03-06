import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons"
import InicioButton from "@/components/InicioButton";
import InicioPreguntas from "@/components/InicioPreguntas";
import NewNavBarLoader from "@/components/NewNavBarLoader"
import HeroCarrusel from "@/components/HeroCarrusel"
import Image from "next/image"
import diferencias from "@/public/data/diferencias.json"
import serviciosPsicoterapeuticos from "@/public/data/serviciosPsicoterapeuticos.json"
import Link from "next/link";

function InicioPage() {

  return (
    <div className="overflow-x-hidden">
      <div className="relative">
        <div className=" top-0 left-0 z-10 w-full">
          <NewNavBarLoader />
        </div>
        <HeroCarrusel />
      </div>
      <section className="space-y-5">
        <h2 className="font-poppins sm:px-10 px-5 sm:text-6xl text-4xl py-10 text-azul font-bold">SERVICIOS PSICOTERAPÉUTICOS</h2>
        <section className="flex justify-center md:flex-row flex-col py-20 lg:px-10 px-5 bg-celeste">
          <div className="w-full 2xl:space-y-0 lg:gap-16 gap-10 grid lg:grid-cols-3 md:grid-cols-2 md:mx-auto">
            {serviciosPsicoterapeuticos.filter(v => !v.isPseres).map((val, i) => (
              <aside key={i} className="transition-all duration-500 ease-in-out hover:-translate-y-6 space-y-8 col-span-1">
                <Image alt="servicios psicoterapeuticos" src={val.img} width={400} height={400} className="w-full object-cover object-center aspect-square " />
                <div className="flex justify-between items-start text-4xl font-poppins text-azul sm:px-0 px-3">
                  <h3 dangerouslySetInnerHTML={{ __html: val.nombre }} />
                  <InicioButton
                    child={<FontAwesomeIcon icon={faArrowAltCircleRight} />}
                    clas={"transition-all duration-500 hover:text-marroncito"}
                  />
                </div>
              </aside>
            ))}
          </div>
        </section>
      </section>
      {serviciosPsicoterapeuticos.filter(v => v.isPseres).map((val, i) => (
        <section key={i} className="w-full flex lg:flex-row flex-col overflow-hidden bg-pseres-brown/80" style={{}}>
          <div className="lg:w-1/2 w-full relative min-h-[420px]">
            <Image alt="Terapia para Niños - Pseres" src={val.img} fill className="object-cover object-center" />
          </div>
          <div className="lg:w-1/2 w-full flex flex-col justify-center gap-6 p-10 lg:p-16">
            <Image src="/logo_pseres_blanco.webp" width={160} height={48} alt="Pseres" className="h-10 w-auto object-contain object-left" />
            <h2 className="font-poppins font-bold text-4xl lg:text-5xl" style={{ color: "#F6F1E1" }} dangerouslySetInnerHTML={{ __html: val.nombre }} />
            <p className="font-open-sans text-lg text-pseres-cream" style={{}}>Centro especializado en psicoterapia infantil. Acompañamos a niños y sus familias en procesos terapéuticos adaptados a cada etapa del desarrollo.</p>
            <Link href="https://pseres.pe/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 w-fit font-poppins font-bold text-base rounded transition-all duration-300 hover:opacity-80" style={{ backgroundColor: "#F6F1E1", color: "#777743" }}>
              Conoce Pseres
            </Link>
          </div>
        </section>
      ))}
      <section className="my-5 bg-marroncito text-azul">
        <div className="sm:px-10 sm:py-10 p-5 max-w-[1500px] m-auto flex md:flex-row flex-col md:justify-start md:items-stretch justify-center items-center sm:gap-10 gap-5">
          <Image src="/cesar_new-min.webp" alt="César Escalante Sifuentes" width={384} height={384} className="w-96 h-96 object-cover object-[center_35%] rounded-lg flex-none" />
          <aside className="flex flex-col justify-between gap-3">
            <div>
              <h2 className="font-poppins font-bold sm:text-4xl text-3xl">CONOCE AL FUNDADOR</h2>
              <span className="sm:text-2xl text-2xl font-open-sans text-black">César Escalante</span>
              <p className="font-open-sans sm:text-xl text-base py-3 text-black">
                Fundador del Grupo EADES, organización que integra clínica, formación e intervención social bajo un mismo sistema conceptual, articulando la práctica terapéutica con una mirada amplia y rigurosa del desarrollo humano.
                <br />
                Psicólogo clínico, psicoterapeuta psicoanalítico y magíster en neuropsicología, con más de 25 años de experiencia en educación y salud mental. Su trabajo se distingue por una comprensión profunda de la historia personal y los vínculos: identifica patrones que se repiten, el origen del malestar y lo que lo mantiene en el tiempo, para convertir esa comprensión en cambios reales y sostenibles.
                <br />
                Especialista en terapia de pareja y en el abordaje de ansiedad y depresión, trastornos de la personalidad y neurodesarrollo, ofrece una psicoterapia integradora y personalizada, combinando herramientas de distintos enfoques según las necesidades de cada persona y el momento del proceso terapéutico.
              </p>
              <span className="font-breathing text-black">
                Cesar Escalante
              </span>
            </div>
            <div>
              <button className="text-marroncito bg-azul px-5 py-2 font-poppins font-bold transition-all duration-500 hover:bg-celeste block">
                Contáctanos
              </button>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-16 sm:py-24 sm:px-10 px-5 max-w-[1500px] mx-auto">
        <h2 className="font-poppins font-bold sm:text-5xl text-3xl text-azul mb-14">Lo que solemos trabajar en consulta</h2>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
          {[
            {
              img: "/assets/loq-1.jpg",
              alt: "Ansiedad y estados depresivos",
              num: "01",
              titulo: "Ansiedad y estados depresivos",
              texto: "Crisis personales que comienzan a afectar la vida cotidiana.",
            },
            {
              img: "/assets/loq-2.jpg",
              alt: "Conflictos vinculares",
              num: "02",
              titulo: "Conflictos vinculares",
              texto: "Dinámicas relacionales que tienden a repetirse en distintos vínculos.",
            },
            {
              img: "/assets/loq-3.jpg",
              alt: "Regular emociones",
              num: "03",
              titulo: "Regulación emocional",
              texto: "Dificultades para sostener decisiones o construir una relación más estable con uno mismo.",
            },
            {
              img: "/assets/evaluaciones-psicologicas.jpg",
              alt: "Evaluaciones psicológicas",
              num: "04",
              titulo: "Evaluaciones psicológicas",
              texto: "Para precisar el funcionamiento emocional o cognitivo cuando el diagnóstico lo requiere.",
            },
          ].map((item, i) => (
            <div key={i} className="group flex flex-col overflow-hidden rounded-xl shadow-sm">
              <div className="relative overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.alt}
                  width={400}
                  height={300}
                  className="w-full h-60 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-azul/70 via-azul/10 to-transparent" />
                <span className="absolute bottom-3 right-4 font-poppins font-bold text-6xl text-white/20 leading-none select-none">{item.num}</span>
              </div>
              <div className="flex flex-col gap-2 p-5 border-l-4 border-azul bg-white flex-1">
                <h3 className="font-poppins font-bold text-lg text-azul">{item.titulo}</h3>
                <p className="font-open-sans text-sm text-black/70 leading-relaxed">{item.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="py-12 flex flex-col gap-10 xl:w-[1200px] w-full justify-center items-center mx-auto font-poppins">
        <h1 className="text-marron-oscuro text-center p-5 text-4xl md:text-5xl font-bold  font-poppins text-azul">Nuestras marcas aliadas</h1>
        <div className="flex pt-10 flex-wrap gap-10 justify-center items-end">
          <div className="flex flex-col items-center gap-5">
            <div className="h-24 flex items-center justify-center">
              <Image src="/ilumina_logo.png" width={200} height={80} alt="Ilumina" className="h-auto max-h-32 w-auto" />
            </div>
            <Link href="https://asociacionilumina.org/" target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-azul text-white font-poppins font-bold text-sm rounded transition-all duration-300 hover:bg-celeste">
              Visitar web
            </Link>
          </div>
          <div className="flex flex-col items-center gap-5">
            <div className="h-24 flex items-center justify-center">
              <Image src="/assets/logo_itas.png" width={200} height={80} alt="ITAS" className="h-auto max-h-32 w-auto" />
            </div>
            <Link href="https://institutoitas.com/" target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-azul text-white font-poppins font-bold text-sm rounded transition-all duration-300 hover:bg-celeste">
              Visitar web
            </Link>
          </div>
          <div className="flex flex-col items-center gap-5">
            <div className="h-24 flex items-center justify-center">
              <Image src="/pseres.png" width={200} height={80} alt="Pseres" className="h-auto max-h-32 w-auto" />
            </div>
            <Link href="https://pseres.pe/" target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-azul text-white font-poppins font-bold text-sm rounded transition-all duration-300 hover:bg-celeste">
              Visitar web
            </Link>
          </div>
        </div>
      </div>
      <main className="sec-inicio">
        <h2 className="text-3xl! sm:text-5xl! font-poppins! font-bold text-azul mb-20">¿Cómo nos diferenciamos de otros?</h2>
        <section className="flex justify-center items-center flex-wrap gap-24">
          {diferencias.map((val, i) => (
            <aside key={i} className="h-[350px] w-[300px] relative flex justify-center items-center rounded-3xl perspective flip-card">
              <main className="flip-card-inner">
                <section className="flip-card-front">
                  <div className="h-[350px] w-[300px] relative z-20 bg-azul/50 text-white rounded-3xl text-center font-poppins sm:text-2xl text-xl flex justify-center items-center font-bold p-10">
                    <p>
                      {val.nombre}
                    </p>
                  </div>
                  <Image width={300} height={350} className="absolute z-10 top-0 left-0 rounded-3xl h-[350px] w-[300px] object-cover object-top" alt="Seguimiento Constante EADES" src={val.img} />
                </section>
                <section className="flip-card-back text-azul font-poppins sm:p-10 p-5 text-base flex justify-center items-center border-2 border-azul">
                  {val.descripcion}
                </section>
              </main>
            </aside>
          ))}
        </section>
      </main>
      <section className="bg-marroncito">
        <div className="max-w-[1500px] m-auto flex gap-10 lg:flex-row flex-col lg:justify-start lg:items-start justify-center items-center lg:p-10 p-5">
          <video src="/video_maite.webm" className="object-center object-cover size-96 rounded-xl flex-none" loop muted autoPlay />
          <div className="text-azul font-open-sans space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="font-poppins md:text-4xl text-2xl font-bold">En EADES nos dedicamos a brindar servicios de calidad y confiabilidad</h3>
              <p className="text-lg">
                Estamos enfocados en el cuidado integral de la salud mental.  Nos especializamos en la prevención y solución de conflictos personales, familiares y de pareja, así como en el acompañamiento en todo tipo de malestares emocionales.<br />Además, contamos con nuestro propio centro especializado en niños, llamado Pseres.<br />Creemos que cada persona merece un espacio seguro para crecer, reflexionar y sanar, y trabajamos contigo para encontrar las herramientas necesarias para afrontar los desafíos de la vida.  Nuestro compromiso es acompañarte en cada paso hacia tu bienestar emocional.
              </p>
            </div>
            <a href="https://api.whatsapp.com/send?phone=51930509438&text=Buenas%2C%20estoy%20interesad%40%20en%20sus%20servicios%2C%20mi%20nombre%20es..." target="_blank" className="px-5 py-3 bg-azul text-marroncito text-lg w-fit rounded-lg transition-all ease-in-out duration-500 hover:bg-celeste"> Agenda una cita</a>
          </div>
        </div>
      </section>



      <div className="py-12 flex flex-col gap-10 xl:w-[1200px] w-full justify-center items-center mx-auto font-poppins">
        <h1 className="text-marron-oscuro text-center p-5 text-4xl font-poppins text-azul">Asociado a estas instituciones</h1>
        <div className="flex pt-10 flex-wrap gap-10 justify-center items-start">
          <div className="max-w-[300px] text-center font-poppins-light flex flex-col justify-center items-center gap-5">
            <Image src="/sip_logo.png" width={100} height={80} className="h-20 w-auto" alt="SIP" />
            <span>Sociedad Interamericana de Psicología (SIP)</span>
          </div>
          <div className="max-w-[300px] text-center font-poppins-light flex flex-col justify-center items-center gap-5">
            <Image src="/nspa.png" width={100} height={80} className="h-20 w-auto" alt="Asociación NSAP" />
            <span>Sociedad Internacional de Neuropsicoanálisis</span>
          </div>
          <div className="max-w-[300px] text-center font-poppins-light flex flex-col justify-center items-center gap-5">
            <Image src="/member.jpeg" width={100} height={80} className="h-20 w-auto" alt="London Intercultural Center" />
            <span>Centro Intercultural de Londres (LIC)</span>
          </div>
          <div className="max-w-96 text-center font-poppins-light flex flex-col justify-center items-center gap-5 mt-10">
            <Image src="/iaoth.jpeg" width={100} height={80} className="h-20 w-auto" alt="IAOTH" />
            <span>Asociación Internacional de Terapeutas (IAOTH)</span>
          </div>

          <div className=" max-w-[560px] text-center font-poppins-light flex flex-col justify-center items-center gap-5 mt-10">
            <Image src="/euroasopsy.png" width={100} height={80} className="h-20 w-auto" alt="IAOTH" />
            <span>Asociación Europea de Psicología Aplicada (EAAP)</span>
          </div>
        </div>
      </div>
      <section className="space-y-5 py-5 sm:py-10">
        <h2 className="text-azul sm:text-6xl text-4xl font-poppins font-bold sm:px-10 px-5">Preguntas Frecuentes</h2>
        <section className="grid gap-10 lg:grid-cols-2 grid-cols-1 justify-center items-center md:justify-stretch md:items-stretch sm:p-16 p-10">
          <div className="flex justify-center items-center">
            <Image alt="des" src="/assets/preg-res.jpg" width={600} height={800} className="w-full object-cover object-center rounded-r-2xl 2xl:h-full lg:h-2/3" style={{
              objectPosition: "center"
            }} />
          </div>
          <InicioPreguntas />
        </section>
      </section>
    </div>
  )
}

export default InicioPage
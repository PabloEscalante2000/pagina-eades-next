import Image from "next/image";
import NewNavBar from "@/components/NewNavBar";

export const metadata = {
  title: "EADES | Evaluaciones Psicológicas",
  description:
    "Evaluaciones clínicas profesionales: ansiedad, depresión, TDAH adulto y más. Descarte, diagnóstico y orientación con criterio profesional. Virtual y presencial.",
};

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=51930509438&text=Buenas%2C%20estoy%20interesad%40%20en%20sus%20servicios%20de%20evaluaci%C3%B3n%2C%20mi%20nombre%20es...";

const evaluaciones = [
  {
    id: 1,
    nombre: "Descarte de Depresión y Ansiedad",
    sesiones: "2 sesiones",
    precio: "S/ 160",
    modalidad: "Virtual · Presencial",
    descripcion:
      "Evaluación clínica de primer nivel para identificar si lo que estás viviendo corresponde a ansiedad, depresión u otro proceso emocional. Incluye análisis de sintomatología y entrega de informe con próximos pasos.",
    detalle: [
      "60 min: Evaluación — análisis de sintomatología física y emocional.",
      "30 min: Entrega de informe de resultados y orientación.",
    ],
    tag: "Punto de partida",
    color: "border-celeste",
    badge: "bg-celeste text-azul",
  },
  {
    id: 2,
    nombre: "Evaluación de Ansiedad",
    sesiones: "3 sesiones",
    precio: "S/ 450",
    modalidad: "Virtual · Presencial",
    descripcion:
      "Proceso completo de evaluación clínica para confirmar o descartar un trastorno de ansiedad, identificar su tipo y severidad, y establecer recomendaciones terapéuticas.",
    detalle: [
      "Entrevista clínica estructurada.",
      "Pruebas psicológicas validadas.",
      "Informe profesional y sesión de devolución.",
    ],
    tag: "Evaluación completa",
    color: "border-azul",
    badge: "bg-azul text-white",
  },
  {
    id: 3,
    nombre: "Evaluación de Depresión / Ánimo",
    sesiones: "3 sesiones",
    precio: "S/ 450",
    modalidad: "Virtual · Presencial",
    descripcion:
      "Evaluación clínica para confirmar o descartar depresión, medir su severidad y obtener recomendaciones específicas según el cuadro encontrado.",
    detalle: [
      "Entrevista clínica estructurada.",
      "Pruebas psicológicas validadas.",
      "Informe profesional y sesión de devolución.",
    ],
    tag: "Evaluación completa",
    color: "border-azul",
    badge: "bg-azul text-white",
  },
  {
    id: 4,
    nombre: "Evaluación de Ansiedad + Depresión",
    sesiones: "3 sesiones",
    precio: "S/ 520",
    modalidad: "Virtual · Presencial",
    descripcion:
      "Proceso de evaluación completo para cuando hay síntomas mixtos. Explora ambas dimensiones clínicas con profundidad y entrega un informe integrado con orientación terapéutica.",
    detalle: [
      "Entrevista clínica estructurada.",
      "Pruebas psicológicas validadas para ambas áreas.",
      "Informe integrado y sesión de devolución.",
    ],
    tag: "Síntomas mixtos",
    color: "border-azul",
    badge: "bg-azul text-white",
  },
  {
    id: 5,
    nombre: "TDAH Adulto — Estándar",
    sesiones: "3 sesiones",
    precio: "S/ 650",
    modalidad: "Solo presencial",
    descripcion:
      "Evaluación diagnóstica para TDAH en adultos. Incluye diagnóstico clínico, perfil atencional y de funciones ejecutivas, e informe detallado con recomendaciones.",
    detalle: [
      "2 primeras sesiones de 1h 20min cada una.",
      "Diagnóstico + perfil atencional y funciones ejecutivas.",
      "Informe profesional y sesión de devolución.",
    ],
    tag: "Solo presencial",
    color: "border-azul",
    badge: "bg-azul/80 text-white",
  },
  {
    id: 6,
    nombre: "TDAH Adulto — Integral",
    sesiones: "5 sesiones",
    precio: "S/ 1,150",
    modalidad: "Solo presencial",
    descripcion:
      "Evaluación neuropsicológica completa. Incluye cociente intelectual, atención, memoria y funciones ejecutivas. Ideal cuando se requiere un perfil cognitivo amplio o documentación para trámites profesionales.",
    detalle: [
      "Evaluación de CI + atención + memoria + funciones ejecutivas.",
      "Informe neuropsicológico completo.",
      "Sesión de devolución y orientación.",
    ],
    tag: "Evaluación más completa",
    color: "border-azul",
    badge: "bg-azul text-white",
  },
];

export default function EvaluacionesPage() {
  return (
    <div className="overflow-x-hidden">
      <div className="relative">
        <div className="top-0 left-0 z-10 w-full">
          <NewNavBar />
        </div>

        {/* HERO */}
        <section
          className="min-h-[55vh] flex flex-col justify-end pb-16 bg-cover px-6 sm:px-16"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(65,88,142,0.92), rgba(65,88,142,0.25)), url(/assets/evaluaciones-psicologicas.jpg)",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w-3xl space-y-4">
            <p className="font-poppins text-sm font-semibold text-white/70 uppercase tracking-widest">
              EADES · Servicios clínicos
            </p>
            <h1 className="font-poppins font-bold text-4xl sm:text-6xl text-white leading-tight">
              Evaluaciones psicológicas
            </h1>
            <p className="font-open-sans text-xl text-white/90 leading-relaxed max-w-2xl">
              Desde un primer descarte hasta una evaluación neuropsicológica completa.
              Cada proceso es estructurado, con criterio profesional y orientado a
              darte claridad sobre lo que estás viviendo.
            </p>
          </div>
        </section>
      </div>

      {/* ¿POR QUÉ EVALUAR? */}
      <section className="bg-marroncito py-16 px-6 sm:px-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
          {[
            {
              icono: "🔍",
              titulo: "Claridad diagnóstica",
              texto:
                "Entender qué está pasando es el primer paso para poder abordarlo. Una evaluación profesional descarta suposiciones y da nombre a lo que se vive.",
            },
            {
              icono: "📋",
              titulo: "Informe profesional",
              texto:
                "Cada evaluación concluye con un informe clínico detallado y una sesión de devolución donde se explican los resultados y los pasos a seguir.",
            },
            {
              icono: "🗺️",
              titulo: "Orientación concreta",
              texto:
                "No se trata solo de un diagnóstico. Recibirás recomendaciones específicas y orientación sobre el tipo de atención más adecuado para tu caso.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-7 shadow-sm border-t-4 border-azul space-y-3">
              <span className="text-4xl">{item.icono}</span>
              <h3 className="font-poppins font-bold text-azul text-xl">{item.titulo}</h3>
              <p className="font-open-sans text-azul/80 text-base leading-relaxed">{item.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LISTADO DE EVALUACIONES */}
      <section className="bg-white py-20 px-6 sm:px-16">
        <div className="max-w-6xl mx-auto space-y-6">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-azul mb-10">
            Nuestros servicios de evaluación
          </h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {evaluaciones.map((ev) => (
              <div
                key={ev.id}
                className={`bg-white rounded-2xl border-2 ${ev.color} shadow-sm p-7 flex flex-col gap-4`}
              >
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <h3 className="font-poppins font-bold text-azul text-xl leading-snug">
                    {ev.nombre}
                  </h3>
                  <span className={`text-xs font-poppins font-semibold px-3 py-1 rounded-full flex-none ${ev.badge}`}>
                    {ev.tag}
                  </span>
                </div>
                <p className="font-open-sans text-azul/80 text-base leading-relaxed">
                  {ev.descripcion}
                </p>
                <ul className="space-y-2">
                  {ev.detalle.map((d, i) => (
                    <li key={i} className="flex items-start gap-2 font-open-sans text-azul/70 text-sm">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-azul/40 flex-none" />
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-2 border-t border-azul/10 flex-wrap gap-3">
                  <div className="space-y-1">
                    <p className="font-poppins font-bold text-azul text-2xl">{ev.precio}</p>
                    <p className="font-open-sans text-azul/60 text-sm">{ev.sesiones} · {ev.modalidad}</p>
                  </div>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-azul text-white font-poppins font-bold text-sm rounded-lg transition-all duration-300 hover:bg-celeste hover:text-azul"
                  >
                    Consultar
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARATIVA RÁPIDA */}
      <section className="bg-celeste py-20 px-6 sm:px-16">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-azul">
            ¿Cuál es el adecuado para ti?
          </h2>
          <div className="overflow-x-auto rounded-2xl shadow-sm">
            <table className="w-full text-left font-open-sans text-azul bg-white">
              <thead>
                <tr className="bg-azul text-white">
                  <th className="px-5 py-4 font-poppins font-bold text-base">Servicio</th>
                  <th className="px-5 py-4 font-poppins font-bold text-base">Sesiones</th>
                  <th className="px-5 py-4 font-poppins font-bold text-base">Precio</th>
                  <th className="px-5 py-4 font-poppins font-bold text-base">Modalidad</th>
                </tr>
              </thead>
              <tbody>
                {evaluaciones.map((ev, i) => (
                  <tr key={ev.id} className={i % 2 === 0 ? "bg-white" : "bg-celeste/20"}>
                    <td className="px-5 py-4 font-semibold text-azul text-sm">{ev.nombre}</td>
                    <td className="px-5 py-4 text-azul/70 text-sm">{ev.sesiones}</td>
                    <td className="px-5 py-4 font-bold text-azul text-sm">{ev.precio}</td>
                    <td className="px-5 py-4 text-azul/70 text-sm">{ev.modalidad}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* EQUIPO */}
      <section className="bg-marroncito py-20 px-6 sm:px-16">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 space-y-5">
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-azul">
              Evaluaciones con respaldo clínico
            </h2>
            <p className="font-open-sans text-lg text-azul/80 leading-relaxed">
              Todas nuestras evaluaciones son realizadas por psicólogos clínicos
              con formación especializada, bajo la supervisión del equipo de
              dirección de EADES.
            </p>
            <p className="font-open-sans text-lg text-azul/80 leading-relaxed">
              Utilizamos instrumentos psicológicos validados y seguimos protocolos
              clínicos estructurados para garantizar precisión y coherencia en
              cada proceso.
            </p>
          </div>
          <div className="lg:w-1/2 w-full">
            <Image
              src="/cesar_new-min.webp"
              alt="César Escalante - Director EADES"
              width={600}
              height={500}
              className="w-full h-96 object-cover object-[center_35%] rounded-2xl shadow-lg"
            />
            <p className="font-poppins text-sm text-azul/60 mt-3 text-center">
              César Escalante — Director de EADES · Más de 25 años de experiencia
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 px-6 sm:px-16">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-azul">
              Preguntas frecuentes
            </h2>
            <div className="space-y-4">
              {[
                {
                  p: "¿Por dónde empiezo si no sé qué tipo de evaluación necesito?",
                  r: "El Descarte de Depresión y Ansiedad es el punto de partida ideal. Te dará claridad sobre qué está pasando y orientará el siguiente paso más adecuado para tu caso.",
                },
                {
                  p: "¿Las evaluaciones reemplazan un proceso terapéutico?",
                  r: "No. Las evaluaciones son un proceso diagnóstico y de orientación. Si se recomienda terapia, se te indicará el tipo más adecuado.",
                },
                {
                  p: "¿Puedo hacer la evaluación de forma virtual?",
                  r: "La mayoría de evaluaciones están disponibles en modalidad virtual y presencial. Las evaluaciones de TDAH son solo presenciales por la naturaleza de las pruebas.",
                },
                {
                  p: "¿Cuánto tiempo tarda en llegar el informe?",
                  r: "El informe se entrega en una sesión de devolución agendada aproximadamente 7 días después de finalizada la evaluación.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-marroncito rounded-xl p-6 space-y-2">
                  <h3 className="font-poppins font-bold text-azul text-base">{item.p}</h3>
                  <p className="font-open-sans text-azul/80 text-base leading-relaxed">{item.r}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 w-full lg:sticky lg:top-24">
            <Image
              src="/assets/preg-res.jpg"
              alt="Preguntas frecuentes"
              width={600}
              height={600}
              className="w-full h-[480px] object-cover object-center rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-azul py-24 px-6 sm:px-16 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-white">
            ¿No sabes cuál evaluación necesitas?
          </h2>
          <p className="font-open-sans text-xl text-white/80 leading-relaxed">
            Escríbenos y te ayudamos a identificar el servicio más adecuado
            para lo que estás viviendo.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-white text-azul font-poppins font-bold text-lg rounded-lg transition-all duration-300 hover:bg-celeste"
          >
            Escribir por WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}

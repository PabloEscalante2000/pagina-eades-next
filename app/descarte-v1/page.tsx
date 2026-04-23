import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "EADES | Descarte de Depresión y Ansiedad",
  description:
    "Evaluación clínica profesional para comprender lo que estás viviendo. No busca etiquetar, sino darte un primer marco de comprensión claro y orientado.",
};

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=51930509438&text=Buenas%2C%20estoy%20interesad%40%20en%20el%20servicio%20de%20descarte%20de%20depresi%C3%B3n%20y%20ansiedad%2C%20mi%20nombre%20es...";

export default function DescarteV1Page() {
  return (
    <div className="overflow-x-hidden">

      {/* LINK INICIO */}
      <div className="absolute top-0 left-0 z-20 px-6 py-5">
        <Link href="/inicio" className="font-poppins text-base text-white/80 hover:text-white transition-colors duration-200 flex items-center gap-2">
          ← Volver al inicio
        </Link>
      </div>

      {/* HERO */}
      <section
        className="relative min-h-screen flex flex-col justify-center items-start bg-cover px-6 sm:px-16 py-32"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(65,88,142,0.92), rgba(65,88,142,0.15)), url(/assets/fondo_descarte.webp)",
          backgroundPosition: "right center",
        }}
      >
        <div className="max-w-2xl space-y-6">
          <p className="font-poppins text-base font-semibold text-white/70 uppercase tracking-widest">
            Servicio clínico · EADES
          </p>
          <h1 className="font-poppins font-bold text-4xl sm:text-6xl text-white leading-tight">
            Cuando algo no se siente bien, ponerle nombre importa
          </h1>
          <p className="font-open-sans text-xl text-white/90 leading-relaxed max-w-xl">
            No todo malestar emocional significa lo mismo. El descarte de
            depresión y ansiedad es una evaluación clínica orientada a
            comprender mejor lo que está ocurriendo, con criterio profesional
            y herramientas validadas.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 bg-white text-azul font-poppins font-bold text-lg rounded transition-all duration-300 hover:bg-celeste"
            >
              Solicitar evaluación
            </a>
          </div>
        </div>
      </section>

      {/* SOBRE LA EVALUACIÓN */}
      <section className="bg-marroncito py-20 px-6 sm:px-16">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-azul">
              ¿En qué consiste?
            </h2>
            <p className="font-open-sans text-xl text-azul/80 leading-relaxed">
              Es un espacio de evaluación clínica en el que se exploran síntomas,
              antecedentes, contexto emocional y funcionamiento actual, con apoyo
              de instrumentos psicológicos validados cuando corresponde.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {[
                {
                  icon: "🔍",
                  titulo: "Identificación diagnóstica",
                  texto:
                    "Permite identificar si hay indicadores compatibles con ansiedad o depresión, diferenciando ese malestar de otros procesos posibles.",
                },
                {
                  icon: "📋",
                  titulo: "Lectura clínica inicial",
                  texto:
                    "Ofrece una lectura clínica seria y cuidadosa, no una respuesta genérica.",
                },
                {
                  icon: "🗺️",
                  titulo: "Orientación de pasos",
                  texto:
                    "Si fuera necesario, orienta los siguientes pasos de atención más pertinentes para tu caso.",
                },
                {
                  icon: "🤝",
                  titulo: "Espacio confidencial",
                  texto:
                    "Un espacio respetuoso donde tu experiencia pueda ser escuchada sin simplificaciones.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-5 border-l-4 border-azul space-y-2 shadow-sm"
                >
                  <span className="text-3xl">{item.icon}</span>
                  <h3 className="font-poppins font-bold text-azul text-lg">
                    {item.titulo}
                  </h3>
                  <p className="font-open-sans text-azul/80 text-base leading-relaxed">
                    {item.texto}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <Image
              src="/assets/evaluaciones-psicologicas.jpg"
              alt="Evaluación psicológica EADES"
              width={600}
              height={500}
              className="w-full h-96 object-cover object-center rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* ¿PARA QUIÉN ES? */}
      <section className="bg-celeste py-20 px-6 sm:px-16">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse gap-12 items-center">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-azul">
              ¿Para quién puede ser útil?
            </h2>
            <p className="font-open-sans text-xl text-azul/80 leading-relaxed">
              Para personas que vienen sintiendo, de manera persistente, que algo
              no está bien y necesitan comprender mejor lo que les pasa. No es
              necesario &ldquo;estar muy mal&rdquo; para consultar.
            </p>
            <ul className="space-y-3">
              {[
                "Sensación de angustia o inquietud difícil de regular.",
                "Agotamiento emocional sostenido.",
                "Pérdida de interés o motivación.",
                "Dificultad para dormir o para concentrarse.",
                "Pensamientos repetitivos, sensación de bloqueo o desborde.",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 font-open-sans text-azul text-lg"
                >
                  <span className="mt-1.5 w-2.5 h-2.5 rounded-full bg-azul flex-none" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="font-open-sans text-azul/70 text-lg italic border-l-4 border-azul pl-4">
              A veces, pedir una evaluación a tiempo permite ordenar lo que se
              está viviendo antes de que el malestar se profundice.
            </p>
          </div>
          <div className="lg:w-1/2 w-full">
            <Image
              src="/agotamiento-emocional-eades-blog.jpeg"
              alt="Agotamiento emocional"
              width={600}
              height={500}
              className="w-full h-96 object-cover object-center rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* NUESTRO ENFOQUE */}
      <section className="bg-white py-20 px-6 sm:px-16">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-azul">
              Nuestro enfoque
            </h2>
            <p className="font-open-sans text-xl text-azul/80 leading-relaxed">
              En EADES, la salud mental se aborda desde una mirada clínica que
              combina profundidad, criterio y cercanía humana. Nuestro equipo
              tiene amplia experiencia trabajando casos de ansiedad, depresión,
              crisis existenciales y procesos complejos, con énfasis en una
              comprensión más profunda de la experiencia de la persona.
            </p>
            <p className="font-open-sans text-xl text-azul/80 leading-relaxed">
              Por eso, este descarte no se plantea como una &ldquo;solución
              rápida&rdquo;, sino como una evaluación estructurada que ayude a
              tomar decisiones con mayor claridad.
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
            <p className="font-poppins text-base text-azul/60 mt-3 text-center">
              César Escalante — Director de EADES · Más de 25 años de experiencia
            </p>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="bg-azul py-20 px-6 sm:px-16">
        <div className="max-w-6xl mx-auto space-y-10">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-white">
            ¿Cómo es el proceso?
          </h2>
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="lg:w-1/2 space-y-4">
              {[
                {
                  num: "01",
                  titulo: "Evaluación",
                  texto: "90 minutos de evaluación clínica estructurada.",
                },
                {
                  num: "02",
                  titulo: "Informe",
                  texto:
                    "Siete días después se agenda una sesión de entrega del informe de resultados.",
                },
                {
                  num: "03",
                  titulo: "Orientación",
                  texto:
                    "Recomendaciones claras y específicas sobre los siguientes pasos de atención.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/10 rounded-xl p-6 space-y-3 border border-white/20"
                >
                  <span className="font-poppins font-bold text-5xl text-white/30">
                    {item.num}
                  </span>
                  <h3 className="font-poppins font-bold text-2xl text-white">
                    {item.titulo}
                  </h3>
                  <p className="font-open-sans text-white/80 text-lg leading-relaxed">
                    {item.texto}
                  </p>
                </div>
              ))}
              <div className="bg-white/10 border border-white/20 rounded-xl p-6 flex flex-col sm:flex-row sm:items-center gap-4">
                <span className="font-poppins font-bold text-2xl text-celeste flex-none">
                  Inversión:
                </span>
                <span className="font-open-sans text-white text-xl">
                  S/ 160 soles · Presencial o virtual.
                </span>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <Image
                src="/eades_local_consultorio-min.JPG"
                alt="Consultorio EADES"
                width={600}
                height={500}
                className="w-full h-full min-h-80 object-cover object-center rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES */}
      <section className="bg-marroncito py-20 px-6 sm:px-16">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/2 space-y-8">
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-azul">
              Preguntas frecuentes
            </h2>
            <div className="space-y-4">
              {[
                {
                  pregunta: "¿En una sola sesión ya se sabe todo?",
                  respuesta:
                    "La evaluación permite obtener una impresión clínica inicial y una orientación profesional. En algunos casos eso será suficiente para aclarar el panorama; en otros, puede requerirse continuidad o una evaluación más amplia.",
                },
                {
                  pregunta: "¿Esto reemplaza un tratamiento?",
                  respuesta:
                    "No. El descarte no equivale a un proceso terapéutico. Es un primer paso de evaluación y orientación clínica.",
                },
                {
                  pregunta: "¿Qué pasa si aparecen indicadores importantes?",
                  respuesta:
                    "Se le explicará con claridad lo observado y se le orientará sobre las alternativas de atención más pertinentes para su caso.",
                },
                {
                  pregunta: "¿La atención puede ser virtual o presencial?",
                  respuesta: "Sí, según la modalidad disponible del servicio.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 space-y-2 shadow-sm"
                >
                  <h3 className="font-poppins font-bold text-azul text-xl">
                    {item.pregunta}
                  </h3>
                  <p className="font-open-sans text-azul/80 text-lg leading-relaxed">
                    {item.respuesta}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 w-full lg:sticky lg:top-24">
            <Image
              src="/assets/preg-res.jpg"
              alt="Preguntas frecuentes EADES"
              width={600}
              height={700}
              className="w-full h-[500px] object-cover object-center rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-celeste py-20 px-6 sm:px-16 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-azul">
            Solicite una evaluación clínica de descarte
          </h2>
          <p className="font-open-sans text-xl text-azul/80 leading-relaxed">
            Un primer espacio para comprender mejor lo que le está pasando y
            orientar los siguientes pasos con criterio profesional.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-azul text-white font-poppins font-bold text-xl rounded-lg transition-all duration-300 hover:bg-azul/80"
          >
            Escribir por WhatsApp
          </a>
        </div>
      </section>

    </div>
  );
}

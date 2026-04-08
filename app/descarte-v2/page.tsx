import NewNavBar from "@/components/NewNavBar";

export const metadata = {
  title: "EADES | ¿Ansiedad, depresión o burnout? Descúbrelo",
  description:
    "Evaluación clínica de descarte para entender lo que estás viviendo. Claridad, orientación profesional y los próximos pasos adaptados a ti.",
};

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=51930509438&text=Buenas%2C%20estoy%20interesad%40%20en%20el%20servicio%20de%20descarte%20de%20depresi%C3%B3n%20y%20ansiedad%2C%20mi%20nombre%20es...";

export default function DescarteV2Page() {
  return (
    <div className="overflow-x-hidden">
      {/* NAVBAR */}
      <div className="relative">
        <div className="top-0 left-0 z-10 w-full">
          <NewNavBar />
        </div>

        {/* HERO */}
        <section
          className="min-h-screen flex flex-col justify-center items-start bg-cover bg-center px-6 sm:px-16 py-32"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(65,88,142,0.75), rgba(176,196,223,0.55)), url(/assets/fondo_descarte.webp)",
            backgroundPosition: "right center",
          }}
        >
          <div className="max-w-2xl space-y-6">
            <h1 className="font-poppins font-bold text-4xl sm:text-6xl text-white leading-tight">
              No te sientes como antes… y no sabes por qué
            </h1>
            <div className="space-y-2 font-open-sans text-lg text-white/90">
              <p>Sigues haciendo tu vida. Cumples, trabajas, respondes.</p>
              <p className="font-semibold">Pero algo cambió.</p>
              <p>Te cuesta concentrarte.</p>
              <p>Te irritas más de lo normal.</p>
              <p>Y aunque descansas… no te sientes mejor.</p>
            </div>
            <p className="font-open-sans text-base text-white/80 italic border-l-4 border-white/60 pl-4">
              Cuando no entiendes lo que te pasa, todo se vuelve más pesado.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 bg-white text-azul font-poppins font-bold rounded-lg transition-all duration-300 hover:bg-celeste"
              >
                Agendar evaluación
              </a>
              <a
                href="#propuesta"
                className="px-7 py-3 border-2 border-white text-white font-poppins font-bold rounded-lg transition-all duration-300 hover:bg-white/10"
              >
                Conocer más
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* PROPUESTA DE VALOR */}
      <section id="propuesta" className="bg-marroncito py-20 px-6 sm:px-16">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-azul">
            Entender lo que estás viviendo es el primer paso para empezar a
            sentirte mejor
          </h2>
          <p className="font-open-sans text-lg text-azul/80 leading-relaxed">
            El descarte de ansiedad, depresión o burnout es una evaluación
            clínica profesional diseñada para ayudarte a comprender con claridad
            qué está pasando contigo.
          </p>
          <p className="font-open-sans text-lg text-azul/80 leading-relaxed">
            No se trata de etiquetar rápidamente.{" "}
            <span className="font-semibold text-azul">
              Se trata de mirar con profundidad, criterio y cuidado
            </span>{" "}
            aquello que hoy se siente confuso.
          </p>
        </div>
      </section>

      {/* ¿QUÉ ES? */}
      <section className="bg-white py-20 px-6 sm:px-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-azul">
            🎯 ¿Qué es esta evaluación?
          </h2>
          <p className="font-open-sans text-lg text-azul/80 leading-relaxed">
            Es un espacio de evaluación clínica donde exploramos:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Síntomas emocionales y físicos",
              "Tu contexto actual",
              "Antecedentes relevantes",
              "Tu forma de afrontar lo que estás viviendo",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-celeste/30 rounded-xl px-5 py-4 border border-celeste"
              >
                <span className="w-2 h-2 rounded-full bg-azul flex-none" />
                <span className="font-open-sans text-azul font-medium text-base">
                  {item}
                </span>
              </div>
            ))}
          </div>
          <p className="font-open-sans text-azul/70 text-base italic">
            Cuando es necesario, se utilizan instrumentos psicológicos validados
            para complementar la evaluación.
          </p>
        </div>
      </section>

      {/* QUÉ TE LLEVAS */}
      <section className="bg-azul py-20 px-6 sm:px-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-white">
            🧩 ¿Qué te llevas de esta evaluación?
          </h2>
          <p className="font-open-sans text-white/80 text-lg">
            Al finalizar, podrás tener:
          </p>
          <div className="space-y-3">
            {[
              "Claridad sobre lo que estás viviendo",
              "Una lectura clínica profesional (no suposiciones)",
              "Identificación de posibles indicadores de ansiedad, depresión o burnout",
              "Diferenciación de otros procesos emocionales",
              "Una orientación clara sobre qué hacer después",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white/10 rounded-xl px-5 py-4 border border-white/20"
              >
                <span className="text-celeste font-bold text-lg">✔</span>
                <span className="font-open-sans text-white text-base leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
          <p className="font-open-sans text-white/70 text-base italic border-l-4 border-celeste pl-4 mt-6">
            Porque a veces, lo que más alivia… no es resolver todo de inmediato,
            sino dejar de vivir con la duda.
          </p>
        </div>
      </section>

      {/* ¿PARA QUIÉN? */}
      <section className="bg-celeste py-20 px-6 sm:px-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-azul">
            ⚠️ ¿Para quién es este servicio?
          </h2>
          <p className="font-open-sans text-lg text-azul/80 leading-relaxed">
            Para personas que sienten que algo no está bien, aunque no puedan
            explicarlo del todo. Por ejemplo, si estás experimentando:
          </p>
          <ul className="space-y-3">
            {[
              "Sensación constante de angustia o inquietud",
              "Agotamiento emocional que no mejora con el descanso",
              "Pérdida de interés o motivación",
              "Dificultad para concentrarte o dormir",
              "Pensamientos repetitivos o sensación de bloqueo",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-azul flex-none" />
                <span className="font-open-sans text-azul text-base leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <div className="bg-white rounded-xl p-6 border-l-4 border-azul shadow-sm">
            <p className="font-open-sans text-azul font-medium text-base">
              No necesitas estar &ldquo;muy mal&rdquo; para consultar. Muchas
              veces, evaluar a tiempo evita que el malestar se intensifique.
            </p>
          </div>
        </div>
      </section>

      {/* ENFOQUE */}
      <section className="bg-marroncito py-20 px-6 sm:px-16">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-azul">
            🧠 Nuestro enfoque
          </h2>
          <p className="font-open-sans text-lg text-azul/80 leading-relaxed">
            En EADES, trabajamos desde una mirada clínica que integra:
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { titulo: "Rigor profesional", icono: "🏆" },
              {
                titulo: "Comprensión profunda de la experiencia emocional",
                icono: "💡",
              },
              { titulo: "Cercanía humana", icono: "🤝" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 text-center shadow-sm border border-celeste space-y-3"
              >
                <span className="text-4xl">{item.icono}</span>
                <p className="font-poppins font-bold text-azul text-base">
                  {item.titulo}
                </p>
              </div>
            ))}
          </div>
          <p className="font-open-sans text-azul/80 text-base leading-relaxed">
            Contamos con experiencia en ansiedad, depresión, crisis vitales y
            procesos complejos. Este descarte no es una solución rápida. Es una
            evaluación estructurada que te permite tomar decisiones con mayor
            claridad.
          </p>
        </div>
      </section>

      {/* PROCESO */}
      <section className="bg-white py-20 px-6 sm:px-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-azul">
            ⏱️ ¿Cómo es el proceso?
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icono: "🕒",
                titulo: "Evaluación",
                detalle: "60 minutos",
              },
              {
                icono: "📄",
                titulo: "Entrega de informe",
                detalle: "Sesión de 30 min a los 7 días",
              },
              {
                icono: "💻",
                titulo: "Modalidad",
                detalle: "Presencial o virtual",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center gap-3 bg-celeste/20 rounded-xl p-6 border border-celeste"
              >
                <span className="text-4xl">{item.icono}</span>
                <h3 className="font-poppins font-bold text-azul text-lg">
                  {item.titulo}
                </h3>
                <p className="font-open-sans text-azul/80 text-base">
                  {item.detalle}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-azul text-white rounded-xl p-6 flex flex-col sm:flex-row sm:items-center gap-3">
            <span className="font-poppins font-bold text-2xl text-celeste flex-none">
              Inversión:
            </span>
            <span className="font-open-sans text-lg">S/ 160 soles</span>
          </div>
        </div>
      </section>

      {/* CTA INTERMEDIO */}
      <section className="bg-azul py-16 px-6 sm:px-16 text-center">
        <div className="max-w-2xl mx-auto space-y-5">
          <p className="font-open-sans text-white/80 text-lg leading-relaxed">
            No necesitas tener todo claro para empezar. Pero seguir sin entender
            lo que te pasa… suele hacerlo más pesado.
          </p>
          <p className="font-poppins font-bold text-white text-xl">
            A veces, el primer alivio no es una solución inmediata.{" "}
            <span className="text-celeste">Es tener claridad.</span>
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-white text-azul font-poppins font-bold text-lg rounded-lg transition-all duration-300 hover:bg-celeste"
          >
            Agendar evaluación
          </a>
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES */}
      <section className="bg-marroncito py-20 px-6 sm:px-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-azul">
            ❓ Preguntas frecuentes
          </h2>
          <div className="space-y-4">
            {[
              {
                pregunta: "¿En una sola sesión ya se sabe todo?",
                respuesta:
                  "Se obtiene una impresión clínica inicial y una orientación profesional. En algunos casos será suficiente; en otros, puede recomendarse una evaluación más amplia.",
              },
              {
                pregunta: "¿Esto reemplaza un tratamiento?",
                respuesta:
                  "No. Es un primer paso para evaluar y orientar, no un proceso terapéutico.",
              },
              {
                pregunta: "¿Qué pasa si encuentran algo importante?",
                respuesta:
                  "Se te explicará con claridad y se te orientará sobre las mejores opciones para tu caso.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 space-y-2 shadow-sm"
              >
                <h3 className="font-poppins font-bold text-azul text-lg">
                  {item.pregunta}
                </h3>
                <p className="font-open-sans text-azul/80 text-base leading-relaxed">
                  {item.respuesta}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-celeste py-24 px-6 sm:px-16 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="font-poppins font-bold text-3xl sm:text-5xl text-azul leading-tight">
            🎯 Empieza por entender lo que te está pasando
          </h2>
          <p className="font-open-sans text-lg text-azul/80 leading-relaxed">
            Agenda tu evaluación de descarte y obtén una orientación clara,
            profesional y adaptada a ti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-azul text-white font-poppins font-bold text-lg rounded-lg transition-all duration-300 hover:bg-azul/80"
            >
              👉 Agendar evaluación
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-azul text-azul font-poppins font-bold text-lg rounded-lg transition-all duration-300 hover:bg-azul/10"
            >
              💬 Escribir por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

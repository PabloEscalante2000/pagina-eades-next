import NewNavBar from "@/components/NewNavBar";
import Link from "next/link";

export const metadata = {
  title: "EADES | Política de Privacidad",
  description: "Conoce cómo EADES Centro Psicoterapéutico trata y protege tus datos personales.",
};

export default function PoliticaPrivacidadPage() {
  return (
    <div className="bg-marroncito min-h-dvh">
      <NewNavBar />
      <main className="max-w-[800px] mx-auto sm:px-10 px-5 pt-48 pb-20 font-poppins text-azul">
        <h1 className="font-bold sm:text-4xl text-3xl mb-2">Política de Privacidad</h1>
        <p className="text-azul/60 text-sm mb-10">Última actualización: marzo 2025</p>

        <div className="space-y-10 font-open-sans text-base leading-relaxed">

          <section className="space-y-3">
            <h2 className="font-poppins font-semibold text-xl">1. Responsable del tratamiento</h2>
            <p>
              <strong>EADES Centro Psicoterapéutico</strong> es el responsable del tratamiento de los datos
              personales que recopilamos a través de este sitio web (<em>grupoeades.org</em>).
            </p>
            <p>
              Para cualquier consulta relacionada con el tratamiento de tus datos puedes contactarnos en:{" "}
              <a href="mailto:infoeades@grupoeades.org" className="underline">infoeades@grupoeades.org</a>
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-poppins font-semibold text-xl">2. Datos que recopilamos</h2>
            <p>Recopilamos los datos que tú mismo nos proporcionas a través del formulario de contacto:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Nombre completo</li>
              <li>Número de teléfono</li>
              <li>Correo electrónico</li>
              <li>Mensaje o consulta</li>
            </ul>
            <p>
              También podemos recopilar datos de navegación de forma anónima (páginas visitadas, tiempo
              de sesión) con fines estadísticos, sin identificar al usuario.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-poppins font-semibold text-xl">3. Finalidad del tratamiento</h2>
            <p>Utilizamos tus datos exclusivamente para:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Responder a tus consultas o solicitudes de información.</li>
              <li>Gestionar la comunicación previa a la atención terapéutica.</li>
              <li>Mejorar los servicios ofrecidos en este sitio web.</li>
            </ul>
            <p>No utilizamos tus datos para envío de publicidad no solicitada ni los cedemos a terceros.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-poppins font-semibold text-xl">4. Base legal</h2>
            <p>
              El tratamiento de tus datos se basa en tu consentimiento explícito al completar y enviar
              el formulario de contacto, de conformidad con la{" "}
              <strong>Ley N.° 29733 — Ley de Protección de Datos Personales</strong> del Perú y su
              reglamento aprobado por D.S. N.° 003-2013-JUS.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-poppins font-semibold text-xl">5. Conservación de datos</h2>
            <p>
              Conservamos tus datos durante el tiempo necesario para atender tu solicitud y, en caso de
              establecerse una relación terapéutica, durante el período que exija la normativa vigente.
              Transcurrido ese tiempo, los datos son eliminados de forma segura.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-poppins font-semibold text-xl">6. Tus derechos</h2>
            <p>Tienes derecho a:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li><strong>Acceso:</strong> conocer qué datos tenemos sobre ti.</li>
              <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
              <li><strong>Cancelación:</strong> solicitar la eliminación de tus datos.</li>
              <li><strong>Oposición:</strong> oponerte al tratamiento de tus datos.</li>
            </ul>
            <p>
              Para ejercer cualquiera de estos derechos escríbenos a{" "}
              <a href="mailto:infoeades@grupoeades.org" className="underline">infoeades@grupoeades.org</a>{" "}
              indicando tu nombre completo y el derecho que deseas ejercer.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-poppins font-semibold text-xl">7. Seguridad</h2>
            <p>
              Aplicamos medidas técnicas y organizativas para proteger tus datos frente a accesos no
              autorizados, pérdida o divulgación indebida. La comunicación entre tu navegador y nuestros
              servidores está cifrada mediante HTTPS.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-poppins font-semibold text-xl">8. Cambios en esta política</h2>
            <p>
              Podemos actualizar esta política en cualquier momento. Los cambios significativos serán
              notificados en esta misma página con la fecha de actualización.
            </p>
          </section>

        </div>

        <div className="mt-14 pt-8 border-t border-azul/20">
          <Link href="/inicio" className="text-azul/70 hover:text-azul underline text-sm transition-colors">
            ← Volver al inicio
          </Link>
        </div>
      </main>
    </div>
  );
}

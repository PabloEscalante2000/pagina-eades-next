import NewNavBar from "@/components/NewNavBar";
import LibroReclamaciones from "@/components/LibroReclamaciones";
import Link from "next/link";

export const metadata = {
  title: "EADES | Libro de Reclamaciones",
  description: "Registra tu reclamo o queja sobre los servicios de EADES Centro Psicoterapéutico.",
};

export default function LibroReclamacionesPage() {
  return (
    <div className="bg-marroncito min-h-dvh">
      <NewNavBar />
      <main className="max-w-[800px] mx-auto sm:px-10 px-5 pt-48 pb-20 font-poppins text-azul">
        <h1 className="font-bold sm:text-4xl text-3xl mb-2">Libro de Reclamaciones</h1>
        <p className="text-azul/60 text-sm mb-10 font-open-sans">
          Conforme a lo establecido en el Código de Protección y Defensa del Consumidor, este
          establecimiento cuenta con un Libro de Reclamaciones a tu disposición. Completa el
          siguiente formulario para registrar tu reclamo o queja.
        </p>

        <LibroReclamaciones />

        <div className="mt-14 pt-8 border-t border-azul/20">
          <Link href="/inicio" className="text-azul/70 hover:text-azul underline text-sm transition-colors">
            ← Volver al inicio
          </Link>
        </div>
      </main>
    </div>
  );
}

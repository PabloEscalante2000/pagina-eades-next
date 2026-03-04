import Image from "next/image";
import Link from "next/link";

export default function BloqServicio({servicio, num, link}) {
  const isPseres = num === 3;

  return (
    <div className={`${num === 1 ? "bg-azul text-white" : num === 2 ? "bg-marroncito text-azul" : "bg-pseres-dark text-pseres-cream"}`}>
        <section id={servicio.id} className="max-w-[1500px] m-auto md:p-10 p-5 rounded-md flex gap-10 md:flex-row flex-col md:justify-start md:items-start justify-center items-center">
            <Image width={960} height={960} alt={servicio.id} src={servicio.img} className="md:w-96 md:h-96 w-64 h-64 rounded-md object-cover object-center flex-none"/>
            <aside className="font-open-sans">
                <h2 className="font-poppins md:text-4xl text-2xl">{servicio.nombre}</h2>
                {isPseres && (
                  <p className="mt-2 text-sm font-poppins" style={{color: "#C39E72"}}>
                    Servicio especializado atendido en <strong>Pseres</strong>, nuestro centro dedicado a la psicología infantil.
                  </p>
                )}
                <div className="text-center space-y-3 mt-3">
                    {servicio.descripcion.map((val,i) => (
                        <p key={i} className="text-lg">
                            {val}
                        </p>
                    ))}
                </div>
                <ul className="p-5 list-disc space-y-3">
                    {servicio.datosEsp.map((val,i) => (
                        <li key={i}><b>{val.titulo}</b>: {val.info}</li>
                    ))}
                </ul>
                <ul className="p-5 list-disc">
                    {servicio.datos.map((val,i) => (
                        <li key={i}>{val}</li>
                    ))}
                </ul>
                {link && (
                  <div className="mt-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    <Link
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 font-poppins font-semibold text-pseres-dark rounded-md transition-all duration-300 hover:opacity-90"
                      style={{backgroundColor: "#C39E72"}}
                    >
                      Visitar Pseres →
                    </Link>
                    <Image src="/logo_pseres_blanco.webp" width={120} height={40} alt="Pseres" className="h-8 w-auto opacity-80" />
                  </div>
                )}
            </aside>
        </section>
    </div>
  )
}

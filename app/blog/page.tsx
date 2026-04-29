import {blog1,blog2,blog3,blog4,blog5,blog6,blog7} from '@/public/data/BlogData'
import NewNavBarLoader from "@/components/NewNavBarLoader"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Blog de Psicología en Lima | Ansiedad, Depresión y Más | EADES",
  description: "Blog de psicología EADES: artículos sobre terapia para ansiedad en Lima, psicólogo para depresión, ayuda psicológica para el estrés y cómo tratar la ansiedad sin medicamentos. Contenido profesional para tu salud mental.",
  keywords: [
    "terapia para ansiedad Lima",
    "psicólogo para depresión Lima",
    "ayuda psicológica estrés",
    "cómo tratar la ansiedad sin medicamentos",
    "psicólogo en Lima",
    "terapia psicológica online Perú",
    "blog psicología Lima",
    "salud mental Lima",
  ],
};

export default function BlogPage() {

  const array = [blog1,blog2,blog3,blog4,blog5,blog6,blog7]

  return (
    <>
    <NewNavBarLoader/>
    <section className="grid grid-cols-1 sm:p-10 p-5 gap-10">
      <section className="col-span-3 space-y-10 gap-10">
        <div className="w-full gap-6 flex flex-col justify-center">
          <div className="relative w-full h-[500px]">
            <Image 
              src={blog1.img_url} 
              alt={blog1.descrpcion} 
              fill
              priority
              className="object-cover object-center"
            />
          </div>
          <h2 className="text-azul font-poppins sm:text-3xl text-xl font-bold sm:px-10 px-5 text-center">{blog1.nombre}</h2>
          <p className="font-open-sans sm:text-lg text-base sm:px-10 px-5 text-center">{blog1.descrpcion}</p>
          <Link href={blog1.url} className="text-xl font-poppins text-white bg-black sm:px-10 px-2 py-2 transition-all ease-in-out duration-500 hover:bg-azul block text-center w-fit m-auto">Leer más</Link>
        </div>
        <section className="grid lg:grid-cols-2 grid-cols-1 justify-stretch gap-10">
          {array.slice(1,7).map((b,i)=>(
            <div className="w-full gap-6 flex flex-col justify-center" key={b.url || i}>
            <div className="relative w-full h-96">
              <Image src={b.img_url} alt={b.descrpcion} fill className="w-full h-96 object-cover object-center"/>
            </div>
            <h2 className="text-azul font-poppins sm:text-3xl text-xl font-bold sm:px-10 px-5 text-center">{b.nombre}</h2>
            <p className="font-open-sans sm:text-lg text-base sm:px-10 px-5 text-center line-clamp-6">{b.descrpcion}</p>
            <Link href={b.url} className="text-xl font-poppins text-white bg-black sm:px-10 px-2 py-2 transition-all ease-in-out duration-500 hover:bg-azul block text-center w-fit m-auto">Leer más</Link>
          </div>
          ))}
        </section>
      </section>
    </section>
    </>
  )
}

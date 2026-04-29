"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock, faMoneyBill1 } from "@fortawesome/free-regular-svg-icons"
import { faUsers, faUserGear, faCaretRight, faDesktop, faChild} from "@fortawesome/free-solid-svg-icons"

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import Swal from "sweetalert2"

const preguntasFrecuentes = [
    {
      preg:"¿Cuanto dura cada sesión?",
      icon:faClock,
      res:"De 45 a 60 minutos."
    },
    {
      preg:"¿Cuáles son los métodos de pago?",
      icon:faMoneyBill1,
      res:"Aceptamos transferencias bancarias, tarjeta de crédito (recargo del 5%)."
    },
    {
      preg:"¿Cuál es la diferencia con otro tipo de terapia?",
      icon:faUsers,
      res:"Hacemos un seguimiento constante al paciente. El terapeuta siempre va estar dispuesto a conversar con el paciente, incluso fuera del horario de las sesiones."
    },
    {
      preg:"¿Tienen tarifa social?",
      icon:faUserGear,
      res:"Sí. Contamos con tarifa social para quienes lo necesiten. Somos un psicólogo económico en Lima sin comprometer la calidad del proceso terapéutico."
    },
    {
      preg:"¿La psicoterapia es online o solo presencial?",
      icon:faDesktop,
      res:"Ofrecemos terapia psicológica online (Perú y el mundo) y también atención presencial en Lima. Tú eliges el formato que mejor se adapte a tu ritmo."
    },
    {
      preg:"¿El centro ofrece terapia para niños/adolescentes?",
      icon:faChild,
      res:"Sí, gracias a la colaboración de PSERES ofrecemos servicios a niños y adolecentes."
    }
  ];

export default function InicioPreguntas() {
    const lanzarPregunta = (preg:string,res:string) => {
        Swal.fire({
            title: preg,
            text: res,
            icon: "question"
        });
    }

    return (
        <div className="grid gap-10 content-center 2xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2 justify-center items-stretch w-fit lg:mx-0 mx-auto">
            {preguntasFrecuentes.map((val,i) => (
            <aside key={i} className="bg-marroncito p-5 shadow-xl flex justify-between items-center flex-col h-full w-full rounded-2xl text-azul gap-5">
                <p className="text-center font-poppins flex-1 py-2">
                <FontAwesomeIcon icon={val.icon} className="text-xl"/><br/>{val.preg}
                </p>
                {/* <button className="px-3 py-1 block font-open-sans bg-azul text-marroncito rounded-lg transition-all ease-in-out duration-500 hover:bg-celeste" 
                aria-label="Preguntas Frecuentes"
                onClick={() => lanzarPregunta(val.preg,val.res)}>
                <span className="sm:block hidden">Más información</span>
                <span className="sm:hidden block">
                    <FontAwesomeIcon icon={faCaretRight} />
                </span>
                </button> */}
                <p className="text-center">{val.res}</p>
            </aside>
            ))}
        </div>
    )
}
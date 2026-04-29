import BlogContentLoader from "@/components/BlogContentLoader";
import {content7} from "@/public/data/BlogContentData"

export const metadata = {
  title: "Terapia para la Ansiedad en Lima | Cómo Tratarla sin Medicamentos | EADES",
  description: "Terapia para ansiedad en Lima: cómo tratar la ansiedad sin medicamentos con psicoterapia. Conoce los enfoques del centro psicológico EADES para el manejo de la ansiedad en adultos. Atención presencial y online en Perú.",
  keywords: [
    "terapia para ansiedad Lima",
    "cómo tratar la ansiedad sin medicamentos",
    "psicólogo para ansiedad Lima",
    "terapia psicológica Lima",
    "psicoterapia Lima Perú",
    "ayuda psicológica estrés",
    "terapia psicológica online Perú",
  ],
};

function ArticuloUno () {
    return (
        <>
            <BlogContentLoader content={content7} />
        </>
    )
}

export default ArticuloUno
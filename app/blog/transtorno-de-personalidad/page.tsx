import BlogContentLoader from "@/components/BlogContentLoader";
import {content5} from "@/public/data/BlogContentData"

export const metadata = {
  title: "Trastornos de Personalidad | Psicólogo en Lima | EADES",
  description: "Información sobre trastornos de personalidad desde el centro psicológico EADES en Lima. Psicólogo en Lima especializado en psicoterapia con enfoque integral para adultos. Terapia psicológica Lima Perú presencial y online.",
};

function ArticuloUno () {
    return (
        <>
            <BlogContentLoader content={content5} />
        </>
    )
}

export default ArticuloUno
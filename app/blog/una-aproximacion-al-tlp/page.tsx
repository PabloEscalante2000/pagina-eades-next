import BlogContentLoader from "@/components/BlogContentLoader";
import {content2} from "@/public/data/BlogContentData"

export const metadata = {
  title: "Trastorno Límite de Personalidad (TLP) | Psicólogo en Lima | EADES",
  description: "Psicólogo en Lima especializado en Trastorno Límite de Personalidad (TLP). El centro psicológico EADES ofrece terapia psicológica con enfoque integral. Psicoterapia Lima Perú presencial y online.",
};

function ArticuloUno () {
    return (
        <>
            <BlogContentLoader content={content2} />
        </>
    )
}

export default ArticuloUno
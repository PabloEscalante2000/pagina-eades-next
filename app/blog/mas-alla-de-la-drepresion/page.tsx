import BlogContentLoader from "@/components/BlogContentLoader";
import {content1} from "@/public/data/BlogContentData"

export const metadata = {
  title: "Psicólogo para la Depresión en Lima | Depresión: Enfermedad Emocional | EADES",
  description: "¿Buscas un psicólogo para la depresión en Lima? Conoce qué es la depresión, sus causas y cómo tratarla. El centro psicológico EADES ofrece terapia psicológica en Lima Perú con enfoque integral y personalizado.",
};

function ArticuloUno () {
    return (
        <>
            <BlogContentLoader content={content1} />
        </>
    )
}

export default ArticuloUno
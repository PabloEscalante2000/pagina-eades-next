import BlogContentLoader from "@/components/BlogContentLoader";
import {content4} from "@/public/data/BlogContentData"

export const metadata = {
  title: "Ayuda Psicológica para el Estrés y Agotamiento Emocional en Lima | EADES",
  description: "Ayuda psicológica para el estrés y agotamiento emocional en Lima. El centro psicológico EADES ofrece terapia psicológica para el burnout y fatiga crónica. Psicólogo en Lima con atención presencial y online en Perú.",
};

function ArticuloUno () {
    return (
        <>
            <BlogContentLoader content={content4} />
        </>
    )
}

export default ArticuloUno
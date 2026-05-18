import BlogContentLoader from "@/components/BlogContentLoader";
import {content3} from "@/public/data/BlogContentData"

export const metadata = {
  title: "Psicólogo para Ataques de Pánico en Lima | Terapia para Ansiedad | EADES",
  description: "¿Sufres ataques de pánico? El centro psicológico EADES en Lima ofrece terapia para ansiedad y ataques de pánico. Psicólogo recomendado en Lima con enfoque integral y atención online en Perú.",
};

function ArticuloUno () {
    return (
        <>
            <BlogContentLoader content={content3} />
        </>
    )
}

export default ArticuloUno
import BlogContentLoader from "@/components/BlogContentLoader";
import {content3} from "@/public/data/BlogContentData"

export const metadata = {
  title: "Psicólogo para Ataques de Pánico en Lima | Terapia para Ansiedad | EADES",
  description: "¿Sufres ataques de pánico? El centro psicológico EADES en Lima ofrece terapia para ansiedad y ataques de pánico. Psicólogo recomendado en Lima con enfoque integral y atención online en Perú.",
  keywords: [
    "terapia para ansiedad Lima",
    "psicólogo en Lima",
    "cómo tratar la ansiedad sin medicamentos",
    "ataque de pánico tratamiento Lima",
    "terapia psicológica Lima",
    "psicólogo recomendado en Lima",
    "ayuda psicológica estrés",
  ],
};

function ArticuloUno () {
    return (
        <>
            <BlogContentLoader content={content3} />
        </>
    )
}

export default ArticuloUno
import BlogContentLoader from "@/components/BlogContentLoader";
import {content6} from "@/public/data/BlogContentData"

export const metadata = {
  title: "Congreso Internacional EADES | Centro Psicológico Lima | EADES",
  description: "Primer Congreso Internacional EADES: formación y actualización en psicología clínica en Lima. Centro psicológico líder en psicoterapia Lima Perú. Psicólogo recomendado en Lima con enfoque integral y rigor académico.",
};

function ArticuloUno () {
    return (
        <>
            <BlogContentLoader content={content6} />
        </>
    )
}

export default ArticuloUno
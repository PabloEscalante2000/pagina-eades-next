import BlogContentLoader from "@/components/BlogContentLoader";
import {content3} from "@/public/data/BlogContentData"

function ArticuloUno () {
    return (
        <>
            <BlogContentLoader content={content3} />           
        </>
    )
}

export default ArticuloUno
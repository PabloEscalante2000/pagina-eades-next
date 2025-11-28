import BlogContentLoader from "@/components/BlogContentLoader";
import {content5} from "@/public/data/BlogContentData"

function ArticuloUno () {
    return (
        <>
            <BlogContentLoader content={content5} />           
        </>
    )
}

export default ArticuloUno
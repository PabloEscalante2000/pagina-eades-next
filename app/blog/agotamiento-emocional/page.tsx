import BlogContentLoader from "@/components/BlogContentLoader";
import {content4} from "@/public/data/BlogContentData"

function ArticuloUno () {
    return (
        <>
            <BlogContentLoader content={content4} />           
        </>
    )
}

export default ArticuloUno
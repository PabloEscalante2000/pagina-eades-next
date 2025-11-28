import BlogContentLoader from "@/components/BlogContentLoader";
import {content2} from "@/public/data/BlogContentData"

function ArticuloUno () {
    return (
        <>
            <BlogContentLoader content={content2} />           
        </>
    )
}

export default ArticuloUno
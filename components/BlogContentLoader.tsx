import dynamic from "next/dynamic";

const BlogContentDynamic = dynamic(() =>
  import("./BlogContent"),
);

export default BlogContentDynamic;

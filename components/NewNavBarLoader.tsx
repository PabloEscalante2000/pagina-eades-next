import dynamic from "next/dynamic";

const BlogContentDynamic = dynamic(() =>
  import("./NewNavBar"), 
);

export default BlogContentDynamic;

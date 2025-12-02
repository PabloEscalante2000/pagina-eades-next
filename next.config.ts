import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"lh3.googleusercontent.com"
      },
      {
        protocol:"https",
        hostname:"i.pinimg.com"
      }
    ]
  },
  output:"export",
  basePath:"/",
  assetPrefix: "./"
};

export default nextConfig;

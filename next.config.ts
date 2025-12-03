
/** @type {import('next').NextConfig} */
// const nextConfig = {
//   // ❌ NO PONER output: "export"
//   // ❌ NO PONER assetPrefix
//   // ❌ NO PONER trailingSlash

//   images: {
//     // En dev, Next optimiza imágenes normalmente
//     remotePatterns: [
//       { protocol: "https", hostname: "lh3.googleusercontent.com" },
//       { protocol: "https", hostname: "i.pinimg.com" }
//     ]
//   }
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  images: {
    unoptimized: true, // obligatorio para export
    remotePatterns: [
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "i.pinimg.com" }
    ]
  }, 
  trailingSlash: true    // rutas /pagina/ → /pagina/index.html
};

export default nextConfig;

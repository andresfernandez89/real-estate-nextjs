/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.nizzipropiedades.com",
        port: "",
        pathname: "/thumbnails/propiedades/**",
      },
    ],
  },
};

export default nextConfig;

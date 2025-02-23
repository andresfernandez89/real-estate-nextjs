/** @type {import('next').NextConfig} */
const nextConfig = {};

if (process.env.NODE_ENV === "development") {
  await setupDevPlatform();
}

export default nextConfig;

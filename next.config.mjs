/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      RAZOR_SECRET: process.env.RAZOR_SECRET,
      MONGO_URI: process.env.MONGO_URI,
    },
  };
  
export default nextConfig;
  
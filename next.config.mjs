/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    // SERVER_URL: "http://localhost:3002",
    SERVER_URL: "https://inventory-api-7y7n.onrender.com",
    JWT_KEY: "inventory_app_jwt",
  },
};

export default nextConfig;

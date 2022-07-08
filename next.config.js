/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  reactStrictMode: true, 
  images: {
      domains: ['uploadfotoseventos.s3.sa-east-1.amazonaws.com']
  }
}

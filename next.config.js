/** @type {import('next').NextConfig} */

// next.config.js
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
      },
    ],
  },
}



module.exports = nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.s2asso.ovh', 's2asso.ovh'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig




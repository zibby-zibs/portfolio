/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io', 'images.app.goo.gl']
  }
}

module.exports = nextConfig

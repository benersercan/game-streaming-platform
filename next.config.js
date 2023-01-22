/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
const path = require('path')
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'assets/styles')],
  },
  images: {
    domains: [
      'robohash.org',
      'static-cdn.jtvnw.net',
    ],
  },
  nextConfig
};

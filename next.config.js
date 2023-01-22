/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

/* module.exports = nextConfig */

const path       = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'assets/styles')],
  },
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com',
      'robohash.org',
      'static-cdn.jtvnw.net',
    ],
  },
};

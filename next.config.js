/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ['image.tmdb.org', 'rb.gy'],
  },
};

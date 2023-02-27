/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: module,
  transpilePackages: ['@stripe/firestore-stripe-payments'],
  images: {
    dangerouslyAllowSVG: true,
    domains: ['image.tmdb.org', 'rb.gy'],
  },
};

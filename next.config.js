/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'www.notion.so',
      'prod-files-secure.s3.us-west-2.amazonaws.com',
      'prod-files-secure.s3.us-west-2.amazonaws.com/37916ca4-6cf3-44b7-8a6a-ed4f43e55de7',
    ],
  },
}

module.exports = nextConfig

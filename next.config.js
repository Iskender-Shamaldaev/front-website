// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     env: {
//         API_TOKEN: process.env.API_TOKEN
//     },
//     images: {
//         remotePatterns: [
//             {
//                 protocol: "https",
//                 hostname: "**",
//             },
//             {
//                 protocol: "http",
//                 hostname: "127.0.0.1",
//             },
//         ],
//     },
// };
//
// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
        API_TOKEN: process.env.API_TOKEN
    },
  images: {
    domains: ["res.cloudinary.com"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  output: "standalone",
};

module.exports = nextConfig;

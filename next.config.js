/** @type {import('next').NextConfig} */
const nextConfig = {
   
 images: {
    remotePatterns: [
      {
        hostname: "replicate.delivery",
        protocol: "https",
      },
    ],
  },
      webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig

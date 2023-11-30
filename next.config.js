/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ithziibcssacozypajoz.supabase.co",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;

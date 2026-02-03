import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {hostname:'randomuser.me'},
      {hostname:'images.unsplash.com'},
    ]
  },
  reactCompiler: true,
};

export default nextConfig;

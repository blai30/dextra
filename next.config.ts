import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === 'development' ? undefined : '/dextra',
  images: {
    unoptimized: true,
  },
}

export default nextConfig

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Optimisation des images Next.js
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig

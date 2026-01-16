/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Domain خود detect کرے گا
  env: {
    // Automatic domain detection
    NEXT_PUBLIC_SITE_URL: 'https://dmcamaster.com',
  },
  
  // Production کے لیے output type
  ...(process.env.NODE_ENV === 'production' && {
    output: 'standalone',
  }),
  
  images: {
    remotePatterns: [
      // سب سے پہلے اپنا domain شامل کریں
      {
        protocol: 'https',
        hostname: 'dmcamaster.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'silver-echidna-498497.hostingersite.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'c.animaapp.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        pathname: '/**',
      },
      // Localhost کے لیے
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
      },
    ],
    // Hostinger پر image optimization کے مسائل سے بچنے کے لیے
    unoptimized: false,
  },
  
  // Base URL کے مسائل کو solve کرنے کے لیے
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://dmcamaster.com/api/:path*',
      },
    ]
  },
  
  // CORS issues کو solve کرنے کے لیے
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value:'https://dmcamaster.com',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
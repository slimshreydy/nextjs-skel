/** @type {import('next').NextConfig} */

const CSP_HEADER = {
  "default-src": "'self'",
  "script-src": "'self' 'unsafe-inline' va.vercel-scripts.com vercel.live",
  "style-src": "'self' 'unsafe-inline' vercel.live",
  "img-src": "'self' blob: data: vercel.com",
  "font-src": "'self'",
  "object-src": "'none'",
  "frame-src": "'self' vercel.live",
  "base-uri": "'self'",
  "form-action": "'self'",
  "frame-ancestors": "'none'",
  "block-all-mixed-content": "",
  "upgrade-insecure-requests": "",
}

if (process.env.NODE_ENV === 'development') {
  CSP_HEADER["script-src"] += " 'unsafe-eval'"
}

const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Content-Security-Policy-Report-Only',
            value: Object.entries(CSP_HEADER).map(([type, policy]) => `${type} ${policy}`).join('; '),
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), microphone=(), camera=(), bluetooth=(), display-capture=(), payment=()'
          }
        ],
      },
    ]
  },
};

export default nextConfig;

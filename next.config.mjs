/** @type {import('next').NextConfig} */

const CSP_HEADER = {
  "default-src": ["'self'"],
  "script-src": ["'self'", "'unsafe-inline'", "'wasm-unsafe-eval'", "va.vercel-scripts.com"],
  "style-src": ["'self'", "'unsafe-inline'"],
  "img-src": ["'self'", "blob:", "data:"],
  "font-src": ["'self'"],
  "object-src": ["'none'"],
  "frame-src": ["'self'"],
  "connect-src": ["'self'", "cdn.jsdelivr.net"],
  "base-uri": ["'self'"],
  "form-action": ["'self'"],
  "frame-ancestors": ["'none'"],
  "block-all-mixed-content": [""],
  "upgrade-insecure-requests": [""],
}

if (process.env.VERCEL_ENV === "preview") {
  CSP_HEADER["script-src"].push(...["vercel.live"])
  CSP_HEADER["style-src"].push(...["vercel.live"])
  CSP_HEADER["img-src"].push(...["vercel.com"])
  CSP_HEADER["connect-src"].push(...["vercel.live", "pusher.com"])
  CSP_HEADER["frame-src"].push(...["vercel.live"])
  CSP_HEADER["font-src"].push(...["vercel.live"])
}

if (process.env.VERCEL_ENV === "development") {
  CSP_HEADER["script-src"].push("'unsafe-eval'")
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
            value: Object.entries(CSP_HEADER).map(([type, policy]) => `${type} ${policy.join(" ")}`).join('; '),
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

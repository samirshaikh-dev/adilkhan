/** @type {import('next').NextConfig} */
const discoveryHeaders = [
  {
    key: "Cache-Control",
    value: "public, max-age=0, s-maxage=86400",
  },
  {
    key: "X-Robots-Tag",
    value: "noindex, follow",
  },
];

const nextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
      {
        source: "/llms.txt",
        headers: [
          {
            key: "Content-Type",
            value: "text/plain; charset=utf-8",
          },
          ...discoveryHeaders,
        ],
      },
      {
        source: "/llms-full.txt",
        headers: [
          {
            key: "Content-Type",
            value: "text/plain; charset=utf-8",
          },
          ...discoveryHeaders,
        ],
      },
      {
        source: "/.well-known/llms.txt",
        headers: [
          {
            key: "Content-Type",
            value: "text/plain; charset=utf-8",
          },
          ...discoveryHeaders,
        ],
      },
      {
        source: "/.well-known/security.txt",
        headers: [
          {
            key: "Content-Type",
            value: "text/plain; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=0, s-maxage=86400",
          },
          {
            key: "X-Robots-Tag",
            value: "noindex, follow",
          },
        ],
      },
      {
        source: "/:path*.md",
        headers: [
          {
            key: "Content-Type",
            value: "text/markdown; charset=utf-8",
          },
          ...discoveryHeaders,
        ],
      },
      {
        source: "/feed.xml",
        headers: [
          {
            key: "Content-Type",
            value: "application/rss+xml; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=0, s-maxage=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

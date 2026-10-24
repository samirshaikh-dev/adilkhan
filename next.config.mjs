import fs from "fs";
import path from "path";

// Auto-sync social preview image into public/images and cleanup temporary artifacts
try {
  const rootImg = path.join(process.cwd(), "adil_social_preview.jpg");
  const destDir = path.join(process.cwd(), "public", "images");
  const destImg = path.join(destDir, "adil-social-preview.jpg");
  const destPng = path.join(destDir, "adil-social-preview.png");
  const ogDir = path.join(destDir, "og");
  const ogImg = path.join(ogDir, "adil-social-preview.jpg");

  if (fs.existsSync(rootImg)) {
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    fs.copyFileSync(rootImg, destImg);
    fs.copyFileSync(rootImg, destPng);

    if (!fs.existsSync(ogDir)) {
      fs.mkdirSync(ogDir, { recursive: true });
    }
    fs.copyFileSync(rootImg, ogImg);
  }

  // Remove conflicting duplicate opengraph-image.jsx so opengraph-image.js works cleanly
  const conflictingOg = path.join(process.cwd(), "src", "app", "opengraph-image.jsx");
  if (fs.existsSync(conflictingOg)) {
    fs.unlinkSync(conflictingOg);
  }

  const apiDir = path.join(process.cwd(), "src", "app", "api");
  if (fs.existsSync(apiDir)) {
    fs.rmSync(apiDir, { recursive: true, force: true });
  }

  const imgRouteDir = path.join(process.cwd(), "src", "app", "images");
  if (fs.existsSync(imgRouteDir)) {
    fs.rmSync(imgRouteDir, { recursive: true, force: true });
  }
} catch (e) {
  // safe fallback
}

/** @type {import('next').NextConfig} */
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
    ];
  },
};

export default nextConfig;

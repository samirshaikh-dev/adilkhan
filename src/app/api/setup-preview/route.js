import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const SOURCE_PATH = path.join(process.cwd(), "adil_social_preview.jpg");
    const destDir = path.join(process.cwd(), "public", "images");
    const destFile = path.join(destDir, "adil-social-preview.jpg");
    const destPng = path.join(destDir, "adil-social-preview.png");

    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    if (fs.existsSync(SOURCE_PATH)) {
      const buffer = fs.readFileSync(SOURCE_PATH);
      fs.writeFileSync(destFile, buffer);
      fs.writeFileSync(destPng, buffer);
    }

    const ogPath = path.join(process.cwd(), "src", "app", "opengraph-image.jsx");
    if (fs.existsSync(ogPath)) {
      fs.unlinkSync(ogPath);
    }

    const imagesRouteJpg = path.join(
      process.cwd(),
      "src",
      "app",
      "images",
      "adil-social-preview.jpg",
      "route.js"
    );
    if (fs.existsSync(imagesRouteJpg)) {
      fs.unlinkSync(imagesRouteJpg);
    }

    const imagesRoutePng = path.join(
      process.cwd(),
      "src",
      "app",
      "images",
      "adil-social-preview.png",
      "route.js"
    );
    if (fs.existsSync(imagesRoutePng)) {
      fs.unlinkSync(imagesRoutePng);
    }

    return new Response(JSON.stringify({ success: true, created: destFile }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message, stack: err.stack }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

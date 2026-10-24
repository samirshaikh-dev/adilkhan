import fs from "fs";
import path from "path";

const SOURCE_PATH = path.join(process.cwd(), "adil_social_preview.jpg");

export async function GET() {
  try {
    const destDir = path.join(process.cwd(), "public", "images");
    const destFile = path.join(destDir, "adil-social-preview.jpg");
    const destPng = path.join(destDir, "adil-social-preview.png");
    const opengraphPath = path.join(process.cwd(), "src", "app", "opengraph-image.jsx");

    // Clean up reserved route file if present so standard metadata.openGraph.images takes full effect
    if (fs.existsSync(opengraphPath)) {
      try {
        fs.unlinkSync(opengraphPath);
      } catch {
        // ignore
      }
    }

    if (fs.existsSync(SOURCE_PATH)) {
      const buffer = fs.readFileSync(SOURCE_PATH);

      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }
      fs.writeFileSync(destFile, buffer);
      fs.writeFileSync(destPng, buffer);

      return new Response(buffer, {
        headers: {
          "Content-Type": "image/jpeg",
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      });
    }

    if (fs.existsSync(destFile)) {
      const buffer = fs.readFileSync(destFile);
      return new Response(buffer, {
        headers: {
          "Content-Type": "image/jpeg",
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      });
    }

    return new Response("Preview image not found", { status: 404 });
  } catch (err) {
    return new Response(err.message, { status: 500 });
  }
}

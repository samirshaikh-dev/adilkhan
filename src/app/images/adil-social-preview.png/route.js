import fs from "fs";
import path from "path";

const SOURCE_PATH = path.join(process.cwd(), "adil_social_preview.jpg");

export async function GET() {
  try {
    const destDir = path.join(process.cwd(), "public", "images");
    const destFile = path.join(destDir, "adil-social-preview.jpg");

    if (fs.existsSync(SOURCE_PATH)) {
      const buffer = fs.readFileSync(SOURCE_PATH);
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

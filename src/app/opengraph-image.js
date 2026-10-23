import { ImageResponse } from "next/og";
import { site } from "../data/site";
import { LOCATION, SEO, SITE_URL } from "../data/seo";

export const alt =
  "Adil Khan, MBA student and national-level grappling medallist based in Vapi, Gujarat 396191";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const hostname = new URL(SITE_URL).hostname;

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b1220",
          color: "#f7f5f2",
          fontFamily: "sans-serif",
          padding: "72px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "#c9a227",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 18px",
              border: "1px solid rgba(201, 162, 39, 0.45)",
              borderRadius: "999px",
              color: "#c9a227",
              fontSize: "18px",
              letterSpacing: "0.16em",
            }}
          >
            MBA STUDENT / GRAPPLING MEDALLIST
          </div>
          <div
            style={{
              display: "flex",
              color: "#a8b4c4",
              fontSize: "20px",
              letterSpacing: "0.08em",
            }}
          >
            {LOCATION.city.toUpperCase()} / {LOCATION.region.toUpperCase()}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              display: "flex",
              fontSize: "104px",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "34px",
              lineHeight: 1.35,
              color: "#a8b4c4",
              maxWidth: "860px",
            }}
          >
            National-level grappling medallist and MBA student in Vapi, Gujarat.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(247, 245, 242, 0.14)",
            paddingTop: "26px",
            color: "#a8b4c4",
            fontSize: "22px",
          }}
        >
          <div style={{ display: "flex", color: "#c9a227" }}>
            {LOCATION.fullLabel}
          </div>
          <div style={{ display: "flex" }}>{hostname}</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

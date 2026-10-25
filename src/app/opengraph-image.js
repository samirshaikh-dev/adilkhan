import { ImageResponse } from "next/og";
import { site } from "../data/site";
import { LOCATION, SITE_URL } from "../data/seo";

export const alt =
  "Adil Khan, MBA candidate and national-level grappling medallist based in Vapi, Gujarat";
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
          background: "#F7F8F2",
          color: "#0A0A0A",
          fontFamily: "sans-serif",
          padding: "64px 72px 56px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "10px",
            background: "#B8FF00",
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
              gap: "12px",
              color: "#5F6368",
              fontSize: "18px",
              fontWeight: 600,
              letterSpacing: "0.12em",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "10px",
                height: "10px",
                borderRadius: "999px",
                background: "#B8FF00",
              }}
            />
            MBA CANDIDATE / NATIONAL-LEVEL ATHLETE
          </div>
          <div
            style={{
              display: "flex",
              color: "#5F6368",
              fontSize: "18px",
              letterSpacing: "0.08em",
            }}
          >
            {LOCATION.city.toUpperCase()} / {LOCATION.region.toUpperCase()}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              fontSize: "112px",
              fontWeight: 700,
              letterSpacing: "-0.06em",
              lineHeight: 0.95,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "40px",
              fontWeight: 500,
              letterSpacing: "-0.03em",
              lineHeight: 1.25,
              color: "#5F6368",
              maxWidth: "900px",
            }}
          >
            Business in mind. Discipline in action.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid #DFE2D8",
            paddingTop: "24px",
            color: "#5F6368",
            fontSize: "20px",
          }}
        >
          <div style={{ display: "flex" }}>
            BBA graduate · MBA in progress · Grappling
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

import { ImageResponse } from "next/og";
import { company } from "@/content/company";

export const alt = `${company.name} — ${company.tagline}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#101826",
          color: "#f3eee4",
          padding: "72px",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#d4b36a",
          }}
        >
          {company.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 84,
              lineHeight: 1.05,
              fontFamily: "Georgia, serif",
            }}
          >
            {company.tagline}
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 28,
              maxWidth: 820,
              color: "rgba(243, 238, 228, 0.78)",
            }}
          >
            {company.shortDescription}
          </div>
        </div>
      </div>
    ),
    size,
  );
}

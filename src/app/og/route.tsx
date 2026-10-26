import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0B1020",
          color: "#E5E7EB",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 120,
            borderRadius: 28,
            background: "linear-gradient(135deg, #22D3EE, #3B82F6)",
            color: "#0B1020",
            fontSize: 56,
            fontWeight: 700,
          }}
        >
          AS
        </div>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 700, marginTop: 40 }}>
          {siteConfig.name}
        </div>
        <div style={{ display: "flex", fontSize: 36, color: "#22D3EE", marginTop: 16 }}>
          {siteConfig.headline}
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}

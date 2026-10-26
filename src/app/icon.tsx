import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 8,
          background: "linear-gradient(135deg, #22D3EE, #3B82F6)",
          color: "#0B1020",
          fontSize: 16,
          fontWeight: 700,
        }}
      >
        {siteConfig.name
          .split(" ")
          .map((p) => p[0])
          .join("")}
      </div>
    ),
    size,
  );
}

import { ImageResponse } from "next/og";

export const alt = "Akshith Reddy — AI Engineer & Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const bars = Array.from({ length: 48 }, (_, i) => 12 + Math.abs(Math.sin(i * 0.5)) * 110 * Math.sin((Math.PI * i) / 47));
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#05060a",
          backgroundImage: "radial-gradient(circle at 15% 10%, #123245 0%, #05060a 45%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 24, color: "#a3a8bd" }}>
          <div style={{ width: 12, height: 12, borderRadius: 99, background: "#34d399" }} />
          Software Engineer II @ Accellor · Hyderabad
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 112, fontWeight: 800, letterSpacing: -4, lineHeight: 1 }}>Akshith Reddy</div>
          <div
            style={{
              marginTop: 18,
              fontSize: 44,
              fontWeight: 700,
              backgroundImage: "linear-gradient(90deg, #67e8f9, #a78bfa, #fbbf24)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            AI Engineer · Multi-Agent & Voice AI
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, height: 130 }}>
          {bars.map((h, i) => (
            <div
              key={i}
              style={{
                width: 10,
                height: h,
                borderRadius: 6,
                background: i < 16 ? "#22d3ee" : i < 32 ? "#8b5cf6" : "#f59e0b",
                opacity: 0.85,
              }}
            />
          ))}
        </div>
      </div>
    ),
    size,
  );
}

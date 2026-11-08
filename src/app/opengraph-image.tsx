import { ImageResponse } from "next/og";

export const alt = "Tehseen Dahya";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Social preview: the same green engineering-pad paper as the site.
export default function OpengraphImage() {
  const grid = "#d5e0c7";
  const major = "#bfcfad";
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "72px 96px",
          backgroundColor: "#edf2e4",
          backgroundImage: `linear-gradient(${major} 1px, transparent 1px), linear-gradient(90deg, ${major} 1px, transparent 1px), linear-gradient(${grid} 1px, transparent 1px), linear-gradient(90deg, ${grid} 1px, transparent 1px)`,
          backgroundSize: "120px 120px, 120px 120px, 24px 24px, 24px 24px",
          color: "#28302b",
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -2 }}>Tehseen Dahya</div>
        <div style={{ marginTop: 16, fontSize: 36, maxWidth: 900, lineHeight: 1.35 }}>
          Engineering at Duke. Building software for messy, real-world problems.
        </div>
        <div style={{ marginTop: 40, fontSize: 28, color: "#2b45c2" }}>tehseendahya.com</div>
      </div>
    ),
    size,
  );
}

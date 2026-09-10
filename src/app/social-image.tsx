import { ImageResponse } from "next/og";

export const socialImageSize = {
  width: 1200,
  height: 630,
};

export const socialImageContentType = "image/png";

export function createSocialImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#f7f2e8",
          color: "#2b2118",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: "64px",
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            background: "#dfc6a3",
            border: "2px solid rgba(43, 33, 24, 0.12)",
            borderRadius: "40px",
            display: "flex",
            height: "100%",
            justifyContent: "space-between",
            overflow: "hidden",
            padding: "64px 72px",
            position: "relative",
            width: "100%",
          }}
        >
          <div
            style={{
              background: "#40513b",
              borderRadius: "999px",
              height: "420px",
              opacity: 0.16,
              position: "absolute",
              right: "-120px",
              top: "-150px",
              width: "420px",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column", maxWidth: "760px" }}>
            <div
              style={{
                color: "#b86f36",
                display: "flex",
                fontSize: "24px",
                fontWeight: 700,
                letterSpacing: "0.18em",
                marginBottom: "24px",
                textTransform: "uppercase",
              }}
            >
              Coffee &amp; Space · Purwokerto
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "104px",
                fontWeight: 700,
                letterSpacing: "-0.05em",
                lineHeight: 0.9,
              }}
            >
              ruang temu
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "32px",
                lineHeight: 1.35,
                marginTop: "34px",
                maxWidth: "690px",
              }}
            >
              Ruang untuk menikmati kopi, bekerja, dan bertemu dalam suasana tenang.
            </div>
          </div>
          <div
            style={{
              alignItems: "center",
              background: "#2b2118",
              borderRadius: "50%",
              display: "flex",
              flex: "0 0 auto",
              height: "210px",
              justifyContent: "center",
              position: "relative",
              width: "210px",
            }}
          >
            <div
              style={{
                border: "16px solid #f7f2e8",
                borderRadius: "8px 8px 48px 48px",
                display: "flex",
                height: "92px",
                position: "relative",
                width: "104px",
              }}
            />
            <div
              style={{
                border: "14px solid #f7f2e8",
                borderLeft: "0",
                borderRadius: "0 38px 38px 0",
                display: "flex",
                height: "62px",
                position: "absolute",
                right: "31px",
                top: "66px",
                width: "35px",
              }}
            />
            <div
              style={{
                background: "#b86f36",
                borderRadius: "999px",
                bottom: "42px",
                display: "flex",
                height: "10px",
                position: "absolute",
                width: "130px",
              }}
            />
          </div>
        </div>
      </div>
    ),
    socialImageSize,
  );
}
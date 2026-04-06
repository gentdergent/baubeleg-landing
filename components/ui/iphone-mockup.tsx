"use client";

import React, { ReactNode } from "react";

type IPhoneModel = "14" | "14-pro" | "15" | "15-pro" | "x" | "plain";

const DEVICE_SPECS: Record<
  IPhoneModel,
  {
    w: number;
    h: number;
    radius: number;
    bezel: number;
    topSafe: number;
    bottomSafe: number;
    notch?: { w: number; h: number; r: number };
    island?: { w: number; h: number; r: number };
  }
> = {
  x: {
    w: 375, h: 812, radius: 50, bezel: 12,
    topSafe: 47, bottomSafe: 34,
    notch: { w: 210, h: 35, r: 18 },
  },
  "14": {
    w: 390, h: 844, radius: 56, bezel: 12,
    topSafe: 47, bottomSafe: 34,
    notch: { w: 225, h: 33, r: 18 },
  },
  "14-pro": {
    w: 393, h: 852, radius: 56, bezel: 12,
    topSafe: 59, bottomSafe: 34,
    island: { w: 126, h: 37, r: 20 },
  },
  "15": {
    w: 393, h: 852, radius: 56, bezel: 12,
    topSafe: 59, bottomSafe: 34,
    island: { w: 126, h: 37, r: 20 },
  },
  "15-pro": {
    w: 393, h: 852, radius: 56, bezel: 12,
    topSafe: 59, bottomSafe: 34,
    island: { w: 126, h: 37, r: 20 },
  },
  plain: {
    w: 390, h: 844, radius: 56, bezel: 12,
    topSafe: 16, bottomSafe: 16,
  },
};

const PRESET_COLORS: Record<string, string> = {
  black: "#0b0b0d",
  midnight: "#0b0c10",
  silver: "#d7d8dc",
  "space-black": "#1c1e22",
  titanium: "#837a72",
  "natural-titanium": "#a69a8a",
};

function shade(hex: string, pct: number): string {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex.trim());
  if (!m) return hex;
  const [r, g, b] = [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)];
  const k = (100 + pct) / 100;
  const to = (v: number) => Math.max(0, Math.min(255, Math.round(v * k)));
  return `#${to(r).toString(16).padStart(2, "0")}${to(g).toString(16).padStart(2, "0")}${to(b).toString(16).padStart(2, "0")}`;
}

export interface IPhoneMockupProps {
  model?: IPhoneModel;
  color?: string;
  scale?: number;
  shadow?: boolean | string;
  screenBg?: string;
  showHomeIndicator?: boolean;
  innerShadow?: boolean;
  className?: string;
  children?: ReactNode;
}

export function IPhoneMockup({
  model = "15-pro",
  color = "space-black",
  scale = 1,
  shadow = true,
  screenBg = "#000",
  showHomeIndicator = true,
  innerShadow = true,
  className,
  children,
}: IPhoneMockupProps) {
  const spec = DEVICE_SPECS[model];
  const resolvedBezel = spec.bezel;
  const outerWidth = spec.w + resolvedBezel * 2;
  const outerHeight = spec.h + resolvedBezel * 2;
  const outerRadius = spec.radius + resolvedBezel;

  const colorHex = PRESET_COLORS[color] ?? color;
  const frameGradient = `linear-gradient(135deg, ${shade(colorHex, 8)} 0%, ${colorHex} 40%, ${shade(colorHex, -14)} 100%)`;

  const outerShadow =
    typeof shadow === "string"
      ? shadow
      : shadow
        ? "0 12px 30px rgba(0,0,0,0.35), 0 2px 6px rgba(0,0,0,0.22)"
        : "none";

  const innerShadowCss = innerShadow
    ? "inset 0 0 0 1px rgba(255,255,255,0.03), inset 0 10px 20px rgba(0,0,0,0.35), inset 0 -8px 16px rgba(0,0,0,0.28)"
    : "none";

  const hasIsland = Boolean(spec.island);
  const hasNotch = Boolean(spec.notch) && !hasIsland;

  return (
    <div
      className={className}
      style={{
        display: "inline-block",
        transform: `scale(${scale})`,
        transformOrigin: "top center",
      }}
    >
      <div
        style={{
          width: outerWidth,
          height: outerHeight,
          borderRadius: outerRadius,
          background: frameGradient,
          padding: resolvedBezel,
          boxSizing: "border-box",
          boxShadow: outerShadow,
          position: "relative",
          overflow: "hidden",
        }}
        aria-label={`iPhone mockup (${model})`}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: spec.radius,
            position: "relative",
            overflow: "hidden",
            background: screenBg,
            boxShadow: innerShadowCss,
          }}
        >
          {hasIsland && spec.island && (
            <div
              aria-hidden
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                background: "#000",
                zIndex: 2,
                boxShadow: "0 1px 2px rgba(0,0,0,0.7)",
                top: 12,
                width: spec.island.w,
                height: spec.island.h,
                borderRadius: spec.island.r,
              }}
            />
          )}

          {hasNotch && spec.notch && (
            <div
              aria-hidden
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                background: "#000",
                zIndex: 2,
                boxShadow: "0 1px 2px rgba(0,0,0,0.7)",
                top: 0,
                width: spec.notch.w,
                height: spec.notch.h,
                borderRadius: `0 0 ${spec.notch.r}px ${spec.notch.r}px`,
              }}
            />
          )}

          <div
            style={{
              position: "absolute",
              inset: 0,
              overflow: "hidden",
              zIndex: 1,
            }}
          >
            {children}
          </div>

          {showHomeIndicator && (
            <div
              aria-hidden
              style={{
                position: "absolute",
                bottom: 8,
                left: "50%",
                transform: "translateX(-50%)",
                width: Math.round(spec.w * 0.34),
                maxWidth: 140,
                height: 5,
                borderRadius: 3,
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.7), rgba(255,255,255,0.35))",
                opacity: 0.9,
                zIndex: 3,
                pointerEvents: "none",
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import { HeroBackground as HeroBackgroundType } from "@/components/hero/types";
import { buildBackgroundStyle } from "@/components/hero/bg-helper";

const HeroBackground: React.FC<{ background?: HeroBackgroundType }> = ({
  background,
}) => {
  if (!background) return null;

  if (background.type === "video" && background.value) {
    const videoSrc = Array.isArray(background.value)
      ? background.value[0]
      : background.value;
    return (
      <>
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        />
        {background.overlay && (
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: `rgba(0, 0, 0, ${
                background.overlayOpacity ?? 0.3
              })`,
              zIndex: 1,
              pointerEvents: "none",
              mixBlendMode: "multiply",
            }}
          />
        )}
      </>
    );
  }

  const style = buildBackgroundStyle(background);

  return (
    <>
      <div
        aria-hidden="true"
        style={{
          ...style,
          backgroundBlendMode: background.overlay ? "overlay" : "normal",
        }}
      />
      {background.overlay && (
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: `rgba(0,0,0,${background.overlayOpacity ?? 0.3})`,
            zIndex: 1,
            pointerEvents: "none",
            mixBlendMode: "multiply",
          }}
        />
      )}
    </>
  );
};

export default HeroBackground;

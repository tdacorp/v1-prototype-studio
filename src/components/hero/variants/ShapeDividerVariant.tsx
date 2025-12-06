"use client";

import React from "react";
import Image from "next/image";
import { HeroProps } from "@/types/type";
import HeroContent from "../HeroContent";

const ShapeDividerVariant: React.FC<HeroProps> = (props) => {
  const bgValue = Array.isArray(props.background?.value)
    ? props.background.value[0]
    : props.background?.value;

  return (
    <div className="relative flex flex-col justify-center items-center text-center overflow-hidden px-6 py-20">
      {props.background?.type === "image" && bgValue && (
        <Image
          src={bgValue}
          alt="hero-bg"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      )}

      {props.background?.type === "gradient" && bgValue && (
        <div className="absolute inset-0" style={{ background: bgValue }} />
      )}

      {props.background?.overlay && (
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: props.background.overlayOpacity || 0.4 }}
        />
      )}

      <div className="relative z-10 max-w-3xl mx-auto">
        <HeroContent {...props} />
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.81-17.46-168.6-16.23-250.45,3.57C408.73,36,333.35,70.86,250,92.83L0,120H1200L985.66,92.83Z"
            fill={props.shapeColor || "#fff"}
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default ShapeDividerVariant;

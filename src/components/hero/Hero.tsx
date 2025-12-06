import React from "react";

import HeroBackground from "@/components/hero/HeroBackground";
import { VariantRenderer } from "./variants/VariantRenderer";
import { HeroSchema } from "@/components/hero/types";

const Hero: React.FC<{ schema: HeroSchema }> = ({ schema }) => {
  const { variant, props } = schema;

  return (
    <>
      <section
        className={`relative overflow-hidden flex flex-col justify-center`}
        role="banner"
        aria-label={props.title || "Hero Section"}
        style={{
          width: props.width ?? "100%",
          minHeight: props.isFullScreen ? "100vh" : props.height ?? "auto",
          padding: props.padding || "80px 20px",
          color: props.textColor || "#fff",
          position: "relative",
          zIndex: 0,
        }}
      >
        <HeroBackground background={props.background} />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <VariantRenderer variant={variant} props={props} />
        </div>
      </section>
    </>
  );
};

export default Hero;

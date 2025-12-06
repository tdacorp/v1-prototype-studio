"use client";

import React from "react";
import { HeroProps } from "@/types/type";
import HeroContent from "../HeroContent";

const MinimalVariant: React.FC<HeroProps> = (props) => {
  const { width = "100%", height = "60vh", padding = "60px 20px" } = props;

  return (
    <section
      className="flex items-center justify-center text-center"
      style={{
        width,
        height,
        padding,
      }}
    >
      <div className="max-w-3xl">
        <HeroContent {...props} />
      </div>
    </section>
  );
};

export default MinimalVariant;

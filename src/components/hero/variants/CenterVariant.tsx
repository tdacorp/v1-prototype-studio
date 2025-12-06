"use client";

import React from "react";
import { HeroProps } from "@/types/type";
import HeroContent from "../HeroContent";

const CenterVariant: React.FC<HeroProps> = (props) => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <HeroContent {...props} />
    </div>
  );
};

export default CenterVariant;

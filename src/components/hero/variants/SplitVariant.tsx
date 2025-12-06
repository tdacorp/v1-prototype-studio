import React from "react";
import { HeroProps } from "@/types/type";
import HeroContent from "../HeroContent";
import HeroMedia from "../HeroMedia";

const SplitVariant: React.FC<HeroProps> = (props) => {
  const isMediaLeft = props.mediaPosition === "left";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {isMediaLeft && <HeroMedia {...props} />}
      <div className="flex justify-center">
        <HeroContent {...props} />
      </div>
      {!isMediaLeft && <HeroMedia {...props} />}
    </div>
  );
};

export default SplitVariant;

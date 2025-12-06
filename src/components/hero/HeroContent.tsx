
import React from "react";
import { HeroProps } from "@/components/hero/types";
import HeroCTAs from "@/components/hero/HeroCTA";

const HeroContent: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  cta,
  secondaryCta,
  textColor,
}) => {
  return (
    <div className="text-center max-w-3xl mx-auto px-4">
      {subtitle && (
        <h4
          className="text-lg font-medium mb-2 opacity-80"
          style={{ color: textColor }}
        >
          {subtitle}
        </h4>
      )}
      <h1 className="text-5xl font-bold mb-4" style={{ color: textColor }}>
        {title}
      </h1>
      {description && (
        <p className="text-lg mb-6 opacity-90" style={{ color: textColor }}>
          {description}
        </p>
      )}
      <HeroCTAs cta={cta} secondaryCta={secondaryCta} />
    </div>
  );
};

export default HeroContent;

import React from "react";
import { HeroCTA } from "@/components/hero/types";

const HeroCTAs: React.FC<{ cta?: HeroCTA; secondaryCta?: HeroCTA }> = ({
  cta,
  secondaryCta,
}) => {
  if (!cta && !secondaryCta) return null;

  const baseClass =
    "px-6 py-3 rounded-xl font-medium transition-colors duration-200";

  const getClass = (style?: string) => {
    switch (style) {
      case "secondary":
        return `${baseClass} bg-white text-indigo-600 hover:bg-gray-100`;
      case "outline":
        return `${baseClass} border border-white text-white hover:bg-white hover:text-indigo-600`;
      default:
        return `${baseClass} bg-indigo-600 text-white hover:bg-indigo-700`;
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-6">
      {cta && (
        <a
          href={cta.link}
          target={cta.target || "_self"}
          className={getClass(cta.style)}
          style={{ backgroundColor: cta.customColor || undefined }}
        >
          {cta.label}
        </a>
      )}
      {secondaryCta && (
        <a
          href={secondaryCta.link}
          target={secondaryCta.target || "_self"}
          className={getClass(secondaryCta.style)}
          style={{ backgroundColor: secondaryCta.customColor || undefined }}
        >
          {secondaryCta.label}
        </a>
      )}
    </div>
  );
};

export default HeroCTAs;

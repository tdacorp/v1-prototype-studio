import React from "react";
import { HeroProps } from "@/types/type";
import HeroContent from "../HeroContent";

const StatsVariant: React.FC<HeroProps> = (props) => {
  return (
    <div className="flex flex-col justify-center items-center text-center px-6 py-20">
      <div className="max-w-3xl mb-10">
        <HeroContent {...props} />
      </div>

      {props.stats && props.stats.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-6">
          {props.stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-4xl font-bold">{stat.value}</span>
              <span className="text-sm opacity-80 mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StatsVariant;

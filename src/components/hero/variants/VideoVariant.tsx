import React from "react";
import { HeroProps } from "@/types/type";
import HeroContent from "../HeroContent";

const VideoVariant: React.FC<HeroProps> = (props) => {
  return (
    <div className="relative flex flex-col justify-center items-center text-center min-h-screen overflow-hidden">
      {props.videoUrl && (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={props.videoUrl}
          autoPlay
          loop
          muted
          playsInline
        />
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
    </div>
  );
};

export default VideoVariant;

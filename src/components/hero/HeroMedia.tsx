"use client";

import React, { useState } from "react";
import { HeroProps } from "@/components/hero/types";
import Image from "next/image";

const HeroMedia: React.FC<HeroProps> = ({
  image,
  videoUrl,
  illustration,
  altText,
}) => {
  const [imgError, setImgError] = useState(false);

  if (videoUrl) {
    return (
      <video
        className="w-full h-full object-cover rounded-2xl"
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        onError={() => console.warn("Hero video failed to load:", videoUrl)}
      />
    );
  }

  if (image && !imgError) {
    const src = Array.isArray(image) ? image[0] : image;
    return (
      <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden">
        <Image
          src={src}
          alt={altText || "hero-image"}
          fill
          className="object-cover rounded-2xl"
          sizes="(max-width: 768px) 100vw, 50vw"
          onError={() => setImgError(true)}
        />
      </div>
    );
  }

  if (illustration) {
    const src =
      illustration ||
      "https://images.pexels.com/photos/16347225/pexels-photo-16347225.jpeg";
    return (
      <div className="relative w-full aspect-[16/9]">
        <Image
          src={src}
          alt={altText || "hero-illustration"}
          width={800}
          height={600}
          className="object-contain"
        />
      </div>
    );
  }

  return null;
};

export default HeroMedia;

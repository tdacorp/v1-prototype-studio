"use client";

import { CarouselSchema } from "./types";
import { BasicCarousel } from "./variants/BasicCarousel";
import { CarouselOrientation } from "./variants/OrientationCarousel";
import { CarouselSize } from "./variants/SizeCarousel";
import { CarouselSpacing } from "./variants/SpacingCarousel";


export const CarouselRenderer = ({ schema }: { schema: CarouselSchema }) => {
  switch (schema.variant) {
    case "size-carousel":
      return <CarouselSize props={schema.props} />; 
    case "spacing-carousel":
      return <CarouselSpacing props={schema.props} />;
    case "orientation-carousel":
      return <CarouselOrientation props={schema.props} />;
    default:
      return <BasicCarousel props={schema.props} />;
  }
};

"use client";

import { CarouselRenderer } from "./CarouselVariantRanderer";
import { CarouselSchema } from "./types";


export const Carousel = ({ schema }: { schema: CarouselSchema }) => {
  return <CarouselRenderer schema={schema} />;
};

"use client";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { CarouselProps, CarouselSlide } from "@/components/carousel/types";

export function CarouselOrientation({ props }: { props: CarouselProps }) {
  const { autoPlay, interval, loop, orientation, slides } = props;
  const isVertical = orientation === "vertical";

  return (
    <Carousel
      orientation={orientation}
      opts={{ align: "center" }}
      className={`mx-auto relative ${
        isVertical ? "h-[420px] w-[260px]" : "w-full max-w-xl"
      }`}
    >
      <CarouselContent className={isVertical ? "gap-4 py-2" : "gap-4 px-2"}>
        {slides.map((slide) => (
          <CarouselItem
            key={slide.id}
            className={isVertical ? "basis-auto" : "basis-full sm:basis-1/2"}
          >
            <div
              className={`relative ${
                isVertical ? "h-[260px] w-full" : "aspect-[4/5]"
              } rounded-xl overflow-hidden shadow-md bg-neutral-900`}
            >
              <Image
                src={slide.image.src}
                alt={slide.image.alt || ""}
                fill
                className="object-cover"
              />

              {(slide.title || slide.subtitle) && (
                <div className="absolute bottom-3 left-3 right-3 text-white bg-black/40 backdrop-blur-sm p-3 rounded-lg">
                  <h1 className="text-base font-semibold">{slide.title}</h1>
                  <p className="text-sm opacity-80">{slide.subtitle}</p>
                </div>
              )}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className={isVertical ? "top-2 left-1" : "left-2"} />
      <CarouselNext className={isVertical ? "bottom-2 left-1" : "right-2"} />
    </Carousel>
  );
}

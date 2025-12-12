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

export function CarouselSize({ props }: { props: CarouselProps }) {
  const { autoPlay, interval, loop, slides, orientation } = props;

  React.useEffect(() => {
    if (!autoPlay) return;

    const intervalId = setInterval(() => {
      const nextBtn = document.querySelector("[data-carousel-next]") as HTMLElement;
      nextBtn?.click();
    }, interval);

    return () => clearInterval(intervalId);
  }, [autoPlay, interval]);

  const isVertical = orientation === "vertical";

  return (
    <Carousel
      opts={{
        loop,
        align: "start",
        axis: isVertical ? "y" : "x", // shadcn underlying embla supports it
      }}
      className={`w-full max-w-sm m-10 bg-black rounded-md ${
        isVertical ? "h-[500px]" : ""
      }`}
    >
      <CarouselContent
        className={isVertical ? "flex-col" : ""}
      >
        {slides.map((slide) => (
          <CarouselItem
            key={slide.id}
            className={
              isVertical
                ? "basis-auto" // vertical = height-driven
                : "md:basis-1/2 lg:basis-1/3"
            }
          >
            <div className="p-1">
              <Card className="bg-gray-700">
                <CardContent className="flex flex-col items-center p-4 gap-3">
                  <Image
                    src={slide.image.src}
                    alt={slide.image.alt || ""}
                    width={200}
                    height={200}
                    className="rounded-md object-cover"
                  />

                  <span className="text-lg font-semibold">{slide.title}</span>
                  <span className="text-sm text-gray-500">
                    {slide.subtitle}
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious data-carousel-prev />
      <CarouselNext data-carousel-next />
    </Carousel>
  );
}


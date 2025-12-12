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

export function CarouselSpacing({ props }: { props: CarouselProps }) {
  const { autoPlay, interval, loop, slides } = props;

  React.useEffect(() => {
    if (!autoPlay) return;

    const intervalId = setInterval(() => {
      const nextBtn = document.querySelector(
        "[data-carousel-next]"
      ) as HTMLElement;
      nextBtn?.click();
    }, interval);

    return () => clearInterval(intervalId);
  }, [autoPlay, interval]);

  return (
    <Carousel
      opts={{ loop: loop, align: "center" }}
      className="w-full max-w-2xl mx-auto relative"
    >
      <CarouselContent className="gap-6 px-2">
        {slides.map((slide) => (
          <CarouselItem
            key={slide.id}
            className="basis-full sm:basis-1/2 lg:basis-1/3"
          >
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-md bg-neutral-900">
              <Image
                src={slide.image.src}
                alt={slide.image.alt || ""}
                fill
                className="object-cover"
              />

              {(slide.title || slide.subtitle) && (
                <div className="absolute bottom-4 left-4 right-4 text-white bg-black/40 backdrop-blur-sm p-3 rounded-lg">
                  <h1 className="text-lg font-semibold leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-sm opacity-80">{slide.subtitle}</p>
                </div>
              )}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  );
}

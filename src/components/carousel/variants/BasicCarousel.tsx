"use client";

import Image from "next/image";
import { CarouselProps } from "@/components/carousel/types";
import { useCarousel } from "@/hook/useCarousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function BasicCarousel({ props }: { props: CarouselProps }) {
  const { autoPlay, interval, loop, slides } = props;
  return (
    <Carousel
      opts={{ loop, align: "center" }}
      className="w-full max-w-2xl mx-auto relative"
    >
      <CarouselContent className="gap-4">
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

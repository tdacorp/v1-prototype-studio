import { CarouselProps } from "@/components/carousel/types";

export function mapCarouselProps(apiProps: any): CarouselProps {
  return {
    autoPlay: apiProps.autoPlay ?? false,
    interval: apiProps.interval ?? 3000,
    loop: apiProps.loop ?? true,
    orientation: apiProps.orientation ?? "horizontal",

    slides: (apiProps.slides || []).map((s: any) => ({
      id: s.id,
      image: {
        src: s.image?.src || "",
        alt: s.image?.alt || "",
      },
      title: s.title || "",
      subtitle: s.subtitle || "",
      cta: s.cta
        ? {
            label: s.cta.label,
            to: s.cta.to,
          }
        : undefined,
    })),
  };
}

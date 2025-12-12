export type CarouselVariant =
  | "basic-carousel"
  | "spacing-carousel"
  | "orientation-carousel"
  | "size-carousel";

export interface CarouselSlide {
  id: string;
  image: {
    src: string;
    alt?: string;
  };
  title?: string;
  subtitle?: string;
  cta?: {
    label: string;
    to?: string;
  };
}

export interface CarouselProps {
  slides: CarouselSlide[];
  autoPlay?: boolean;
  interval?: number;
  loop?: boolean;
  orientation?: "vertical" | "horizontal";
}

export interface CarouselSchema {
  id: string;
  type: "carousel";
  variant: CarouselVariant;
  props: CarouselProps;

  status?: "default" | "active" | "disabled";
  style?: {
    height?: string;
    width?: string;
  };
}

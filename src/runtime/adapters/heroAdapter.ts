import { ComponentProps } from "@/types/runtimeTypes";
import { HeroBackground, HeroContentStyling, HeroCTA, HeroProps } from "@/components/hero/types";

// Backend se aane wale JSON props ka type
type ApiHeroProps = ComponentProps;

/**
 * Converts API JSON props into typed HeroProps
 */
export function mapHeroProps(apiProps: ApiHeroProps): HeroProps {
  return {
    title: typeof apiProps.title === "string" ? apiProps.title : "",
    subtitle:
      typeof apiProps.subtitle === "string" ? apiProps.subtitle : undefined,
    description:
      typeof apiProps.description === "string"
        ? apiProps.description
        : undefined,
    altText:
      typeof apiProps.altText === "string" ? apiProps.altText : undefined,
    ariaLabel:
      typeof apiProps.ariaLabel === "string" ? apiProps.ariaLabel : undefined,

    cta: isHeroCTA(apiProps.cta)
      ? {
          label: String(apiProps.cta.label),
          link: String(apiProps.cta.link),
          style: apiProps.cta.style,
          size: apiProps.cta.size,
          icon: apiProps.cta.icon,
          target: apiProps.cta.target,
          customColor: apiProps.cta.customColor,
        }
      : undefined,

    secondaryCta: isHeroCTA(apiProps.secondaryCta)
      ? {
          label: String(apiProps.secondaryCta.label),
          link: String(apiProps.secondaryCta.link),
          style: apiProps.secondaryCta.style,
          size: apiProps.secondaryCta.size,
          icon: apiProps.secondaryCta.icon,
          target: apiProps.secondaryCta.target,
          customColor: apiProps.secondaryCta.customColor,
        }
      : undefined,

    alignment: apiProps.alignment as HeroProps["alignment"] | undefined,
    padding:
      typeof apiProps.padding === "string" ? apiProps.padding : undefined,
    isFullScreen:
      typeof apiProps.isFullScreen === "boolean"
        ? apiProps.isFullScreen
        : undefined,
    width: apiProps.width as string | number | undefined,
    height: apiProps.height as string | number | undefined,
    mediaPosition: apiProps.mediaPosition as "left" | "right" | undefined,
    formPlaceholder:
      typeof apiProps.formPlaceholder === "string"
        ? apiProps.formPlaceholder
        : undefined,
    image:
      typeof apiProps.image === "string" || Array.isArray(apiProps.image)
        ? apiProps.image
        : undefined,
    videoUrl:
      typeof apiProps.videoUrl === "string" ? apiProps.videoUrl : undefined,
    stats: Array.isArray(apiProps.stats)
      ? apiProps.stats.map((s) => ({
          label: String(s.label || ""),
          value: String(s.value || ""),
        }))
      : undefined,
    illustration:
      typeof apiProps.illustration === "string"
        ? apiProps.illustration
        : undefined,
    shapeDivider: apiProps.shapeDivider as
      | HeroProps["shapeDivider"]
      | undefined,
    textColor:
      typeof apiProps.textColor === "string" ? apiProps.textColor : undefined,
    shapeColor:
      typeof apiProps.shapeColor === "string" ? apiProps.shapeColor : undefined,
    background: isHeroBackground(apiProps.background)
      ? apiProps.background
      : undefined,
    contentStyling: isHeroContentStyling(apiProps.contentStyling)
      ? apiProps.contentStyling
      : undefined,
  };
}

function isHeroCTA(obj: unknown): obj is HeroCTA {
  return (
    typeof obj === "object" && obj !== null && "label" in obj && "link" in obj
  );
}

function isHeroBackground(obj: unknown): obj is HeroBackground {
  return typeof obj === "object" && obj !== null && "type" in obj;
}

function isHeroContentStyling(obj: unknown): obj is HeroContentStyling {
  return typeof obj === "object" && obj !== null && "verticalAlignment" in obj;
}

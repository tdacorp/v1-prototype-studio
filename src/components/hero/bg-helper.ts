// import { HeroBackground } from "./types";

import { HeroBackground } from "@/components/hero/types";

export const buildBackgroundStyle = (
  bg?: HeroBackground
): React.CSSProperties => {
  if (!bg) return {};

  const styles: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    zIndex: 0,
    pointerEvents: "none",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: bg.position || "center",
  };

  switch (bg.type) {
    case "color":
      styles.backgroundColor = String(bg.value);
      break;

    case "image":
      styles.backgroundImage = `url(${bg.value})`;
      break;

    case "gradient": {
      if (Array.isArray(bg.value)) {
        const colors = bg.value.join(", ");
        styles.backgroundImage = `linear-gradient(${
          bg.gradientDirection || "to bottom"
        }, ${colors})`;
      } else if (
        bg.value?.startsWith("linear-gradient") ||
        bg.value?.startsWith("radial-gradient")
      ) {
        styles.backgroundImage = bg.value;
      } else {
        styles.backgroundImage = `linear-gradient(${
          bg.gradientDirection || "to bottom"
        }, ${bg.value}, ${bg.value})`;
      }
      break;
    }

    case "pattern":
      styles.backgroundImage = `url(${bg.value})`;
      styles.backgroundRepeat = "repeat";
      styles.backgroundSize = "auto";
      break;

    case "video":
      break;

    default:
      break;
  }

  return styles;
};

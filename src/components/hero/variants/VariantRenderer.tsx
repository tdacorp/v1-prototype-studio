import React from "react";
import { HeroProps, HeroVariant } from "@/types/type";

import CenterVariant from "./CenterVariant";
import SplitVariant from "./SplitVariant";
import VideoVariant from "./VideoVariant";
import StatsVariant from "./StatsVariant";
import ShapeDividerVariant from "./ShapeDividerVariant";
import FormVariant from "./FormVariant";
import MinimalVariant from "./MinimalVariant";

export const VariantRenderer: React.FC<{
  variant: HeroVariant;
  props: HeroProps;
}> = ({ variant, props }) => {
  switch (variant) {
    case "split":
      return <SplitVariant {...props} />;
    case "video":
      return <VideoVariant {...props} />;
    case "stats":
      return <StatsVariant {...props} />;
    case "shapeDivider":
      return <ShapeDividerVariant {...props} />;
    case "form":
      return <FormVariant {...props} />;
    case "minimal":
      return <MinimalVariant {...props} />;

    default:
      return <CenterVariant {...props} />;
  }
};

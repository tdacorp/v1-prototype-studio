
import { CardSchema, CardVariantType } from "@/types/type";
import { ImageTopVariant } from "./ImageTopVariant";
import { UserProfileVariant } from "./UserProfileVariant";
import { BgImageVariant } from "./BgImageVariant";
import { IconInfoVariant } from "./IconInfoVariant";
import { SocialProfileVariant } from "./SocialProfileVariant";
import { ArticleCardVariant } from "./ArticleCardVariant";


interface VariantRendererProps {
  variant: CardVariantType;
  card: CardSchema;
}

export const VariantRenderer = ({ variant, card }: VariantRendererProps) => {
  switch (variant) {
    case "image-top":
      return <ImageTopVariant card={card} />;
    case "bg-image":
      return <BgImageVariant card={card} />;
    case "user-profile":
      return <UserProfileVariant card={card} />;
    case "icon-info":
      return <IconInfoVariant card={card} />;
    case "social-profile":
      return <SocialProfileVariant card={card} />;
    case "article-card":
      return <ArticleCardVariant card={card} />;
    default:
      return null;
  }
};

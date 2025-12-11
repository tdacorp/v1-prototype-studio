import Image from "next/image";
import { CardSchema } from "@/components/card/types";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const IconInfoVariant = ({ card }: { card: CardSchema }) => {
  const icon = card.props.icon;

  const sizeMap = {
    small: { w: 24, h: 24, class: "w-6 h-6" },
    medium: { w: 40, h: 40, class: "w-10 h-10" },
    large: { w: 56, h: 56, class: "w-14 h-14" },
  };

  const size = sizeMap[icon?.size || "medium"];

  return (
    <Card className="w-[340px] bg-[#1C2128] border border-[#373E47] rounded-xl shadow-lg px-4 py-5 flex flex-col m-12">
      {icon?.src && (
        <div className="mb-3">
          <Image
            src={icon.src}
            alt={icon.alt || "icon"}
            width={size.w}
            height={size.h}
            className={`${size.class} object-contain`}
          />
        </div>
      )}

      <CardHeader className="p-0 mb-0">
        <CardTitle className="text-white font-bold text-2xl">
          {card.props.title}
        </CardTitle>
      </CardHeader>

      {card.props.subtitle && (
        <CardDescription className="text-[#8B949E] text-base leading-relaxed">
          {card.props.subtitle}
        </CardDescription>
      )}
    </Card>
  );
};

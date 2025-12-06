import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CardSchema } from "@/types/type";

import Image from "next/image";

export const ImageTopVariant = ({ card }: { card: CardSchema }) => (

<Card className="w-[330px] bg-neutral-900 border-4 border-white rounded-xl shadow-lg flex flex-col px-3 py-4 m-12  cursor-pointer">
    <div className="overflow-hidden rounded-t-lg">
      {card.props.image && (
        <Image
          src={card.props.image.src}
          alt={card.props.image.alt}
          width={50}
          height={50}
          className="w-full aspect-video object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />
      )}
    </div>

    {card.props.badge && (
      <span className="inline-block bg-neutral-800 text-white px-3 py-1 rounded-md text-xs mb-1 mt-3 border border-white">
        {card.props.badge}
      </span>
    )}

    <CardHeader className="p-0 mt-2">
      <CardTitle className="text-white font-bold text-lg mt-0 mb-1">{card.props.title}</CardTitle>
      {card.props.subtitle && (
        <CardDescription className="text-neutral-400 mb-2">{card.props.subtitle}</CardDescription>
      )}
    </CardHeader>
    {card.props.tags && (
      <div className="mt-2 flex flex-wrap gap-2">
        {card.props.tags.map((tag) => (
          <span
            key={tag}
            className="bg-neutral-800 text-white px-2 py-1 border border-white rounded-md text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    )}
  </Card>

)
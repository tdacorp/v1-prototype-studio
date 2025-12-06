import Image from "next/image";
import { CardSchema } from "@/types/type";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const IconInfoVariant = ({ card }: { card: CardSchema }) => (

  <Card className="w-[340px] bg-[#1C2128] border border-[#373E47] rounded-xl shadow-lg px-4 py-5  flex flex-col m-12">
      <div className="mb-0">
        <Image
          src={card.props.icon?.src ?? ""}
          alt={card.props.icon?.alt ?? ""}
          width={50}
          height={50}
          className={`${card.props.icon?.size} object-contain`}
        />
      </div>

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
)
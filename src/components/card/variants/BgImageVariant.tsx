import { Button } from "@/components/ui/button";
import { CardSchema } from "@/types/type";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const BgImageVariant = ({ card }: { card: CardSchema }) => (

       <Card
      className="w-[340px] h-[370] rounded-xl shadow-lg p-0  mt-4 overflow-hidden relative flex flex-col justify-end m-12"
      style={{
        backgroundImage: `url(${card.props.backgroundImage?.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent z-0" />
      <div className="relative z-10 p-6 flex flex-col flex-1 justify-end">

        <CardHeader className="p-0">
          <CardTitle className="text-white font-bold text-xl mb-2">{card.props.title}</CardTitle>
          {card.props.subtitle && (
            <CardDescription className="text-gray-300 mb-4 font-normal text-base">
              {card.props.subtitle}
            </CardDescription>
          )}
        </CardHeader>
        {card.props.tags && (
          <div className="flex flex-wrap gap-3 mb-5">
            {card.props.tags.map(tag => (
              <span
                key={tag}
                className="bg-white/10 text-white px-4 py-1 rounded-full text-xs font-medium shadow"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
         {card.props.button && (
          <Button
            className="w-full mt-2 bg-white text-black font-semibold py-3 rounded-full shadow hover:bg-gray-200 transition"
            asChild
          >
            <a href={card.props.button.to}>{card.props.button.label}</a>
          </Button>
        )}

      </div>
    </Card>

)
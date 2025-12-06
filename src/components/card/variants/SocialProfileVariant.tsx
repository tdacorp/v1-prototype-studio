import { Button } from "@/components/ui/button";
import { CardSchema } from "@/types/type";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export const SocialProfileVariant = ({ card }: { card: CardSchema }) => (
     <Card className="w-[590px] bg-[#F5F5F5] rounded-2xl shadow-lg p-6 flex flex-col m-12">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          {card.props.socialProfile?.avatar && (
            <Image
            src={card.props.socialProfile?.avatar}
            alt={card.props.socialProfile?.name || 'user profiel' }
            width={30}
            height={30}
            className="w-16 h-16 rounded-full object-cover"
          />
          )}
          
          <div>
            <h3 className="text-xl font-bold text-gray-900">{card.props.socialProfile?.name}</h3>
            <p className="text-gray-500 text-sm">@{card.props.socialProfile?.username}</p>
          </div>
        </div>
        
        {card.props.button && (
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-2.5 rounded-xl font-semibold text-base">
            {card.props.button.label}
          </Button>
        )}
      </div>

      <CardHeader className="p-0 mb-3">
        <CardTitle className="text-2xl font-bold text-gray-900">
          {card.props.socialProfile?.title}
        </CardTitle>
      </CardHeader>

      <CardDescription className="text-gray-600 text-base leading-relaxed">
        {card.props.socialProfile?.description}
      </CardDescription>
    </Card>

)
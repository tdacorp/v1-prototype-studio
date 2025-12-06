import { Button } from "@/components/ui/button";
import { CardSchema } from "@/types/type";

import { Card, CardDescription,CardTitle } from "@/components/ui/card";
import Image from "next/image";

export const UserProfileVariant = ({ card }: { card: CardSchema }) => (
  <Card className="w-[340px] pt-0 pb-8 px-0 rounded-xl shadow-lg bg-white flex flex-col items-center m-12">
    <div className="w-full bg-green-700 h-24 relative flex items-end justify-center rounded-t-2xl">
      {card.props.user?.avatar && (
        <Image
          src={card.props.user.avatar}
          alt={card.props.user.name || "User avatar"}
          width={50}
          height={50}
          className="w-20 h-20 rounded-full border-4 border-white absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ top: "50%" }}
        />
      )}
    </div>
    <div className="mt-14 w-full text-center px-8">
      <CardTitle className="text-green-700 text-lg font-semibold">{card.props.user?.name}</CardTitle>
      <CardDescription className="text-gray-700 mb-3">{card.props.user?.position}</CardDescription>
      <div className="flex justify-center gap-8 mb-6">
        <div>
          <div className="text-xl font-bold text-gray-900">{card.props.user?.followers}</div>
          <div className="text-green-700 font-medium text-xs -mt-1">Followers</div>
        </div>
        <div>
          <div className="text-xl font-bold text-gray-900">{card.props.user?.following}</div>
          <div className="text-green-700 font-medium text-xs -mt-1">Following</div>
        </div>
      </div>
      <div className="flex justify-center gap-4">
        <Button className="bg-green-700 text-white rounded-full px-8">
          {card.props.button?.label || "Follow"}
        </Button>
        <Button variant="outline" className="border-green-700 text-green-700 rounded-full px-8">
          {card.props.secondaryButton?.label || "Message"}
        </Button>
      </div>
    </div>
  </Card>

)
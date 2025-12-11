import { Button } from "@/components/ui/button";
import { CardSchema } from "@/components/card/types";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export const SocialProfileVariant = ({ card }: { card: CardSchema }) => {
  const profile = card.props.socialProfile;

  return (
    <Card className="w-[480px] bg-white rounded-2xl shadow-xl p-6 flex flex-col m-12 border border-gray-200">
      {/* TOP SECTION */}
      <div className="flex items-center justify-between mb-5">
        {/* Avatar + Name */}
        <div className="flex items-center gap-4">
          {profile?.avatar && (
            <Image
              src={profile.avatar}
              alt={profile.name || "profile"}
              width={60}
              height={60}
              className="w-16 h-16 rounded-full object-cover shadow-sm"
            />
          )}

          <div>
            <h3 className="text-xl font-bold text-gray-900">{profile?.name}</h3>
            <p className="text-gray-500 text-sm">@{profile?.username}</p>
          </div>
        </div>

        {/* Buttons */}
        {card.props.button && Array.isArray(card.props.button) && (
          <div className="flex gap-2">
            {card.props.button.map((btn, idx) => (
              <Button
                key={idx}
                variant={
                  btn.style === "secondary"
                    ? "secondary"
                    : btn.style === "destructive"
                    ? "destructive"
                    : btn.style === "outline"
                    ? "outline"
                    : "default"
                }
                className="px-5 py-2 font-medium rounded-lg"
                onClick={() => {
                  if (btn.to) window.open(btn.to, "_blank");
                }}
              >
                {btn.label}
              </Button>
            ))}
          </div>
        )}
      </div>

      {/* TITLE */}
      <CardHeader className="p-0 mb-3">
        <CardTitle className="text-2xl font-bold text-gray-900 leading-snug">
          {profile?.title}
        </CardTitle>
      </CardHeader>

      {/* DESCRIPTION */}
      <CardDescription className="text-gray-600 text-base leading-relaxed">
        {profile?.description}
      </CardDescription>
    </Card>
  );
};

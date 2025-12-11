import { Button } from "@/components/ui/button";
import { CardSchema } from "@/components/card/types";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export const UserProfileVariant = ({ card }: { card: CardSchema }) => {
  const user = card.props.user;
  const buttons = Array.isArray(card.props.button) ? card.props.button : [];

  return (
    <Card className="w-[340px] pt-0 pb-8 px-0 rounded-xl shadow-lg bg-white flex flex-col items-center m-12">
      {/* Header Section */}
      <div className="w-full bg-green-700 h-24 relative flex items-end justify-center rounded-t-2xl">
        {user?.avatar && (
          <Image
            src={user.avatar}
            alt={user.name || "User avatar"}
            width={80}
            height={80}
            className="w-20 h-20 rounded-full border-4 border-white absolute left-1/2 -translate-x-1/2 translate-y-1/2"
          />
        )}
      </div>

      {/* Body */}
      <div className="mt-16 w-full text-center px-8">
        <CardTitle className="text-green-700 text-lg font-semibold">
          {user?.name}
        </CardTitle>

        <CardDescription className="text-gray-700 mb-3">
          {user?.position}
        </CardDescription>

        {/* Stats (only if they exist) */}
        {(user?.followers || user?.following) && (
          <div className="flex justify-center gap-8 mb-6">
            {user?.followers !== undefined && (
              <div>
                <div className="text-xl font-bold text-gray-900">
                  {user.followers}
                </div>
                <div className="text-green-700 font-medium text-xs -mt-1">
                  Followers
                </div>
              </div>
            )}
            {user?.following !== undefined && (
              <div>
                <div className="text-xl font-bold text-gray-900">
                  {user.following}
                </div>
                <div className="text-green-700 font-medium text-xs -mt-1">
                  Following
                </div>
              </div>
            )}
          </div>
        )}

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          {buttons.map((btn, idx) => (
            <Button
              key={idx}
              variant={btn.style === "outline" ? "outline" : "default"}
              className={`${
                btn.style === "outline"
                  ? "border-green-700 text-green-700"
                  : "bg-green-700 text-white"
              } rounded-full px-8`}
              onClick={() => {
                if (btn.to) window.open(btn.to, "_blank");
              }}
            >
              {btn.label || "Button"}
            </Button>
          ))}
        </div>
      </div>
    </Card>
  );
};

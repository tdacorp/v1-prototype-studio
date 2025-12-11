import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CardSchema } from "@/components/card/types";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const ImageTopVariant = ({ card }: { card: CardSchema }) => {
  return (
    <Card className="w-[360px] bg-neutral-900 border border-neutral-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 m-12">
      {/* IMAGE */}
      <div className="h-[200px] w-full relative">
        {card.props.image && (
          <Image
            src={card.props.image.src}
            alt={card.props.image.alt || card.props.title || "card image"}
            width={400}
            height={250}
            className="object-cover"
          />
        )}
      </div>

      <div className="p-6">
        {/* BADGE */}
        {card.props.badge && (
          <span className="inline-block bg-neutral-800 text-white px-3 py-1 rounded-md text-xs mb-3 border border-neutral-700">
            {card.props.badge.join(", ")}
          </span>
        )}

        {/* TITLE + SUBTITLE */}
        <CardHeader className="p-0 mb-3">
          <CardTitle className="text-white font-semibold text-xl leading-tight">
            {card.props.title}
          </CardTitle>

          {card.props.subtitle && (
            <CardDescription className="text-neutral-400 mt-1 leading-relaxed">
              {card.props.subtitle}
            </CardDescription>
          )}
        </CardHeader>

        {/* TAGS */}
        {card.props.tags && (
          <div className="mt-3 flex flex-wrap gap-2 mb-4">
            {card.props.tags.map((tag) => (
              <span
                key={tag}
                className="bg-neutral-900 text-white px-3 py-1 border border-neutral-700 rounded-md text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* BUTTONS */}
        {card.props.button && (
          <div className="mt-2 flex flex-wrap gap-3">
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
                className="px-4 py-2"
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
    </Card>
  );
};

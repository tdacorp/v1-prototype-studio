import { Button } from "@/components/ui/button";
import { CardSchema } from "@/components/card/types";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const BgImageVariant = ({ card }: { card: CardSchema }) => {
  return (
    <Card
      className="w-[360px] h-[420px] rounded-2xl shadow-xl overflow-hidden relative flex flex-col justify-end hover:shadow-2xl transition-all duration-300 m-12"
      style={{
        backgroundImage: `url(${card.props.image?.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* DARK GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-0" />

      {/* CONTENT */}
      <div className="relative z-10 p-6 flex flex-col">
        <CardHeader className="p-0 mb-4">
          <CardTitle className="text-white text-2xl font-bold leading-tight drop-shadow">
            {card.props.title}
          </CardTitle>

          {card.props.subtitle && (
            <CardDescription className="text-gray-300 mt-1 text-base leading-relaxed drop-shadow">
              {card.props.subtitle}
            </CardDescription>
          )}
        </CardHeader>

        {/* TAGS */}
        {card.props.tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {card.props.tags.map((tag) => (
              <span
                key={tag}
                className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-md text-xs font-medium border border-white/20"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* BUTTONS */}
        {card.props.button && Array.isArray(card.props.button) && (
          <div className="flex flex-wrap gap-3">
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
                className="w-full font-semibold py-3 rounded-xl"
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

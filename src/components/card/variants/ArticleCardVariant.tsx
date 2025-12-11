import Image from "next/image";
import { CardSchema } from "@/components/card/types";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const ArticleCardVariant = ({ card }: { card: CardSchema }) => {
  return (
    <Card className="w-[370px] bg-white rounded-2xl shadow-md overflow-hidden flex flex-col p-0  m-12">
      <div className="relative w-full h-[220px]">
        <Image
          src={card.props.image?.src || ""}
          alt={card.props.image?.alt || ""}
          width={400}
          height={350}
          className="w-full h-full object-cover"
        />
        {card.props.bookmark && (
          <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm hover:bg-gray-50 transition">
            <svg
              className="w-5 h-5 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
          </button>
        )}
      </div>
      <div className="px-6 pb-3 flex flex-col flex-1">
        {card.props.badge && card.props.badge.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {card.props.badge.map((badgeText, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-xs font-medium"
              >
                {badgeText}
              </span>
            ))}
          </div>
        )}
        <CardHeader className="p-0 mb-3">
          <CardTitle className="text-xl font-bold text-gray-900 leading-tight">
            {card.props.title}
          </CardTitle>
        </CardHeader>
        {card.props.subtitle && (
          <CardDescription className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
            {card.props.subtitle}
          </CardDescription>
        )}
        {card.props.author && (
          <div className="flex items-center gap-5 mt-auto pt-2 border-t border-gray-100">
            <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-sm">
              {card.props.author.avatar ? (
                <Image
                  src={card.props.author.avatar}
                  alt={card.props.author.name}
                  width={80}
                  height={80}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                card.props.author.name.charAt(0).toUpperCase()
              )}
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900">
                {card.props.author.name}
              </p>
              <p className="text-xs text-gray-500">{card.props.author.date}</p>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

import { VariantRenderer } from "./variants/VariantRenderer";
import { CardSchema } from "@/components/card/types";

export const Card = ({ schema }: { schema: CardSchema }) => {
  console.log("CARD : ", schema)
  const safeCard = { ...schema } as any;
  return (
    <div>
      <VariantRenderer variant={schema.variant} card={safeCard} />
    </div>
  )
};

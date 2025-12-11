import { mapHeadingProps } from "@/runtime/adapters/headingAdapter";
import { HeadingGroup } from "../heading/HeadingGroup";
import Hero from "../hero/Hero";
import { mapHeroProps } from "@/runtime/adapters/heroAdapter";
import { cardAdapter } from "@/runtime/adapters/cardAdapter";
import { Card } from "../card/card";

export const RUNTIME_COMPONENTS: Record<string, React.FC<{ schema: any }>> = {
  Hero,
  heading: HeadingGroup,
  card: Card
};


export type AdapterFn = (props: any) => any;

export const COMPONENT_ADAPTERS: Record<string, AdapterFn> = {
  Hero: mapHeroProps,
  Heading: mapHeadingProps,
  card: cardAdapter
};

import Hero from "../hero/Hero";
import { HeroSchema } from "../hero/types";
import { mapHeroProps } from "@/runtime/adapters/heroAdapter";

export const RUNTIME_COMPONENTS: Record<string, React.FC<{ schema: any }>> = {
  Hero
};

export type AdapterFn = (props: any) => any;

export const COMPONENT_ADAPTERS: Record<string, AdapterFn> = {
  Hero: mapHeroProps,
};

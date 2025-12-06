import { mapHeadingProps } from "@/runtime/adapters/headingAdapter";
import { HeadingGroup } from "../heading/HeadingGroup";
import Hero from "../hero/Hero";
import { mapHeroProps } from "@/runtime/adapters/heroAdapter";

export const RUNTIME_COMPONENTS: Record<string, React.FC<{ schema: any }>> = {
  Hero,
  heading: HeadingGroup
};

export type AdapterFn = (props: any) => any;

export const COMPONENT_ADAPTERS: Record<string, AdapterFn> = {
  Hero: mapHeroProps,
  Heading: mapHeadingProps
};

import { HeroSchema } from "@/components/hero/types";
import { HeadingSchema } from "@/components/heading/types";

export interface ComponentTypeMap {
  Hero: React.FC<{ schema: HeroSchema }>;
  Heading: React.FC<{ schema: HeadingSchema }>;
}


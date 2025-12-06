import { HeadingSchema } from "@/components/heading/types";
import { PageComponent } from "@/types/runtimeTypes";

export function mapHeadingProps(component: PageComponent): HeadingSchema {
  const p = component.props;

  return {
    id: component.id,
    type: "heading",
    variant: component.variant,
    props: {
      level: (p.level as HeadingSchema["props"]["level"]) ?? 1,
      content: (p.content as string) ?? "",
      color: p.color as string | undefined,
      align: p.align as "left" | "center" | "right" | undefined,
      weight: p.weight as HeadingSchema["props"]["weight"],
      margin: p.margin as string | undefined,
      italic: p.italic as boolean | undefined,
      underline: p.underline as boolean | undefined,
      letterSpacing: p.letterSpacing as HeadingSchema["props"]["letterSpacing"],
      lineHeight: p.lineHeight as string | undefined,
      transform: p.transform as HeadingSchema["props"]["transform"],
      className: p.className as string | undefined
    }
  };
}

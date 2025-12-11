import { BaseSchema } from "@/types/runtimeTypes";

export type LayoutDirection = "horizontal" | "vertical";

export interface LayoutNodeBase extends BaseSchema<any> {
  id: string;
  type: "layout" | "component";
}

export interface LayoutComponent<TProps = Record<string, unknown>>
  extends BaseSchema<any> {
  type: "component";
  props: TProps & {
    label: string;
  };
}

export interface LayoutContainer extends BaseSchema<any> {
  type: "layout";
  direction: LayoutDirection;
  resizable?: boolean;
  sizes?: number[]; // e.g. [30, 70] => percentage widths
  children: LayoutSchema[];
}

export type LayoutSchema = LayoutComponent | LayoutContainer;

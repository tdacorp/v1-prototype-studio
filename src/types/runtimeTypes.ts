// types/page.ts

// Generic props type for any component (avoiding 'any')
export type ComponentProps = Record<string, unknown>;

// Single component type
export interface PageComponent {
  id: string;
  type: string;
  variant?: string;
  props: ComponentProps;
}

// Page metadata type (matches PageMeta fragment)
export interface PageMeta {
  id: string;
  name: string;
  slug: string;
  createdAt: number;
  updatedAt: number;
}

// Full page type returned by API
export interface PageData {
  id: string;
  meta: PageMeta;
  components: PageComponent[];
}

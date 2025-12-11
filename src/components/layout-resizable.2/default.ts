import { LayoutNode } from "./types";

/* -----------------------------------------
   1) Only Vertical Split (Top + Bottom)
----------------------------------------- */
export const VerticalSplitLayout: LayoutNode = {
  id: "vertical-split",
  type: "layout",
  direction: "vertical",
  sizes: [50, 50],
  children: [
    { id: "top-view", type: "component", props: { label: "Top View" } },
    { id: "bottom-view", type: "component", props: { label: "Bottom View" } },
  ],
};

/* -----------------------------------------
   2) Only Horizontal Split (Left + Right)
----------------------------------------- */
export const HorizontalSplitLayout: LayoutNode = {
  id: "horizontal-split",
  type: "layout",
  direction: "horizontal",
  sizes: [50, 50],
  children: [
    { id: "left-view", type: "component", props: { label: "Left Panel" } },
    { id: "right-view", type: "component", props: { label: "Right Panel" } },
  ],
};

/* -----------------------------------------
   3) Left Vertical (Top+Bottom) + Right Horizontal (Left+Right)
----------------------------------------- */
export const MixedEditorLayout: LayoutNode = {
  id: "mixed-editor",
  type: "layout",
  direction: "horizontal",
  sizes: [35, 65],
  children: [
    {
      id: "left-vertical",
      type: "layout",
      direction: "vertical",
      sizes: [50, 50],
      children: [
        { id: "left-top", type: "component", props: { label: "Navigation" } },
        {
          id: "left-bottom",
          type: "component",
          props: { label: "Settings / Inspector" },
        },
      ],
    },
    {
      id: "right-horizontal",
      type: "layout",
      direction: "horizontal",
      sizes: [60, 40],
      children: [
        {
          id: "canvas-area",
          type: "component",
          props: { label: "Canvas / Workspace" },
        },
        {
          id: "preview-logs",
          type: "layout",
          direction: "vertical",
          sizes: [60, 40],
          children: [
            { id: "preview", type: "component", props: { label: "Preview" } },
            {
              id: "logs",
              type: "component",
              props: { label: "Console / Logs" },
            },
          ],
        },
      ],
    },
  ],
};

/* -----------------------------------------
   4) Only Nested Layout (3 Level Deep)
----------------------------------------- */
export const DeepNestedLayout: LayoutNode = {
  id: "deep-nested",
  type: "layout",
  direction: "vertical",
  sizes: [50, 50],
  children: [
    {
      id: "nested-l1",
      type: "layout",
      direction: "horizontal",
      sizes: [60, 40],
      children: [
        {
          id: "nested-l2",
          type: "layout",
          direction: "vertical",
          sizes: [70, 30],
          children: [
            {
              id: "nested-top",
              type: "component",
              props: { label: "Nested Top" },
            },
            {
              id: "nested-bottom",
              type: "component",
              props: { label: "Nested Bottom" },
            },
          ],
        },
        { id: "side-panel", type: "component", props: { label: "Side Panel" } },
      ],
    },
    { id: "footer-bar", type: "component", props: { label: "Footer" } },
  ],
};

/* -----------------------------------------
   5) Component Showcase Layout (Example Dashboard)
----------------------------------------- */
export const ComponentShowcaseLayout: LayoutNode = {
  id: "component-showcase",
  type: "layout",
  direction: "vertical",
  sizes: [20, 80],
  children: [
    {
      id: "header",
      type: "component",
      props: { label: "Header Bar" },
    },
    {
      id: "dashboard-body",
      type: "layout",
      direction: "horizontal",
      sizes: [25, 75],
      children: [
        {
          id: "sidebar",
          type: "component",
          props: { label: "Sidebar Menu" },
        },
        {
          id: "main-content",
          type: "component",
          props: { label: "Main Dashboard Content" },
        },
      ],
    },
  ],
};

export const layoutResizableMap: Record<string, LayoutNode> = {
  verticalsplit: VerticalSplitLayout,
  horizontalsplit: HorizontalSplitLayout,
  mixededitor: MixedEditorLayout,
  deepnested: DeepNestedLayout,
  componentshowcase: ComponentShowcaseLayout,
};

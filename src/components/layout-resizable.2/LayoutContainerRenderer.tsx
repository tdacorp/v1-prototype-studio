"use client";

import React from "react";
import Split from "react-split";
import { LayoutContainer} from "./types";
import LayoutRenderer from "./LayoutRenderer";
import { mapLayoutProps } from "@/runtime/adapters/layoutResizableAdapter";

interface Props {
  node: LayoutContainer;
}

const LayoutContainerRenderer: React.FC<Props> = ({ node }) => {
  const { direction, children, sizes } = node;

  return (
    <Split
      className={`flex ${
        direction === "horizontal" ? "flex-row" : "flex-col"
      } h-full w-full`}
      sizes={sizes}
      direction={direction}
      minSize={100}
      gutterSize={6}
      gutterAlign="center"
      cursor={direction === "horizontal" ? "col-resize" : "row-resize"}
    >
      {children.map((child) => (
        <LayoutRenderer key={child.id} layout={mapLayoutProps(child)} />

      ))}
    </Split>
  );
};

export default LayoutContainerRenderer;

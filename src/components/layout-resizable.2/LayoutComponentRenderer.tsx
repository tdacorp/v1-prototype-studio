"use client";

import React from "react";
import { LayoutComponent } from "./types";

interface Props {
  node: LayoutComponent;
}

const LayoutComponentRenderer: React.FC<Props> = ({ node }) => {
  const { label } = node.props;

  return (
    <div className="flex items-center justify-center h-full bg-zinc-900 text-white border border-zinc-800 rounded-md">
      {label}
    </div>
  );
};

export default LayoutComponentRenderer;

import React, { JSX } from "react";
import { HeadingSchema } from "./types";
import { tokens } from "./tokens";

export const Heading: React.FC<{ schema: HeadingSchema }> = ({ schema }) => {
  const {
    level,
    content,
    color,
    align,
    weight,
    margin,
    italic,
    underline,
    letterSpacing,
    lineHeight,
    transform,
    className,
  } = schema.props;

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const styles = {
    color: color || tokens.colors.textPrimary,
    fontSize: tokens.fontSizes[`h${level}`],
    fontWeight: tokens.fontWeights[weight || "bold"],
    lineHeight: lineHeight || tokens.lineHeights[`h${level}`],
    letterSpacing: tokens.letterSpacing[letterSpacing || "normal"],
    textAlign: align || "left",
    margin: margin || "0.5rem 0",
    fontStyle: italic ? "italic" : "normal",
    textDecoration: underline ? "underline" : "none",
    textTransform: transform || "none",
    transition: tokens.transitions.default,
  };

  return (
    <Tag style={styles} className={className}>
      {content}
    </Tag>
  );
};

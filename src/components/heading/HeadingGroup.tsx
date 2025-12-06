import React from "react";
import { HeadingSchema } from "./types";
import { Heading } from "./Heading";

export const HeadingGroup: React.FC<{ schema: HeadingSchema }> = ({ schema }) => {
  return (
    <section className="bg-gray-50 pt-28 px-6 flex flex-col gap-4">
      <Heading schema={schema} />
    </section>
  );
};

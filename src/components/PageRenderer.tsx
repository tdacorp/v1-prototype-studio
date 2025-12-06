"use client";
import React from "react";
import {
  COMPONENT_ADAPTERS,
  RUNTIME_COMPONENTS,
} from "./COMPONENT_REGISTRY/registery";

export default function PageRenderer({ sections }: { sections: any[] }) {
  return (
    <>
      {sections.map((section, idx) => {
        const Component = RUNTIME_COMPONENTS[section.type];   // FIXED
        if (!Component)
          return (
            <div key={idx} className="p-4 bg-red-50 text-red-700">
              Unknown component: {section.type}
            </div>
          );

        const adapter = COMPONENT_ADAPTERS[section.type];     // FIXED
        const finalProps = adapter ? adapter(section.props) : section.props;

        return (
          <Component
            key={idx}
            schema={{
              id: section.id,
              type: section.type,
              variant: section.variant,
              props: finalProps,
            }}
          />
        );
      })}
    </>
  );
}


"use client";

import { CSSProperties, ReactNode } from "react";

type FlexDirection = "row" | "column" | "row-reverse" | "column-reverse";

type FlexConfig = {
  flexDirection?: FlexDirection;
  gap?: CSSProperties["gap"];
  alignItems?: CSSProperties["alignItems"];
  justifyContent?: CSSProperties["justifyContent"];
  flexWrap?: CSSProperties["flexWrap"];
};

type ResponsiveSectionProps = {
  children: ReactNode;
  portrait?: FlexConfig;
  landscape?: FlexConfig;
};

export const ResponsiveSection = ({
  children,
  portrait = { flexDirection: "column" },
  landscape = { flexDirection: "row" },
}: ResponsiveSectionProps) => {
  const portraitStyles = {
    flexDirection: portrait.flexDirection ?? "column",
    gap: portrait.gap ?? undefined,
    alignItems: portrait.alignItems ?? undefined,
    justifyContent: portrait.justifyContent ?? undefined,
    flexWrap: portrait.flexWrap ?? undefined,
  };

  const landscapeStyles = {
    flexDirection: landscape.flexDirection ?? "row",
    gap: landscape.gap ?? undefined,
    alignItems: landscape.alignItems ?? undefined,
    justifyContent: landscape.justifyContent ?? undefined,
    flexWrap: landscape.flexWrap ?? undefined,
  };

  return (
    <>
      <div className="responsive-layout">{children}</div>

      <style jsx>{`
        .responsive-layout {
          display: flex;
          flex-direction: ${portraitStyles.flexDirection};
          ${portraitStyles.gap ? `gap: ${portraitStyles.gap};` : ""}
          ${portraitStyles.alignItems
            ? `align-items: ${portraitStyles.alignItems};`
            : ""}
          ${portraitStyles.justifyContent
            ? `justify-content: ${portraitStyles.justifyContent};`
            : ""}
          ${portraitStyles.flexWrap ? `flex-wrap: ${portraitStyles.flexWrap};` : ""}
        }

        @media (orientation: landscape) {
          .responsive-layout {
            flex-direction: ${landscapeStyles.flexDirection};
            ${landscapeStyles.gap ? `gap: ${landscapeStyles.gap};` : ""}
            ${landscapeStyles.alignItems
              ? `align-items: ${landscapeStyles.alignItems};`
              : ""}
            ${landscapeStyles.justifyContent
              ? `justify-content: ${landscapeStyles.justifyContent};`
              : ""}
            ${landscapeStyles.flexWrap
              ? `flex-wrap: ${landscapeStyles.flexWrap};`
              : ""}
          }
        }
      `}</style>
    </>
  );
};

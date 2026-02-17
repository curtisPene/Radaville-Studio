"use client";

import { useTextAnimation } from "@/features/about/animation/text/use-hero-text-animation";
import { PrismicRichText } from "@prismicio/react";
import { Content } from "@prismicio/client";
import { Body } from "@/components/typography/body";
import clsx from "clsx";

interface HeroTextBlockProps {
  slice: Content.TextBlockSlice;
  displayHeader?: boolean;
}

export const HeroTextBlock = ({
  slice,
  displayHeader = false,
}: HeroTextBlockProps) => {
  const ref = useTextAnimation();

  return (
    <section
      ref={ref}
      data-component="hero-text"
      className="flex flex-col gap-[4vw] py-[14vw]"
    >
      <h2
        className={clsx(
          displayHeader ? "text-[12vw]" : "text-[3vw]",
          displayHeader && "font-serif",
        )}
      >
        {displayHeader
          ? slice.primary.title?.split(" ").join("\n")
          : `(${slice.primary.title})`}
      </h2>
      <PrismicRichText
        field={slice.primary.content}
        components={{
          paragraph: ({ children }) => <Body>{children}</Body>,
        }}
      />
    </section>
  );
};

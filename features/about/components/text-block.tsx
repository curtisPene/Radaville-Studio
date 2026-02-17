"use client";

import { PrismicRichText } from "@prismicio/react";
import { Content } from "@prismicio/client";
import { Body } from "@/components/typography/body";
import clsx from "clsx";
import { useTextBlockAnimation } from "@/features/about/animation/text/use-text-block-animation";

interface TextBlockConfig {
  slice: Content.TextBlockSlice;
  displayHeader?: boolean;
  condensedHeader?: boolean;
}

export const TextBlock = ({
  slice,
  displayHeader = false,
  condensedHeader = false,
}: TextBlockConfig) => {
  const ref = useTextBlockAnimation();

  return (
    <section
      ref={ref}
      data-component="hero-text"
      className="flex flex-col gap-[4vw] py-[14vw]"
    >
      <h2
        className={clsx(
          "leading-none font-serif text-[3vw]",
          displayHeader && "text-[26vw]",
          condensedHeader && "font-serif text-[14vw]",
          displayHeader && "font-serif",
        )}
      >
        {displayHeader
          ? slice.primary.title?.split(" ").map((word, i, arr) => (
              <span key={i}>
                {word}
                {i < arr.length - 1 && <br />}
              </span>
            ))
          : condensedHeader
            ? slice.primary.title
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

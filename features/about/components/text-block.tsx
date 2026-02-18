"use client";

import { PrismicRichText } from "@prismicio/react";
import { Content } from "@prismicio/client";
import { Body } from "@/components/typography/body";
import { useTextBlockAnimation } from "@/features/about/animation/text/use-text-block-animation";
import { Title } from "@/components/typography/title";
import { fluid } from "@/lib/fluid";
interface TextBlockConfig {
  slice: Content.TextBlockSlice;
  sizing: "headline" | "title" | "subtitle";
  wordbreak?: boolean;
}

export const TextBlock = ({ sizing, slice }: TextBlockConfig) => {
  const ref = useTextBlockAnimation();

  return (
    <section
      ref={ref}
      data-component="text-block"
      className="flex flex-col"
      style={{
        gap: fluid(12, 16),
        paddingTop: fluid(22, 40),
        paddingBottom: fluid(22, 40),
      }}
    >
      <Title as={sizing} serif wordBreak>
        {slice.primary.title}
      </Title>
      <PrismicRichText
        field={slice.primary.content}
        components={{
          paragraph: ({ children }) => <Body>{children}</Body>,
        }}
      />
    </section>
  );
};

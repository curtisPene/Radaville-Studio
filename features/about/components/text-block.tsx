"use client";

import { PrismicRichText } from "@prismicio/react";
import { Content } from "@prismicio/client";
import { Body } from "@/components/typography/body";
import { useTextBlockAnimation } from "@/features/about/animation/text/use-text-block-animation";
import { Title } from "@/components/typography/title";
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
      className="flex flex-col gap-[4vw] py-[14vw]"
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

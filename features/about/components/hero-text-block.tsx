"use client";

import { useTextAnimation } from "@/features/about/animation/text/use-hero-text-animation";
import { PrismicRichText } from "@prismicio/react";
import { Content } from "@prismicio/client";
import { Body } from "@/components/typography/body";
import { Title } from "@/components/typography/title";

interface HeroTextBlockProps {
  slice: Content.TextBlockSlice;
}

export const HeroTextBlock = ({ slice }: HeroTextBlockProps) => {
  const ref = useTextAnimation();

  return (
    <section
      ref={ref}
      data-component="hero-text"
      className="flex flex-col gap-[4vw] pb-[14vw]"
    >
      <Title as="headline">({slice.primary.title})</Title>
      <PrismicRichText
        field={slice.primary.content}
        components={{
          paragraph: ({ children }) => <Body>{children}</Body>,
        }}
      />
    </section>
  );
};

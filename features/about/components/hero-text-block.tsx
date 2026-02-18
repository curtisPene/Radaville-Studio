"use client";

import { useTextAnimation } from "@/features/about/animation/text/use-hero-text-animation";
import { PrismicRichText } from "@prismicio/react";
import { Content } from "@prismicio/client";
import { Body } from "@/components/typography/body";
import { Title } from "@/components/typography/title";
import { fluid } from "@/lib/fluid";

interface HeroTextBlockProps {
  slice: Content.TextBlockSlice;
}

export const HeroTextBlock = ({ slice }: HeroTextBlockProps) => {
  const ref = useTextAnimation();

  return (
    <section
      ref={ref}
      data-component="hero-text"
      className="flex flex-col"
      style={{
        gap: fluid(12, 16),
        paddingBottom: fluid(22, 40),
      }}
    >
      <Title as="headline" className="opacity-0">
        ({slice.primary.title})
      </Title>
      <PrismicRichText
        field={slice.primary.content}
        components={{
          paragraph: ({ children }) => (
            <Body className="opacity-0">{children}</Body>
          ),
        }}
      />
    </section>
  );
};

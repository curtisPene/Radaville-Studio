"use client";

import { Body } from "@/components/typography/body";
import { Heading } from "@/components/typography/heading";
import { Title } from "@/components/typography/title";
import { fluid } from "@/lib/fluid";
import { Content } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { RefObject } from "react";

type UseAnimationHook = () => RefObject<HTMLElement | null>;

type TextBlockProps = {
  slice: Content.TextBlockSlice;
  useAnimation?: UseAnimationHook;
  dataComponent?: string;
};

export const TextBlock = ({
  slice,
  useAnimation,
  dataComponent = "text-block-section",
}: TextBlockProps) => {
  const ref = useAnimation?.();

  return (
    <section
      ref={ref}
      data-component={dataComponent}
      className={useAnimation ? "opacity-0" : undefined}
      style={{ paddingTop: fluid(18, 72), paddingBottom: fluid(18, 72) }}
    >
      <Title as="title">{slice.primary.title}</Title>
      <PrismicRichText
        field={slice.primary.content}
        components={{
          paragraph: ({ children }) => {
            return <Body>{children}</Body>;
          },
        }}
      />
    </section>
  );
};

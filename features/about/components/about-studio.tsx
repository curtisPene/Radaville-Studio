import { Body } from "@/components/typography/body";
import { Title } from "@/components/typography/title";
import { fluid } from "@/lib/fluid";
import { Content } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";

export const AboutStudio = ({ slice }: { slice: Content.TextBlockSlice }) => {
  return (
    <section
      data-component="hero-section"
      style={{ paddingTop: fluid(18, 72), paddingBottom: fluid(18, 72) }}
    >
      <Title as="headline">{slice.primary.title}</Title>
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

import { Body } from "@/components/typography/body";
import { Title } from "@/components/typography/title";
import { Content } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";

export const AboutStudio = ({ slice }: { slice: Content.TextBlockSlice }) => {
  return (
    <section data-component="hero-section">
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

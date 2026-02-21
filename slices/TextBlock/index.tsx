import { FC } from "react";
import { Content } from "@prismicio/client";
import {
  SliceComponentProps,
  PrismicRichText,
  PrismicText,
} from "@prismicio/react";
import { Body } from "@/components/typography/body";
import { Heading } from "@/components/typography/heading";

/**
 * Props for `TextBlock`.
 */
export type TextBlockProps = SliceComponentProps<Content.TextBlockSlice>;

/**
 * Component for "TextBlock" Slices.
 */

const TextBlock: FC<TextBlockProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading as="h2">{slice.primary.title}</Heading>
      <PrismicRichText field={slice.primary.content} />
    </section>
  );
};

export default TextBlock;

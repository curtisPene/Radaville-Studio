import { FC } from "react";
import { Content } from "@prismicio/client";
import {
  SliceComponentProps,
  PrismicRichText,
  PrismicText,
} from "@prismicio/react";
import { Body } from "@/components/typography/body";

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
      className="flex flex-col gap-[4vw] py-[14vw]"
    >
      <h2 className="text-[3.5vw]">({slice.primary.title})</h2>
      <PrismicRichText
        field={slice.primary.content}
        components={{
          paragraph: ({ children }) => <Body>{children}</Body>,
        }}
      />
    </section>
  );
};

export default TextBlock;

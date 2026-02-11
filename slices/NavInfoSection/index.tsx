import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Body } from "@/components/typography/body";

/**
 * Props for `NavInfoSection`.
 */
export type NavInfoSectionProps =
  SliceComponentProps<Content.NavInfoSectionSlice>;

/**
 * Component for "NavInfoSection" Slices.
 */
const NavInfoSection: FC<NavInfoSectionProps> = ({ slice }) => {
  const { section_items, title, section_number } = slice.primary;
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col gap-[1vw] items-end py-[2vw]"
    >
      <div className="flex flex-row gap-[2vw]">
        <Body inline sub faded>
          {section_number}
        </Body>
        <Body inline sub>
          {title}
        </Body>
      </div>

      <div className="flex flex-col items-end">
        {section_items.map((item) => {
          return (
            <Body key={item.section_item} inline sub>
              {item.section_item}
            </Body>
          );
        })}
      </div>
    </section>
  );
};

export default NavInfoSection;

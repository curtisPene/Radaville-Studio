import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Label } from "@/components/typography/label";

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
        <Label inline sub faded>
          {section_number}
        </Label>
        <Label inline sub>
          {title}
        </Label>
      </div>

      <div className="flex flex-col items-end">
        {section_items.map((item) => {
          return (
            <Label key={item.section_item} inline sub>
              {item.section_item}
            </Label>
          );
        })}
      </div>
    </section>
  );
};

export default NavInfoSection;

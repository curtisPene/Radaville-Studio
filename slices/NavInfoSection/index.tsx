import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Label } from "@/components/typography/label";
import { fluid } from "@/lib/fluid";

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
      className="flex flex-col gap-[1vw] items-end"
      style={{
        paddingTop: fluid(6, 8),
        paddingBottom: fluid(6, 12),
        gap: fluid(2, 4),
      }}
    >
      <div className="flex flex-row gap-[2vw]">
        <Label inline faded>
          {section_number}
        </Label>
        <Label inline>{title}</Label>
      </div>

      <div className="flex flex-col items-end">
        {section_items.map((item) => {
          return (
            <Label key={item.section_item} inline>
              {item.section_item}
            </Label>
          );
        })}
      </div>
    </section>
  );
};

export default NavInfoSection;

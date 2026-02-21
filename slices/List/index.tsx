"use client";

import { FC, RefObject } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Label } from "@/components/typography/label";
import { fluid } from "@/lib/fluid";

/**
 * Hook that returns a ref for the List component
 */
export type UseListHook = () => RefObject<HTMLElement | null>;

/**
 * Props for `List`.
 */
export type ListProps = SliceComponentProps<Content.ListSlice> & {
  useAnimation?: UseListHook;
};

/**
 * Component for "List" Slices.
 */
const List: FC<ListProps> = ({ slice, useAnimation }) => {
  const ref = useAnimation?.();

  return (
    <section
      ref={ref}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col"
      style={{
        gap: fluid(4, 8),
        width: "27%",
      }}
    >
      <Label caption faded data-component="list-title">
        {slice.primary.title}
      </Label>
      <ul data-component="list-items">
        {slice.primary.items.map((item) => (
          <li key={item.list_item}>
            <Label caption>{item.list_item}</Label>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default List;

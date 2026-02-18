"use client";

import { useGalleryAnimation } from "@/components/layout/gallery/use-gallery-animation";
import { fluid } from "@/lib/fluid";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

const GalleryItem = ({
  item,
  backgroundColor,
}: {
  item: Content.GalleryImageSlice;
  backgroundColor?: string;
}) => {
  const ref = useGalleryAnimation();
  return (
    <div
      ref={ref}
      className={`relative overflow-hidden h-[137vw] landscape:h-[48vw]`}
      style={{ backgroundColor }}
    >
      <PrismicNextImage
        field={item.primary.image}
        fill
        className="object-cover"
      />
    </div>
  );
};

export const Gallery = ({
  items,
  backgroundColor,
}: {
  items: Content.GalleryImageSlice[];
  backgroundColor?: string;
}) => {
  return (
    <div
      className="grid grid-cols-1 w-full landscape:grid-cols-3 landscape:w-[90vw]"
      style={{ gap: fluid(25, 30) }}
    >
      {items.map((item) => (
        <GalleryItem
          key={item.primary.caption}
          item={item}
          backgroundColor={backgroundColor}
        />
      ))}
    </div>
  );
};

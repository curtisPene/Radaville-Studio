"use client";

import { useGalleryAnimation } from "@/components/layout/gallery/use-gallery-animation";
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
      className="relative h-[137vw] overflow-hidden"
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
    <div className="grid grid-cols-1 gap-[8vw]">
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

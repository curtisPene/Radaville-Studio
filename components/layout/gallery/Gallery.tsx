"use client";

import { useGalleryAnimation } from "@/components/layout/gallery/use-gallery-animation";
import { fluid } from "@/lib/fluid";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

const GalleryItem = ({
  item,
  backgroundColor,
}: {
  item: Content.GallerySliceDefaultPrimaryGalleryItemsItem;
  backgroundColor?: string;
}) => {
  const ref = useGalleryAnimation();
  return (
    <div
      ref={ref}
      className={`relative overflow-hidden w-full`}
      style={{
        backgroundColor,
        height: fluid(440, 640),
      }}
    >
      <PrismicNextImage field={item.image} fill className="object-cover" />
    </div>
  );
};

export const Gallery = ({
  slice,
  backgroundColor,
}: {
  slice: Content.GallerySlice;
  backgroundColor?: string;
}) => {
  if (!slice?.primary?.gallery_items) {
    return null;
  }

  return (
    <div
      className="grid grid-cols-1 w-full landscape:grid-cols-3"
      style={{ gap: fluid(25, 30) }}
    >
      {slice.primary.gallery_items.map((item) => (
        <GalleryItem
          key={item.caption}
          item={item}
          backgroundColor={backgroundColor}
        />
      ))}
    </div>
  );
};

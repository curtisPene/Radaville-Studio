import { fluid } from "@/lib/fluid";
import { ImageSlice } from "@/prismicio-types";
import { PrismicNextImage } from "@prismicio/next";

export const AboutImage = ({ imageSlice }: { imageSlice: ImageSlice }) => {
  return (
    <div data-component="rada-image">
      <PrismicNextImage
        field={imageSlice.primary.image}
        width={1920}
        height={1080}
        className="w-full object-cover"
        style={{ height: fluid(440, 480) }}
      />
    </div>
  );
};

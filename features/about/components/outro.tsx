import { fluid } from "@/lib/fluid";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

export const Outro = ({ imageSlice }: { imageSlice: Content.ImageSlice }) => {
  return (
    <section
      component-data="outro-section"
      style={{
        mask: "url(/images/about/mask.svg)",
        maskPosition: "center",
        maskSize: fluid(120, 360),
        maskRepeat: "no-repeat",
      }}
    >
      <PrismicNextImage
        field={imageSlice.primary.image}
        className="w-full object-cover aspect-151/220"
      />
    </section>
  );
};

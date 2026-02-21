import { AboutImage } from "@/features/about/components/about-image";
import { Services } from "@/features/about/components/services";
import { ImageSlice, ListSlice } from "@/prismicio-types";

export const ServicesBlock = ({
  imageSlice,
  lists,
}: {
  imageSlice: ImageSlice;
  lists: ListSlice[];
}) => {
  return (
    <section className="flex flex-col landscape:flex-row-reverse items-start justify-between">
      <AboutImage imageSlice={imageSlice} />
      <Services slices={lists} />
    </section>
  );
};

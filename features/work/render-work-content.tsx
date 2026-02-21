import { Carousel } from "@/features/work/components/carousel";
import CarouselProvider from "@/features/work/context/carousel-context";
import { ProjectSlideData } from "@/lib/create-page";

export function renderWorkContent(projectSlideData: ProjectSlideData) {
  return (
    <CarouselProvider>
      <Carousel data={projectSlideData} />
    </CarouselProvider>
  );
}

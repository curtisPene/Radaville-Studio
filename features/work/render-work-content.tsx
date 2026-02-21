import { CarouselContainer } from "@/features/work/components/carousel-container";
import CarouselProvider from "@/features/work/context/carousel-context";
import { ProjectSlideData } from "@/lib/create-page";

export function renderWorkContent(projectSlideData: ProjectSlideData) {
  return (
    <CarouselProvider>
      <CarouselContainer data={projectSlideData} />
    </CarouselProvider>
  );
}

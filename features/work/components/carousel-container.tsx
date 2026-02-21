"use client";

import { useCarouselAnimations } from "@/features/work/animation/carousel/use-carousel-animations";
import { ProjectSlide } from "@/lib/prismic-service";
import { getSlides } from "../lib/lib";
import { useCarousel as useCarouselContext } from "@/features/work/context/carousel-context";
import { Carousel } from "./carousel";

/**
 * Container component - connects Carousel to external dependencies
 * Handles all hooks, context, and data transformations
 */
export function CarouselContainer({ data }: { data: ProjectSlide[] }) {
  // Get current slide index from context
  const { currentSlideDataIndex } = useCarouselContext();

  // Compute visible slides
  const visibleSlides = getSlides(data, currentSlideDataIndex);

  // Get animation ref from hook
  const animationRef = useCarouselAnimations(data);

  // Extract current year
  const currentYear = data[currentSlideDataIndex]?.year || "";

  // Pass all computed data to pure component
  return (
    <Carousel
      visibleSlides={visibleSlides}
      currentSlideIndex={currentSlideDataIndex}
      currentYear={currentYear}
      totalSlides={data.length}
      animationRef={animationRef}
    />
  );
}

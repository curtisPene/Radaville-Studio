"use client";

import { useImperativeHandle, useRef } from "react";
import { flushSync } from "react-dom";
import gsap from "gsap";
import { ProjectSlide } from "@/lib/prismic-service";
import { mod } from "@/lib/modulus";
import { useCarousel as useCarouselContext } from "@/features/work/context/carousel-context";
import { useCarousel } from "@/features/work/animation/carousel/use-carousel-animation";
import { usePageColorAnimation } from "@/features/work/animation/carousel/use-page-color-animation";
import { useSlideTextAnimation } from "@/features/work/animation/carousel/use-slide-text-animation";
import { useSlideYearAnimation } from "@/features/work/animation/carousel/use-slide-year-animation";
import { useSlideNumberAnimation } from "@/features/work/animation/carousel/use-slide-number-animation";
import { useSlideIndicatorAnimation } from "@/features/work/animation/carousel/use-slide-indicator-animation";
import { useCarouselObserver } from "@/features/work/animation/carousel/use-carousel-observer";
import { useCarouselEntrance } from "@/features/work/animation/entrance/use-carousel-entrance";
import {
  CarouselAnimController,
  useWorkOrchestrator,
} from "@/features/work/context/work-orchestrator";
import { HeaderAnimController } from "@/components/layout/header/use-header-animation";
import { FooterAnimController } from "@/components/layout/footer/use-footer-animaiton";

type Direction = "forward" | "backward";

export const useCarouselAnimations = (projectSlideData: ProjectSlide[]) => {
  const { carouselRef } = useWorkOrchestrator();
  const ref = useRef<HTMLDivElement>(null);

  const { currentSlideDataIndex, setCurrentSlideDataIndex, isAnimatingRef } =
    useCarouselContext();

  const currentIndexRef = useRef(currentSlideDataIndex);

  const buildCarouselEntrance = useCarouselEntrance(ref);
  const buildCarousel = useCarousel(ref);
  const buildColor = usePageColorAnimation(projectSlideData);
  const buildText = useSlideTextAnimation(ref);
  const buildYear = useSlideYearAnimation(ref, projectSlideData);
  const buildNumber = useSlideNumberAnimation(ref);
  const buildIndicator = useSlideIndicatorAnimation(ref);

  const play = (direction: Direction) => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    const currentIndex = currentIndexRef.current;
    const nextIndex =
      direction === "forward"
        ? mod(currentIndex + 1, projectSlideData.length)
        : mod(currentIndex - 1, projectSlideData.length);

    const carouselTl = buildCarousel(direction);

    gsap
      .timeline({
        onComplete: () => {
          flushSync(() => {
            carouselTl.revert();
            currentIndexRef.current = nextIndex;
            setCurrentSlideDataIndex(nextIndex);
          });
          isAnimatingRef.current = false;
        },
      })
      .add(carouselTl)
      .add(buildColor(direction, nextIndex), 0)
      .add(buildText(direction), 0.4)
      .add(buildYear(direction, nextIndex), 0.4)
      .add(buildNumber(direction, nextIndex), 0.4)
      .add(buildIndicator(direction, nextIndex), 0);
  };

  const observer = useCarouselObserver(ref, play);

  useImperativeHandle(
    carouselRef,
    (): CarouselAnimController => ({
      enter: (
        header: HeaderAnimController["enter"],
        footer: FooterAnimController["enter"],
      ) => buildCarouselEntrance(header, footer, observer),
    }),
  );

  return ref;
};

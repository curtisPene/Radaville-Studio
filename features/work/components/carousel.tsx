"use client";

import { Body } from "@/components/typography/body";
import { ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { useRef } from "react";
import { useCarousel } from "../animation/use-carousel-animation";
import { useCarouselObserver } from "../animation/use-carousel-observer";
import { usePageColorAnimation } from "../animation/use-page-color-animation";
import { useSlideTextAnimation } from "../animation/use-slide-text-animation";
import { ProjectSlide } from "@/lib/prismic-service";
import { getSlides } from "../lib/lib";
import { useCarousel as useCarouselContext } from "@/features/work/context/carousel-context";
import clsx from "clsx";
import { CarouselFooter } from "./carousel-footer";
import { Footer } from "@/components/footer";
import { useSlideYearAnimation } from "../animation/use-slide-year-animation";
import { useSlideNumberAnimation } from "../animation/use-slide-number-animation";
import { useSlideIndicatorAnimation } from "../animation/use-slide-indicator-animation";

const Slide = ({
  translateZ,
  faded = false,
  imageField,
  title,
}: {
  translateZ: string;
  imageField: ImageField;
  title: string;
  faded?: boolean;
}) => {
  const baseClass =
    "absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-[45vw]";
  return (
    <div
      data-component="slide"
      className={clsx(baseClass, translateZ, faded && "opacity-0")}
    >
      <PrismicNextImage
        field={imageField}
        className="w-full h-full object-cover"
      />
      <h3
        key={title}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[8vw] font-bold"
      >
        {title}
      </h3>
    </div>
  );
};

const Z_OFFSETS = [
  { translateZ: "-translate-z-140", faded: true },
  { translateZ: "-translate-z-105", faded: false },
  { translateZ: "-translate-z-70", faded: false },
  { translateZ: "-translate-z-35", faded: false },
  { translateZ: "translate-z-0", faded: false },
  { translateZ: "translate-z-35", faded: true },
];

export function Carousel({ data: projectSlideData }: { data: ProjectSlide[] }) {
  const { currentSlideDataIndex } = useCarouselContext();
  const slides = getSlides(projectSlideData, currentSlideDataIndex);
  const ref = useRef<HTMLDivElement>(null);

  useCarousel(ref);
  useCarouselObserver(ref);
  usePageColorAnimation(projectSlideData);
  useSlideTextAnimation(ref);
  useSlideYearAnimation(ref, projectSlideData);
  useSlideNumberAnimation(ref);
  useSlideIndicatorAnimation(ref);

  return (
    <section
      ref={ref}
      data-component="carousel-root"
      className="flex-1 flex flex-col"
    >
      <div
        data-component="slide-info"
        className="flex flex-row justify-between"
      >
        <div>
          <Body>Year</Body>
          <div
            data-animate-component="slide-year"
            className="h-[3.75vw] overflow-clip"
          >
            <Body>{projectSlideData[currentSlideDataIndex].year}</Body>
            <Body>####</Body>
          </div>
        </div>
        <div>
          <Body>Slide</Body>
          <Body>
            <Body data-animate-component="slide-number-current" inline>
              1
            </Body>{" "}
            - {projectSlideData.length}
          </Body>
        </div>
      </div>

      <div
        data-component="carousel"
        className="flex-1 transform-3d perspective-[3000px] perspective-origin-[50%_-1%]"
      >
        {Z_OFFSETS.map((offset, index) => {
          const slide = slides[index];
          return (
            <Slide
              key={index}
              translateZ={offset.translateZ}
              faded={offset.faded}
              imageField={slide.image}
              title={slide.title}
            />
          );
        })}
      </div>
      <Footer />
      <CarouselFooter />
    </section>
  );
}

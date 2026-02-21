"use client";

import { ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { ProjectSlide } from "@/lib/prismic-service";
import clsx from "clsx";
import { CarouselFooter } from "./carousel-footer";
import { Footer } from "@/components/layout/footer/footer";
import { Label } from "@/components/typography/label";
import { fluid } from "@/lib/fluid";
import { RefObject } from "react";

const Slide = ({
  translateZ,
  faded = false,
  clipped = false,
  imageField,
  title,
}: {
  translateZ: string;
  imageField: ImageField;
  title: string;
  faded?: boolean;
  clipped?: boolean;
}) => {
  const baseClass = "absolute top-0 left-0 w-full h-full overflow-clip";
  return (
    <div
      data-component="slide"
      className={clsx(baseClass, translateZ, faded && "opacity-0")}
      style={{ clipPath: clipped ? "inset(0 100% 0 0)" : "none" }}
    >
      <PrismicNextImage
        field={imageField}
        className="w-full h-full object-cover"
      />
      <h3
        key={title}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif leading-none"
        style={{ fontSize: fluid(38, 64) }}
      >
        {title}
      </h3>
    </div>
  );
};

const Z_OFFSETS = [
  { translateZ: "-translate-z-140", faded: true, clipped: false },
  { translateZ: "-translate-z-105", faded: true, clipped: false },
  { translateZ: "-translate-z-70", faded: true, clipped: false },
  { translateZ: "-translate-z-35", faded: true, clipped: false },
  { translateZ: "translate-z-0", faded: true, clipped: true },
  { translateZ: "translate-z-35", faded: true, clipped: false },
];

export type CarouselProps = {
  /** Visible slides to render (computed by container) */
  visibleSlides: ProjectSlide[];
  /** Current slide index */
  currentSlideIndex: number;
  /** Current slide year */
  currentYear: string;
  /** Total number of slides */
  totalSlides: number;
  /** Animation ref from hook */
  animationRef: RefObject<HTMLElement | null>;
};

/**
 * Pure Carousel component - no external dependencies
 * All data is passed via props for maximum testability and reusability
 */
export function Carousel({
  visibleSlides,
  currentYear,
  totalSlides,
  animationRef,
}: CarouselProps) {
  return (
    <section
      ref={animationRef}
      data-component="carousel-root"
      className={clsx("flex-1 flex flex-col")}
    >
      <div
        data-component="slide-info"
        className="flex flex-row justify-between overflow-clip"
      >
        <div className="translate-y-full">
          <Label>Year</Label>
          <div
            data-animate-component="slide-year"
            className="h-[3.8vw] overflow-clip"
            style={{ height: "var(--step-0)" }}
          >
            <Label>{currentYear}</Label>
            <Label>####</Label>
          </div>
        </div>
        <div className="translate-y-full">
          <Label>Slide</Label>
          <Label>
            <Label data-animate-component="slide-number-current" inline>
              1
            </Label>
            {""} - {totalSlides}
          </Label>
        </div>
      </div>
      <div data-component="carousel" className="flex-1 relative">
        <div
          className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform-3d perspective-[3000px] perspective-origin-[50%_-75%] aspect-294/144"
          style={{
            width: fluid(294, 664),
            height: fluid(144, 315),
          }}
        >
          {Z_OFFSETS.map((offset, index) => {
            const slide = visibleSlides[index];
            return (
              <Slide
                key={index}
                translateZ={offset.translateZ}
                faded={offset.faded}
                imageField={slide.image}
                title={slide.title}
                clipped={offset.clipped}
              />
            );
          })}
        </div>
      </div>
      <Footer />
      <CarouselFooter />
    </section>
  );
}

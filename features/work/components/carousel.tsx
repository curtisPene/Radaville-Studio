"use client";

import { Body } from "@/components/typography/body";
import { ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { useCarouselAnimations } from "@/features/work/animation/carousel/use-carousel-animations";
import { ProjectSlide } from "@/lib/prismic-service";
import { getSlides } from "../lib/lib";
import { useCarousel as useCarouselContext } from "@/features/work/context/carousel-context";
import clsx from "clsx";
import { CarouselFooter } from "./carousel-footer";
import { Footer } from "@/components/layout/footer/footer";

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
  const baseClass =
    "absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-[45vw] overflow-clip";
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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[8vw] font-bold"
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

export function Carousel({ data: projectSlideData }: { data: ProjectSlide[] }) {
  const { currentSlideDataIndex } = useCarouselContext();
  const slides = getSlides(projectSlideData, currentSlideDataIndex);
  const ref = useCarouselAnimations(projectSlideData);

  return (
    <section
      ref={ref}
      data-component="carousel-root"
      className="flex-1 flex flex-col"
    >
      <div
        data-component="slide-info"
        className="flex flex-row justify-between overflow-clip"
      >
        <div className="translate-y-full">
          <Body>Year</Body>
          <div
            data-animate-component="slide-year"
            className="h-[3.8vw] overflow-clip"
          >
            <Body>{projectSlideData[currentSlideDataIndex].year}</Body>
            <Body>####</Body>
          </div>
        </div>
        <div className="translate-y-full">
          <Body>Slide</Body>
          <Body>
            <Body data-animate-component="slide-number-current" inline>
              1
            </Body>
            {""} - {projectSlideData.length}
          </Body>
        </div>
      </div>
      <div data-component="carousel" className="flex-1 relative">
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform-3d perspective-[3000px] perspective-origin-[50%_-75%] w-full h-[45vw]">
          {Z_OFFSETS.map((offset, index) => {
            const slide = slides[index];
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

"use client";

import { useGSAP } from "@gsap/react";
import { useCarousel as useCarouselContext } from "../context/carousel-context";
import gsap from "gsap";
import { mod } from "@/lib/modulus";
import { ProjectSlide } from "@/lib/prismic-service";

export const usePageColorAnimation = (projectSlideData: ProjectSlide[]) => {
  const { forward, backward, currentSlideDataIndex } = useCarouselContext();

  useGSAP(
    () => {
      if (!forward) return;
      const nextIndex = mod(currentSlideDataIndex + 1, projectSlideData.length);
      const nextColor = projectSlideData[nextIndex].backgroundColor;

      gsap.to("[data-page]", {
        background: nextColor,
        duration: 0.6,
        ease: "power2.inOut",
      });
    },
    { dependencies: [forward] },
  );

  useGSAP(
    () => {
      if (!backward) return;
      const prevIndex = mod(currentSlideDataIndex - 1, projectSlideData.length);
      const prevColor = projectSlideData[prevIndex].backgroundColor;

      gsap.to("[data-page]", {
        background: prevColor,
        duration: 0.6,
        ease: "power2.inOut",
      });
    },
    { dependencies: [backward] },
  );
};

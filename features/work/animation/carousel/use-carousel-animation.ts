"use client";

import { RefObject } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type Direction = "forward" | "backward";

export const useCarousel = (ref: RefObject<HTMLDivElement | null>) => {
  const { contextSafe } = useGSAP({ scope: ref });

  return contextSafe((direction: Direction): gsap.core.Timeline => {
    const slides = gsap.utils.toArray<Element>("[data-component=slide]");

    if (direction === "forward") {
      const firstVisible = slides[4];
      const backBuffer = slides[0];

      const forwardTl = gsap
        .timeline()
        .to(slides, {
          translateZ: (i) => (i === 4 ? "+=420px" : "+=140px"),
          duration: 0.6,
          ease: "power2.inOut",
        })
        .to(
          [firstVisible, backBuffer],
          {
            opacity: (i) => (i === 0 ? 0 : 1),
            duration: 0.4,
            ease: "power2.inOut",
          },
          0,
        );

      return forwardTl;
    }

    const lastVisible = slides[1];
    const frontBuffer = slides[slides.length - 1];

    const backwardTl = gsap
      .timeline()
      .to(slides, {
        translateZ: (i) => (i === 1 ? "-=420px" : "-=140px"),
        duration: 0.6,
        ease: "power2.inOut",
      })
      .to(
        [lastVisible, frontBuffer],
        {
          opacity: (i) => (i === 0 ? 0 : 1),
          duration: 0.4,
          ease: "power2.inOut",
        },
        0,
      );

    return backwardTl;
  });
};

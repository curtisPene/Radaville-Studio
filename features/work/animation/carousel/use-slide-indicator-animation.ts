"use client";

import { RefObject } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type Direction = "forward" | "backward";

export const useSlideIndicatorAnimation = (
  ref: RefObject<HTMLDivElement | null>,
) => {
  const { contextSafe } = useGSAP({ scope: ref, dependencies: [] });

  return contextSafe(
    (_direction: Direction, nextIndex: number): gsap.core.Timeline => {
      const indicators = gsap.utils.toArray<HTMLElement>(
        "[data-animate-component=slide-indicator]",
      );

      return gsap.timeline().to(indicators, {
        opacity: (i) => (i === nextIndex ? 1 : 0.5),
        duration: 0.6,
        ease: "power2.inOut",
      });
    },
  );
};

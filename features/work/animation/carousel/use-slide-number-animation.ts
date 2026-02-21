"use client";

import { RefObject } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type Direction = "forward" | "backward";

export const useSlideNumberAnimation = (
  ref: RefObject<HTMLDivElement | null>,
) => {
  const { contextSafe } = useGSAP({ scope: ref, dependencies: [] });

  return contextSafe(
    (_direction: Direction, nextIndex: number): gsap.core.Timeline => {
      const slideNumber = gsap.utils.toArray<HTMLElement>(
        "[data-animate-component=slide-number-current]",
      )[0];

      return gsap
        .timeline()
        .set(slideNumber, { innerText: nextIndex + 1 }, 0.2);
    },
  );
};

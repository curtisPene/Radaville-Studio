"use client";

import { RefObject } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ProjectSlide } from "@/lib/prismic-service";

type Direction = "forward" | "backward";

export const useSlideYearAnimation = (
  ref: RefObject<HTMLDivElement | null>,
  projectSlideData: ProjectSlide[],
) => {
  const { contextSafe } = useGSAP({ scope: ref, dependencies: [] });

  return contextSafe(
    (_direction: Direction, nextIndex: number): gsap.core.Timeline => {
      const yearContainer = gsap.utils.toArray<HTMLElement>(
        "[data-animate-component=slide-year]",
      )[0];

      const current = yearContainer?.firstChild;
      const incoming = yearContainer?.lastChild;

      if (!current || !incoming) return gsap.timeline();

      const incomingYear = projectSlideData[nextIndex].year;

      const tl = gsap.timeline({
        onStart: () => {
          gsap.set(incoming, { innerText: incomingYear });
        },
        onComplete: () => {
          tl.revert();
        },
      });

      return tl.to([current, incoming], {
        y: "-100%",
        duration: 0.6,
        ease: "power2.inOut",
      });
    },
  );
};

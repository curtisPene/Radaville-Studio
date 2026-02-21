"use client";

import { RefObject } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/dist/SplitText";

gsap.registerPlugin(SplitText);

type Direction = "forward" | "backward";

export const useSlideTextAnimation = (
  ref: RefObject<HTMLDivElement | null>,
) => {
  const { contextSafe } = useGSAP({ scope: ref, dependencies: [] });

  return contextSafe((direction: Direction): gsap.core.Timeline => {
    const slides = gsap.utils.toArray<HTMLDivElement>("[data-component=slide]");
    const slideIndex = direction === "forward" ? 3 : 5;
    const incomingSlideTitle = slides[slideIndex].querySelector("h3");

    const splitTitle = new SplitText(incomingSlideTitle, {
      type: "words",
      mask: "words",
    });

    return gsap.timeline().from(splitTitle.words, {
      y: "100%",
      duration: 0.6,
      ease: "power2.inOut",
    });
  });
};

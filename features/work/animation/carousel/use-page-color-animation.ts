"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ProjectSlide } from "@/lib/prismic-service";

type Direction = "forward" | "backward";

export const usePageColorAnimation = (projectSlideData: ProjectSlide[]) => {
  const { contextSafe } = useGSAP();

  return contextSafe((direction: Direction, nextIndex: number): gsap.core.Timeline => {
    const color = projectSlideData[nextIndex].backgroundColor;

    return gsap.timeline().to("[data-page]", {
      background: color,
      duration: 0.6,
      ease: "power2.inOut",
    });
  });
};

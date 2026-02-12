"use client";

import { useGSAP } from "@gsap/react";
import { RefObject } from "react";
import { useCarousel as useCarouselContext } from "../context/carousel-context";
import gsap from "gsap";
import { SplitText } from "gsap/dist/SplitText";

gsap.registerPlugin(SplitText);

export const useSlideTextAnimation = (
  ref: RefObject<HTMLDivElement | null>,
) => {
  const { forward, backward } = useCarouselContext();

  useGSAP(
    () => {
      if (!ref.current || !forward) return;

      const slides = gsap.utils.toArray(
        "[data-component=slide]",
      ) as HTMLDivElement[];
      const incomingSlideTitle = slides[3].querySelector("h3");
      const splitTitle = new SplitText(incomingSlideTitle, {
        type: "words",
        mask: "words",
      });

      const timeline = gsap.timeline({
        paused: true,
        onComplete: () => {},
      });

      timeline.from(splitTitle.words, {
        y: "100%",
        duration: 0.6,
        ease: "power2.inOut",
      });

      timeline.play();
    },
    { scope: ref, dependencies: [forward] },
  );

  useGSAP(
    () => {
      if (!ref.current || !backward) return;

      const slides = gsap.utils.toArray(
        "[data-component=slide]",
      ) as HTMLDivElement[];
      const incomingSlideTitle = slides[5].querySelector("h3");
      const splitTitle = new SplitText(incomingSlideTitle, {
        type: "words",
        mask: "words",
      });

      const timeline = gsap.timeline({
        paused: true,
        onComplete: () => {},
      });

      timeline.from(splitTitle.words, {
        y: "100%",
        duration: 0.6,
        ease: "power2.inOut",
      });

      timeline.play();
    },
    { scope: ref, dependencies: [backward] },
  );
};

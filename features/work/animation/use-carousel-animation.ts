"use client";

import { useGSAP } from "@gsap/react";
import { RefObject } from "react";
import { flushSync } from "react-dom";
import { useCarousel as useCarouselContext } from "../context/carousel-context";
import gsap from "gsap";
import { mod } from "@/lib/modulus";

export const useCarousel = (ref: RefObject<HTMLDivElement | null>) => {
  const {
    forward,
    backward,
    setForward,
    setBackward,
    setCurrentSlideDataIndex,
    currentSlideDataIndex,
  } = useCarouselContext();

  useGSAP(
    () => {
      if (!ref.current || !forward) return;
      const slides = gsap.utils.toArray("[data-component=slide]");
      const firstVisible = slides[4];
      const backBuffer = slides[0];

      const timeline = gsap.timeline({
        paused: true,
        onComplete: () => {
          flushSync(() => {
            setForward(false);
            const i = mod(currentSlideDataIndex + 1, 3);
            setCurrentSlideDataIndex(i);
          });
          timeline.revert();
        },
      });

      timeline
        .to(slides, {
          translateZ: "+=140px",
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

      timeline.play();
    },
    { scope: ref, dependencies: [forward] },
  );

  useGSAP(
    () => {
      if (!ref.current || !backward) return;
      const slides = gsap.utils.toArray("[data-component=slide]");
      const lastVisible = slides[1];
      const frontBuffer = slides[slides.length - 1];

      const timeline = gsap.timeline({
        paused: true,
        onComplete: () => {
          flushSync(() => {
            setBackward(false);
            const i = mod(currentSlideDataIndex - 1, 3);
            setCurrentSlideDataIndex(i);
          });
          timeline.revert();
        },
      });

      timeline
        .to(slides, {
          translateZ: "-=140px",
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

      timeline.play();
    },
    { scope: ref, dependencies: [backward] },
  );
};

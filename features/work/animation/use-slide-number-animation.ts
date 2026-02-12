import { useGSAP } from "@gsap/react";
import { RefObject } from "react";
import { useCarousel } from "../context/carousel-context";
import { mod } from "@/lib/modulus";
import gsap from "gsap";

export const useSlideNumberAnimation = (
  ref: RefObject<HTMLDivElement | null>,
) => {
  const { forward, backward, currentSlideDataIndex } = useCarousel();

  useGSAP(
    () => {
      if (!ref.current || !forward) return;

      const slideNumber = ref.current.querySelector(
        "[data-animate-component=slide-number-current]",
      );

      const nextSlideNumber = mod(currentSlideDataIndex + 1, 3) + 1;

      gsap.delayedCall(0.2, () => {
        gsap.set(slideNumber, {
          innerText: nextSlideNumber,
        });
      });
    },
    { scope: ref, dependencies: [forward] },
  );

  useGSAP(
    () => {
      if (!ref.current || !backward) return;

      const slideNumber = ref.current.querySelector(
        "[data-animate-component=slide-number-current]",
      );
      const nextSlideNumber = mod(currentSlideDataIndex - 1, 3) + 1;

      gsap.delayedCall(0.2, () => {
        gsap.set(slideNumber, {
          innerText: nextSlideNumber,
        });
      });
    },
    { scope: ref, dependencies: [backward] },
  );
};

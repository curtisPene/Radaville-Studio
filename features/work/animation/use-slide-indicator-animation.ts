import { useGSAP } from "@gsap/react";
import { RefObject } from "react";
import { useCarousel } from "../context/carousel-context";
import { mod } from "@/lib/modulus";
import gsap from "gsap";

export const useSlideIndicatorAnimation = (
  ref: RefObject<HTMLDivElement | null>,
) => {
  const { forward, backward, currentSlideDataIndex } = useCarousel();

  useGSAP(
    () => {
      if (!ref.current || !forward) return;

      const SlideIndicators = gsap.utils.toArray(
        "[data-animate-component=slide-indicator]",
      ) as HTMLDivElement[];

      const nextSlideNumber = mod(currentSlideDataIndex + 1, 3);

      gsap.to(SlideIndicators, {
        opacity: (i) => (i === nextSlideNumber ? 1 : 0.5),
        duration: 0.6,
        ease: "power2.inOut",
      });
    },
    { scope: ref, dependencies: [forward] },
  );

  useGSAP(
    () => {
      if (!ref.current || !backward) return;

      const SlideIndicators = gsap.utils.toArray(
        "[data-animate-component=slide-indicator]",
      ) as HTMLDivElement[];

      const nextSlideNumber = mod(currentSlideDataIndex - 1, 3);

      gsap.to(SlideIndicators, {
        opacity: (i) => (i === nextSlideNumber ? 1 : 0.5),
        duration: 0.6,
        ease: "power2.inOut",
      });
    },
    { scope: ref, dependencies: [backward] },
  );
};

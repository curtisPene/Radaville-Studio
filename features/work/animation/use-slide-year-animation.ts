import { ProjectSlide } from "@/lib/prismic-service";
import { useGSAP } from "@gsap/react";
import { RefObject } from "react";
import { useCarousel } from "../context/carousel-context";
import gsap from "gsap";
import { mod } from "@/lib/modulus";

export const useSlideYearAnimation = (
  ref: RefObject<HTMLDivElement | null>,
  projectSlideData: ProjectSlide[],
) => {
  const { forward, backward, currentSlideDataIndex } = useCarousel();
  useGSAP(
    () => {
      if (!ref.current || !forward) return;

      const slideYear = ref.current.querySelector(
        "[data-animate-component=slide-year]",
      );

      const current = slideYear?.firstChild;
      const incoming = slideYear?.lastChild;

      if (!current || !incoming) return;

      const nextIndex = mod(currentSlideDataIndex + 1, projectSlideData.length);
      const incomingYear = projectSlideData[nextIndex].year;

      const timeline = gsap.timeline({
        paused: true,
        onStart: () => {
          gsap.set(incoming, {
            innerText: incomingYear,
          });
        },
        onComplete: () => {
          timeline.revert();
        },
      });

      timeline.to([current, incoming], {
        y: "-100%",
        duration: 0.6,
        ease: "power2.inOut",
      });

      timeline.play();
    },
    { dependencies: [forward], scope: ref },
  );

  useGSAP(
    () => {
      if (!ref.current || !backward) return;
      const slideYear = ref.current.querySelector(
        "[data-animate-component=slide-year]",
      );

      const current = slideYear?.firstChild;
      const incoming = slideYear?.lastChild;

      if (!current || !incoming) return;

      const nextIndex = mod(currentSlideDataIndex - 1, projectSlideData.length);
      const incomingYear = projectSlideData[nextIndex].year;

      const timeline = gsap.timeline({
        paused: true,
        onStart: () => {
          gsap.set(incoming, {
            innerText: incomingYear,
          });
        },
        onComplete: () => {
          timeline.revert();
        },
      });

      timeline.to([current, incoming], {
        y: "-100%",
        duration: 0.6,
        ease: "power2.inOut",
      });

      timeline.play();
    },
    { scope: ref, dependencies: [backward] },
  );
};

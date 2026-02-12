"use client";
import { useGSAP } from "@gsap/react";
import { RefObject } from "react";
import { useCarousel } from "../context/carousel-context";
import gsap from "gsap";
import { Observer } from "gsap/dist/Observer";

gsap.registerPlugin(Observer);

export const useCarouselObserver = (ref: RefObject<HTMLDivElement | null>) => {
  const { setForward, setBackward } = useCarousel();
  useGSAP(
    () => {
      if (!ref.current) return;
      Observer.create({
        type: "wheel,touch",
        target: ref.current,
        onUp: () => {
          setForward(true);
        },
        onDown: () => {
          setBackward(true);
        },
      });
    },
    { dependencies: [] },
  );
};

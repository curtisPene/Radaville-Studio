"use client";

import { RefObject, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Observer } from "gsap/dist/Observer";

gsap.registerPlugin(Observer);

type Direction = "forward" | "backward";

export const useCarouselObserver = (
  ref: RefObject<HTMLDivElement | null>,
  play: (direction: Direction) => void,
) => {
  const observerRef = useRef<ReturnType<typeof Observer.create> | null>(null);
  useGSAP(
    () => {
      if (!ref.current) return;
      observerRef.current = Observer.create({
        type: "wheel,touch",
        target: ref.current,
        debounce: true,
        onUp: () => play("forward"),
        onDown: () => play("backward"),
      });
    },
    { scope: ref, dependencies: [] },
  );

  return observerRef;
};

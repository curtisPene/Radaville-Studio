"use client";

import { RefObject, useEffect, useRef } from "react";
import gsap from "gsap";
import { Observer } from "gsap/dist/Observer";
import { useAppState } from "@/context/app-state-context";

gsap.registerPlugin(Observer);

type Direction = "forward" | "backward";

export const useCarouselObserver = (
  ref: RefObject<HTMLDivElement | null>,
  play: (direction: Direction) => void,
) => {
  const observerRef = useRef<Observer | null>(null);
  const { orchestratorRef } = useAppState();

  useEffect(() => {
    const createObserver = () => {
      if (!ref.current || observerRef.current) return;
      observerRef.current = Observer.create({
        type: "wheel,touch",
        target: ref.current,
        debounce: true,
        onUp: () => play("forward"),
        onDown: () => play("backward"),
      });
    };

    // Wait for entrance to complete before creating observer
    orchestratorRef.current?.onEntranceComplete?.(createObserver);
  }, [ref, play, orchestratorRef]);

  return observerRef;
};

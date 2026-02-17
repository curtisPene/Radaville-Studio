"use client";

import {
  AnimationController,
  useAboutOrchestrator,
} from "@/features/about/context/about-orchestrator";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useImperativeHandle, useRef } from "react";

export const useHeroHeaderAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { heroHeaderRef } = useAboutOrchestrator();
  const { contextSafe } = useGSAP({ scope: ref });

  const enter = contextSafe(() => {
    return gsap
      .timeline()
      .fromTo(
        "[data-component=hero-header]",
        { y: "105%" },
        { y: 0, duration: 0.6, ease: "power2.out" },
      );
  });

  useImperativeHandle(
    heroHeaderRef,
    (): AnimationController => ({
      enter,
    }),
    [enter],
  );

  return ref;
};

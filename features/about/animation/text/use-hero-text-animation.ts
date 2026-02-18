"use client";

import {
  AnimationController,
  useAboutOrchestrator,
} from "@/features/about/context/about-orchestrator";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useImperativeHandle, useRef } from "react";

gsap.registerPlugin(SplitText);

export const useTextAnimation = () => {
  const ref = useRef<HTMLElement>(null);
  const { heroTextRef } = useAboutOrchestrator();
  const { contextSafe } = useGSAP({ scope: ref });

  const enter = contextSafe(() => {
    const splitP = new SplitText("p", {
      type: "lines",
      mask: "lines",
    });

    const splith2 = new SplitText("h1", {
      type: "words",
      mask: "words",
    });

    return gsap
      .timeline({
        onComplete: () => {
          splitP.revert();
          splith2.revert();
        },
      })
      .from(splith2.words, {
        y: "100%",
        duration: 0.3,
        stagger: 0.1,
        ease: "power2.out",
      })
      .from(
        splitP.lines,
        {
          opacity: 0,
          y: "100%",
          duration: 0.3,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.1",
      );
  });

  useImperativeHandle(heroTextRef, (): AnimationController => ({ enter }), [
    enter,
  ]);

  return ref;
};

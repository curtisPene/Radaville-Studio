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

export const useHeroAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { heroRef } = useAboutOrchestrator();

  const { contextSafe } = useGSAP({ scope: ref, dependencies: [] });

  useImperativeHandle(heroRef, (): AnimationController => {
    const title = ref.current?.querySelector("h2") as HTMLHeadingElement;
    const p = ref.current?.querySelector("p") as HTMLParagraphElement;

    const splitTitle = new SplitText(title, {
      type: "words",
      mask: "words",
    });

    const splitP = new SplitText(p, {
      type: "lines",
      mask: "lines",
    });
    const enter = contextSafe(() => {
      return gsap
        .timeline({
          onStart: () => {
            gsap.set(ref.current, { opacity: 1 });
          },
          onComplete: () => {
            splitTitle.revert();
            splitP.revert();
          },
        })
        .from([splitTitle.words, splitP.lines], {
          y: "100%",
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.inOut",
        });
    });

    return {
      enter: enter,
    };
  });

  return ref;
};

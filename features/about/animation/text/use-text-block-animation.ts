"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const useTextBlockAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const pSplit = new SplitText("p", { type: "lines", mask: "lines" });
      const h2Split = new SplitText("h2", { type: "lines", mask: "lines" });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ref.current,
            start: "top 70%",
          },
          onComplete: () => {
            pSplit.revert();
            h2Split.revert();
          },
        })
        .from(h2Split.lines, {
          y: "105%",
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
        })
        .from(
          pSplit.lines,
          {
            y: "100%",
            duration: 0.3,
            ease: "power2.out",
            stagger: 0.1,
          },
          "-=0.2",
        );
    },
    { scope: ref, dependencies: [] },
  );
  return ref;
};

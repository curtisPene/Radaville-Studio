"use client";

import { useAppState } from "@/context/app-state-context";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const useTextBlockAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { pageReady } = useAppState();
  useGSAP(
    () => {
      if (!pageReady || !ref.current) return;

      const pElements = ref.current.querySelectorAll("p");
      const h2Elements = ref.current.querySelectorAll("h2");

      if (pElements.length === 0 && h2Elements.length === 0) return;

      const pSplit = new SplitText(Array.from(pElements), {
        type: "lines",
        mask: "lines",
      });
      const h2Split = new SplitText(Array.from(h2Elements), {
        type: "lines",
        mask: "lines",
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ref.current,
            start: "top 70%",
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
    {
      scope: ref,
      dependencies: [pageReady],
    },
  );
  return ref;
};

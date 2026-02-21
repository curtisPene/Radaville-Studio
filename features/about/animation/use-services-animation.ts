"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const useListAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;

      const titleEl = ref.current.querySelector("[data-component=list-title]");
      const itemsEl = ref.current.querySelector("[data-component=list-items]");

      if (!titleEl || !itemsEl) return;

      const splitTitle = new SplitText(titleEl, {
        type: "words",
        mask: "words",
      });
      const splitItems = new SplitText(Array.from(itemsEl.children), {
        type: "lines",
        mask: "lines",
      });

      // Delay ScrollTrigger initialization to allow view transition and layout to settle
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ref.current,
            start: "top 75%",
          },
        })
        .from(splitTitle.words, {
          y: "100%",
          duration: 0.3,
          ease: "power2.inOut",
        })
        .from(splitItems.lines, {
          y: "100%",
          duration: 0.3,
          stagger: 0.1,
          ease: "linear",
        });
    },
    { scope: ref, dependencies: [] },
  );
  return ref;
};

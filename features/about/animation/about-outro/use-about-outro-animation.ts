"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const useAboutOutroAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ref.current,
            start: "top top",
            pin: true,
            pinSpacing: true,
            scrub: true,
          },
        })
        .fromTo(
          ref.current,
          { maskSize: "50%" },
          { maskSize: "180%", duration: 1.4, ease: "none" },
        )
        .fromTo(
          "[data-component=outro-image-wrapper]",
          { scale: 1.4 },
          { scale: 1, duration: 1.3, ease: "none" },
          "<",
        );
    },
    { scope: ref, dependencies: [] },
  );

  return ref;
};

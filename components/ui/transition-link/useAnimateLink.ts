"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import { useNav } from "@/context/nav-context";

gsap.registerPlugin(SplitText);

export const useAnimateLink = () => {
  const ref = useRef<HTMLAnchorElement>(null);

  const { navigate } = useNav();

  useGSAP(
    () => {
      if (!ref.current) return;
      const target = ref.current;

      ref.current.onclick = (e: MouseEvent) => {
        e.preventDefault();
        const split = new SplitText(target, {
          type: "chars",
        });

        gsap.set(target, {
          perspective: 1000,
          willChange: "transform",
        });

        const tween = gsap.to(split.chars, {
          paused: true,
          rotateY: 180,
          duration: 0.3,
          stagger: 0.1,
          ease: "power2.inOut",
          transformOrigin: "center center",
        });

        tween.play().then(() => {
          navigate(target.dataset.href as string);
        });
      };
    },
    { scope: ref, dependencies: [] },
  );

  return { ref };
};

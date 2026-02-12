"use client";

import { useNav } from "@/context/nav-context";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { usePathname, useRouter } from "next/navigation";
import { useRef } from "react";

gsap.registerPlugin(SplitText);

export const useAnimateLink = () => {
  const ref = useRef<HTMLAnchorElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const { setIsVisible } = useNav();
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
          duration: 0.4,
          stagger: 0.1,
          ease: "power2.inOut",
          transformOrigin: "center center",
        });
        tween.play().then(() => {
          document.startViewTransition(() => {
            setIsVisible(false);
            if (pathname !== target.dataset.href) {
              router.push(target.dataset.href as string);
            }
          });
        });
      };
    },
    { scope: ref, dependencies: [] },
  );

  return { ref };
};

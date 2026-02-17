import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { RefObject } from "react";

gsap.registerPlugin(SplitText);

export const useEnterNavLinks = (ref: RefObject<HTMLDivElement | null>) => {
  useGSAP(
    () => {
      if (!ref.current) return;
      const links = gsap.utils.toArray(
        "[data-component=nav-links] > a",
      ) as HTMLAnchorElement[];

      const split = new SplitText(links, {
        type: "words",
        mask: "words",
      });

      gsap.from(split.words, {
        y: "105%",
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        delay: 1.5,
        onComplete: () => {
          split.revert();
        },
      });
    },
    { scope: ref, dependencies: [] },
  );
};

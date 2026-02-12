import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { RefObject } from "react";

gsap.registerPlugin(SplitText);

export const useEnterNavFooter = (ref: RefObject<HTMLDivElement | null>) => {
  useGSAP(
    () => {
      if (!ref.current) return;
      const footerText = gsap.utils.toArray(
        "[data-component=nav-footer] > span",
      ) as HTMLSpanElement[];

      const split = new SplitText(footerText, {
        type: "words",
        mask: "words",
      });

      gsap.from(split.words, {
        y: "100%",
        duration: 0.8,
        ease: "power2.out",
        delay: 2.8,
        onComplete: () => {
          split.revert();
        },
      });
    },
    { scope: ref, dependencies: [] },
  );
};

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RefObject } from "react";

export const useEnterNavHeader = (ref: RefObject<HTMLDivElement | null>) => {
  useGSAP(
    () => {
      if (!ref.current) return;
      gsap.fromTo(
        ref.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.8,
          ease: "linear",
          delay: 1.2,
        },
      );
    },
    { scope: ref, dependencies: [] },
  );
};

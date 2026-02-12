import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RefObject } from "react";

export const useEnterNavInfo = (ref: RefObject<HTMLDivElement | null>) => {
  useGSAP(
    () => {
      gsap.fromTo(
        ref.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.8,
          ease: "linear",
          delay: 2.2,
        },
      );
    },
    { scope: ref, dependencies: [] },
  );
};

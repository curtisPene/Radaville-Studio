import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const useGalleryAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      if (!ref.current) return;
      gsap.fromTo(
        ref.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.8,
          ease: "linear",
          scrollTrigger: {
            trigger: ref.current,
            start: "top+=25% bottom ",
          },
        },
      );
    },
    { scope: ref, dependencies: [] },
  );
  return ref;
};

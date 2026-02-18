import { useAppState } from "@/context/app-state-context";
import { fluidPx } from "@/lib/fluid";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const useLoaderAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { setPreloadComplete } = useAppState();

  useGSAP(
    () => {
      if (!ref.current) return;
      const pipeLeft = ref.current.querySelector("[data-component=pipe-left]");
      const pipeRight = ref.current.querySelector(
        "[data-component=pipe-right]",
      );
      const textLeft = ref.current.querySelector("[data-component=text-left]");
      const textRight = ref.current.querySelector(
        "[data-component=text-right]",
      );

      const progress = ref.current.querySelector(
        "[data-component=progress]",
      ) as HTMLHeadingElement;
      const dist = fluidPx(24, 64);

      gsap.set(textLeft, { transformOrigin: "top right" });

      const progressProxy = { value: 0 };

      gsap
        .timeline({ defaults: { duration: 0.4, ease: "linear" } })
        .to(pipeLeft, { x: -dist }, 0)
        .to(pipeRight, { x: dist }, 0)
        .to(textLeft, { x: -dist, opacity: 0.4 }, 0)
        .to(textRight, { x: dist, opacity: 0.4 }, 0)
        .to(progress, { opacity: 1 })
        .to(
          progressProxy,
          {
            value: 100,
            duration: 3,
            ease: "power4.inOut",
            onUpdate: () => {
              progress.innerText = `${Math.round(progressProxy.value).toString().padStart(2, "0")}`;
            },
          },
          0.8,
        )
        .to(ref.current, { opacity: 0, delay: 1.2 }, 2.4)
        .then(() => {
          setPreloadComplete(true);
        });
    },
    { scope: ref, dependencies: [] },
  );

  return ref;
};

"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useImperativeHandle, useRef } from "react";
import { useLayoutAnimHandles } from "@/context/layout-anim-context";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export type FooterAnimController = {
  enter: () => gsap.core.Timeline;
  exit: () => gsap.core.Timeline;
};

export const useFooterAnimation = ({
  trigger = false,
}: {
  trigger: boolean;
}) => {
  const { footerRef } = useLayoutAnimHandles();
  const ref = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: ref, dependencies: [] });

  const buildEntrance = contextSafe(() => {
    return gsap
      .timeline()
      .fromTo(
        "[data-component=footer] ",
        { y: "100%" },
        { y: 0, duration: 0.6 },
      );
  });

  const buildExit = contextSafe(() =>
    gsap.timeline().to("[data-component=footer]", { y: "100%", duration: 0.6 }),
  );

  useImperativeHandle(
    footerRef,
    (): FooterAnimController => ({
      enter: buildEntrance,
      exit: buildExit,
    }),
  );

  useGSAP(
    () => {
      if (!ref.current || !trigger) return;
      gsap.fromTo(
        "[data-component=footer]",
        { y: "100%" },
        {
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: ref.current,
            start: "bottom bottom ",
          },
        },
      );
    },
    { scope: ref, dependencies: [] },
  );

  return ref;
};

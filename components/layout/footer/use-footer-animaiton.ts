"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useImperativeHandle, useRef } from "react";
import { useWorkOrchestrator } from "@/features/work/context/work-orchestrator";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export type FooterAnimController = {
  enter: () => gsap.core.Timeline;
  exit: () => gsap.core.Timeline;
};

export const useFooterAnimation = () => {
  const { footerRef } = useWorkOrchestrator();
  const ref = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: ref });

  const buildEntrance = contextSafe(() => {
    return gsap
      .timeline()
      .fromTo(
        "[data-component=footer] ",
        { y: "100%" },
        { y: 0, duration: 0.4 },
      );
  });

  const buildExit = contextSafe(() =>
    gsap.timeline().to("[data-component=footer]", { y: "100%", duration: 0.4 }),
  );

  useImperativeHandle(
    footerRef,
    (): FooterAnimController => ({
      enter: buildEntrance,
      exit: buildExit,
    }),
  );

  return ref;
};

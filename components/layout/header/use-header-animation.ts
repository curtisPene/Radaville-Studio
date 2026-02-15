"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useImperativeHandle, useRef } from "react";
import { useWorkOrchestrator } from "@/features/work/context/work-orchestrator";

export type HeaderAnimController = {
  enter: () => gsap.core.Timeline;
  exit: () => gsap.core.Timeline;
};

export const useHeaderAnimation = () => {
  const { headerRef } = useWorkOrchestrator();
  const ref = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP();

  const buildEntrance = contextSafe(() =>
    gsap
      .timeline()
      .fromTo(
        "[data-component=header]",
        { opacity: 0 },
        { opacity: 1, duration: 0.4 },
      ),
  );

  const buildExit = contextSafe(() =>
    gsap
      .timeline()
      .fromTo(
        "[data-component=header]",
        { opacity: 1 },
        { opacity: 0, duration: 0.4 },
      ),
  );

  useImperativeHandle(
    headerRef,
    (): HeaderAnimController => ({
      enter: buildEntrance,
      exit: buildExit,
    }),
  );

  return ref;
};

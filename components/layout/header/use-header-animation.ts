"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useImperativeHandle, useRef } from "react";
import { useLayoutAnimHandles } from "@/context/layout-anim-context";
import { useAppState } from "@/context/app-state-context";

export type HeaderAnimController = {
  enter: () => gsap.core.Timeline;
  exit: () => gsap.core.Timeline;
};

export const useHeaderAnimation = () => {
  const { headerRef } = useLayoutAnimHandles();
  const ref = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: ref, dependencies: [] });

  const buildEntrance = contextSafe(() =>
    gsap
      .timeline()
      .fromTo(
        "[data-component=header]",
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
      ),
  );

  const buildExit = contextSafe(() =>
    gsap
      .timeline()
      .fromTo(
        "[data-component=header]",
        { opacity: 1 },
        { opacity: 0, duration: 0.6 },
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

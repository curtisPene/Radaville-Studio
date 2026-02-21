"use client";

import {
  OrchestratorControllerType,
  useAppState,
} from "@/context/app-state-context";
import { useLayoutAnimHandles } from "@/context/layout-anim-context";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  createContext,
  RefObject,
  useContext,
  useImperativeHandle,
  useRef,
} from "react";

export type AnimationController = {
  enter: () => gsap.core.Timeline;
};

type AboutOrchestratorContextType = {
  heroRef: RefObject<AnimationController | null>;
  heroTextRef: RefObject<AnimationController | null>;
};

const AboutOrchestratorContext = createContext<
  AboutOrchestratorContextType | undefined
>(undefined);

export const useAboutOrchestrator = () => {
  const context = useContext(AboutOrchestratorContext);
  if (!context) {
    throw new Error(
      "useAboutOrchestrator must be used within a WorkOrchestrator",
    );
  }
  return context;
};

export function AboutOrchestrator({ children }: { children: React.ReactNode }) {
  const { headerRef } = useLayoutAnimHandles();
  const heroRef = useRef<AnimationController>(null);
  const heroTextRef = useRef<AnimationController>(null);

  const { introComplete, preloadComplete, orchestratorRef } = useAppState();

  const { contextSafe } = useGSAP({ dependencies: [] });

  useImperativeHandle(orchestratorRef, (): OrchestratorControllerType => {
    const enter = contextSafe(() => {
      if (
        !headerRef.current ||
        !heroRef.current
        //   !heroTextRef.current
      ) {
        console.log(
          headerRef.current && "headerRef.current",
          heroRef.current && "heroHeaderRef.current",
          // heroTextRef.current && "heroTextRef.current",
        );
        return console.error("AboutOrchestrator: missing ref");
      }

      if (!introComplete || !preloadComplete) return;

      gsap
        .timeline()
        .add(headerRef.current!.enter())
        .add(heroRef.current.enter());
      // .add(heroTextRef.current.enter(), "-=0.4");
    });

    return {
      playEnter: enter,
    };
  });

  return (
    <AboutOrchestratorContext value={{ heroRef, heroTextRef }}>
      {children}
    </AboutOrchestratorContext>
  );
}

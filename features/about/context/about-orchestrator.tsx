"use client";

import { useLayoutAnimHandles } from "@/context/layout-anim-context";
import { useOrchestratorController } from "@/context/use-orchestrator-controller";
import gsap from "gsap";
import { createContext, RefObject, useContext, useRef } from "react";

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

  useOrchestratorController(() => {
    if (!headerRef.current || !heroRef.current) {
      console.error("AboutOrchestrator: missing ref");
      return;
    }

    return gsap
      .timeline()
      .add(headerRef.current.enter())
      .add(heroRef.current.enter());
    // .add(heroTextRef.current.enter(), "-=0.4");
  });

  return (
    <AboutOrchestratorContext value={{ heroRef, heroTextRef }}>
      {children}
    </AboutOrchestratorContext>
  );
}

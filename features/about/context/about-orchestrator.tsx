"use client";

import { useLayoutAnimHandles } from "@/context/layout-anim-context";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { createContext, RefObject, useContext, useRef } from "react";

export type AnimationController = {
  enter: () => gsap.core.Timeline;
};

type AboutOrchestratorContextType = {
  heroHeaderRef: RefObject<AnimationController | null>;
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
  const heroHeaderRef = useRef<AnimationController>(null);
  const heroTextRef = useRef<AnimationController>(null);

  useGSAP(
    () => {
      if (!headerRef.current || !heroHeaderRef.current || !heroTextRef.current) {
        return console.error("AboutOrchestrator: missing ref");
      }
      gsap
        .timeline({ delay: 1.4 })
        .add(headerRef.current.enter())
        .add(heroHeaderRef.current.enter())
        .add(heroTextRef.current.enter(), "-=0.4");
    },
    { dependencies: [] },
  );

  return (
    <AboutOrchestratorContext value={{ heroHeaderRef, heroTextRef }}>
      {children}
    </AboutOrchestratorContext>
  );
}

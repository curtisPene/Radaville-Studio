"use client";

import { FooterAnimController } from "@/components/layout/footer/use-footer-animaiton";
import { HeaderAnimController } from "@/components/layout/header/use-header-animation";
import { useLayoutAnimHandles } from "@/context/layout-anim-context";
import { useOrchestratorController } from "@/context/use-orchestrator-controller";
import gsap from "gsap";
import { createContext, useContext, useRef, RefObject } from "react";

export type CarouselAnimController = {
  enter: (
    header: HeaderAnimController["enter"],
    footer: FooterAnimController["enter"],
  ) => gsap.core.Timeline;
};

type WorkOrchestratorContextType = {
  carouselRef: RefObject<CarouselAnimController | null>;
};

const WorkOrchestratorContext = createContext<
  WorkOrchestratorContextType | undefined
>(undefined);

export const useWorkOrchestrator = () => {
  const context = useContext(WorkOrchestratorContext);
  if (!context) {
    throw new Error(
      "useWorkOrchestrator must be used within a WorkOrchestrator",
    );
  }
  return context;
};

export function WorkOrchestrator({ children }: { children: React.ReactNode }) {
  const carouselRef = useRef<CarouselAnimController>(null);
  const { headerRef, footerRef } = useLayoutAnimHandles();

  useOrchestratorController(() => {
    if (!carouselRef.current || !headerRef.current || !footerRef.current) {
      console.error("WorkOrchestrator: missing ref");
      return;
    }

    return gsap
      .timeline()
      .add(
        carouselRef.current.enter(
          headerRef.current.enter,
          footerRef.current.enter,
        ),
      );
  });

  return (
    <WorkOrchestratorContext value={{ carouselRef }}>
      {children}
    </WorkOrchestratorContext>
  );
}

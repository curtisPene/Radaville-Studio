"use client";

import { FooterAnimController } from "@/components/layout/footer/use-footer-animaiton";
import { HeaderAnimController } from "@/components/layout/header/use-header-animation";
import {
  OrchestratorControllerType,
  useAppState,
} from "@/context/app-state-context";
import { useLayoutAnimHandles } from "@/context/layout-anim-context";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  createContext,
  useCallback,
  useContext,
  useRef,
  RefObject,
  useImperativeHandle,
} from "react";

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
  const { introComplete, preloadComplete, orchestratorRef } = useAppState();

  const { contextSafe } = useGSAP({ dependencies: [] });

  useImperativeHandle(orchestratorRef, (): OrchestratorControllerType => {
    const enter = contextSafe(() => {
      if (!carouselRef.current || !headerRef.current || !footerRef.current) {
        return console.error("WorkOrchestrator: missing ref");
      }

      if (!introComplete || !preloadComplete) return;

      gsap
        .timeline()
        .add(
          carouselRef.current.enter(
            headerRef.current.enter,
            footerRef.current.enter,
          ),
        );
    });
    return {
      playEnter: enter,
    };
  });

  return (
    <WorkOrchestratorContext value={{ carouselRef }}>
      {children}
    </WorkOrchestratorContext>
  );
}

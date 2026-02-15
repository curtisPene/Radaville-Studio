"use client";

import {
  HeaderAnimController,
} from "@/components/layout/header/use-header-animation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { createContext, useContext, useRef, RefObject } from "react";

export type CarouselAnimController = {
  enter: (header: HeaderAnimController["enter"]) => gsap.core.Timeline;
};

type WorkOrchestratorContextType = {
  carouselRef: RefObject<CarouselAnimController | null>;
  headerRef: RefObject<HeaderAnimController | null>;
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
  const headerRef = useRef<HeaderAnimController>(null);

  useGSAP(
    () => {
      if (!carouselRef.current || !headerRef.current) return;
      gsap.timeline().add(carouselRef.current.enter(headerRef.current.enter));
    },
    { dependencies: [] },
  );

  return (
    <WorkOrchestratorContext value={{ carouselRef, headerRef }}>
      {children}
    </WorkOrchestratorContext>
  );
}

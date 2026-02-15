"use client";

import { FooterAnimController } from "@/components/layout/footer/use-footer-animaiton";
import { HeaderAnimController } from "@/components/layout/header/use-header-animation";
import { useGSAP } from "@gsap/react";
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
  headerRef: RefObject<HeaderAnimController | null>;
  footerRef: RefObject<FooterAnimController | null>;
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
  const footerRef = useRef<FooterAnimController>(null);

  useGSAP(
    () => {
      if (!carouselRef.current || !headerRef.current || !footerRef.current) {
        return console.error("WorkOrchestrator: missing ref");
      }
      gsap
        .timeline()
        .add(
          carouselRef.current.enter(
            headerRef.current.enter,
            footerRef.current.enter,
          ),
        );
    },
    { dependencies: [] },
  );

  return (
    <WorkOrchestratorContext value={{ carouselRef, headerRef, footerRef }}>
      {children}
    </WorkOrchestratorContext>
  );
}

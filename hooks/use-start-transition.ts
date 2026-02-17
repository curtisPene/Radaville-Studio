"use client";

import { useAppState } from "@/context/app-state-context";

export const useStartTransition = () => {
  const { setIsTransitioning } = useAppState();
  return (fn: () => void) => {
    const { ready, finished } = document.startViewTransition(fn);
    ready.then(() => setIsTransitioning(true));
    finished.then(() => setIsTransitioning(false));
  };
};

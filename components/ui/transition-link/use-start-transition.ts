"use client";

import { useAppState } from "@/context/app-state-context";

export const useStartTransition = () => {
  const { incrementTransitionCount, incrementTransitionStartCount } =
    useAppState();

  return (fn: () => void) => {
    const { finished, ready } = document.startViewTransition(fn);

    ready.then(incrementTransitionStartCount);
    finished.then(incrementTransitionCount);
  };
};

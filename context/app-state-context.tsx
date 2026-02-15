"use client";

import { createContext, useContext, useState } from "react";

type AppStateContextType = {
  preloadComplete: boolean;
  setPreloadComplete: (value: boolean) => void;
  introComplete: boolean;
  setIntroComplete: (value: boolean) => void;
  transitionCount: number;
  incrementTransitionCount: () => void;
  transitionStartCount: number;
  incrementTransitionStartCount: () => void;
};

const AppStateContext = createContext<AppStateContextType | undefined>(
  undefined,
);

export function AppStateProvider({ children }: { children: React.ReactNode }) {
  const [preloadComplete, setPreloadComplete] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);
  const [transitionCount, setTransitionCount] = useState<number>(0);
  const [transitionStartCount, setTransitionStartCount] = useState<number>(0);

  const incrementTransitionCount = () =>
    setTransitionCount((count) => count + 1);

  const incrementTransitionStartCount = () =>
    setTransitionStartCount((count) => count + 1);

  return (
    <AppStateContext
      value={{
        preloadComplete,
        setPreloadComplete,
        introComplete,
        setIntroComplete,
        transitionCount,
        incrementTransitionCount,
        transitionStartCount,
        incrementTransitionStartCount,
      }}
    >
      {children}
    </AppStateContext>
  );
}

export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error("useAppState must be used within AppStateProvider");
  }
  return context;
};

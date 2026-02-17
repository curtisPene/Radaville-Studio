"use client";

import { usePathname } from "next/navigation";
import { createContext, useContext, useState } from "react";

type AppStateContextType = {
  preloadComplete: boolean;
  setPreloadComplete: (value: boolean) => void;
  introComplete: boolean;
  setIntroComplete: (value: boolean) => void;
  navIsVisible: boolean;
  setNavIsVisible: (value: boolean) => void;
  isTransitioning: boolean;
  setIsTransitioning: (value: boolean) => void;
  previousPathname: string;
  pageVisible: boolean | null;
};

const AppStateContext = createContext<AppStateContextType | undefined>(
  undefined,
);

export function AppStateProvider({ children }: { children: React.ReactNode }) {
  const [preloadComplete, setPreloadComplete] = useState(true);
  const [introComplete, setIntroComplete] = useState(true);
  const [navIsVisible, setNavIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [previousPathname] = useState(usePathname());
  const pageVisible = !introComplete
    ? null // uninitialized
    : !navIsVisible && !isTransitioning; // true or false

  return (
    <AppStateContext
      value={{
        preloadComplete,
        setPreloadComplete,
        introComplete,
        setIntroComplete,
        navIsVisible,
        setNavIsVisible,
        isTransitioning,
        setIsTransitioning,
        previousPathname,
        pageVisible,
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

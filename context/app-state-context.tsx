"use client";

import { usePathname } from "next/navigation";
import {
  createContext,
  RefObject,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

export type OrchestratorControllerType = {
  playEnter: () => void;
};

type AppStateContextType = {
  preloadComplete: boolean;
  setPreloadComplete: (value: boolean) => void;
  introComplete: boolean;
  setIntroComplete: (value: boolean) => void;
  pageReady: boolean;
  orchestratorRef: RefObject<OrchestratorControllerType | null>;
};

const AppStateContext = createContext<AppStateContextType | undefined>(
  undefined,
);

export function AppStateProvider({ children }: { children: React.ReactNode }) {
  const [preloadComplete, setPreloadComplete] = useState(true);
  const [introComplete, setIntroComplete] = useState(true);
  const pathname = usePathname();
  const isPopStateRef = useRef(false);

  const orchestratorRef = useRef<OrchestratorControllerType | null>(null);

  const pageReady = preloadComplete && introComplete;

  useEffect(() => {
    const handlePopState = () => {
      isPopStateRef.current = true;
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    if (isPopStateRef.current) {
      isPopStateRef.current = false;
      document.fonts.ready.then(() =>
        setTimeout(() => {
          orchestratorRef.current?.playEnter();
        }, 1500),
      );
    }
  }, [pathname]);

  useLayoutEffect(() => {
    if (pageReady) {
      orchestratorRef.current?.playEnter();
    }
  }, [pageReady]);

  return (
    <AppStateContext
      value={{
        preloadComplete,
        setPreloadComplete,
        introComplete,
        setIntroComplete,
        pageReady,
        orchestratorRef,
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

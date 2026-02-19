"use client";

import { useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";
import { useAppState } from "@/context/app-state-context";

type NavContextType = {
  navIsVisible: boolean;
  setNavIsVisible: (value: boolean) => void;
  openNav: () => void;
  closeNav: () => void;
  navigate: (pathname: string) => void;
};

const NavContext = createContext<NavContextType | undefined>(undefined);

export function NavProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { orchestratorRef } = useAppState();
  const [navIsVisible, setNavIsVisible] = useState(false);

  const openNav = () => {
    const { finished } = document.startViewTransition(() => {
      setNavIsVisible(true);
    });
    finished.then(() => {});
  };

  const closeNav = () => {
    const { finished } = document.startViewTransition(() => {
      setNavIsVisible(false);
    });
    finished.then(() => {});
  };

  const navigate = (pathname: string) => {
    const previousPathname = window.location.pathname;
    const isSamePage = previousPathname === pathname;
    const { finished } = document.startViewTransition(() => {
      setNavIsVisible(false);
      if (!isSamePage) {
        return router.push(pathname);
      }
    });
    finished.then(() => {
      if (!isSamePage) {
        document.fonts.ready.then(() => orchestratorRef.current?.playEnter());
      }
    });
  };

  return (
    <NavContext
      value={{
        navIsVisible,
        setNavIsVisible,
        openNav,
        closeNav,
        navigate,
      }}
    >
      {children}
    </NavContext>
  );
}

export const useNav = () => {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("useNav must be used within NavProvider");
  }
  return context;
};

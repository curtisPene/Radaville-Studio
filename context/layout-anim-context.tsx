"use client";

import { HeaderAnimController } from "@/components/layout/header/use-header-animation";
import { FooterAnimController } from "@/components/layout/footer/use-footer-animaiton";
import { createContext, useContext, useRef, RefObject } from "react";

type LayoutAnimContextType = {
  headerRef: RefObject<HeaderAnimController | null>;
  footerRef: RefObject<FooterAnimController | null>;
};

const LayoutAnimContext = createContext<LayoutAnimContextType | undefined>(
  undefined,
);

export const useLayoutAnimHandles = () => {
  const context = useContext(LayoutAnimContext);
  if (!context) {
    throw new Error(
      "useLayoutAnimHandles must be used within a LayoutAnimProvider",
    );
  }
  return context;
};

export function LayoutAnimProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerRef = useRef<HeaderAnimController>(null);
  const footerRef = useRef<FooterAnimController>(null);

  return (
    <LayoutAnimContext value={{ headerRef, footerRef }}>
      {children}
    </LayoutAnimContext>
  );
}

"use client";

import { useAppState } from "@/context/app-state-context";
import { Intro } from "@/features/loader/components/intro";
import { Loader } from "@/features/loader/components/loader";
import { useEffect } from "react";

export const Splash = () => {
  const { preloadComplete, introComplete } = useAppState();
  useEffect(() => {
    const block = (e: Event) => e.preventDefault();
    window.addEventListener("wheel", block, { passive: false });
    return () => window.removeEventListener("wheel", block);
  }, []);

  return (
    <div
      data-component="splash"
      className="fixed inset-0 pointer-events-none z-50 bg-black text-white"
    >
      {!preloadComplete && <Loader />}
      {preloadComplete && !introComplete && <Intro />}
    </div>
  );
};

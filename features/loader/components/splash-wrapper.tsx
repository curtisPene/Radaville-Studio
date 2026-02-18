"use client";

import { useAppState } from "@/context/app-state-context";
import { Splash } from "@/features/loader/splash";

export const SplashWrapper = () => {
  const { introComplete } = useAppState();
  return <>{!introComplete && <Splash />}</>;
};

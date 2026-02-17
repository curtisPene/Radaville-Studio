"use client";

import { useAppState } from "@/context/app-state-context";
import { Navigation } from "@/features/navigation/navigation";

export function NavigationWrapper() {
  const { navIsVisible } = useAppState();

  if (!navIsVisible) return null;

  return <Navigation />;
}

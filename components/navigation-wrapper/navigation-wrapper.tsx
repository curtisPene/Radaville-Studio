"use client";

import { useNav } from "@/context/nav-context";
import { Navigation } from "@/features/navigation/navigation";

export function NavigationWrapper() {
  const { navIsVisible } = useNav();

  if (!navIsVisible) return null;

  return <Navigation />;
}

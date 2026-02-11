"use client";

import { useNav } from "@/context/nav-context";
import { Navigation } from "@/features/navigation/navigation";

export function NavigationWrapper() {
  const { isVisible } = useNav();

  if (!isVisible) return null;

  return <Navigation />;
}

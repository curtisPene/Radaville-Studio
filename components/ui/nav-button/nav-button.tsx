"use client";

import { useNav } from "@/context/nav-context";
import { useStartTransition } from "@/components/ui/transition-link/use-start-transition";
import { MenuIcon } from "lucide-react";

export const NavButton = () => {
  const { setIsVisible } = useNav();
  const startTransition = useStartTransition();
  const handleClick = () => {
    startTransition(() => setIsVisible(true));
  };
  return (
    <button onClick={handleClick} data-component="nav-button">
      <MenuIcon className="h-[6vw] w-[6vw]" />
    </button>
  );
};

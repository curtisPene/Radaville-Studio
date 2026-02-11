"use client";

import { useNav } from "@/context/nav-context";
import { MenuIcon } from "lucide-react";

export const NavButton = () => {
  const { setIsVisible } = useNav();
  const handleClick = () => {
    document.startViewTransition(() => setIsVisible(true));
  };
  return (
    <button onClick={handleClick} data-component="nav-button">
      <MenuIcon className="h-[6vw] w-[6vw]" />
    </button>
  );
};

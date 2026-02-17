import { TransitionLink } from "@/components/ui/transition-link/transition-link";
import { useRef } from "react";
import { useEnterNavLinks } from "../animation/use-enter-nav-links";

export const NavLinks = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEnterNavLinks(ref);
  return (
    <nav
      ref={ref}
      data-component="nav-links"
      className="font-serif text-white text-[18vw] flex flex-col flex-1 justify-end"
    >
      <TransitionLink path="/">Work</TransitionLink>
      <TransitionLink path="/">Curation</TransitionLink>
      <TransitionLink path="/about">About</TransitionLink>
      <TransitionLink path="/">Contact</TransitionLink>
    </nav>
  );
};

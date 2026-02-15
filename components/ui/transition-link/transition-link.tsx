"use client";
import { useAnimateLink } from "@/components/ui/transition-link/useAnimateLink";

export type TransitionLinkConfig = {
  children: React.ReactNode;
  path: string;
};

export const TransitionLink = ({ children, path }: TransitionLinkConfig) => {
  const { ref } = useAnimateLink();

  return (
    <a ref={ref} className="leading-none font-serif" data-href={path}>
      {children}
    </a>
  );
};

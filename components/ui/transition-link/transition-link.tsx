"use client";
import { useAnimateLink } from "@/components/ui/transition-link/useAnimateLink";
import { fluid } from "@/lib/fluid";

export type TransitionLinkConfig = {
  children: React.ReactNode;
  path: string;
};

export const TransitionLink = ({ children, path }: TransitionLinkConfig) => {
  const { ref } = useAnimateLink();

  return (
    <a
      ref={ref}
      className="leading-none font-serif"
      data-href={path}
      style={{
        fontSize: fluid(57, 68),
      }}
    >
      {children}
    </a>
  );
};

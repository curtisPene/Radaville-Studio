"use client";

import { useHeroHeaderAnimation } from "@/features/about/animation/hero-header/use-hero-header-animation";
import { fluid } from "@/lib/fluid";

export const HeroHeader = () => {
  const ref = useHeroHeaderAnimation();

  return (
    <div ref={ref}>
      <div className="hero-header-root overflow-clip">
        <h1
          data-component="hero-header"
          className="overflow-clip font-serif leading-none opacity-0"
          style={{
            fontSize: fluid(115, 146),
            paddingTop: fluid(6, 12),
            paddingBottom: fluid(6, 12),
          }}
        >
          STUDIO PROFILE
        </h1>
      </div>
    </div>
  );
};

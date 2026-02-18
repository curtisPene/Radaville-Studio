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
          className="overflow-clip py-[2vw] font-serif leading-none"
          style={{ fontSize: fluid(115, 146) }}
        >
          STUDIO PROFILE
        </h1>
      </div>
    </div>
  );
};

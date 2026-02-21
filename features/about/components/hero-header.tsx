"use client";

import { Heading } from "@/components/typography/heading";
import { useHeroHeaderAnimation } from "@/features/about/animation/hero-header/use-hero-header-animation";

export const HeroHeader = () => {
  const ref = useHeroHeaderAnimation();

  return (
    <div ref={ref}>
      <div className="hero-header-root overflow-clip">
        <Heading as="h1" data-component="hero-header" className="opacity-0">
          STUDIO PROFILE
        </Heading>
      </div>
    </div>
  );
};

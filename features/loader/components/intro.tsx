"use client";

import { useAppState } from "@/context/app-state-context";
import { useIntroAnimation } from "@/features/loader/animation/useIntroAnimation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Intro = () => {
  const ref = useIntroAnimation();
  const { setIntroComplete } = useAppState();

  useGSAP(
    () => {
      gsap
        .to("[data-component=splash]", {
          opacity: 0,
          duration: 1.2,
          delay: 1.2,
        })
        .then(() => {
          setIntroComplete(true);
        });
    },
    { dependencies: [] },
  );
  return (
    <div
      ref={ref}
      data-component="loader-screen"
      className="relative w-full h-full"
    ></div>
  );
};

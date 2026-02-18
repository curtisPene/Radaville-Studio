import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const useIntroAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(() => {}, { scope: ref, dependencies: [] });
  return ref;
};

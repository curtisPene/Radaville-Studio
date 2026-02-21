"use client";

import { Title } from "@/components/typography/title";
import { useGSAP } from "@gsap/react";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const ImageSection = ({ slice }: { slice: Content.ImageSlice }) => {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      gsap.from(ref.current, {
        opacity: 0,
        duration: 0.8,
        ease: "linear",
        scrollTrigger: { trigger: ref.current, start: "top+=25% bottom" },
      });
    },
    { scope: ref, dependencies: [] },
  );
  return (
    <section ref={ref} data-component="image-section">
      <Title as="title">{slice.primary.caption}</Title>
      <PrismicNextImage
        field={slice.primary.image}
        className="aspect-151/220"
      />
    </section>
  );
};

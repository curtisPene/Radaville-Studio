import { FooterAnimController } from "@/components/layout/footer/use-footer-animaiton";
import { HeaderAnimController } from "@/components/layout/header/use-header-animation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { RefObject } from "react";

gsap.registerPlugin(SplitText);

export const useCarouselEntrance = (ref: RefObject<HTMLDivElement | null>) => {
  const { contextSafe } = useGSAP({ scope: ref });

  return contextSafe(
    (
      header: HeaderAnimController["enter"],
      footer: FooterAnimController["enter"],
      observer: RefObject<Observer | null>,
    ) => {
      const slides = gsap.utils.toArray(
        "[data-component=slide]",
      ) as HTMLDivElement[];
      const firstVisibleSlide = slides[4];

      const firstTitle = firstVisibleSlide.querySelector("h3");
      const split = new SplitText(firstTitle, { type: "words", mask: "words" });
      const firstImage = firstVisibleSlide.querySelector("img");
      const lastThreeVisibleSlides = slides.slice(1, 4);
      const slideInfo = gsap.utils.toArray("[data-component=slide-info] > *");
      const indicator = gsap.utils.toArray(
        "[data-component=carousel-footer] > *",
      );

      const proxy = { inset: 100 };

      return gsap
        .timeline({
          onStart: () => {
            observer.current?.disable();
            gsap.set(firstImage, { scale: 1.8 });
            gsap.set(firstVisibleSlide, { opacity: 1, scale: 0.8 });
            proxy.inset = 100;
          },
          onComplete: () => {
            observer.current?.enable();
          },
        })
        .to(proxy, {
          inset: 0,
          duration: 2.4,
          ease: "power2.out",
          onUpdate: () => {
            firstVisibleSlide.style.clipPath = `inset(0 ${proxy.inset}% 0 0)`;
          },
          onComplete: () => {
            firstVisibleSlide.style.clipPath = "none";
          },
        })
        .to(firstImage, { scale: 1, duration: 0.6, ease: "power2.out" })
        .to(
          firstVisibleSlide,
          { scale: 1, duration: 0.6, ease: "power2.out" },
          "<",
        )
        .fromTo(
          lastThreeVisibleSlides,
          { opacity: 0 },
          { opacity: 1, duration: 0.6, ease: "power2.out" },
          ">",
        )
        .fromTo(
          lastThreeVisibleSlides,
          { translateZ: 0 },
          {
            translateZ: (i) => `-${(3 - i) * 140}px`,
            duration: 0.6,
            ease: "power2.out",
          },
          "<",
        )
        .add(header(), "<")
        .add(footer(), "<")
        .from(
          split.words,
          {
            y: "100%",
            duration: 0.6,
            ease: "power2.out",
            onComplete: () => split.revert(),
          },
          "<",
        )
        .to(
          slideInfo,
          {
            y: "",
            duration: 0.6,
            ease: "power2.out",
          },
          "<",
        )
        .to(indicator, { y: "0%", duration: 0.4, ease: "power2.out" }, "<");
    },
  );
};

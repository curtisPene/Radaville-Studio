"use client";

import { useAboutOutroAnimation } from "@/features/about/animation/about-outro/use-about-outro-animation";
import { ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

export const AboutOutro = ({ footer_image }: { footer_image: ImageField }) => {
  const ref = useAboutOutroAnimation();
  return (
    <div
      ref={ref}
      className="outro-container"
      style={{
        position: "relative",
        height: "100vh",
        overflow: "clip",
        maskImage: "url('/images/about/mask.svg')",
        maskPosition: "center ",
        maskRepeat: "no-repeat",
        maskSize: "50%",
      }}
    >
      <div
        data-component="outro-image-wrapper"
        className="h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{}}
      >
        <PrismicNextImage
          field={footer_image}
          width={1920}
          height={1080}
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  );
};

"use client";

import { getProjectSlideData } from "@/lib/prismic-service";
import { createContext, useContext, useState } from "react";

const slideData = await getProjectSlideData();

type CarouselContextType = {
  currentSlideDataIndex: number;
  setCurrentSlideDataIndex: (index: number) => void;
  forward: boolean;
  setForward: (forward: boolean) => void;
  backward: boolean;
  setBackward: (backward: boolean) => void;
};

const CarouselContext = createContext<CarouselContextType | undefined>(
  undefined,
);

export default function CarouselProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentSlideDataIndex, setCurrentSlideDataIndex] = useState(0);
  const [forward, setForward] = useState(false);
  const [backward, setBackward] = useState(false);

  const value = {
    currentSlideDataIndex,
    setCurrentSlideDataIndex,
    forward,
    setForward,
    backward,
    setBackward,
  };
  return <CarouselContext value={value}>{children}</CarouselContext>;
}

export const useCarousel = () => {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a CarouselProvider");
  }
  return context;
};

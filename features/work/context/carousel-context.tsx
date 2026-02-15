"use client";

import { createContext, useContext, useRef, useState } from "react";

type CarouselContextType = {
  currentSlideDataIndex: number;
  setCurrentSlideDataIndex: (index: number) => void;
  isAnimatingRef: React.RefObject<boolean>;
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
  const isAnimatingRef = useRef(false);

  const value = {
    currentSlideDataIndex,
    setCurrentSlideDataIndex,
    isAnimatingRef,
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

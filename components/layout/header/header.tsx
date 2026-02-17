"use client";

import { WordMark } from "@/components/brand/word-mark";
import { LogoMark } from "@/components/brand/logo-mark";
import { Label } from "@/components/typography/label";
import { useHeaderAnimation } from "@/components/layout/header/use-header-animation";
import { NavButton } from "@/features/navigation/components/nav-button";

interface HeaderConfig {
  pageNumber: string;
  pageTitle: string;
}

export const Header = ({ pageNumber, pageTitle }: HeaderConfig) => {
  const ref = useHeaderAnimation();

  return (
    <>
      <header
        ref={ref}
        data-component="header"
        className="flex flex-row items-start justify-between fixed left-0 top-0 right-0 p-[3vw] opacity-0 z-7"
      >
        <div className="flex flex-row gap-[3vw]">
          <WordMark />
          <Label inline>[00]</Label>
        </div>

        <LogoMark />

        <div className="flex flex-row gap-[4vw]">
          <div className="flex flex-row gap-[2vw]">
            <Label inline faded>
              {pageNumber}
            </Label>
            <Label inline>{pageTitle}</Label>
          </div>
          <NavButton />
        </div>
      </header>
    </>
  );
};

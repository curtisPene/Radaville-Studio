"use client";

import { NavButton } from "@/components/ui/nav-button/nav-button";
import { WordMark } from "@/components/brand/word-mark";
import { LogoMark } from "@/components/brand/logo-mark";
import { Body } from "@/components/typography/body";
import { useHeaderAnimation } from "@/components/layout/header/use-header-animation";

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
        className="flex flex-row items-start justify-between fixed left-0 top-0 right-0 p-[3vw] opacity-0"
      >
        <div className="flex flex-row gap-[3vw]">
          <WordMark />
          <Body inline>[00]</Body>
        </div>

        <LogoMark />

        <div className="flex flex-row gap-[4vw]">
          <div className="flex flex-row gap-[2vw]">
            <Body inline faded>
              {pageNumber}
            </Body>
            <Body inline>{pageTitle}</Body>
          </div>
          <NavButton />
        </div>
      </header>
    </>
  );
};

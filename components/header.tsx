"use client";

import { NavButton } from "@/components/ui/nav-button";
import { WordMark } from "@/components/svg/word-mark";
import { LogoMark } from "@/components/svg/logo-mark";
import { Body } from "@/components/typography/body";
interface HeaderConfig {
  pageNumber: string;
  pageTitle: string;
}

export const Header = ({ pageNumber, pageTitle }: HeaderConfig) => {
  return (
    <>
      <header
        data-component="header"
        className="flex flex-row items-start justify-between fixed left-0 top-0 right-0 p-[3vw]"
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

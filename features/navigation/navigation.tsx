import { WordMark } from "@/components/svg/word-mark";
import { Body } from "@/components/typography/body";
import { TransitionLink } from "@/components/ui/transition-link";
import { useNav } from "@/context/nav-context";
import { getNavigationData } from "@/lib/prismic-service";
import NavInfoSection from "@/slices/NavInfoSection";
import { SliceZone } from "@prismicio/react";
import { XIcon } from "lucide-react";

const pageData = await getNavigationData();

export const Navigation = () => {
  const { setIsVisible } = useNav();
  const handleNavClose = () => {
    document.startViewTransition(() => {
      setIsVisible(false);
    });
  };
  return (
    <div
      data-page="navigation"
      className="fixed inset-0 bg-black p-[3vw] flex flex-col"
      style={{ color: "#fff" }}
    >
      <header
        data-component="nav-header"
        className="flex flex-row items-center justify-between"
      >
        <WordMark />
        <button onClick={handleNavClose}>
          <XIcon stroke="#fff" className="w-[6vw] h-6vw]" />
        </button>
      </header>

      <div
        data-component="nav-info"
        className="flex-1 flex flex-col gap-[2vw] py-[12vw]"
      >
        <SliceZone
          slices={pageData.slices}
          components={{ nav_info_section: NavInfoSection }}
        />
      </div>

      <nav
        data-component="nav-links"
        className="font-serif text-white text-[12vw] flex flex-col flex-1 justify-end"
      >
        <TransitionLink path="/">Work</TransitionLink>
        <TransitionLink path="/">Curation</TransitionLink>
        <TransitionLink path="/">About</TransitionLink>
        <TransitionLink path="/">Contact</TransitionLink>
      </nav>

      <footer
        data-component="nav-footer"
        className="flex flex-row justify-between"
      >
        <Body inline sub faded>
          {pageData.left_text}
        </Body>
        <Body inline sub faded>
          {pageData.right_text}
        </Body>
      </footer>
    </div>
  );
};

import { WordMark } from "@/components/svg/word-mark";
import { useNav } from "@/context/nav-context";
import { XIcon } from "lucide-react";
import { useRef } from "react";
import { useEnterNavHeader } from "../animation/use-enter-nav-header";

export const NavHeader = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { setIsVisible } = useNav();

  const handleNavClose = () => {
    document.startViewTransition(() => {
      setIsVisible(false);
    });
  };

  useEnterNavHeader(ref);
  return (
    <div
      ref={ref}
      data-component="nav-header"
      className="flex flex-row items-center justify-between"
    >
      <WordMark />
      <button onClick={handleNavClose}>
        <XIcon stroke="#fff" className="w-[6vw] h-6vw]" />
      </button>
    </div>
  );
};

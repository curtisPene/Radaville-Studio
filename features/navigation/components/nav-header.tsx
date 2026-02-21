import { WordMark } from "@/components/brand/word-mark";
import { XIcon } from "lucide-react";
import { useRef } from "react";
import { useNav } from "@/context/nav-context";

export const NavHeader = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { closeNav } = useNav();

  const handleNavClose = closeNav;
  return (
    <div
      ref={ref}
      data-component="nav-header"
      className="flex flex-row items-start justify-between"
    >
      <WordMark />
      <button onClick={handleNavClose}>
        <XIcon stroke="#fff" />
      </button>
    </div>
  );
};

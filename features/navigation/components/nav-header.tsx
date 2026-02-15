import { WordMark } from "@/components/brand/word-mark";
import { useNav } from "@/context/nav-context";
import { useEnterNavHeader } from "@/features/navigation/animation/use-enter-nav-header";
import { useStartTransition } from "@/components/ui/transition-link/use-start-transition";
import { XIcon } from "lucide-react";
import { useRef } from "react";

export const NavHeader = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { setIsVisible } = useNav();
  const startTransition = useStartTransition();

  const handleNavClose = () => {
    startTransition(() => setIsVisible(false));
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

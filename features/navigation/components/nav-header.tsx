import { WordMark } from "@/components/brand/word-mark";
import { useEnterNavHeader } from "@/features/navigation/animation/use-enter-nav-header";
import { useStartTransition } from "@/hooks/use-start-transition";
import { XIcon } from "lucide-react";
import { useRef } from "react";
import { useAppState } from "@/context/app-state-context";

export const NavHeader = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { setNavIsVisible } = useAppState();
  const startTransition = useStartTransition();

  const handleNavClose = () => {
    startTransition(() => setNavIsVisible(false));
  };

  useEnterNavHeader(ref);
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

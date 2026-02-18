import { useStartTransition } from "@/hooks/use-start-transition";
import { useAppState } from "@/context/app-state-context";
import { MenuIcon } from "lucide-react";

export const NavButton = () => {
  const { setNavIsVisible } = useAppState();
  const startTransition = useStartTransition();
  const handleClick = () => {
    startTransition(() => {
      setNavIsVisible(true);
    });
  };
  return (
    <button onClick={handleClick} data-component="nav-button">
      <MenuIcon className="h-[clamp(19px,6vw,24px)] w-[clamp(19px,6vw,24px)]" />
    </button>
  );
};

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
      <MenuIcon className="h-[6vw] w-[6vw]" />
    </button>
  );
};

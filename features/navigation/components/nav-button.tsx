import { useNav } from "@/context/nav-context";
import { MenuIcon } from "lucide-react";

export const NavButton = () => {
  const { openNav } = useNav();
  const handleClick = openNav;

  return (
    <button onClick={handleClick} data-component="nav-button">
      <MenuIcon className="h-[clamp(19px,6vw,24px)] w-[clamp(19px,6vw,24px)]" />
    </button>
  );
};

import { NavigationDocumentData } from "@/prismicio-types";
import { SliceZone } from "@prismicio/react";
import { useRef } from "react";
import { useEnterNavInfo } from "../animation/use-enter-nav-info";
import { fluid } from "@/lib/fluid";

export const NavInfo = ({ pageData }: { pageData: NavigationDocumentData }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEnterNavInfo(ref);
  return (
    <div
      ref={ref}
      data-component="nav-info"
      className="flex-1 flex flex-col"
      style={{
        paddingTop: fluid(38, 40),
        paddingBottom: fluid(38, 40),
        gap: fluid(6, 8),
      }}
    ></div>
  );
};

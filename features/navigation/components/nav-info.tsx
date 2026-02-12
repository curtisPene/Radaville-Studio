import { NavigationDocumentData } from "@/prismicio-types";
import NavInfoSection from "@/slices/NavInfoSection";
import { SliceZone } from "@prismicio/react";
import { useRef } from "react";
import { useEnterNavInfo } from "../animation/use-enter-nav-info";

export const NavInfo = ({ pageData }: { pageData: NavigationDocumentData }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEnterNavInfo(ref);
  return (
    <div
      ref={ref}
      data-component="nav-info"
      className="flex-1 flex flex-col gap-[2vw] py-[12vw]"
    >
      <SliceZone
        slices={pageData.slices}
        components={{ nav_info_section: NavInfoSection }}
      />
    </div>
  );
};

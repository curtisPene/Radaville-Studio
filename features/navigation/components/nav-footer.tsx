import { Label } from "@/components/typography/label";
import { NavigationDocumentData } from "@/prismicio-types";
import { useRef } from "react";
import { useEnterNavFooter } from "../animation/use-enter-nav-footer";

export const NavFooter = ({
  pageData,
}: {
  pageData: NavigationDocumentData;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useEnterNavFooter(ref);
  return (
    <div
      ref={ref}
      data-component="nav-footer"
      className="flex flex-row justify-between"
    >
      <Label inline faded>
        {pageData.left_text}
      </Label>
      <Label inline faded>
        {pageData.right_text}
      </Label>
    </div>
  );
};

import { getNavigationData } from "@/lib/prismic-service";
import { NavHeader } from "./components/nav-header";
import { NavInfo } from "./components/nav-info";
import { NavLinks } from "./components/nav-links";
import { NavFooter } from "./components/nav-footer";
import { fluid } from "@/lib/fluid";
import { LogoMark } from "@/components/brand/logo-mark";

const pageData = await getNavigationData();

export const Navigation = () => {
  return (
    <div
      data-page="navigation"
      className="fixed inset-0 bg-black flex flex-col z-14"
      style={{ color: "#fff", padding: fluid(9, 18) }}
    >
      <NavHeader />
      <div className="flex flex-1 flex-col landscape:flex-row-reverse">
        <NavInfo pageData={pageData} />
        <NavLinks />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden landscape:block">
        <LogoMark />
      </div>
      <NavFooter pageData={pageData} />
    </div>
  );
};

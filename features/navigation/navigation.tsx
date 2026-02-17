import { getNavigationData } from "@/lib/prismic-service";
import { NavHeader } from "./components/nav-header";
import { NavInfo } from "./components/nav-info";
import { NavLinks } from "./components/nav-links";
import { NavFooter } from "./components/nav-footer";

const pageData = await getNavigationData();

export const Navigation = () => {
  return (
    <div
      data-page="navigation"
      className="fixed inset-0 bg-black p-[3vw] flex flex-col z-14"
      style={{ color: "#fff" }}
    >
      <NavHeader />
      <NavInfo pageData={pageData} />
      <NavLinks />
      <NavFooter pageData={pageData} />
    </div>
  );
};

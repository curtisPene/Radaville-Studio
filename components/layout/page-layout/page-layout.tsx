import { Header } from "@/components/layout/header/header";
import { fluid } from "@/lib/fluid";
import { ReactNode } from "react";

interface PageLayoutProps {
  backgroundColor: string;
  fontColor: string;
  pageTitle: string;
  pageNumber: string;
  dataPage: string;
  dataHref: string;
  height?: string;
  children?: ReactNode;
}

export function PageLayout({
  backgroundColor,
  fontColor,
  pageTitle,
  pageNumber,
  dataPage,
  dataHref,
  children,
  height = "100vh",
}: PageLayoutProps) {
  return (
    <div
      data-page={dataPage}
      data-href={dataHref}
      style={{
        background: backgroundColor,
        color: fontColor,
        height: height,
        padding: `${fluid(44, 66)} ${fluid(9, 18)} ${fluid(9, 18)}`,
        display: "flex",
        flexDirection: "column",
        overflow: "clip",
      }}
    >
      <Header key={pageTitle} pageNumber={pageNumber} pageTitle={pageTitle} />
      {children}
    </div>
  );
}

import { Header } from "@/components/header";
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
  height = "100ch",
}: PageLayoutProps) {
  return (
    <div
      data-page={dataPage}
      data-href={dataHref}
      style={{
        background: backgroundColor,
        color: fontColor,
        height: height,
        padding: "3vw",
      }}
    >
      <Header key={pageTitle} pageNumber={pageNumber} pageTitle={pageTitle} />
      <main>{children}</main>
    </div>
  );
}

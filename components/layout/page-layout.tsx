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
        padding: "14vw 3vw 3vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header key={pageTitle} pageNumber={pageNumber} pageTitle={pageTitle} />
      {children}
    </div>
  );
}

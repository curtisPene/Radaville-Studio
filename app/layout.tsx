import type { Metadata } from "next";
import { Old_Standard_TT, Inter_Tight } from "next/font/google";
import "./globals.css";
import { getPageData } from "@/lib/prismic-service";
import { ViewTransitions } from "next-view-transitions";
import { Header } from "@/components/header";
import { NavProvider } from "@/context/nav-context";
import { NavigationWrapper } from "@/components/navigation-wrapper";

const oldStandardTT = Old_Standard_TT({
  variable: "--font-old-standard-tt",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const pageData = await getPageData("work");

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: pageData.title,
    description: pageData.description,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { background_color, font_color, page_title, page_number } = pageData;

  return (
    <ViewTransitions>
      <NavProvider>
        <html lang="en">
          <body
            className={`${oldStandardTT.variable} ${interTight.variable} antialiased p-[3vw] relative`}
            style={{ backgroundColor: background_color, color: font_color }}
          >
            <header>
              <Header pageNumber={page_number} pageTitle={page_title} />
            </header>
            {children}
            <NavigationWrapper />
          </body>
        </html>
      </NavProvider>
    </ViewTransitions>
  );
}

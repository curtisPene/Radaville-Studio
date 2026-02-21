import { Metadata } from "next";
import { Old_Standard_TT, Inter_Tight } from "next/font/google";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import { AppStateProvider } from "@/context/app-state-context";
import { NavProvider } from "@/context/nav-context";
import { LayoutAnimProvider } from "@/context/layout-anim-context";
import { NavigationWrapper } from "@/components/navigation-wrapper/navigation-wrapper";
import localFont from "next/font/local";
import { SmoothScroll } from "@/components/lenis/SmoothScroll";
import { SplashWrapper } from "@/features/loader/components/splash-wrapper";
import { NoScrollRestoration } from "@/components/no-scroll-restoration/no-scroll-restoration";

const neueWorldRegular = localFont({
  src: "../public/fonts/PPNeueWorld-SuperCondensedLight.woff2",
  variable: "--font-neue-world",
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
};

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <AppStateProvider>
        <NavProvider>
          <html lang="en">
            <body
              className={`${neueWorldRegular.variable} ${oldStandardTT.variable} ${interTight.variable} antialiased relative bg-black`}
            >
              <NoScrollRestoration />
              <SplashWrapper />
              <SmoothScroll />
              <LayoutAnimProvider>
                {children}
                <NavigationWrapper />
              </LayoutAnimProvider>
            </body>
          </html>
        </NavProvider>
      </AppStateProvider>
    </ViewTransitions>
  );
}

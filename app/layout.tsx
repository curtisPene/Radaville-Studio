import { Old_Standard_TT, Inter_Tight } from "next/font/google";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <NavProvider>
        <html lang="en">
          <body
            className={`${oldStandardTT.variable} ${interTight.variable} antialiased relative bg-black`}
          >
            {children}
            <NavigationWrapper />
          </body>
        </html>
      </NavProvider>
    </ViewTransitions>
  );
}

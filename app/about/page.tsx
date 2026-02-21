import { PageLayout } from "@/components/layout/page-layout/page-layout";
import { AboutOrchestrator } from "@/features/about/context/about-orchestrator";
import { getAboutData, getPageData } from "@/lib/prismic-service";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: "/",
      type: "website",
    },
  };
}

const {
  background_color,
  font_color,
  page_title,
  page_number,
  title,
  description,
} = await getPageData("about");

const data = await getAboutData();

export default function AboutPage() {
  return (
    <AboutOrchestrator>
      <PageLayout
        dataHref="/about"
        dataPage="About"
        backgroundColor={background_color}
        fontColor={font_color}
        pageTitle={page_title}
        pageNumber={page_number}
      ></PageLayout>
    </AboutOrchestrator>
  );
}

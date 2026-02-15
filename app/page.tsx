import { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout/page-layout";
import { getPageData, getProjectSlideData } from "@/lib/prismic-service";
import { Carousel } from "@/features/work/components/carousel";
import CarouselProvider from "@/features/work/context/carousel-context";
import { WorkOrchestrator } from "@/features/work/context/work-orchestrator";

const {
  background_color,
  font_color,
  page_title,
  page_number,
  title,
  description,
} = await getPageData("work");

const projectSlideData = await getProjectSlideData();

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

export default async function Home() {
  return (
    <WorkOrchestrator>
      <PageLayout
        backgroundColor={background_color}
        fontColor={font_color}
        pageTitle={page_title}
        pageNumber={page_number}
        dataPage="work"
        dataHref="/"
      >
        <CarouselProvider>
          <Carousel data={projectSlideData} />
        </CarouselProvider>
      </PageLayout>
    </WorkOrchestrator>
  );
}

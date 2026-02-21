import { PageLayout } from "@/components/layout/page-layout/page-layout";
import { HeroHeader } from "@/features/about/components/hero-header";
import { AboutOrchestrator } from "@/features/about/context/about-orchestrator";
import { getAboutData, getPageData } from "@/lib/prismic-service";
import { Metadata } from "next";
import { AboutFooter } from "@/features/about/components/about-footer";
import { HeroTextBlock } from "@/features/about/components/hero-text-block";
import { Gallery } from "@/components/layout/gallery/Gallery";
import { TextBlock } from "@/features/about/components/text-block";
import { AboutOutro } from "@/features/about/components/about-outro";
import { ServicesBlock } from "@/features/about/components/services-block";

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
        height="auto"
        dataHref="/about"
        dataPage="About"
        backgroundColor={background_color}
        fontColor={font_color}
        pageTitle={page_title}
        pageNumber={page_number}
      >
        <HeroHeader />
        {data.sorted.textBlocks[0] && (
          <HeroTextBlock slice={data.sorted.textBlocks[0]} />
        )}
        {data.sorted.galleries[0] && (
          <Gallery slice={data.sorted.galleries[0]} />
        )}
        <TextBlock slice={data.sorted.textBlocks[1]} sizing="title" wordbreak />
        <ServicesBlock
          imageSlice={data.sorted.images[0]}
          lists={data.sorted.lists}
        />
        <TextBlock
          slice={data.sorted.textBlocks[2]}
          sizing="title"
          wordbreak={false}
        />
        <AboutOutro imageSlice={data.sorted.images[1]} />
        <AboutFooter />
      </PageLayout>
    </AboutOrchestrator>
  );
}

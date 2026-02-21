import { ImageSection } from "@/components/image/image";
import { Gallery } from "@/components/layout/gallery/Gallery";
import { PageLayout } from "@/components/layout/page-layout/page-layout";
import { AboutDirector } from "@/features/about/components/about-director";
import { AboutStudio } from "@/features/about/components/about-studio";
import { Hero } from "@/features/about/components/hero";
import { Outro } from "@/features/about/components/outro";
import { Services } from "@/features/about/components/services";
import { Studio } from "@/features/about/components/studio";
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

const { sorted } = await getAboutData();
const { textBlocks, galleries, images, lists } = sorted;

export default function AboutPage() {
  return (
    <AboutOrchestrator>
      <PageLayout
        dataHref="/about"
        dataPage="About"
        height="auto"
        backgroundColor={background_color}
        fontColor={font_color}
        pageTitle={page_title}
        pageNumber={page_number}
      >
        <Hero slice={textBlocks[0]} />
        <Gallery slice={galleries[0]} backgroundColor={background_color} />
        <AboutDirector slice={textBlocks[1]} />
        <ImageSection slice={images[0]} />
        <Services lists={lists} />
        <AboutStudio slice={textBlocks[2]} />
        <Outro imageSlice={images[1]} />
        <Studio />
      </PageLayout>
    </AboutOrchestrator>
  );
}

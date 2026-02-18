import { PageLayout } from "@/components/layout/page-layout/page-layout";
import { HeroHeader } from "@/features/about/components/hero-header";
import { AboutOrchestrator } from "@/features/about/context/about-orchestrator";
import { getPageData, getSlices } from "@/lib/prismic-service";
import { Metadata } from "next";
import { Gallery } from "@/components/layout/gallery/Gallery";
import { HeroTextBlock } from "@/features/about/components/hero-text-block";
import { TextBlock } from "@/features/about/components/text-block";
import { AboutOutro } from "@/features/about/components/about-outro";
import { AboutFooter } from "@/features/about/components/about-footer";

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
  slices,
  footer_image,
} = await getPageData("about");

if (!slices) {
  throw new Error(`Missing required data for page: about`);
}

const textBlocks = getSlices(slices, "text_block");
const galleryImages = getSlices(slices, "gallery_image");
const firstSetImages = galleryImages.slice(0, 3);
const secondSetImages = galleryImages.slice(4, 5);

const aboutBlock = textBlocks.find((s) => s.primary.title === "About");
const seaverBlock = textBlocks.find((s) => s.primary.title === "Seaver Rada");
const outroBlock = textBlocks.find(
  (s) =>
    s.primary.title ===
    "Elevating Spaces, Defining Aesthetics, Cultivating Brands",
);

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
        {aboutBlock && <HeroTextBlock slice={aboutBlock} />}
        <Gallery items={firstSetImages} />
        {seaverBlock && (
          <TextBlock slice={seaverBlock} sizing="title" wordbreak />
        )}
        <Gallery items={secondSetImages} />
        {outroBlock && <TextBlock slice={outroBlock} sizing="title" />}
        <AboutOutro footer_image={footer_image} />
        <AboutFooter />
      </PageLayout>
    </AboutOrchestrator>
  );
}

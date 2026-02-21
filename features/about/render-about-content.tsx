import { ImageSection } from "@/components/image/image";
import { Gallery } from "@/components/layout/gallery/Gallery";
import { useHeroAnimation } from "@/features/about/animation/useHeroAnimation";
import { Outro } from "@/features/about/components/outro";
import { ResponsiveSection } from "@/features/about/components/responsive-section";
import { Services } from "@/features/about/components/services";
import { Studio } from "@/features/about/components/studio";
import { TextBlock } from "@/features/about/components/text-block";
import { AboutData, PageMetadata } from "@/lib/create-page";

export function renderAboutContent(data: AboutData, pageData: PageMetadata) {
  const { sorted } = data;
  const { textBlocks, galleries, images, lists } = sorted;

  return (
    <>
      <TextBlock
        slice={textBlocks[0]}
        useAnimation={useHeroAnimation}
        dataComponent="hero-section"
      />
      <Gallery
        slice={galleries[0]}
        backgroundColor={pageData.background_color}
      />
      <TextBlock
        slice={textBlocks[1]}
        dataComponent="about-director-section"
      />

      <ResponsiveSection landscape={{ flexDirection: "row-reverse" }}>
        <ImageSection slice={images[0]} />
        <Services lists={lists} />
      </ResponsiveSection>

      <TextBlock
        slice={textBlocks[2]}
        dataComponent="about-studio-section"
      />
      <Outro imageSlice={images[1]} />
      <Studio />
    </>
  );
}

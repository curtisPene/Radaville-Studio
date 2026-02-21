import { AboutOrchestrator } from "@/features/about/context/about-orchestrator";
import { renderAboutContent } from "@/features/about/render-about-content";
import { getAboutData } from "@/lib/prismic-service";
import {
  createPage,
  createMetadataGenerator,
  AboutData,
} from "@/lib/create-page";

export const generateMetadata = createMetadataGenerator("about");

export default async function AboutPage() {
  return createPage<AboutData>({
    pageId: "about",
    fetchData: getAboutData,
    Orchestrator: AboutOrchestrator,
    pageLayoutProps: { height: "auto" },
    renderContent: renderAboutContent,
  });
}

import { getProjectSlideData } from "@/lib/prismic-service";
import { WorkOrchestrator } from "@/features/work/context/work-orchestrator";
import { renderWorkContent } from "@/features/work/render-work-content";
import {
  createPage,
  createMetadataGenerator,
  ProjectSlideData,
} from "@/lib/create-page";

export const generateMetadata = createMetadataGenerator("work");

export default async function Home() {
  return createPage<ProjectSlideData>({
    pageId: "work",
    fetchData: getProjectSlideData,
    Orchestrator: WorkOrchestrator,
    renderContent: renderWorkContent,
  });
}

import { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout/page-layout";
import {
  getPageData,
  getProjectSlideData,
  getAboutData,
  getNavigationData,
} from "@/lib/prismic-service";
import { ReactNode, ComponentType } from "react";

/**
 * Supported page IDs
 */
export type PageId = "work" | "about" | "curation" | "contact";

/**
 * Data types from Prismic service functions
 */
export type ProjectSlideData = Awaited<ReturnType<typeof getProjectSlideData>>;
export type AboutData = Awaited<ReturnType<typeof getAboutData>>;
export type NavigationData = Awaited<ReturnType<typeof getNavigationData>>;

/**
 * Page metadata returned from getPageData
 */
export type PageMetadata = {
  background_color: string;
  font_color: string;
  page_title: string;
  page_number: string;
  title: string;
  description: string;
};

/**
 * Additional PageLayout props that can be overridden
 */
export type PageLayoutOverrides = {
  height?: string;
  dataPage?: string;
  dataHref?: string;
};

/**
 * Configuration for creating a standardized page
 */
export type PageConfig<TData = unknown> = {
  /** Page ID for getPageData */
  pageId: PageId;
  /** Function to fetch page-specific content data */
  fetchData: () => Promise<TData>;
  /** Orchestrator component to wrap the page */
  Orchestrator: ComponentType<{ children: ReactNode }>;
  /** Additional PageLayout props (e.g., { height: "auto" }) */
  pageLayoutProps?: PageLayoutOverrides;
  /** Function that receives data and returns page content */
  renderContent: (data: TData, pageData: PageMetadata) => ReactNode;
};

/**
 * Creates metadata generator function for a page
 */
export function createMetadataGenerator(pageId: PageId) {
  return async function generateMetadata(): Promise<Metadata> {
    const { title, description } = await getPageData(pageId);

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        url: "/",
        type: "website",
      },
    };
  };
}

/**
 * Creates a page component with standardized structure
 */
export async function createPage<TData>(
  config: PageConfig<TData>
): Promise<ReactNode> {
  const { pageId, fetchData, Orchestrator, pageLayoutProps, renderContent } = config;

  // Fetch page metadata
  const pageData = await getPageData(pageId);
  const {
    background_color,
    font_color,
    page_title,
    page_number,
  } = pageData;

  // Fetch page-specific content data
  const data = await fetchData();

  // Determine defaults
  const dataHref = pageId === "work" ? "/" : `/${pageId}`;
  const dataPage = pageId === "work" ? "work" : pageId.charAt(0).toUpperCase() + pageId.slice(1);

  return (
    <Orchestrator>
      <PageLayout
        backgroundColor={background_color}
        fontColor={font_color}
        pageTitle={page_title}
        pageNumber={page_number}
        dataPage={dataPage}
        dataHref={dataHref}
        {...pageLayoutProps}
      >
        {renderContent(data, pageData)}
      </PageLayout>
    </Orchestrator>
  );
}

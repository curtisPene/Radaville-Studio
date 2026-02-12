import { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { getPageData } from "@/lib/prismic-service";

const {
  background_color,
  font_color,
  page_title,
  page_number,
  title,
  description,
} = await getPageData("work");

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
    <PageLayout
      backgroundColor={background_color}
      fontColor={font_color}
      pageTitle={page_title}
      pageNumber={page_number}
      dataPage="work"
      dataHref="/"
    >
      {/* Page content goes here */}
    </PageLayout>
  );
}

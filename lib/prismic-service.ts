import { createClient } from "@/prismicio";
import { NavigationDocumentData } from "@/prismicio-types";

export type PageData = {
  title: string;
  description: string;
  background_color: string;
  font_color: string;
  page_title: string;
  page_number: string;
};

export async function getPageData(uid: string): Promise<PageData> {
  const page = await createClient().getByUID("page", uid);
  const {
    title,
    description,
    background_color,
    font_color,
    page_title,
    page_number,
  } = page.data;

  if (
    !title ||
    !description ||
    !background_color ||
    !font_color ||
    !page_number ||
    !page_title
  ) {
    throw new Error(`Missing required data for page: ${uid}`);
  }

  return {
    title,
    description,
    background_color,
    font_color,
    page_title,
    page_number,
  };
}

export async function getNavigationData(): Promise<NavigationDocumentData> {
  const data = (await createClient().getSingle("navigation")).data;
  const { navigation_links, slices, left_text, right_text } = data;
  if (!navigation_links || !slices || !left_text || !right_text) {
    throw new Error(`Missing required data for page: navigation`);
  }

  return data;
}

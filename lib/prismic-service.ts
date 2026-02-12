import { createClient } from "@/prismicio";
import { NavigationDocumentData, ProjectDocument } from "@/prismicio-types";
import { ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

export type PageData = {
  title: string;
  description: string;
  background_color: string;
  font_color: string;
  page_title: string;
  page_number: string;
};

export type ProjectSlide = {
  id: string;
  title: string;
  number: number;
  year: string;
  backgroundColor: `#${string}`;
  image: ImageField;
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

export async function getProjectSlideData(): Promise<ProjectSlide[]> {
  const projects = await createClient().getAllByType("project");

  return projects
    .map((project) => {
      const { title, number, year, background_color, thumbnail } = project.data;

      if (!title || !number || !year || !background_color || !thumbnail) {
        return null;
      }

      return {
        id: project.uid || project.id,
        title,
        number,
        year,
        backgroundColor: background_color,
        image: thumbnail,
      };
    })
    .filter((slide): slide is ProjectSlide => slide !== null)
    .sort((a, b) => a.title.localeCompare(b.title));
}

import { createClient } from "@/prismicio";
import {
  NavigationDocumentData,
  TextBlockSlice,
  ListSlice,
  GallerySlice,
  ImageSlice,
} from "@/prismicio-types";
import { ImageField } from "@prismicio/client";

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

export async function getAboutData() {
  const data = (await createClient().getSingle("about")).data;
  const { slices } = data;

  if (!slices) {
    throw new Error(`Missing required data for page: about`);
  }

  const sorted: {
    textBlocks: TextBlockSlice[];
    lists: ListSlice[];
    galleries: GallerySlice[];
    images: ImageSlice[];
  } = { textBlocks: [], lists: [], galleries: [], images: [] };

  slices.forEach((slice) => {
    switch (slice.slice_type) {
      case "text_block":
        sorted.textBlocks.push(slice);
        break;
      case "list":
        sorted.lists.push(slice);
        break;
      case "gallery":
        sorted.galleries.push(slice);
        break;
      case "image":
        sorted.images.push(slice);
        break;
    }
  });

  return { ...data, sorted };
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

export const getSlice = <
  T extends { slice_type: string },
  K extends T["slice_type"],
>(
  slices: T[],
  type: K,
): Extract<T, { slice_type: K }> | undefined =>
  slices.find((s) => s.slice_type === type) as
    | Extract<T, { slice_type: K }>
    | undefined;

export const getSlices = <
  T extends { slice_type: string },
  K extends T["slice_type"],
>(
  slices: T[],
  type: K,
): Extract<T, { slice_type: K }>[] =>
  slices.filter((s) => s.slice_type === type) as Extract<
    T,
    { slice_type: K }
  >[];

import { ProjectSlide } from "@/lib/prismic-service";

export function circular<T>(input: T[], selectedIndex: number): T[] {
  const len = input.length;
  const output = new Array<T>(6);

  if (len === 0) return output;

  // index 4 = selected
  output[4] = input[selectedIndex % len];

  // index 5 = previous of selected
  output[5] = input[(selectedIndex - 1 + len) % len];

  // index 3 → 0 = walk forward from selected
  for (let i = 1; i <= 4; i++) {
    output[4 - i] = input[(selectedIndex + i) % len];
  }

  return output;
}

export function getSlides(
  slides: ProjectSlide[],
  index: number,
): ProjectSlide[] {
  return circular(slides, index);
}

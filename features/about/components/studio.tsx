import { WordMark } from "@/components/brand/word-mark";
import { Footer } from "@/components/layout/footer/footer";
import { fluid } from "@/lib/fluid";

export const Studio = () => {
  return (
    <section data-component="studio-section">
      <div
        className="flex flex-row items-center justify-center"
        style={{ paddingTop: fluid(36, 72), paddingBottom: fluid(36, 72) }}
      >
        <WordMark header={false} />
      </div>

      <Footer trigger />
    </section>
  );
};

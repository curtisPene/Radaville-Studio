import { WordMark } from "@/components/brand/word-mark";
import { Footer } from "@/components/layout/footer/footer";
import { fluid } from "@/lib/fluid";

export const AboutFooter = () => {
  return (
    <div
      className="flex flex-col items-center w-full"
      style={{
        paddingTop: fluid(22, 40),
        gap: fluid(22, 40),
      }}
    >
      <WordMark header={false} />
      <div className="w-full">
        <Footer trigger />
      </div>
    </div>
  );
};

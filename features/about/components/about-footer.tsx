import { WordMark } from "@/components/brand/word-mark";
import { Footer } from "@/components/layout/footer/footer";

export const AboutFooter = () => {
  return (
    <div className="pt-[16vw] flex flex-col gap-[12vw]">
      <WordMark className="w-full" />
      <Footer trigger />
    </div>
  );
};

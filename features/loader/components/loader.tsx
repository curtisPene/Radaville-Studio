import { Body } from "@/components/typography/body";
import { Title } from "@/components/typography/title";
import { useLoaderAnimation } from "@/features/loader/animation/useLoaderAnimation";
import { fluid } from "@/lib/fluid";

export const Loader = () => {
  const ref = useLoaderAnimation();
  return (
    <div
      ref={ref}
      data-component="loader-screen"
      className="relative w-full h-full flex flex-row items-center justify-center"
    >
      <div className="flex flex-row" style={{ gap: fluid(12, 24) }}>
        <Body data-component="text-left" className="opacity-0">
          Thinking Things
        </Body>
        <Body data-component="pipe-left" className="opacity-40">
          |
        </Body>
      </div>
      <Title
        data-component="progress"
        as="headline"
        serif
        className="opacity-0 w-12.5"
      >
        00
      </Title>
      <div className="flex flex-row" style={{ gap: fluid(12, 24) }}>
        <Body data-component="pipe-right" className="opacity-40">
          |
        </Body>
        <Body data-component="text-right" className="opacity-0">
          Into Existence
        </Body>
      </div>
    </div>
  );
};

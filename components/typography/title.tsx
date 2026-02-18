import { fluid } from "@/lib/fluid";
import clsx from "clsx";

type titleVariant = "headline" | "title" | "subtitle";

const tagMap: Record<titleVariant, "h1" | "h2" | "h3"> = {
  headline: "h1",
  title: "h2",
  subtitle: "h3",
};

const sansSizeMap: Record<titleVariant, string> = {
  headline: "var(--step--3)",
  title: "var(--step--2)",
  subtitle: "var(--step--1)",
};

const serifSizeMap: Record<titleVariant, string> = {
  headline: "var(--step-4)",
  title: fluid(95, 120),
  subtitle: "var(--step-6)",
};

type subtitleConfig = {
  as?: titleVariant;
  serif?: boolean;
  wordBreak?: boolean;
  className?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>;

export const Title = ({
  as = "title",
  serif = false,
  wordBreak = false,
  className,
  children,
  ...rest
}: subtitleConfig) => {
  const Tag = tagMap[as];
  const sizeMap = serif ? serifSizeMap : sansSizeMap;

  const content =
    wordBreak && typeof children === "string"
      ? children.split(" ").map((word, i, arr) => (
          <span key={i}>
            {word}
            {i < arr.length - 1 && <br />}
          </span>
        ))
      : children;

  return (
    <Tag
      {...rest}
      className={clsx(
        "leading-none",
        serif ? "font-serif" : "font-sans",
        className,
      )}
      style={{ fontSize: sizeMap[as] }}
    >
      {content}
    </Tag>
  );
};

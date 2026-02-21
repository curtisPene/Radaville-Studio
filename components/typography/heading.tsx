import { fluid } from "@/lib/fluid";
import clsx from "clsx";

export type HeadingConfig = {
  as: "h1" | "h2" | "h3";
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLHeadingElement>;

export const Heading = ({
  as,
  children,
  className,
  ...rest
}: HeadingConfig) => {
  const Tag = as;

  const sizeMap = {
    h1: fluid(115, 146),
    h2: fluid(24, 36),
    h3: fluid(20, 28),
  };

  const baseClass = "font-serif leading-none";

  return (
    <Tag
      className={clsx(baseClass, className)}
      style={{
        fontSize: sizeMap[as],
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

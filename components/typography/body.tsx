import { fluid } from "@/lib/fluid";
import clsx from "clsx";

type BodyConfig = {
  className?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLParagraphElement>;

export const Body = ({ className = "", children, ...rest }: BodyConfig) => {
  return (
    <p
      {...rest}
      className={clsx("leading-tight", className)}
      style={{ fontSize: fluid(12, 16) }}
    >
      {children}
    </p>
  );
};
